import { Architectures } from "@/components/architecture";

import { Hero } from "@/components/hero";
import { TechCarousel } from "@/components/tech-carousel";
import { architectures } from "@/data/architectures.data";

import { HERO_DATA_ENGLISH } from "@/data/hero.data";
import { HERO_DATA_GERMAN } from "@/data/hero.data.german";

export default function Home() {
  return (
    <div className="min-h-screen pb-8">
      <main>
        <Hero data_english={HERO_DATA_ENGLISH} data_german={HERO_DATA_GERMAN} />
        <TechCarousel />
        <Architectures architectures={architectures} />
      </main>
    </div>
  );
}
