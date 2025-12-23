"use client";

import { Card, CardContent } from "@/components/ui/card";

import type { Experience } from "@/interfaces/experience.interface";
import { KeySquare, NotebookText } from "lucide-react";
import Link from "next/link";

interface ExperienceProps {
  experiences: Experience[];
}

const Experiences = ({ experiences }: ExperienceProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-4 text-center">Experience</h1>
      <p className="text-center text-muted-foreground mb-16 text-lg">
        My professional journey in web development and project management
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
                    {exp.role}
                  </h3>
                  <p className="font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0 font-medium">
                  {exp.period}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex-1">
                  <h4 className="font-semibold mb-3 text-foreground flex gap-4">
                    <KeySquare /> Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-accent mt-1">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.relatedProjects && exp.relatedProjects.length > 0 && (
                  <div className="md:text-right md:min-w-48">
                    <h4 className="font-semibold mb-3 text-foreground flex gap-4">
                      <NotebookText /> Highlighted Projects:
                    </h4>
                    <ul className="space-y-2 flex gap-4 justify-start">
                      {exp.relatedProjects &&
                        exp.relatedProjects.map((project, i) => (
                          <>
                            <li key={project.url}>
                              <Link
                                href={`/portfolio/${project.url}`}
                                className="text-sm text-gray-600 hover:underline transition-colors"
                              >
                                {project.label}
                              </Link>
                            </li>
                            {exp.relatedProjects &&
                              i < exp.relatedProjects.length - 1 && (
                                <span className="text-gray-600">|</span>
                              )}
                          </>
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
