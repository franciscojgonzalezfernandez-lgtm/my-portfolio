export interface AboutMe {
  title: string;
  paragraphs: string[];
  skills: Skill[];
  videoUrl: string;
  videoPoster: string;
}

export interface Skill {
  title: string;
  description: string;
  link?: string;
}
