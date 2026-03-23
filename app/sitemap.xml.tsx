import { projects } from "@/data/projects.data";

const SITE_URL = "https://javier-gonzalez-portfolio.com";

export async function GET() {
  const urls = ["", "about", "portfolio", "experience", "contact", "metrics"];
  const projectSlugs = projects.map((p) => p.slug);

  const xmlParts = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const path of urls) {
    const loc = `${SITE_URL}${path ? `/${path}` : ""}`;
    xmlParts.push(`<url><loc>${loc}</loc></url>`);
  }

  for (const slug of projectSlugs) {
    const loc = `${SITE_URL}/portfolio/${slug}`;
    xmlParts.push(`<url><loc>${loc}</loc></url>`);
  }

  xmlParts.push("</urlset>");
  const xml = xmlParts.join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
