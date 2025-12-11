"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

import type { Experience } from "@/interfaces/experience.interface";

import { architectures } from "@/data/architectures.data";

interface ExperienceProps {
  experiences: Experience[];
}

export const Experiences = ({ experiences }: ExperienceProps) => {
  const [currentArchitecture, setCurrentArchitecture] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArchitecture((prev) => (prev + 1) % architectures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 min-h-screen bg-background">
      <div className="container mx-auto px-6">
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
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0 font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">
                      Key Achievements:
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
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Key Achievements
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Architecture designs and technical solutions I've created
            </p>

            <div className="relative">
              <Card className="overflow-hidden">
                <div className="relative h-96 bg-muted">
                  <img
                    src={
                      architectures[currentArchitecture].image ||
                      "/placeholder.svg"
                    }
                    alt={architectures[currentArchitecture].title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold">
                    {architectures[currentArchitecture].title}
                  </h3>
                </CardContent>
              </Card>

              <div className="flex justify-center gap-2 mt-6">
                {architectures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentArchitecture(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentArchitecture
                        ? "bg-accent w-8"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`View architecture ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
