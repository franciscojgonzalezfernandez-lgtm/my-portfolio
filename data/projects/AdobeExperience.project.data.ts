import { Project } from "@/interfaces/project.interface";

export const ADOBE_INTEGRATION: Project = {
  slug: "adobe-experience-manager-integration",
  title: "Custom AEM Integration for Telefónica",
  projectType: "Professional",
  description:
    "The full integration of Adobe’s CMS across the entire Telefónica environment.",
  images: [
    "/aem-cover.webp",
    "aem-arquetype.webp",
    "aem-infra.webp",
    "AEM-flow.webp",
    "aem-performance.webp",
  ],
  tags: [
    "Maven",
    "Java",
    "Weback",
    "ES6",
    "Miro",
    "Figma",
    "OSGi",
    "HTL",
    "Sling",
    "Apache",
    "secure CI/CD",
    "Business requirements",
    "Testing",
    "Cypress",
    "Flow definition",
  ],
  fullDescription: `<strong>Led a technical team of 6 </strong> to build a CMS empowering 40+ non-technical users (UX/UI, sales, SEO, analytics) to fully manage the Movistar freelancers/enterprises portal independently.

      <h3 className="text-xl"><strong>My Strategic Role</strong></h3>
      - <strong>Technical mediation</strong> between business needs and platform capabilities (UX vs. technical feasibility).
      - <strong>End-to-end architecture</strong>: ES6 frontend + Java backend (OSGi services, Sling Models, HTL).
      - <strong>Designed multidisciplinary workflows</strong> to coordinate 40+ people seamlessly.
      - <strong>Infrastructure control</strong> in cloud environment + critical CI/CD release management.
      - Rapid mastery of AEM technologies + collaboration with external consultants (VASS).

      <h3 className="text-xl"><strong>Challenges Solved</strong></h3>
      - Separated technical development from content publishing workflows.
      - <strong>Managed complex monolithic deployments</strong> with extremely controlled release processes to prevent production breaks.
      - Maintained optimal performance/SEO in production monolith.
      - Scaled for multiple teams with controlled quality gates.

      <h3 className="text-xl"><strong>Results</strong></h3>
       ✅ UX/UI, sales, SEO, and analytics teams fully self-sufficient and highly satisfied
       ✅ Business efficiency: Independent publishing decoupled from dev cycles
       ✅ Lighthouse perfect Performance/SEO scores
       ✅ 100% Movistar design system consistency
       
      You can try all the https://www.movistar.es/autonomos or https://www.telefonicaempresas.es by yourself to check it all!`,
  videoUrl: "/aem-demo.webm",
  releaseDate: "06-11-2024",
  externalUrl: "https://www.telefonicaempresas.es",
};
