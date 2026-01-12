import { Project } from "@/interfaces/project.interface";

export const CALL_TRACKING: Project = {
  slug: "call-tracking-system",
  title: "Anruf-Tracking-System",
  projectType: "Beruflich",
  description:
    "Full‑Stack-Entwicklung eines Lead-Generierungssystems basierend auf Anrufweiterleitung und Rückverfolgbarkeit von Telefonanrufen.",
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
  fullDescription: `<strong>Entwicklung eines Anruf-Tracking-Systems</strong>, das eine Genauigkeit von 96 % bei der Rückverfolgbarkeit von unterstützten Verkäufen erreichte, die 60 % aller Website-Konversionen ausmachten. Dabei wurde das geistige Eigentum vollständig gewahrt, während eine umfassende Analyse der Customer Journey vom Cookie bis zum Anruf ermöglicht wurde.
  
  <h3 className="text-xl"><strong>Meine strategische Rolle</strong></h3>
  - <strong>End-to-End-Architektur</strong>: Maven-Backend mit 4 APIs (Kampagnenkonfiguration → Regel-Engine → Nummern-Routing) bereitgestellt auf der Google Cloud Platform.  
  - <strong>Integration eines Telefonnummernpools</strong>: Echtzeit-Updates des Anrufstatus ermöglichen präzise Cookie-zu-Anruf-Zuordnung.  
  - <strong>Click-to-Call-Orchestrierung</strong>: Robustes Frontend, das gebührenfreie Telefonnummern dynamisch rendert (<1 % Fehlerrate) mit intelligentem, kampagnenbasiertem Routing zu Callcentern.  
  - <strong>Datenpipeline-Beherrschung</strong>: BigQuery-Ansichten + Dashboards über Dataflow/Pub/Sub-Aufnahme für Business Intelligence.  
  - <strong>Produktionsüberwachung</strong>: Google Cloud Monitoring + BigQuery-Benachrichtigungen zur Gewährleistung einer 24/7-Systemzuverlässigkeit.
  

  <h3 className="text-xl"><strong>Gelöste Herausforderungen</strong></h3>
  - <strong>Vollständige Customer Journeys abgebildet</strong> – von Website-Cookies bis hin zu Telefonverkäufen (60 % des Gesamtumsatzes).  
  - <strong>Intelligentes Call-Routing implementiert</strong> über mehrere Kampagnen/Produkte hinweg zu den richtigen Callcentern ohne Fehler.  
  - <strong>Produktionsreifes „Best-Effort“-System entwickelt</strong> mit 96 % Genauigkeit bei gleichzeitigem Schutz proprietärer Algorithmen.  
  - <strong>Komplexe Datenflüsse orchestriert</strong>: Echtzeit-Ingestion → BigQuery-Analyse → umsetzbare Business-Dashboards.  
  - Bereitstellung eines unterbrechungsfreien Monitorings über den gesamten GCP‑Stack.
  

  <h3 className="text-xl"><strong>Ergebnisse</strong></h3>
   ✅ 96 % Genauigkeit bei der Anrufnachverfolgung über 60 % des Website-Umsatzes  
   ✅ Produktionssystem läuft weiterhin mit <1 % Fehlerrate  
   ✅ Vollständige Transparenz der Customer Journey vom Cookie bis zum unterstützten Verkauf  
   ✅ Geschäftsbereite BigQuery-Dashboards + automatisierte Google-Cloud-Warnungen  
   ✅ Intelligentes, kampagnenbasiertes Callcenter-Routing in großem Maßstab  
   
  System liefert auch heute noch ROI im Produktivbetrieb.`,
  videoUrl: "scx-demo.webm",
  externalUrl: "https://www.movistar.es/fibra-optica/fibra-600mb/",
  releaseDate: "03-11-2019",
};
