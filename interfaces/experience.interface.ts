interface RelatedProject {
  label: string;
  labelGerman: string;
  url: string;
}

export interface Experience {
  role: string;
  roleGerman: string;
  company: string;
  period: string;
  description: string;
  descriptionGerman: string;
  achievements: string[];
  achievementsGerman: string[];
  companyLink?: string;
  relatedProjects?: RelatedProject[];
}
