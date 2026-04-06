"use client";

import { Card, CardContent } from "@/components/ui/card";
import { KeySquare, NotebookText } from "lucide-react";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import type { Experience } from "@/interfaces/experience.interface";

interface ExperienceProps {
  experiences: Experience[];
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const projectsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const projectVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotate: -4,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 220,
    },
  },
};

const Experiences = ({ experiences }: ExperienceProps) => {
  const { language } = useLanguageStore();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8 mb-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="overflow-hidden border-l-4 border-l-accent transition-shadow duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="mb-1 text-2xl font-semibold text-foreground">
                      {language == "english" ? exp.role : exp.roleGerman}
                    </h3>
                    <p className="font-medium">{exp.company}</p>
                  </div>

                  <span className="mt-2 text-sm font-medium text-muted-foreground md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {language == "english"
                    ? exp.description
                    : exp.descriptionGerman}
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex-1">
                    <h4 className="mb-3 flex gap-4 font-semibold text-foreground">
                      <KeySquare />
                      {language == "english"
                        ? "Key Achievements"
                        : "Wichtige Erfolge"}
                      :
                    </h4>

                    <ul className="space-y-2">
                      {language == "english" &&
                        exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.35,
                              delay: 0.1 + i * 0.05,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span>•</span>
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}

                      {language == "german" &&
                        exp.achievementsGerman.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.35,
                              delay: 0.1 + i * 0.05,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span>•</span>
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                    </ul>
                  </div>

                  {exp.relatedProjects && exp.relatedProjects.length > 0 && (
                    <div className="md:min-w-48 md:text-right">
                      <h4 className="mb-3 flex gap-4 font-semibold text-foreground">
                        <NotebookText />
                        {language == "english"
                          ? "Highlighted Projects"
                          : "Ausgewählte Projekte"}
                        :
                      </h4>

                      <motion.ul
                        variants={projectsContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        className="flex flex-wrap justify-start gap-4 space-y-0"
                      >
                        {exp.relatedProjects.map((project, i) => (
                          <React.Fragment key={project.url}>
                            <motion.li variants={projectVariants}>
                              <Link
                                href={`/portfolio${project.url}`}
                                className="text-sm text-gray-600 transition-all duration-200 hover:underline hover:text-foreground"
                              >
                                {language == "english"
                                  ? project.label
                                  : project.labelGerman}
                              </Link>
                            </motion.li>

                            {i < exp.relatedProjects.length - 1 && (
                              <motion.span
                                variants={projectVariants}
                                className="text-muted-foreground"
                              >
                                |
                              </motion.span>
                            )}
                          </React.Fragment>
                        ))}
                      </motion.ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
