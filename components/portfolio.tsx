"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/interfaces/project.interface";
import { CustomImage } from "./high-order-components/CustomImage";
import { useLanguageStore } from "@/stores/useLanguageStore";

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
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Portfolio({ projects }: PortfolioProps) {
  const { language } = useLanguageStore();

  return (
    <section id="portfolio" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-4xl font-bold">Portfolio</h2>
        <p className="mx-auto mb-12 text-center text-muted-foreground">
          {language == "english"
            ? "A selection of projects that showcase my skills in web development and interface design."
            : "Eine Auswahl von Projekten, die meine Fähigkeiten in Webentwicklung und Interface-Design zeigen."}
        </p>

        <motion.div
          className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="block h-full"
              >
                <Card className="group h-full cursor-pointer overflow-hidden transition-shadow duration-300 hover:shadow-xl">
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

                    <span className="absolute right-3 bottom-3 rounded bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
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
                                  : "border-0 bg-gray-900 text-white"
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
