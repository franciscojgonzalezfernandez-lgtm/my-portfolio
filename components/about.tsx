"use client";

import { AboutMe } from "@/interfaces/aboutMe.interface";

interface AboutProps {
  mode: "professional" | "personal";
  onModeChange: (mode: "professional" | "personal") => void;
  professional: AboutMe;
  personal: AboutMe;
}

export const About = ({
  mode,
  onModeChange,
  personal,
  professional,
}: AboutProps) => {
  const actualTopic = mode === "personal" ? personal : professional;
  return (
    <section
      id="about"
      className={`py-24 ${
        mode === "personal" ? "bg-background/10" : "bg-muted/30"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <div
              className={`inline-flex rounded-full p-1 ${
                mode === "personal"
                  ? "bg-background/20"
                  : "bg-card border border-border"
              }`}
            >
              <button
                onClick={() => onModeChange("professional")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  mode === "professional"
                    ? mode === "personal"
                      ? "bg-background text-foreground"
                      : "bg-foreground text-background"
                    : mode === "personal"
                    ? "text-background hover:text-background/80"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Professional
              </button>
              <button
                onClick={() => onModeChange("personal")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  mode === "personal"
                    ? "bg-background text-foreground"
                    : mode === "personal"
                    ? "text-background hover:text-background/80"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Personal
              </button>
            </div>
          </div>

          <div className="mb-12 rounded-lg overflow-hidden">
            <div className="relative aspect-video bg-muted/50">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/professional-video-introduction.jpg"
              >
                <source src="/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <h2
            className={`text-4xl font-bold mb-8 text-center ${
              mode === "personal" ? "text-background" : "text-foreground"
            }`}
          >
            {actualTopic.title}
          </h2>

          <div className="prose prose-lg mx-auto">
            {actualTopic.paragraphs.map((paragraph, index) => {
              return (
                <p
                  key={paragraph.charAt(0) + index}
                  className={`text-lg leading-relaxed mb-6 ${
                    mode === "personal"
                      ? "text-background/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {paragraph}
                </p>
              );
            })}

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {actualTopic.skills.map((skill) => {
                return (
                  <div
                    key={skill.title}
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
