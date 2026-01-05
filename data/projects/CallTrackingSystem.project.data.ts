import { Project } from "@/interfaces/project.interface";

export const CALL_TRACKING: Project = {
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
};
