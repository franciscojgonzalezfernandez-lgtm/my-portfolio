import { About } from "@/components/about";
import { Metadata } from "next";
import { professional } from "@/data/aboutMe.professional.data";
import { personal } from "@/data/aboutMe.personal.data";

export const metadata: Metadata = {
  title: "About - Javier González | Full-Stack Engineer",
  description:
    "Get to know my experience with Next.js, React, Node.js, DevOps, and web optimization. Portfolio with real projects and performance metrics.",
  alternates: {
    canonical: "/about", // https://javier-gonzalez-portfolio.com/about
  },
  openGraph: {
    title: "About - Javier González Portfolio",
    description:
      "Full-stack developer specialized in web performance and scalable architecture.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "https://javier-gonzalez-portfolio.com/manager.webp",
        width: 1200,
        height: 630,
        alt: "Javier González - About",
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

const AboutPage = () => {
  return <About professional={professional} personal={personal} />;
};

export default AboutPage;
