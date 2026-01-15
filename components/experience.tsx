"use client";

import { Card, CardContent } from "@/components/ui/card";
import { KeySquare, NotebookText } from "lucide-react";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Link from "next/link";
import React from "react";
import type { Experience } from "@/interfaces/experience.interface";

interface ExperienceProps {
  experiences: Experience[];
}

const Experiences = ({ experiences }: ExperienceProps) => {
  const { language } = useLanguageStore();
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-4 text-center">Experience</h1>
      <p className="text-center text-muted-foreground mb-16 text-lg">
        {language == "english" &&
          "My professional journey in web development and project management"}
        {language == "german" &&
          "Meinen beruflichen Werdegang in Webentwicklung und Projektmanagement"}
      </p>

      <div className="space-y-8 mb-20">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent"
          >
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1 text-foreground">
                    {language == "english" ? exp.role : exp.roleGerman}
                  </h3>
                  <p className="font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0 font-medium">
                  {exp.period}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {language == "english"
                  ? exp.description
                  : exp.descriptionGerman}
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex-1">
                  <h4 className="font-semibold mb-3 text-foreground flex gap-4">
                    <KeySquare />{" "}
                    {language == "english"
                      ? "Key Achievements"
                      : "Wichtige Erfolge"}
                    :
                  </h4>
                  <ul className="space-y-2">
                    {language == "english" &&
                      exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    {language == "german" &&
                      exp.achievementsGerman.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                {exp.relatedProjects && exp.relatedProjects.length > 0 && (
                  <div className="md:text-right md:min-w-48">
                    <h4 className="font-semibold mb-3 text-foreground flex gap-4">
                      <NotebookText />{" "}
                      {language == "english"
                        ? "Highlighted Projects"
                        : "Ausgewählte Projekte"}
                      :
                    </h4>
                    <ul className="space-y-2 flex gap-4 justify-start">
                      {exp.relatedProjects &&
                        exp.relatedProjects.map((project, i) => (
                          <React.Fragment key={project.url}>
                            <li>
                              <Link
                                href={`/portfolio${project.url}`}
                                className="text-sm text-gray-600 hover:underline transition-colors"
                              >
                                {language == "english"
                                  ? project.label
                                  : project.labelGerman}
                              </Link>
                            </li>
                            {exp.relatedProjects &&
                              i < exp.relatedProjects.length - 1 && (
                                <span>|</span>
                              )}
                          </React.Fragment>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
