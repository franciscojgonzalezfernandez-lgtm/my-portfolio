import { Project } from "@/interfaces/project.interface";

export const BETTER_AUTH_SHOWCASE: Project = {
  slug: "better-auth-boilerplate-and-tradeoffs",
  title: "Better Auth - Next.js Showcase",
  titleGerman: "Better Auth - Next.js Showcase",
  projectType: "Didactic",
  description:
    "A production-grade Next.js 15 authentication boilerplate that teaches modern auth patterns through a side-by-side client vs server contrast.",
  descriptionGerman:
    "Ein produktionsreifes Next.js 15 Authentifizierungs-Boilerplate, das moderne Auth-Muster durch einen direkten Client-vs-Server-Vergleich vermittelt.",
  images: [
    "/better-auth-cover.webp",
    "/better-auth-arch.webp",
    "/better-auth-unauthorized.webp",
  ],
  tags: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "better-auth",
    "Prisma",
    "Neon",
    "PostgreSQL",
    "OAuth2",
    "GitHub OAuth",
    "Google OAuth",
    "Resend",
    "Tailwind CSS v4",
    "Server Actions",
    "RSC",
    "Edge Runtime",
    "Turbopack",
    "Vercel",
    "MIT",
  ],
  fullDescription: `<strong>Open source teaching boilerplate</strong> built end-to-end to make the tradeoffs between client-side and server-side authentication viscerally clear — two identical-looking dashboards, two completely different mechanics.

    <h3 className="text-xl"><strong>My Role</strong></h3>
    - <strong>Sole author</strong>: architecture, code, schema, deployment, and docs
    - Designed the <strong>pedagogical contrast</strong>: client <code>useSession()</code> + <code>router.replace()</code> vs server <code>auth.api.getSession()</code> + <code>unauthorized()</code> interrupt
    - Wired Prisma to Neon via the <strong>HTTP adapter</strong> (<code>@prisma/adapter-neon</code>) for Edge/serverless compatibility
    - Implemented email/password + GitHub + Google OAuth via <strong>better-auth</strong>
    - Added <strong>Resend</strong>-backed email verification with <code>autoSignInAfterVerification</code>
    - Patched <strong>React Server Components CVE</strong> vulnerabilities (security hardening pass)
    - Authored <code>CLAUDE.md</code> + <code>README.md</code> + <code>.env.template</code> so anyone can clone, configure, and run

    <h3 className="text-xl"><strong>Technical Highlights</strong></h3>
    - <strong>No <code>middleware.ts</code> by design</strong> — each protected route owns its session check, exposing the real cost/benefit tradeoff
    - <strong>Catch-all auth route</strong> at <code>/api/auth/[...all]</code> handles every better-auth HTTP call in 4 lines
    - <strong>experimental.authInterrupts</strong> enabled — <code>unauthorized()</code> throws a real HTTP 401 from RSC, renders <code>app/unauthorized.tsx</code> in place, preserves the URL, zero client flash
    - <strong>Server Actions</strong> for sign-out, multi-session revoke, and profile updates with <code>revalidatePath()</code>
    - <strong>Turbopack</strong> for both <code>dev</code> and <code>build</code>
    - <strong>Prisma schema</strong> with cascading deletes, FK indexes, unique constraints on email + token

    <h3 className="text-xl"><strong>Challenges Solved</strong></h3>
    - Two routes that <strong>look identical but behave oppositely</strong> — kept both in sync visually via a shared <code>UnauthorizedScreen</code> component
    - <strong>Neon HTTP driver vs TCP pitfall</strong>: <code>@prisma/client</code> alone silently falls back to TCP and breaks in Edge runtimes — fixed by mandating the adapter in the singleton
    - <strong>Resend sandbox gotcha</strong>: <code>onboarding@resend.dev</code> only delivers to the registered email — documented as a teaching point
    - <strong>Session truth boundary</strong>: enforced "better-auth is the only source of session truth" — no <code>localStorage</code> drift, no spoofable client state

    <h3 className="text-xl"><strong>Expertise Shown</strong></h3>
    ✅ Mastery of the <strong>Next.js 15 App Router</strong> — RSC, Server Actions, route interceptors, <code>experimental.authInterrupts</code>
    ✅ Deep understanding of <strong>auth tradeoffs</strong>: client hooks vs server session resolution, 200 vs 401, URL preservation, content leak windows
    ✅ <strong>Edge/serverless database patterns</strong> with Neon's HTTP driver + Prisma adapter
    ✅ <strong>Security awareness</strong>: CVE remediation, env validation, no client-side auth state
    ✅ <strong>Teaching through code</strong>: deliberate architectural contrasts, embedded docs, MIT-licensed reusable seed`,
  fullDescriptionGerman: `<strong>Open-Source-Lern-Boilerplate</strong>, von Grund auf gebaut, um die Trade-offs zwischen client- und serverseitiger Authentifizierung greifbar zu machen — zwei optisch identische Dashboards, zwei komplett unterschiedliche Mechaniken.

    <h3 className="text-xl"><strong>Meine Rolle</strong></h3>
    - <strong>Alleiniger Autor</strong>: Architektur, Code, Schema, Deployment und Doku
    - Design des <strong>pädagogischen Kontrasts</strong>: client <code>useSession()</code> + <code>router.replace()</code> vs server <code>auth.api.getSession()</code> + <code>unauthorized()</code>-Interrupt
    - Prisma über den <strong>HTTP-Adapter</strong> (<code>@prisma/adapter-neon</code>) an Neon angebunden — Edge/Serverless-kompatibel
    - E-Mail/Passwort + GitHub + Google OAuth über <strong>better-auth</strong> implementiert
    - <strong>Resend</strong>-basierte E-Mail-Verifizierung mit <code>autoSignInAfterVerification</code> hinzugefügt
    - <strong>React Server Components CVE</strong>-Schwachstellen gepatcht (Security-Härtung)
    - <code>CLAUDE.md</code> + <code>README.md</code> + <code>.env.template</code> verfasst, damit jeder klonen, konfigurieren und starten kann

    <h3 className="text-xl"><strong>Technische Highlights</strong></h3>
    - <strong>Bewusst kein <code>middleware.ts</code></strong> — jede geschützte Route übernimmt ihren eigenen Session-Check und macht den Trade-off sichtbar
    - <strong>Catch-all Auth-Route</strong> unter <code>/api/auth/[...all]</code> deckt sämtliche better-auth HTTP-Aufrufe in 4 Zeilen ab
    - <strong>experimental.authInterrupts</strong> aktiviert — <code>unauthorized()</code> wirft echten HTTP 401 aus dem RSC, rendert <code>app/unauthorized.tsx</code> in-place, URL bleibt erhalten, kein Client-Flash
    - <strong>Server Actions</strong> für Sign-out, Multi-Session-Revoke und Profil-Updates mit <code>revalidatePath()</code>
    - <strong>Turbopack</strong> für <code>dev</code> und <code>build</code>
    - <strong>Prisma-Schema</strong> mit Cascading Deletes, FK-Indizes, Unique Constraints auf E-Mail + Token

    <h3 className="text-xl"><strong>Gelöste Herausforderungen</strong></h3>
    - Zwei Routen, die <strong>identisch aussehen, aber gegensätzlich funktionieren</strong> — visuell synchron über eine geteilte <code>UnauthorizedScreen</code>-Komponente
    - <strong>Neon-HTTP- vs TCP-Falle</strong>: <code>@prisma/client</code> allein fällt still auf TCP zurück und bricht in Edge-Runtimes — durch verpflichtenden Adapter im Singleton gelöst
    - <strong>Resend-Sandbox-Falle</strong>: <code>onboarding@resend.dev</code> liefert nur an die registrierte E-Mail — als Lernpunkt dokumentiert
    - <strong>Session-Wahrheitsgrenze</strong>: "better-auth ist die einzige Quelle der Session-Wahrheit" durchgesetzt — kein <code>localStorage</code>-Drift, kein spoofbarer Client-Zustand

    <h3 className="text-xl"><strong>Gezeigte Expertise</strong></h3>
    ✅ Beherrschung des <strong>Next.js 15 App Routers</strong> — RSC, Server Actions, Route-Interceptors, <code>experimental.authInterrupts</code>
    ✅ Tiefes Verständnis der <strong>Auth-Trade-offs</strong>: Client-Hooks vs Server-Session, 200 vs 401, URL-Erhalt, Content-Leak-Fenster
    ✅ <strong>Edge/Serverless-Datenbank-Muster</strong> mit Neons HTTP-Treiber + Prisma-Adapter
    ✅ <strong>Security-Bewusstsein</strong>: CVE-Behebung, Env-Validierung, kein clientseitiger Auth-Zustand
    ✅ <strong>Lehren durch Code</strong>: bewusste architektonische Kontraste, eingebettete Docs, MIT-lizenzierter wiederverwendbarer Seed`,
  videoUrl: "/demo-better-auth.webm",
  gitHubUrl:
    "https://github.com/franciscojgonzalezfernandez-lgtm/react-nextjs-better-auth-showcase",
  externalUrl: "https://react-nextjs-better-auth-showcase.vercel.app/",
  releaseDate: "12-05-2026",
};
