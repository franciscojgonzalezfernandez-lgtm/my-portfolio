import Experiences from "@/components/experience";
import { Architectures } from "@/components/architecture";
import { experiences } from "@/data/experiences.data";
import { architectures } from "@/data/architectures.data";
import { HERO_EXPERIENCE_DATA_ENGLISH } from "@/data/experience.hero.data";
import { HERO_EXPERIENCE_DATA_GERMAN } from "@/data/experience.hero.data.german";
import { Hero } from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Senior FULL STACK engineer",
  description:
    "A summary of my career as full-stack engineer in many projects as a developer, technical lead and project manager.",
  alternates: {
    canonical: "/metrics", // https://javier-gonzalez-portfolio.com/experience
  },
  openGraph: {
    title: "Experience - Senior full-stack developer",
    description:
      "A summary of my career as full-stack developer in many projects as a developer, technical lead and project manager.",
    url: "/metrics",
    type: "website",
    images: [
      {
        url: "https://javier-gonzalez-portfolio.com/manager.webp",
        width: 1200,
        height: 630,
        alt: "Javier González - Metrics",
      },
    ],
  },
  keywords: [
    "Javier González",
    "Full-Stack Engineer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "Frontend engineer",
    "Web performance",
    "DevOps",
    "Software engineer portfolio",
    "Switzerland",
  ],
};

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
