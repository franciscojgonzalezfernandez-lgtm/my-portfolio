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
    title: "Editable CMS based in Next",
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
    fullDescription: `An entrepreneurial project I led within Telefónica. When we saw that we wanted to acquire an off‑the‑shelf CMS, I demonstrated to my superiors that we could turn our Next-based application ecosystem into a set of contributable pages instead.

By using an access key to the catalog APIs shown in the architecture diagram, we were able to modify the contributed information directly, bypassing the catalog tool’s own interface and making the process much more user‑friendly. This updated the product information across all the pages where it appeared.
    Built with Next.js for optimal performance and deployed on Vercel for instant global delivery. Features include dynamic routing, optimized images, and SEO-friendly structure.`,
    videoUrl: "/CMS-next.mp4",
  },
  {
    slug: "call-tracking-system",
    title: "Call Tracking System",
    projectType: "Professional",
    description:
      "Full‑stack development of a lead generation system based on call routing and call traceability.",
    images: [
      "/call-tracking-cover.png",
      "call-tracking-architecture.png",
      "numero900.png",
      "C2C.png",
    ],
    tags: [
      "ES6",
      "Java",
      "Webpack",
      "GCP",
      "BigQuery",
      "Redis",
      "Google Endpoints",
      "Maven",
      "Google DataFlow",
      "Data Studio",
      "PubSub",
      "npm",
      "Swagger",
      "GTM",
      "Google app Store",
    ],
    fullDescription: `A project to achieve traceability of assisted sales in the channel. Sixty percent of all website sales were made over the phone.

The goal was to track every cookie that generated a call, in order to analyze the customer journey of each user who called.

To do this, an integration was carried out with a pool of phone numbers, and by sending call state updates it was possible to trace each call with 96% accuracy. No further details are provided in order to preserve the company’s intellectual property.

It was also necessary to enable “click to call” calls, where the customer leaves their phone number and is called back.

All of this had to maintain call routing to the appropriate call centers, depending on the campaign associated with each product/page.

I developed all the APIs in a Maven project, from the campaign configuration APIs to the one that evaluated the rules and served the corresponding campaign. Everything was deployed on Google Cloud Platform, as shown in the diagram.

I built the frontend that orchestrated all these calls and rendered the appropriate toll‑free number for each customer. With less than 1% error rate, the system was robust and designed under a “best effort” paradigm.

In addition, this whole system ingested data into BigQuery via Dataflow and Pub/Sub, which then had to be analyzed. I built the views and the dashboard that provided the business with information about the overall state of the system.

It is still running in production.`,
    videoUrl: "/portfolio-website-demo-video.jpg",
    externalUrl: "https://www.movistar.es/fibra-optica/fibra-600mb/",
  },
  {
    slug: "whole-nextjs-ecosystem",
    title: "Whole Nextjs Ecosystem",
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
    slug: "automatic-trading-algorighm",
    title: "Automating trading Algorithm. Moby Dick",
    projectType: "Side Project",
    description:
      "The full integration of Adobe’s CMS across the entire Telefónica environment.",
    images: ["/minimalist-portfolio.png"],
    tags: ["Python", "Pandas", "API", "Telegram APIs", "Binance APIs"],
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
    slug: "customer-portal",
    title: "Customer Portal for Movistar Clients",
    projectType: "Professional",
    description:
      "Responsive mobile application for task management and productivity.",
    images: ["/mobile-task-management-app.png"],
    tags: ["React Native", "Firebase", "Redux", "UI/UX"],
    fullDescription: `A cross-platform mobile application designed for task management and productivity enhancement. Built with React Native for both iOS and Android platforms.
    
    Firebase integration provides real-time synchronization across devices, while Redux manages complex state efficiently. Features include push notifications, offline mode, and collaborative task lists.`,
    videoUrl: "/mobile-task-app-demo-video.jpg",
  },
];
