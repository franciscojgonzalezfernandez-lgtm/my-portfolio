import { notFound } from "next/navigation";
import { projects } from "@/data/projects.data";

import { ProjectContent } from "@/components/project-content";
import { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project | Javi",
      description: "Project not found",
    };
  }

  const keywords = [
    "fullstack development",
    "frontend engineer",
    "switzerland",
    "nextjs",
    "web development",
    ...project.tags.map((t) => t.toLowerCase()),
  ]
    .filter(Boolean)
    .slice(0, 20);

  return {
    title: `${project.title} | Javi`,
    description: project.description,
    keywords,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Javi`,
      description:
        project.description +
        ". Designed and implemented with: " +
        project.tags.join(", ") +
        ".",
      url: `/portfolio/${project.slug}`,
      type: "article",
      images: project.images?.[0]
        ? [
            {
              url: project.images[0],
              alt: project.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
