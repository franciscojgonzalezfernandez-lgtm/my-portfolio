"use client";

import { useEffect, useRef } from "react";

const technologies = [
  { name: "React", size: "text-4xl", color: "text-[#61DAFB]" },
  { name: "Next.js", size: "text-6xl", color: "text-foreground" },
  { name: "Java", size: "text-5xl", color: "text-[#ED8B00]" },
  { name: "PostgreSQL", size: "text-3xl", color: "text-[#336791]" },
  { name: "MongoDB", size: "text-5xl", color: "text-[#47A248]" },
  { name: "Google Cloud", size: "text-4xl", color: "text-[#4285F4]" },
  { name: "TypeScript", size: "text-6xl", color: "text-[#3178C6]" },
  { name: "Node.js", size: "text-5xl", color: "text-[#339933]" },
  { name: "Docker", size: "text-4xl", color: "text-[#2496ED]" },
  { name: "Vercel", size: "text-3xl", color: "text-[#326CE5]" },
  { name: "Figma", size: "text-5xl", color: "text-[#FF9900]" },
  { name: "React-Query", size: "text-4xl", color: "text-[#E10098]" },
];

export function TechCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
      }
      carousel.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-center mb-4">
          Technologies I Use
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          A diverse toolkit of modern technologies I'm using for building full
          scalable applications
        </p>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-12 overflow-hidden whitespace-nowrap"
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <span
            key={index}
            className={`${tech.size} ${tech.color} font-bold inline-block animate-pulse`}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
}
