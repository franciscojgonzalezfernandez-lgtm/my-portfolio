import { Project } from "@/interfaces/project.interface";

export const EDITABLE_CMS: Project = {
  slug: "whole-cms-next",
  title: "Editable CMS based in NextJS",
  projectType: "Professional",
  description:
    "Next.js applications with built-in database editing capabilities in controlled environments (staging).",
  images: ["/editable-cms-cover.webp", "/Next-apps-rendition.webp"],
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
    "Atomic Design",
    "Workers",
    "JWT",
  ],
  fullDescription: `An entrepreneurial project I led within Telefónica. When we saw that we wanted to acquire an off‑the‑shelf CMS, I demonstrated to my superiors that we could turn our Next-based application ecosystem into a set of contributable pages instead.

      By using an access key to the catalog APIs shown in the architecture diagram, we were able to modify the contributed information directly, bypassing the catalog tool’s own interface and making the process much more user‑friendly. This updated the product information across all the pages where it appeared.

      Built with Next.js for optimal performance and deployed on Vercel for instant global delivery. Features include dynamic routing, optimized images, and SEO-friendly structure.`,
  videoUrl: "/cms-editable.webm",
  externalUrl: "https://www.movistar.es/tarifas-moviles/tarifa-50gb/",
  releaseDate: "19-07-2022",
};
