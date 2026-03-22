"use client";

import type React from "react";
import { useLanguageStore } from "@/stores/useLanguageStore";
import type { HeroData } from "@/interfaces/hero.interface";
import { CustomImage } from "./high-order-components/CustomImage";

interface HeroProps {
  data_english: HeroData;
  data_german: HeroData;
}

export const Hero = ({ data_english, data_german }: HeroProps) => {
  const { language } = useLanguageStore();
  const selected = language === "english" ? data_english : data_german;

  const { role1, role1Description, role2, role2Description, img } = selected;
  return (
    <section
      id="hero"
      className="flex items-center justify-center bg-background pt-28 pb-16"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-center">
          <div className="shrink-0">
            <div className="w-40 h-40 md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-foreground shadow-xl">
              <img
                src={img || "/manager.webp"}
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
              {role1}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {role1Description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
