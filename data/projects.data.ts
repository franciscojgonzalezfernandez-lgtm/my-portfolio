import { Project } from "@/interfaces/project.interface";

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    projectType: "Side Project",
    description:
      "Full-featured e-commerce platform with shopping cart and payment gateway integration.",
    images: [
      "/ecommerce-1.png",
      "/ecommerce-admin-1.png",
      "/ecommerce-admin-2.png",
      "/modern-ecommerce-website.png",
    ],
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
    fullDescription: `A comprehensive e-commerce solution built with modern technologies. This platform features a robust shopping cart system, secure payment processing through Stripe, and a fully responsive design. 
    
    The backend utilizes PostgreSQL for data management, ensuring fast and reliable performance. The admin panel allows for easy product management, order tracking, and customer analytics.`,
    videoUrl: "/CMS-next.mp4",
    externalUrl:
      "https://franciscojgonzalezfernandez-lgtm.github.io/minimalist-e-commerce/",
    gitHubUrl:
      "https://github.com/franciscojgonzalezfernandez-lgtm/minimalist-e-commerce",
  },
  {
    slug: "whole-cms-next",
    title: "CMS based in Next",
    projectType: "Professional",
    description:
      "Next.js applications with built-in database editing capabilities in controlled environments (staging).",
    images: ["/analytics-dashboard.png"],
    tags: [
      "React",
      "Next14",
      "GCP",
      "Node.js",
      "Terraform",
      "CI/CD",
      "Artifact Registry",
      "NPM",
      "Webpack",
    ],
    fullDescription: `A powerful analytics dashboard that provides real-time insights into business metrics. Built with React and powered by Chart.js and D3.js for stunning data visualizations.
    
    The dashboard connects to MongoDB for fast data retrieval and includes customizable widgets, exportable reports, and role-based access control.
    Built with Next.js for optimal performance and deployed on Vercel for instant global delivery. Features include dynamic routing, optimized images, and SEO-friendly structure.`,
    videoUrl: "/CMS-next.mp4",
  },
  {
    slug: "my-web-portfolio",
    title: "My web portfolio",
    projectType: "Side Project",
    description:
      "The full integration of Adobe’s CMS across the entire Telefónica environment.",
    images: ["/minimalist-portfolio.png"],
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    fullDescription: `A stunning portfolio website showcasing creative work with smooth, buttery animations powered by Framer Motion. The minimalist design puts the focus on the content while maintaining visual interest.
    
    Built with Next.js for optimal performance and deployed on Vercel for instant global delivery. Features include dynamic routing, optimized images, and SEO-friendly structure.`,
    videoUrl: "/portfolio-website-demo-video.jpg",
  },
  {
    slug: "adobe-experience-manager-integration",
    title: "Adobe Experience Manager Integration",
    projectType: "Professional",
    description:
      "The full integration of Adobe’s CMS across the entire Telefónica environment.",
    images: ["/minimalist-portfolio.png"],
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    fullDescription: `A stunning portfolio website showcasing creative work with smooth, buttery animations powered by Framer Motion. The minimalist design puts the focus on the content while maintaining visual interest.
    
    Built with Next.js for optimal performance and deployed on Vercel for instant global delivery. Features include dynamic routing, optimized images, and SEO-friendly structure.`,
    videoUrl: "/portfolio-website-demo-video.jpg",
  },
  {
    slug: "mobile-app",
    title: "Mobile App",
    projectType: "Side Project",
    description:
      "Responsive mobile application for task management and productivity.",
    images: ["/mobile-task-management-app.png"],
    tags: ["React Native", "Firebase", "Redux", "UI/UX"],
    fullDescription: `A cross-platform mobile application designed for task management and productivity enhancement. Built with React Native for both iOS and Android platforms.
    
    Firebase integration provides real-time synchronization across devices, while Redux manages complex state efficiently. Features include push notifications, offline mode, and collaborative task lists.`,
    videoUrl: "/mobile-task-app-demo-video.jpg",
  },
];
