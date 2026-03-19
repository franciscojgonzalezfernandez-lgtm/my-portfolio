"use client";
import Experiences from "@/components/experience";
import { Architectures } from "@/components/architecture";
import { experiences } from "@/data/experiences.data";
import { architectures } from "@/data/architectures.data";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useMemo } from "react";
import { HERO_EXPERIENCE_DATA_ENGLISH } from "@/data/experience.hero.data";
import { HERO_EXPERIENCE_DATA_GERMAN } from "@/data/experience.hero.data.german";
import { Hero } from "@/components/hero";

const ExperiencePage = () => {
  const { language } = useLanguageStore();
  const heroProps = useMemo(() => {
    const selectedData: HeroData =
      language === "english"
        ? HERO_EXPERIENCE_DATA_ENGLISH
        : HERO_EXPERIENCE_DATA_GERMAN;
    return {
      role1: selectedData.role1,
      role1Description: selectedData.role1Description,
      role2: selectedData.role2,
      role2Description: selectedData.role2Description,
      img: selectedData.img,
    };
  }, [language]);
  return (
    <>
      <section className="min-h-screen bg-background">
        <div className="container mx-auto px-6">
          <Hero {...heroProps} />
          <Experiences experiences={experiences} />
          <Architectures architectures={architectures} />
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;
