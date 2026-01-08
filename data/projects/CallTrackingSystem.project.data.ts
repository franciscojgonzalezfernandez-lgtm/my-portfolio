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
  fullDescription: `<strong>Development of a call tracking system</strong> that achieved 96% accurate traceability for assisted sales representing 60% of all website conversions, preserving full intellectual property while enabling complete customer journey analysis from cookie to call.
  <h3 className="text-xl"><strong>My Strategic Role</strong></h3>
  - <strong>End-to-end architecture</strong>: 4-API Maven backend (campaign config → rules engine → number routing) deployed on Google Cloud Platform.
  - <strong>Phone pool integration</strong>: Real-time call state updates enabling precise cookie-to-call attribution.
  - <strong>Click-to-call orchestration</strong>: Robust frontend dynamically rendering toll-free numbers (<1% error rate) with intelligent campaign-based routing to call centers.
  - <strong>Data pipeline mastery</strong>: BigQuery views + dashboards via Dataflow/Pub/Sub ingestion for business intelligence.
  - <strong>Production monitoring</strong>: Google Cloud Monitoring + BigQuery alerts ensuring 24/7 system reliability.

  <h3 className="text-xl"><strong>Challenges Solved</strong></h3>
  - <strong>Mapped complete customer journeys</strong> from website cookies through phone sales (60% of total revenue).
  - <strong>Implemented intelligent call routing</strong> across multiple campaigns/products to correct call centers without errors.
  - <strong>Built production-grade "best effort" system</strong> achieving 96% accuracy while protecting proprietary algorithms.
  - <strong>Orchestrated complex data flows</strong>: Real-time ingestion → BigQuery analysis → actionable business dashboards.
  - Delivered zero-downtime monitoring across entire GCP stack.

  <h3 className="text-xl"><strong>Results</strong></h3>
   ✅ 96% call traceability accuracy across 60% of website revenue
   ✅ Production system still running with <1% error rate
   ✅ Complete customer journey visibility from cookie → assisted sale
   ✅ Business-ready BigQuery dashboards + automated Google Cloud alerts
   ✅ Intelligent campaign-based call center routing at scale
   
  System continues delivering ROI in production today.`,
  videoUrl: "scx-demo.webm",
  externalUrl: "https://www.movistar.es/fibra-optica/fibra-600mb/",
  releaseDate: "03-11-2019",
};
