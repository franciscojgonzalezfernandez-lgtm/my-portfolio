import { Project } from "@/interfaces/project.interface";

export const CUSTOMER_PORTAL: Project = {
  slug: "customer-portal",
  title: "Kundenportal für Movistar-Kunden",
  projectType: "Beruflich",
  description:
    "Das Verwaltungsportal für Movistar-Kunden. Responsiv und in die MiMovistar-Anwendung eingebettet. Und vieles mehr – siehe Details!",
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
  fullDescription: `Dieses Projekt stellte eine der wichtigsten Innovationsinitiativen des Unternehmens dar: die Entwicklung des privaten Bereichs für alle Telekommunikationskunden nach mehreren Unternehmensfusionen. Die Hauptherausforderung bestand darin, Kundendaten aus verschiedenen Altsystemen und Datenbanken zu vereinheitlichen, was umfangreiche Normalisierungs- und Integrationsarbeit erforderte.


    Wir entwarfen eine Middleware-API-Schicht, um die Informationen zu standardisieren und ein einheitliches Kundenmodell zu definieren. Ich war direkt an der Gestaltung und Definition des API-Vertrags beteiligt und arbeitete iterativ mit dem Backend-Team zusammen, um Konsistenz, Sicherheit und Skalierbarkeit sicherzustellen.


    Parallel dazu leitete ich gemeinsam die Entwicklung der ersten React-Anwendung des Unternehmens. Wir arbeiteten eng mit den UX- und UI-Teams zusammen, um das Designsystem von Grund auf zu definieren, Prototypen in Figma und Adobe XD zu validieren und Barrierefreiheitsaudits mit Applause durchzuführen.


    Die Iterationen waren besonders anspruchsvoll, da es eine erhebliche Diskrepanz zwischen den UX-Erwartungen und den Backend-Beschränkungen gab. Meine Rolle bestand darin, zwischen beiden Teams zu vermitteln, um praktikable Lösungen zu finden, die Produktkonsistenz gewährleisteten und reale Kundenbedürfnisse erfüllten.


    Schließlich arbeiteten wir gemeinsam mit dem Infrastrukturteam daran, die Server richtig zu dimensionieren und bereitzustellen, wobei wir uns aufgrund der Sensibilität der betroffenen Daten für eine On‑Premise‑Bereitstellung entschieden. Auch das CI/CD‑Setup war komplex, da eine Authentifizierung gegenüber On‑Premise‑Maschinen und die Nutzung interner Unternehmenszertifikate für sichere Deployment‑Pipelines erforderlich war.
    `,
  videoUrl: "tcol.webm",
  releaseDate: "16-07-2021",
};
