import { Header } from "@/components/header";
import Experiences from "@/components/experience";
import { Architectures } from "@/components/architecture";
import { experiences } from "@/data/experiences.data";
import { architectures } from "@/data/architectures.data";

export const metadata = {
  title: "Experience | Portfolio",
  description: "Professional experience and career history",
};

const ExperiencePage = () => {
  return (
    <>
      <section className="py-24 min-h-screen bg-background">
        <div className="container mx-auto px-6">
          <Experiences experiences={experiences} />
          <Architectures architectures={architectures} />
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;
