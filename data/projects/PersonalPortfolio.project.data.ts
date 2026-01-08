import { Project } from "@/interfaces/project.interface";

export const PERSONAL_PORTFOLIO: Project = {
  slug: "this-portfolio",
  title: "Optimized Portfolio Website",
  projectType: "Side Project",
  description: "This portfolio itself. The one you're watching right now",
  images: ["/portfolio-cover.webp", "/portfolio-arq.webp"],
  tags: [
    "NextJS",
    "AI UI Generators",
    "V0",
    "CI/CD",
    "Github Actions",
    "Tailwind CSS",
    "Shad/cn",
    "Radix UI",
    "Vercel",
  ],
  fullDescription: `Built my personal portfolio from scratch in just 5 effective working days, achieving perfect Lighthouse metrics (100% Performance, Accessibility, Best Practices, and SEO) by leveraging the latest cutting-edge tools in the ecosystem.
  
  <h3 className="text-xl"><strong>My Strategic Role</strong></h3>
  - <strong>Technology scouting</strong>: Selected Next.js 16 + React 19 with Vite for ultra-fast static builds, shadcn/ui over Tailwind CSS for elegant Radix UI-based components —exploring the most innovative options to demonstrate adaptability.
  - <strong>End-to-end optimization</strong>: Parallelized frontend/backend workflows, pre-rendering mastery, and instant-loading guarantees.
  - <strong>Production hardening</strong>: Direct GitHub Pages deployment with contact form + CV download functionality.
  - <strong>Performance commitment</strong>: Lighthouse-perfect scores through precise technical decisions.

  <h3 className="text-xl"><strong>Challenges Solved</strong></h3>
  - Delivered production-ready site in record time using newest framework releases.
  - <strong>Balanced innovation with stability</strong> — bleeding-edge stack without compromising reliability.
  - Achieved 100% Lighthouse across all metrics in static export environment.
  - Created seamless user experience with email integration and instant downloads.

  <h3 className="text-xl"><strong>Results</strong></h3>
   ✅ Perfect Lighthouse Performance/Accessibility/SEO/Best Practices scores
   ✅ Production-ready in 5 working days using Next.js 16 + React 19
   ✅ Direct GitHub Pages deployment — simple, fast, scalable
   ✅ Contact form + CV download fully functional
`,
  videoUrl: "/portfolio-website-demo-video.jpg",
  releaseDate: "9-01-2026",
  externalUrl:
    "https://franciscojgonzalezfernandez-lgtm.github.io/my-portfolio",
  gitHubUrl: "https://github.com/franciscojgonzalezfernandez-lgtm/my-portfolio",
};
