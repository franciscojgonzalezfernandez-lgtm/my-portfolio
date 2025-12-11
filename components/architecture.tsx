"use client";

import type { Architecture } from "@/interfaces/architecture.interface";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";

interface ArchitecturesProps {
  architectures: Architecture[];
}

export const Architectures = ({ architectures }: ArchitecturesProps) => {
  const [currentArchitecture, setCurrentArchitecture] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArchitecture((prev) => (prev + 1) % architectures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold mb-4 text-center">Key Achievements</h2>
      <p className="text-center text-muted-foreground mb-12 text-lg">
        Architecture designs and technical solutions I've created
      </p>

      <div className="relative">
        <Card className="overflow-hidden">
          <div className="relative h-96 bg-muted">
            <img
              src={
                architectures[currentArchitecture].image || "/placeholder.svg"
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
  );
};
