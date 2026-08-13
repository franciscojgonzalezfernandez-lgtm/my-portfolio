import type { MetadataRoute } from "next";

import { projects } from "@/data/projects.data";

const SITE_URL = "https://javier-gonzalez-portfolio.com";

// Static pages, kept in sync by hand with the route folders under app/.
// Project pages are NOT listed here: they come from data/projects.data.ts, the
// same array that feeds generateStaticParams in app/portfolio/[slug]/page.tsx.
const STATIC_PATHS = ["", "about", "portfolio", "experience", "contact", "metrics"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_PATHS.map((path) => ({
      url: `${SITE_URL}${path ? `/${path}` : "/"}`,
    })),
    ...projects.map((project) => ({
      url: `${SITE_URL}/portfolio/${project.slug}`,
    })),
  ];
}
