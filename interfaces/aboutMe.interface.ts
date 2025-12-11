export interface AboutMe {
  title: string;
  paragraph1: string;
  paragraph2: string;
  skills: Skill[];
  videoUrl: string;
  videoPoster: string;
}

export interface Skill {
  title: string;
  description: string;
  link?: string;
}
