import { Project } from "@/interfaces/project.interface";

export const CALL_TRACKING: Project = {
  slug: "call-tracking-system",
  title: "Call Tracking System",
  titleGerman: "Call-Tracking-System",
  projectType: "Professional",
  description:
    "Full‑stack development of a lead generation system based on call routing and call traceability.",
  descriptionGerman:
    "Full-Stack-Entwicklung eines Lead-Generierungs-Systems basierend auf Call-Routing und Call-Traceability.",
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
  fullDescriptionGerman: `<strong>Entwicklung eines Call-Tracking-Systems</strong>, das 96% genaue Nachverfolgbarkeit für assistierte Verkäufe erreichte, die 60% aller Website-Konversionen ausmachen, vollständiges geistiges Eigentum bewahrend und vollständige Customer-Journey-Analyse von Cookie bis Anruf ermöglichend.

  <h3 className="text-xl"><strong>Meine strategische Rolle</strong></h3>
  - <strong>End-to-End-Architektur</strong>: 4-API Maven-Backend (Kampagnen-Konfiguration → Rules Engine → Nummern-Routing) auf Google Cloud Platform deployed.
  - <strong>Phone-Pool-Integration</strong>: Echtzeit-Call-Status-Updates für präzise Cookie-to-Call-Zuordnung.
  - <strong>Click-to-Call-Orchestrierung</strong>: Robuste Frontend dynamisch gebuchte gebührenfreie Nummern (<1% Fehlerquote) mit intelligentem kampagnenbasiertem Routing zu Call-Centern.
  - <strong>Data-Pipeline-Meisterschaft</strong>: BigQuery-Views + Dashboards via Dataflow/Pub/Sub-Ingestion für Business Intelligence.
  - <strong>Production-Monitoring</strong>: Google Cloud Monitoring + BigQuery-Alerts für 24/7 Systemzuverlässigkeit.


  <h3 className="text-xl"><strong>Gelöste Herausforderungen</strong></h3>
  - <strong>Vollständige Customer Journeys abgebildet</strong> von Website-Cookies durch Telefonverkäufe (60% des Gesamtumsatzes).
  - <strong>Intelligentes Call-Routing implementiert</strong> über mehrere Kampagnen/Produkte zu korrekten Call-Centern ohne Fehler.
  - <strong>Production-grade "Best-Effort"-System gebaut</strong> mit 96% Genauigkeit bei Schutz proprietärer Algorithmen.
  - <strong>Komplexe Datenflüsse orchestriert</strong>: Echtzeit-Ingestion → BigQuery-Analyse → handlungsrelevante Business-Dashboards.
  - Zero-Downtime-Monitoring über gesamten GCP-Stack geliefert.


  <h3 className="text-xl"><strong>Ergebnisse</strong></h3>
   ✅ 96% Call-Traceability-Genauigkeit über 60% des Website-Umsatzes
   ✅ Production-System läuft weiterhin mit <1% Fehlerquote
   ✅ Vollständige Customer-Journey-Sichtbarkeit von Cookie → assistierter Verkauf
   ✅ Business-ready BigQuery-Dashboards + automatisierte Google Cloud-Alerts
   ✅ Intelligentes kampagnenbasiertes Call-Center-Routing im Scale
   
  System liefert nach wie vor ROI in Production.`,
  videoUrl: "scx-demo.webm",
  externalUrl: "https://www.movistar.es/fibra-optica/fibra-600mb/",
  releaseDate: "03-11-2019",
};
