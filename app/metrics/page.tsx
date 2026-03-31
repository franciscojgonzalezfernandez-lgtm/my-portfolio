import { Metrics } from "@/components/metrics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metrics | Performance MATTERS",
  description:
    "A showcase of my commitment with web performance, accesibility, good SEO and optimal User Experiences.",
  alternates: {
    canonical: "/metrics", // https://javier-gonzalez-portfolio.com/metrics
  },
  openGraph: {
    title: "Metrics - Performance matters",
    description:
      "A showcase of my commitment with web performance, accesibility, good SEO and optimal User Experiences.",
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

export default function MetricsPage() {
  return <Metrics />;
}
