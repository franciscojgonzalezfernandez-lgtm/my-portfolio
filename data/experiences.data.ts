import { Experience } from "@/interfaces/experience.interface";

export const experiences: Experience[] = [
  {
    role: "Project Manager",
    company: "Telefonica",
    companyLink: "https://www.telefonica.es/es/",
    period: "Jan 2024 - Sept 2025",
    description:
      "Managed cross-functional teams to deliver web and mobile applications. Coordinated with stakeholders to define project scope and timelines.",
    achievements: [
      "Successfully delivered 15+ projects on time and within budget",
      "Improved team productivity by 30% through agile methodologies",
      "Established new project management workflows",
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
