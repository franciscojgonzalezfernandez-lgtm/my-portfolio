"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useLanguageStore } from "@/stores/useLanguageStore";
import type { HeroData } from "@/interfaces/hero.interface";

interface HeroProps {
  data_english: HeroData;
  data_german: HeroData;
}

export const Hero = ({ data_english, data_german }: HeroProps) => {
  const { language } = useLanguageStore();
  const selected = language === "english" ? data_english : data_german;
  const { role1, role1Description, img } = selected;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="hero"
      ref={ref}
      className="flex items-center justify-center bg-background pt-28 pb-16"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-center">
          {/* Imagen: entra desde la izquierda */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1], // golden easing curve (spring-like)
              delay: 0.1,
            }}
          >
            <div className="w-40 h-40 md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-foreground shadow-xl">
              <img
                src={img || "/manager.webp"}
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Texto: entra desde la derecha */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25, // ligero stagger respecto a la imagen
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
              {role1}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {role1Description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
