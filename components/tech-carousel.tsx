"use client";

import { useEffect, useRef } from "react";
import { technologies } from "@/data/technologies.data";
import { useLanguageStore } from "@/stores/useLanguageStore";

export function TechCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguageStore();

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
          {language == "english" && "Technologies I Use"}
          {language == "german" && "Technologien, die ich nutze"}
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          {language == "english" &&
            "A diverse toolkit of modern technologies I'm using for building full scalable applications"}
          {language == "german" &&
            "Ein vielfältiges Toolkit moderner Technologien, das ich für den Bau vollständig skalierbarer Anwendungen nutz"}
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
