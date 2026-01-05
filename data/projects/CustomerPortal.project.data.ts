import { Project } from "@/interfaces/project.interface";

export const CUSTOMER_PORTAL: Project = {
  slug: "customer-portal",
  title: "Customer Portal for Movistar Clients",
  projectType: "Professional",
  description:
    "The management portal for Movistar customers. Responsive and embedded within the MiMovistar application. And much more. See the details!",
  images: [
    "/miMovistar-cover.webp",
    "/TCOL-environments.webp",
    "/mis-productos.webp",
    "/factura.webp",
    "/configurador.webp",
  ],
  tags: [
    "React",
    "CI/CD",
    "Redux",
    "UI/UX",
    "Workers",
    "Architecture",
    "Jest",
    "Figma",
    "JUnit",
    "XD",
    "Stress testing",
  ],
  fullDescription: `This project represented one of the company’s key innovation initiatives: the development of the private area for all TELCO customers following several corporate mergers. The main challenge was to unify customer data coming from multiple legacy systems and databases, which required extensive normalization and integration work.

    We designed a middleware API layer to standardize the information and define a common customer model. I was directly involved in designing and defining the API contract, working iteratively with the backend team to ensure consistency, security, and scalability.

    In parallel, I co-led the development of the company’s first React application. We collaborated closely with the UX and UI teams to define the design system from scratch, validating prototypes in Figma and Adobe XD, and conducting accessibility audits through Applause.

    The iterations were particularly challenging due to the gap between UX expectations and backend limitations. My role was to mediate between both teams, finding feasible solutions that maintained product consistency and addressed real customer needs.

    Lastly, we worked together with the infrastructure team to properly size and provision the servers, opting for an on‑premise deployment due to the sensitivity of the data involved. The CI/CD setup was also complex, as it required authentication against on‑premise machines and the use of the company’s internal certificates for secure deployment pipelines.
    `,
  videoUrl: "tcol.webm",
  releaseDate: "16-07-2021",
};
