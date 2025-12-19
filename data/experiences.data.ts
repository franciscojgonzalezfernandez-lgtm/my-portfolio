import { Experience } from "@/interfaces/experience.interface";

export const experiences: Experience[] = [
  {
    role: "Full Stack Software Engineer",
    company: "Freelance",
    period: "Sept 2025 - Now",
    description:
      "Building end‑to‑end web applications as an independent full‑stack engineer while actively adapting to the Swiss tech market. Working autonomously across discovery, architecture, implementation, and deployment, with a strong focus on performance, UX, and production‑ready quality.",
    achievements: [
      "Designed, implemented, and deployed end‑to‑end applications with Next.js and React on Vercel, including routing, data fetching, UI, performance tuning, and CI/CD.",
      "Quickly adapted to the Swiss market’s expectations in terms of performance, accessibility, and SEO, achieving strong Lighthouse scores and clean Core Web Vitals on deployed projects.",
      "Built a modular personal portfolio and metrics platform that showcases real usage data, automated deployments, and a codebase structured for team‑level scalability, even as a solo developer.",
    ],
    relatedProjects: [
      {
        label: "Optimized Web Portfolio",
        url: "/this-portfolio",
      },
      {
        label: "Full Stack E-commerce",
        url: "/ecommerce-plattform",
      },
    ],
  },
  {
    role: "Product Owner & Project Manager",
    company: "Telefonica",
    companyLink: "https://www.telefonica.es/es/",
    period: "Jan 2024 - Sept 2025",
    description:
      "Leaded the integration of Adobe Experience Manager (CMS) in the Telefonica Ecosystem, making the business able to create pages with a friendly interface and without technical knowledge. Full integration meeting security requirements at the network layer, business requirements at the application layer. (2024-2025)",
    achievements: [
      "Supporting 10.000 visits/day without degrading",
      "Proposed a workflow and provided the necessary building blocks to give the business full independence to create, edit, and publish pages.",
      "A 40‑person team (contributors, UX, UI, SEO, and Analytics) working on these capabilities smoothly while continuously gathering and addressing their requirements & accomplishing times.",
    ],
    relatedProjects: [
      {
        label:
          "Full integration of Adobe Experience Manager (CMS) in Telefonica Ecosystem.",
        url: "/adobe-experience-manager-integration",
      },
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "Telefonica",
    period: "July 2022 - Jan 2024",
    description:
      "Leading the unified frontend strategy for the entire area, defining and establishing shared paradigms and technologies to maximize team productivity. Training junior developers in methodology and technical skills, and providing the core seeds and components for each application.",
    achievements: [
      "Designed and implemented a complete ecosystem of SPAs in React and Next.js from scratch, enabling a team of 30 people to work on projects in parallel to meet the evolving and specific needs of each web segment",
      "Ranked Movistar.es as the #1 telecomunications website in Spain",
    ],
    companyLink: "https://www.telefonica.es/es/",
    relatedProjects: [
      {
        label: "Next & React pages ecosystem",
        url: "/whole-nextjs-ecosystem",
      },
      {
        label: "Make editable all that React&Next ecosystem!",
        url: "/whole-cms-next",
      },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Telefonica",
    companyLink: "https://www.telefonica.es/es/",
    period: "July 2018 - July 2022",
    description:
      "Collaborated on the professionalization of Telefónica’s digital channels, leading the adoption of modern technologies such as React and Next.js on the frontend and strengthening our backend through the migration to Google Cloud Platform. I delivered multiple frontend and backend projects to help transform the digital channel into the company’s leading sales force.",
    achievements: [
      "Optimization of Front-end applications in React and Next to reach +90% of metrics performance (code chunk, pre-rendering...), SEO & Best practices. Still running in Production",
      "Developed a Full-stack lead generation & call tracking project hosted in Google Cloud Platform with 96% of traceability and <1% error rate. Built an interactive dashboard that provided real-time end-to-end system visibility and enabled business pattern detection.",
      "Developed a complete frontend e-commerce in Angular with the integration of the new in-house catalogue of products. Reached sales record ",
    ],
    relatedProjects: [
      {
        label: "Full Movistar Customer Portal",
        url: "/customer-portal",
      },
      {
        label: "End to End Call Tracking System",
        url: "/call-tracking-system",
      },
      {
        label: "Automated Python trading algorithm",
        url: "/automatic-trading-algorighm",
      },
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Vicerrectorate of Internationalization - Granada University",
    companyLink: "https://internacional.ugr.es",
    period: "Nov 2017 - Jun 2018",
    description:
      "Responsible for the end‑to‑end development of registration forms and maintenance of the databases that enabled volunteers and scholarship recipients to apply for their placements and request funding. Development in PHP.",
    achievements: [
      "Built an innovative relational database design that enabled data reuse and ensured consistency for volunteer scholarship applicants. Saved 20 tables aprox.",
      "Design and development of the front-end forms with PHP & JavaScript. 300 students inscribed",
    ],
  },
];
