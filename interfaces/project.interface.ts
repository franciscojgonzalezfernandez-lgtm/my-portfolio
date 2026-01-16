export interface Project {
  slug: string;
  title: string;
  titleGerman: string;
  description: string;
  descriptionGerman: string;
  images: string[];
  tags: string[];
  fullDescription: string;
  fullDescriptionGerman: string;
  videoUrl?: string;
  externalUrl?: string;
  gitHubUrl?: string;
  projectType: string;
  releaseDate: string;
}
