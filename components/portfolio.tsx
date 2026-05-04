"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/interfaces/project.interface";
import { CustomImage } from "./high-order-components/CustomImage";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { trackProjectClick } from "@/lib/analytics";

interface PortfolioProps {
  projects: Project[];
}

function formatDate(date: string) {
  const partes = date.match(/(\d{1,2})-(\d{1,2})-(\d{4})/);
  if (!partes) return "Formato inválido (esperado: DD-MM-YYYY)";

  const [, dia, mes, año] = partes;
  const fecha = new Date(
    `${año}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`,
  );

  if (
    Number(dia) < 1 ||
    Number(dia) > 31 ||
    Number(mes) < 1 ||
    Number(mes) > 12 ||
    isNaN(fecha.getTime())
  ) {
    return "Fecha inválida";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(fecha);
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const hoverWrapperVariants = {
  rest: { scale: 1, y: 0 },
  hovered: {
    scale: 1.015,
    y: -4,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const shineVariants = {
  rest: { x: "-200%" },
  hovered: {
    x: "200%",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Portfolio({ projects }: PortfolioProps) {
  const { language } = useLanguageStore();

  return (
    <section id="portfolio" className="bg-background py-24 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-center text-4xl font-bold"
        >
          Portfolio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-12 text-center text-muted-foreground"
        >
          {language == "english"
            ? "A selection of projects that showcase my skills in web development and interface design."
            : "Eine Auswahl von Projekten, die meine Fähigkeiten in Webentwicklung und Interface-Design zeigen."}
        </motion.p>

        <motion.div
          className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} className="min-w-0">
              <motion.div
                variants={hoverWrapperVariants}
                initial="rest"
                whileHover="hovered"
                animate="rest"
                className="h-full"
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="block h-full"
                  onClick={() =>
                    trackProjectClick(project.slug, project.projectType)
                  }
                >
                  <Card className="group h-full cursor-pointer overflow-hidden transition-shadow duration-500 hover:shadow-2xl">
                    <div className="relative h-64 overflow-hidden">
                      <span className="absolute top-0 right-0 z-10 rounded bg-gray-600 px-3 py-1 text-xs font-semibold text-white">
                        {project.projectType}
                      </span>

                      <CustomImage
                        src={project.images[0] || "/placeholder.svg"}
                        alt={
                          language == "english"
                            ? project.title
                            : project.titleGerman
                        }
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Shine sweep overlay */}
                      <motion.div
                        variants={shineVariants}
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.18) 50%, transparent 75%)",
                        }}
                      />

                      <span className="absolute right-3 bottom-3 z-20 rounded bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                        {formatDate(project.releaseDate)}
                      </span>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="mb-2 text-xl font-semibold">
                        {language == "english"
                          ? project.title
                          : project.titleGerman}
                      </h3>

                      <p className="mb-4 leading-relaxed text-muted-foreground">
                        {language == "english"
                          ? project.description
                          : project.descriptionGerman}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => {
                          if (tagIndex < 9) {
                            return (
                              <span
                                key={tag}
                                className={`rounded-full px-4 py-2 text-sm font-medium text-foreground border ${
                                  tagIndex < 8
                                    ? "border-gray-500"
                                    : "border-white bg-foreground/80 text-white"
                                }`}
                              >
                                {tagIndex < 8
                                  ? tag
                                  : `+ ${project.tags.length - 8} more`}
                              </span>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
