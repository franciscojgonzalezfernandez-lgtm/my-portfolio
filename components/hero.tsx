"use client";

import type React from "react";

import { useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const isLeftSide = mousePosition.x < 0.5;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background pt-20"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`text-left transition-opacity duration-500 ${
              isLeftSide ? "opacity-100" : "opacity-40"
            }`}
          >
            <h2 className="text-6xl font-bold mb-4 text-balance">
              {"<Developer>"}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building clean, elegant, and efficient web experiences with modern
              technologies.
            </p>
          </div>

          <div className="relative h-[500px] flex items-center justify-center">
            {/* Developer side (left) */}
            <div
              className={`absolute inset-0 transition-all duration-700 ${
                isLeftSide ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                  <img
                    src="developer-coding-at-computer--professional-headsho.jpg"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -right-8 top-20 bg-card border border-border rounded-lg p-4 shadow-lg opacity-80">
                  <code className="text-xs font-mono text-accent">
                    {"const code = () => {"}
                    <br />
                    {"  return <App />;"}
                    <br />
                    {"};"}
                  </code>
                </div>
              </div>
            </div>

            <div
              className={`absolute inset-0 transition-all duration-700 ${
                !isLeftSide ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <img
                    src="professional-manager-in-business-setting.jpg"
                    alt="Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -left-8 top-20 bg-card border border-border rounded-lg p-4 shadow-lg opacity-80">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <div className="h-1 w-12 bg-accent/40 rounded"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="h-1 w-16 bg-primary/40 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`text-right lg:col-start-2 transition-opacity duration-500 ${
              !isLeftSide ? "opacity-100" : "opacity-40"
            }`}
          >
            <h2 className="text-6xl font-bold mb-4 text-balance">
              {"<Manager>"}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Leading teams and projects to deliver exceptional results on time
              and within scope.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground italic">
            ← Move your mouse to see both sides →
          </p>
        </div>
      </div>
    </section>
  );
};
