type ProjectType = "Professional" | "Side Project";

export interface Project {
  slug: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  fullDescription: string;
  videoUrl?: string;
  externalUrl?: string;
  gitHubUrl?: string;
  projectType: ProjectType;
}
