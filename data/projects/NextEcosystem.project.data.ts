import { Project } from "@/interfaces/project.interface";

export const NEXT_ECOSYSTEM: Project = {
  slug: "nextjs-ecosystem",
  title: "Nextjs Ecosystem - Movistar Portal",
  projectType: "Professional",
  description:
    "The full integration of Adobe’s CMS across the entire Telefónica environment.",
  images: ["/next-ecosystem-cover.webp", "next-apps-rendition.webp"],
  tags: [
    "Next.js",
    "SSG",
    "ISR",
    "LESS",
    "Webpack",
    "CI/CD",
    "NPM",
    "GCP",
    "Bitbucket",
    "Terraform",
    "Figma",
    "XD",
    "Jira",
    "Scrum",
  ],
  fullDescription: `<strong>Strategic architecture</strong> that unified multiple teams and verticals into a high-performance ecosystem, technically led for maximum scalability and optimization.

    <h3 className="text-xl"><strong>My Strategic Role</strong></h3>
    - <strong>Global vision</strong> + development of shared context (user data, product portfolio, personalized offers)
    - <strong>Technical seed</strong> with complete boilerplate for all verticals (API integrations + libraries)
    - <strong>miMovistar technical leadership</strong>: knew every line of code + daily team oversight
    - Abstraction layer + Google Artifact Registry library for legacy Telefónica APIs
    - Strategic <strong>SSG → ISR migration </strong> + advanced optimizations (WebP, renditions)

    <h3 className="text-xl"><strong>Challenges Solved</strong></h3>
    - Coordinate <strong>parallel development</strong> of 6+ verticals maintaining technical cohesion
    - <strong>Slow, oversized APIs</strong> → abstraction + response normalization
    - <strong>Highly dynamic catalog content</strong> + ISR for real-time pricing/promotions updates
    - miMovistar complexity: incompatible packages + expired promotions + customer portfolio

    <h3 className="text-xl"><strong>Results</strong></h3>
    ✅ <strong>Near-perfect Lighthouse performance</strong> (including logged-in customers)
    ✅ Vertical teams <strong>developing independently</strong> with unified technical base
    ✅ miMovistar as <strong>digital revenue engine</strong> for Telefónica
    ✅ <strong>Maximum code reuse</strong> + consistent UX across applications`,
  videoUrl: "/next-ecosystem.webm",
  externalUrl: "https://www.movistar.es/fibra-y-movil/configurador/",
  releaseDate: "06-05-2022",
};
