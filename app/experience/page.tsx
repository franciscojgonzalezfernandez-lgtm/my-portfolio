import { Header } from "@/components/header";
import { Experiences } from "@/components/experience";
import { experiences } from "@/data/experiences.data";
import { architectures } from "@/data/architectures.data";

export const metadata = {
  title: "Experience | Portfolio",
  description: "Professional experience and career history",
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <Experiences experiences={experiences} />
    </>
  );
}
