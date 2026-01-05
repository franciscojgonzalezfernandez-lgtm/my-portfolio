import { Project } from "@/interfaces/project.interface";

export const PERSONAL_PORTFOLIO: Project = {
  slug: "this-portfolio",
  title: "Optimized Portfolio Website",
  projectType: "Side Project",
  description: "This portfolio itself. The one you're watching right now",
  images: ["/portfolio-cover.webp"],
  tags: [
    "NextJS",
    "AI UI Generators",
    "V0",
    "CI/CD",
    "Github Actions",
    "Tailwind CSS",
    "Vercel",
  ],
  fullDescription: `A stunning portfolio website showcasing creative work with smooth, buttery animations powered by Framer Motion. The minimalist design puts the focus on the content while maintaining visual interest.
    
    Built with Next.js for optimal performance and deployed on Vercel for instant global delivery. Features include dynamic routing, optimized images, and SEO-friendly structure.`,
  videoUrl: "/portfolio-website-demo-video.jpg",
  releaseDate: "28-12-2025",
};
