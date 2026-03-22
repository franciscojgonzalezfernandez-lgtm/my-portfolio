import { projects } from "@/data/projects.data";

const SITE_URL = "https://javier-gonzalez-portfolio.com";

export async function GET() {
  const urls = ["", "about", "portfolio", "experience", "contact", "metrics"];
  const locales = ["en", "de"];
  const projectSlugs = projects.map((p) => p.slug);

  const xmlParts = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const locale of locales) {
    for (const path of urls) {
      const loc = `${SITE_URL}/${locale}${path ? `/${path}` : ""}`;
      xmlParts.push(`<url><loc>${loc}</loc></url>`);
    }

    for (const slug of projectSlugs) {
      const loc = `${SITE_URL}/${locale}/portfolio/${slug}`;
      xmlParts.push(`<url><loc>${loc}</loc></url>`);
    }
  }

  xmlParts.push("</urlset>");
  const xml = xmlParts.join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
