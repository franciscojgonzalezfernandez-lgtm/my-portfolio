# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on :3000
npm run build    # static export -> ./out
npm run deploy   # gh-pages -d out (manual; CI normally handles deploy)
npx tsc --noEmit # the only way to catch type errors (see below)
```

- `npm run lint` is declared as `eslint .` but **eslint is not installed and there is no eslint config** — the script fails. Don't rely on it.
- There is no test framework in this repo.
- `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so `npm run build` passes with broken types. Run `npx tsc --noEmit` after type-level changes.

## Static export constraints

`next.config.mjs` sets `output: "export"` and `images.unoptimized: true`. Everything ships as static HTML to GitHub Pages (`.github/workflows/deploy.yml`, triggered on push to `main`).

Consequences that shape the whole codebase:
- No server runtime — no route handlers at request time, no server actions, no middleware, no ISR. `app/sitemap.xml.tsx` exports a `GET` that only runs at build time.
- Dynamic routes must enumerate params: `app/portfolio/[slug]/page.tsx` uses `generateStaticParams()` over `data/projects.data.ts`. A new project needs no route work, only a data entry.
- `next/image` is not used. Public assets go through the HOCs below so they get the base-path prefix.

## Asset handling — always use the HOCs

`components/high-order-components/CustomImage.tsx` and `CustomVideo.tsx` prefix `src` with `process.env.NEXT_PUBLIC_BASE_PATH` (needed for GitHub Pages subpath hosting) unless the src is absolute `http`. Use them instead of raw `<img>` / `<video>` for anything under `public/`.

`CustomVideo` also owns video analytics (play/pause/progress at 25/50/75/complete/unmute) and autoplays muted via IntersectionObserver at 0.25 threshold. Passing your own `onPlay`/`onPause`/etc. is fine — they're called after tracking.

## i18n — two systems, only one is real

**1. Zustand store (the one actually in use).** `stores/useLanguageStore.ts` holds `"german" | "english"`, **defaults to German**, persisted in `sessionStorage` under `portfolio-language`. ~14 components read it directly and branch. Two content shapes exist side by side:

- Separate files per language, passed as props: `data/hero.data.ts` + `data/hero.data.german.ts` → `<IntroCover data_english={...} data_german={...} />`.
- Sibling `*German` fields on one object: `Project.title` / `Project.titleGerman`, `Experience.achievements` / `achievementsGerman`.

Any new translatable content must follow one of these; there is no translation lookup at runtime.

**2. `lib/intl.ts` + `IntlProviderClient` + `i18n/{en,de}.json` (vestigial).** `app/layout.tsx` hardcodes `const locale = "en"` and reads the JSON with `fs` at build time. Only 4 keys exist and almost nothing consumes `useIntl()`. Don't add content here expecting the language switch to affect it — it won't.

## Data layer

`data/*.data.ts` are typed by `interfaces/*.interface.ts`. Project files live in `data/projects/*.project.data.ts`, each exporting one `Project` const, aggregated (order = display order) in `data/projects.data.ts`. That array feeds the portfolio grid, `/portfolio/[slug]` static params, per-project metadata, and the sitemap.

## Analytics

GA via `@next/third-parties/google`, id from `NEXT_PUBLIC_GA_ID` (`.env.local` is committed; the id is public by design). Both `<GoogleAnalytics>` and `<AnalyticsWrapper>` in `app/layout.tsx` are gated on that env var being present.

- Fire events through the typed helpers in `lib/analytics.ts` (`trackProjectClick`, `trackExternalClick`, `trackCvDownload`, `trackVideoEvent`), not raw `sendGAEvent`.
- `components/analytics-tracker.tsx` sends `page_view` manually on pathname/search change. It uses `useSearchParams`, so it **must** stay wrapped in `<Suspense>` — that's the sole reason `Analytics-wrapper.tsx` exists. Static export fails the build otherwise.
- `lib/analytics.ts` has a stray `import { url } from "inspector/promises"` (unused Node builtin in client code). Remove it if touching the file.

## Styling

- **Tailwind CSS v4**, configured inline via `@theme` in `app/globals.css`. There is no `tailwind.config.ts` — theme edits go in that file.
- **shadcn/ui**, new-york style, neutral base, CSS variables, lucide icons (`components.json`). Primitives in `components/ui/` are generated — prefer regenerating over hand-editing.
- Monochrome OKLCH palette. Glows must be `rgba(255,255,255,*)` in dark and `rgba(0,0,0,*)` in light.
- `--accent` is near-white in light mode (`oklch(0.97 0 0)`). Never use `bg-accent` / `border-accent` for anything that must stay visible in light mode — prefer `foreground/20` style tokens. (Known live instance: the footer scroll-to-top button.)
- Dark mode uses `@custom-variant dark (&:is(.dark *))`, but `components/theme-provider.tsx` is **not mounted in `app/layout.tsx`** — nothing ever adds the `.dark` class. Dark styles are currently dead code; wiring the provider into the layout is what turns them on.

## Animation

Use `motion/react` (package `motion` v12). **Never import `framer-motion`.**

```ts
ease: [0.16, 1, 0.3, 1]                    // project-standard easing
initial: { opacity: 0, y: 20-40 }          // entrance from below
duration: 0.45-0.65
staggerChildren: 0.08-0.12                 // lists
delayChildren: 0.05-0.15
viewport={{ once: true, amount: 0.2 }}     // scroll trigger
```

Section components (`hero`, `portfolio`, `experience`, `metrics`, `about`, `contact`, `architecture`) are all `"use client"` and follow this vocabulary; match it rather than introducing new curves.

## Language of authored content

The site copy is English + German. Existing code comments are a mix of Spanish and English.
