interface RelatedProject {
  label: string;
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  companyLink?: string;
  relatedProjects?: RelatedProject[];
}
