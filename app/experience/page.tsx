import Experiences from "@/components/experience";
import { Architectures } from "@/components/architecture";
import { experiences } from "@/data/experiences.data";
import { architectures } from "@/data/architectures.data";
import { HERO_EXPERIENCE_DATA_ENGLISH } from "@/data/experience.hero.data";
import { HERO_EXPERIENCE_DATA_GERMAN } from "@/data/experience.hero.data.german";
import { Hero } from "@/components/hero";

const ExperiencePage = () => {
  return (
    <>
      <section className="min-h-screen bg-background">
        <div className="container mx-auto px-6">
          <Hero
            data_english={HERO_EXPERIENCE_DATA_ENGLISH}
            data_german={HERO_EXPERIENCE_DATA_GERMAN}
          />
          <Experiences experiences={experiences} />
          <Architectures architectures={architectures} />
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;
