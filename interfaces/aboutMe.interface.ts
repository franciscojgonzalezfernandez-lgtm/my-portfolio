export interface AboutMe {
  title: string;
  titleGerman: string;
  paragraphs: string[];
  paragraphsGerman: string[];
  skills: Skill[];
  skillsGerman: Skill[];
  videoUrl: string;
  videoPoster: string;
}

export interface Skill {
  title: string;
  description: string;
  link?: string;
}
