import { Project } from "@/interfaces/project.interface";

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "Full Stack E-commerce Platform",
    projectType: "Side Project",
    description:
      "Full-featured e-commerce platform with shopping cart and payment gateway integration.",
    images: [
      "/ecommerce-1.png",
      "/ecommerce-architecture.webp",
      "/ecommerce-admin-2.png",
    ],
    tags: [
      "React",
      "TypeScript",
      "ViteJS",
      "React-Query",
      "Tailwind CSS",
      "PostgreSQL",
      "NestJS",
      "CI/CD",
      "GitHub Actions",
      "Zustand",
      "UseForm hook",
      "AI UI Generators",
      "V0",
      "Lovable",
      "JWT",
    ],
    fullDescription: `A comprehensive e-commerce solution built with modern technologies. This platform features a robust shopping cart system, secure payment processing through Stripe, and a fully responsive design. 
    
    The backend utilizes PostgreSQL for data management, ensuring fast and reliable performance. The admin panel allows for easy product management, order tracking, and customer analytics.`,
    videoUrl: "/e-commerce.webm",
    externalUrl:
      "https://franciscojgonzalezfernandez-lgtm.github.io/minimalist-e-commerce/",
    gitHubUrl:
      "https://github.com/franciscojgonzalezfernandez-lgtm/minimalist-e-commerce",
    releaseDate: "01-12-2025",
  },
  {
    slug: "whole-cms-next",
    title: "Editable CMS based in NextJS",
    projectType: "Professional",
    description:
      "Next.js applications with built-in database editing capabilities in controlled environments (staging).",
    images: ["/editable-cms-cover.webp", "/next-apps-rendition.webp"],
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
  },
  {
    slug: "call-tracking-system",
    title: "Call Tracking System",
    projectType: "Professional",
    description:
      "Full‑stack development of a lead generation system based on call routing and call traceability.",
    images: [
      "/call-tracking-cover.webp",
      "call-tracking-architecture.png",
      "numero900.png",
      "C2C.png",
    ],
    tags: [
      "ES6",
      "Java",
      "Webpack",
      "GCP",
      "BigQuery",
      "Redis",
      "Google Endpoints",
      "Maven",
      "Google DataFlow",
      "Data Studio",
      "PubSub",
      "npm",
      "Swagger",
      "GTM",
      "Google app Store",
    ],
    fullDescription: `A project to achieve traceability of assisted sales in the channel. 60% of all website sales were made over the phone.

The goal was to track every cookie that generated a call, in order to analyze the customer journey of each user who called.

To do this, an integration was carried out with a pool of phone numbers, and by sending call state updates it was possible to trace each call with 96% accuracy. No further details are provided in order to preserve the company’s intellectual property.

It was also necessary to enable “click to call” calls, where the customer leaves their phone number and is called back.

All of this had to maintain call routing to the appropriate call centers, depending on the campaign associated with each product/page.

The system needed 4 APIs in a Maven project, from the campaign configuration API to the one that evaluated the rules and served the corresponding campaign. Everything was deployed on Google Cloud Platform, as shown in the diagram.

Also it was needed a robust frontend that orchestrated all these calls and rendered the appropriate toll‑free number for each customer. With less than 1% error rate, the system was robust and designed under a “best effort” paradigm.

In addition, this whole system ingested data into BigQuery via Dataflow and Pub/Sub, which then had to be analyzed. I built the views and the dashboard that provided the business with information about the overall state of the system.

All the system was monitorized and alarmed via Google Cloud Monitoring and periodic queries in BigQuery.

It is still running in production.`,
    videoUrl: "scx-demo.webm",
    externalUrl: "https://www.movistar.es/fibra-optica/fibra-600mb/",
    releaseDate: "03-11-2019",
  },
  {
    slug: "whole-nextjs-ecosystem",
    title: "Whole Nextjs Ecosystem",
    projectType: "Professional",
    description:
      "The full integration of Adobe’s CMS across the entire Telefónica environment.",
    images: ["/minimalist-portfolio.png"],
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    fullDescription: `A stunning portfolio website showcasing creative work with smooth, buttery animations powered by Framer Motion. The minimalist design puts the focus on the content while maintaining visual interest.
    
    Built with Next.js for optimal performance and deployed on Vercel for instant global delivery. Features include dynamic routing, optimized images, and SEO-friendly structure.`,
    videoUrl: "/portfolio-website-demo-video.jpg",
    releaseDate: "06-05-2022",
  },
  {
    slug: "this-portfolio",
    title: "Optimized Portfolio Website",
    projectType: "Side Project",
    description: "This portfolio itself. The one you're watching right now",
    images: ["/portfolio-cover.webp"],
    tags: [
      "NextJS",
      "AI UI Generators",
      "V0",
      "CI/CD",
      "Github Actions",
      "Tailwind CSS",
      "Vercel",
    ],
    fullDescription: `A stunning portfolio website showcasing creative work with smooth, buttery animations powered by Framer Motion. The minimalist design puts the focus on the content while maintaining visual interest.
    
    Built with Next.js for optimal performance and deployed on Vercel for instant global delivery. Features include dynamic routing, optimized images, and SEO-friendly structure.`,
    videoUrl: "/portfolio-website-demo-video.jpg",
    releaseDate: "28-12-2025",
  },
  {
    slug: "automatic-trading-algorighm",
    title: "Automating trading Algorithm. Moby Dick",
    projectType: "Side Project",
    description:
      "The full integration of Adobe’s CMS across the entire Telefónica environment.",
    images: ["/minimalist-portfolio.png"],
    tags: ["Python", "Pandas", "API", "Telegram APIs", "Binance APIs"],
    fullDescription: `A stunning portfolio website showcasing creative work with smooth, buttery animations powered by Framer Motion. The minimalist design puts the focus on the content while maintaining visual interest.
    
    Built with Next.js for optimal performance and deployed on Vercel for instant global delivery. Features include dynamic routing, optimized images, and SEO-friendly structure.`,
    videoUrl: "/portfolio-website-demo-video.jpg",
    releaseDate: "15-08-2019",
  },
  {
    slug: "adobe-experience-manager-integration",
    title: "Custom AEM Integration for Telefónica",
    projectType: "Professional",
    description:
      "The full integration of Adobe’s CMS across the entire Telefónica environment.",
    images: [
      "/aem-cover.webp",
      "aem-arquetype.webp",
      "aem-infra.webp",
      "aem-flow.webp",
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
  },
  {
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
  },
];
