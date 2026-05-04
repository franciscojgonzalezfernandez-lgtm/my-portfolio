"use client";
import { certifications } from "@/data/certifications.data";
import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { motion } from "motion/react";

interface CertificationsProps {
  mode: string;
}

export const CustomCertifications = ({ mode }: CertificationsProps) => {
  const { language } = useLanguageStore();
  return (
    <div className="mt-20 pt-12 border-t border-border/50">
      <h3
        className={`text-2xl font-bold mb-8 text-center ${
          mode === "personal" ? "text-background" : "text-foreground"
        }`}
      >
        {language == "english"
          ? "Certifications & Education"
          : "Zertifikate & Ausbildung"}
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial="rest"
            whileHover="hovered"
            animate="rest"
            variants={{
              rest: { scale: 1, y: 0 },
              hovered: {
                scale: 1.02,
                y: -2,
                transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="relative overflow-hidden rounded-lg"
          >
            {/* Shine sweep */}
            <motion.div
              variants={{
                rest: { x: "-200%" },
                hovered: {
                  x: "200%",
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.12) 50%, transparent 75%)",
              }}
            />
            <a
              href={cert.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-start gap-4 p-4 rounded-lg transition-shadow duration-300 hover:shadow-md ${
                mode === "personal"
                  ? "bg-background/20 border border-background/30 hover:bg-background/30"
                  : "bg-card border border-border hover:border-foreground/20"
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  cert.type === "certification"
                    ? "bg-amber-500/10 text-amber-600"
                    : "bg-blue-500/10 text-blue-600"
                }`}
              >
                {cert.type === "certification" ? (
                  <Award className="w-5 h-5" />
                ) : (
                  <GraduationCap className="w-5 h-5" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4
                    className={`font-medium leading-tight ${
                      mode === "personal" ? "text-background" : "text-foreground"
                    }`}
                  >
                    {language == "english" ? cert.title : cert.titleGerman}
                  </h4>
                  <ExternalLink
                    className={`w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                      mode === "personal"
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
                <p
                  className={`text-sm mt-1 ${
                    mode === "personal"
                      ? "text-background/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {language == "english" ? cert.issuer : cert.issuerGerman} ·{" "}
                  {cert.date}
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      <p
        className={`text-center text-sm mt-6 ${
          mode === "personal" ? "text-background/60" : "text-muted-foreground"
        }`}
      >
        {language == "english"
          ? "Click on any certification to view the official document"
          : "Klicke auf jedes Zertifikat, um das offizielle Dokument anzusehen"}
      </p>
    </div>
  );
};
