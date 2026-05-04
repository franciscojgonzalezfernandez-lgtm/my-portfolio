"use client";
import { AboutMe } from "@/interfaces/aboutMe.interface";
import { CustomVideo } from "./high-order-components/CustomVideo";
import { CustomCertifications } from "./CustomCertifications";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { motion } from "motion/react";

interface AboutProps {
  professional: AboutMe;
  personal: AboutMe;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export const About = ({ personal, professional }: AboutProps) => {
  const [mode, setMode] = useState<"professional" | "personal">("professional");
  const actualTopic = mode === "personal" ? personal : professional;
  const { language } = useLanguageStore();
  return (
    <div
      className={`min-h-screen ${
        mode === "personal" ? "bg-foreground text-background" : ""
      }`}
    >
      <main className="pt-20">
        <section
          id="about"
          className={`py-24 ${
            mode === "personal" ? "bg-background/10" : "bg-muted/30"
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Mode toggle */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-center mb-12"
              >
                <div
                  className={`inline-flex rounded-full p-1 ${
                    mode === "personal"
                      ? "bg-background/20"
                      : "bg-card border border-border"
                  }`}
                >
                  <button
                    onClick={() => {
                      setMode("professional");
                      trackEvent("about_mode_switch", { mode: "professional" });
                    }}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      mode === "professional"
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Professional
                  </button>
                  <button
                    onClick={() => {
                      setMode("personal");
                      trackEvent("about_mode_switch", { mode: "personal" });
                    }}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      mode === "personal"
                        ? "bg-background text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Personal
                  </button>
                </div>
              </motion.div>

              {/* Video */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="mb-12 rounded-lg overflow-hidden"
              >
                <div className="relative aspect-video bg-muted/50">
                  <CustomVideo
                    className="w-full h-full object-cover"
                    controls
                    poster={actualTopic.videoPoster}
                    src={actualTopic.videoUrl}
                  >
                    <source src={actualTopic.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </CustomVideo>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={`text-4xl font-bold mb-8 text-center ${
                  mode === "personal" ? "text-background" : "text-foreground"
                }`}
              >
                {language == "english"
                  ? actualTopic.title
                  : actualTopic.titleGerman}
              </motion.h2>

              {/* Paragraphs */}
              <div className="prose prose-lg mx-auto">
                {language == "english" &&
                  actualTopic.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={paragraph.charAt(0) + index}
                      custom={index * 0.04}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      className={`text-lg leading-relaxed mb-6 ${
                        mode === "personal"
                          ? "text-background/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                {language == "german" &&
                  actualTopic.paragraphsGerman.map((paragraph, index) => (
                    <motion.p
                      key={paragraph.charAt(0) + index}
                      custom={index * 0.04}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      className={`text-lg leading-relaxed mb-6 ${
                        mode === "personal"
                          ? "text-background/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {paragraph}
                    </motion.p>
                  ))}

                {/* Skill cards */}
                <motion.div
                  className="grid md:grid-cols-3 gap-6 mt-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                    },
                  }}
                >
                  {language == "english" &&
                    actualTopic.skills.map((skill) => (
                      <motion.div
                        key={skill.title}
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.5,
                              ease: [0.16, 1, 0.3, 1] as const,
                            },
                          },
                        }}
                        className={`p-6 rounded-lg ${
                          mode === "personal"
                            ? "bg-background/20 border border-background/30"
                            : "bg-card border border-border"
                        }`}
                      >
                        <h3
                          className={`font-semibold mb-2 ${
                            mode === "personal"
                              ? "text-background"
                              : "text-foreground"
                          }`}
                        >
                          {skill.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            mode === "personal"
                              ? "text-background/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                  {language == "german" &&
                    actualTopic.skillsGerman.map((skill) => (
                      <motion.div
                        key={skill.title}
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.5,
                              ease: [0.16, 1, 0.3, 1] as const,
                            },
                          },
                        }}
                        className={`p-6 rounded-lg ${
                          mode === "personal"
                            ? "bg-background/20 border border-background/30"
                            : "bg-card border border-border"
                        }`}
                      >
                        <h3
                          className={`font-semibold mb-2 ${
                            mode === "personal"
                              ? "text-background"
                              : "text-foreground"
                          }`}
                        >
                          {skill.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            mode === "personal"
                              ? "text-background/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                </motion.div>
              </div>
              <CustomCertifications mode={mode} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
