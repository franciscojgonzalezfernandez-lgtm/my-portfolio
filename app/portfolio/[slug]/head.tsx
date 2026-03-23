import { projects } from "@/data/projects.data";
import type { Metadata } from "next";

export default function Head({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project — Javi" };

  const keywords = [
    "fullstack development",
    "frontend engineer",
    "switzerland",
    "nextjs",
    "web development",
    ...project.tags.map((t) => t.toLowerCase()),
  ]
    .filter(Boolean)
    .slice(0, 20)
    .join(", ");

  return {
    title: `${project.title} — Javi | Project`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images?.[0] ? [{ url: project.images[0] }] : undefined,
    },
    metadataBase: new URL("https://javier-gonzalez-portfolio.com"),
    other: {
      keywords,
    } as any,
  };
}
