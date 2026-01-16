import { Project } from "@/interfaces/project.interface";

export const EDITABLE_CMS: Project = {
  slug: "whole-cms-next",
  title: "Editable CMS based in NextJS",
  titleGerman: "Editierbares CMS basierend auf NextJS",
  projectType: "Professional",
  description:
    "Next.js applications with built-in database editing capabilities in controlled environments (staging).",
  descriptionGerman:
    "Next.js-Anwendungen mit integrierten Datenbank-Editierungsfunktionen in kontrollierten Umgebungen (Staging).",
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

      By using an access key to the catalog APIs shown in the architecture diagram, we were able to modify the contributed information directly, bypassing the catalog tool's own interface and making the process much more user‑friendly. This updated the product information across all the pages where it appeared.

      Built with Next.js for optimal performance and deployed on Vercel for instant global delivery. Features include dynamic routing, optimized images, and SEO-friendly structure.`,
  fullDescriptionGerman: `Ein unternehmerisches Projekt, das ich bei Telefónica leitete. Als wir planten, ein Off-the-Shelf-CMS zu erwerben, demonstrierte ich meinen Vorgesetzten, dass wir unser Next-basiertes Application-Ökosystem in einen Satz editierbarer Seiten umwandeln konnten.

      Durch die Verwendung eines Zugriffsschlüssels für die Katalog-APIs, wie im Architekturdiagramm gezeigt, konnten wir die beigetragenen Informationen direkt modifizieren, die Oberfläche des Katalog-Tools umgehen und den Prozess deutlich benutzerfreundlicher gestalten. Dadurch wurde die Produktinformation auf allen Seiten aktualisiert, auf denen sie erschien.

      Entwickelt mit Next.js für optimale Performance und deployed auf Vercel für sofortige globale Bereitstellung. Features umfassen dynamisches Routing, optimierte Bilder und SEO-freundliche Struktur.`,
  videoUrl: "/cms-editable.webm",
  externalUrl: "https://www.movistar.es/tarifas-moviles/tarifa-50gb/",
  releaseDate: "19-07-2022",
};
