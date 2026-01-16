import { notFound } from "next/navigation";
import { projects } from "@/data/projects.data";

import { ProjectContent } from "@/components/project-content";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
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
