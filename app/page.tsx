"use client";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Hero } from "@/components/hero";
import { TechCarousel } from "@/components/tech-carousel";

import { HERO_DATA_ENGLISH } from "@/data/hero.data";
import { HERO_DATA_GERMAN } from "@/data/hero.data.german";
import { useLanguage } from "@/hooks/use-language";
import { useEffect, useMemo } from "react";

export default function Home() {
  const { language } = useLanguage();
  console.log("My home language", language);

  const heroProps = useMemo(() => {
    const selectedData: HeroData =
      language === "english" ? HERO_DATA_ENGLISH : HERO_DATA_GERMAN;
    return {
      role1: selectedData.role1,
      role1Description: selectedData.role1Description,
      role2: selectedData.role2,
      role2Description: selectedData.role2Description,
    };
  }, [language]);

  return (
    <div className="min-h-screen pb-8">
      <main>
        <Hero key={language} {...heroProps} />
        <TechCarousel />
        <GitHubActivity />
      </main>
    </div>
  );
}
