import { GitHubActivity } from "@/components/GitHubActivity";
import { Hero } from "@/components/hero";
import { TechCarousel } from "@/components/tech-carousel";

import { HERO_DATA_ENGLISH } from "@/data/hero.data";
import { HERO_DATA_GERMAN } from "@/data/hero.data.german";

export default function Home() {
  return (
    <div className="min-h-screen pb-8">
      <main>
        <Hero data_english={HERO_DATA_ENGLISH} data_german={HERO_DATA_GERMAN} />
        <TechCarousel />
        <GitHubActivity />
      </main>
    </div>
  );
}
