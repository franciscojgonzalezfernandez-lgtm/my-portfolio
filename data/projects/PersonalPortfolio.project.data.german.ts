import { Project } from "@/interfaces/project.interface";

export const PERSONAL_PORTFOLIO: Project = {
  slug: "this-portfolio",
  title: "Optimierte Portfolio-Website",
  projectType: "Nebenprojekt",
  description: "Dieses Portfolio selbst. Das, was du gerade anschaust",
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
  fullDescription: `Mein persönliches Portfolio wurde in nur **5 effektiven Arbeitstagen** von Grund auf neu erstellt und erreicht perfekte Lighthouse-Werte (100 % Performance, Barrierefreiheit, Best Practices und SEO) durch die Nutzung der neuesten Top-Tools des Ökosystems.
  
  <h3 className="text-xl"><strong>Meine strategische Rolle</strong></h3>
  - <strong>Technologie-Scouting</strong>: Auswahl von Next.js 16 + React 19 mit Vite für ultraschnelle statische Builds, shadcn/ui über Tailwind CSS für elegante Radix-UI-basierte Komponenten — Erkundung der innovativsten Optionen zur Demonstration von Anpassungsfähigkeit.
  - <strong>End-to-End-Optimierung</strong>: Parallelisierung von Frontend/Backend-Workflows, Beherrschung des Pre-Renderings und Garantie für sofortiges Laden.
  - <strong>Produktionshärtung</strong>: Direkte GitHub-Pages-Bereitstellung mit Kontaktformular + CV-Download-Funktionalität.
  - <strong>Performance-Verpflichtung</strong>: Perfekte Lighthouse-Werte durch präzise technische Entscheidungen.


  <h3 className="text-xl"><strong>Gelöste Herausforderungen</strong></h3>
  - Bereitstellung einer produktionsreifen Website in Rekordzeit mit den neuesten Framework-Releases.
  - <strong>Balance zwischen Innovation und Stabilität</strong> — Bleeding-Edge-Stack ohne Kompromisse bei der Zuverlässigkeit.
  - Erreichte 100 % Lighthouse-Werte über alle Metriken im statischen Export-Umfeld.
  - Erstellt nahtlose Nutzererfahrung mit E-Mail-Integration und sofortigen Downloads.


  <h3 className="text-xl"><strong>Ergebnisse</strong></h3>
   ✅ Perfekte Lighthouse-Performance/Barrierefreiheit/SEO/Best-Practices-Werte
   ✅ Produktionsreif in 5 Arbeitstagen mit Next.js 16 + React 19
   ✅ Direkte GitHub-Pages-Bereitstellung — einfach, schnell, skalierbar
   ✅ Kontaktformular + CV-Download vollständig funktionsfähig
`,
  videoUrl: "/portfolio-demo.webm",
  releaseDate: "9-01-2026",
  externalUrl:
    "https://franciscojgonzalezfernandez-lgtm.github.io/my-portfolio",
  gitHubUrl: "https://github.com/franciscojgonzalezfernandez-lgtm/my-portfolio",
};
