# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Project docs:**
- [`AGENTS.md`](AGENTS.md) — thin pointer to this file for Codex/other agents (never define conventions there).
- [`docs/FEATURES.md`](docs/FEATURES.md) — living backlog, source of truth for ticket scope.
- [`docs/WORKFLOW.md`](docs/WORKFLOW.md) — subagent loop + per-feature verification.

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
- Monochrome OKLCH palette. Glows are `rgba(0,0,0,*)` — the site renders in light mode only (see below).
- `--accent` is near-white (`oklch(0.97 0 0)`). Never use `bg-accent` / `border-accent` for anything that must stay visible — prefer `foreground/20` style tokens. (Known live instance: the footer scroll-to-top button.)
- **The site is light-only (f-004).** There is no `ThemeProvider` and no `.dark` token block; nothing ever adds the `.dark` class. Only `:root` tokens exist, so style against those and don't add `dark:` variants to first-party components.
- `@custom-variant dark (&:is(.dark *))` **stays in `app/globals.css` on purpose — do not delete it.** The generated shadcn primitives in `components/ui/` ship 43 `dark:` utilities. The custom variant compiles them to `:is(.dark *)` selectors that never match, keeping them inert. Remove it and Tailwind v4 falls back to its built-in `prefers-color-scheme` dark variant, which switches all of them on for OS-dark visitors against light-only tokens. Verified in the emitted CSS: with the variant, 0 `prefers-color-scheme` rules; without it, the media query appears.

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

---

## Git workflow

**Merge to `main` deploys to production.** `.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. There is no staging environment and no preview deploy — the diff and the local `out/` are the only review surface. Never push straight to `main`.

**Worktree per ticket.** Each ticket lives in its own sibling worktree cut from `origin/main`:

```
git fetch origin
git worktree add -b f-XXX-kebab-slug ../my-web-portfolio-nextjs.f-XXX origin/main
cd ../my-web-portfolio-nextjs.f-XXX && npm install
```

`.env.local` is committed here, so unlike the booking platform there is nothing gitignored to seed — but `node_modules` is per-worktree and `npm install` is required before `tsc`/`build` will run. Don't `checkout` a branch in the primary worktree except for trivial meta-doc edits.

After merge: `git worktree remove ../my-web-portfolio-nextjs.f-XXX && git branch -d f-XXX-kebab-slug` (`-D` if the PR was squash-merged). At session start, run `git worktree list` and drop any worktree whose branch is merged and whose status is clean.

**Descriptive commits.** Every commit must read on its own. No `wip`, no `update X`, no `fixes`.

**Subject (≤72 chars):** `tipo(f-XXX): verb + concrete object + short motivation`
- Good: `chore(f-001): hide Full Stack Calendar project from the public site`
- Bad: `update projects`, `f-001 changes`

**Body (mandatory):**
```
Qué:
- <files/modules touched and what changed>

Por qué:
- <business or technical motivation>

Cómo verificar:
- <manual steps / command / "N/A: refactor">

Refs: f-XXX
```

Trivial commits (typo, mechanical rename) may carry a one-line body, but the `Refs:` footer with the ticket is always mandatory. Stage explicitly per file or folder — **never `git add -A`** (`.claude/` and `tsconfig.tsbuildinfo` are untracked and not gitignored; a blind `add -A` commits them).

**Before every PR to `main`:**

- [ ] Branch is `f-XXX-kebab-slug` cut from an up-to-date `main` — no piggybacking on a previous ticket's branch.
- [ ] PR opened against `main`, titled `feat(f-XXX): …` / `chore(f-XXX): …` / `docs(f-XXX): …`.
- [ ] `npx tsc --noEmit` clean and `npm run build` green — the build alone proves nothing, it ignores type errors.
- [ ] If the ticket touched routes or `data/projects.data.ts`: inspected `out/` directly, not just the route list `next build` prints (it truncates with `[+N more paths]`).
- [ ] If it touched UI: reviewed with the `impeccable` skill, in both languages.
- [ ] Ticket in `docs/FEATURES.md` moved to `review` (or `done`).

## Agent workflow

Full spec in [`docs/WORKFLOW.md`](docs/WORKFLOW.md). In short: `caveman:cavecrew-investigator` to locate, `Plan` to design (never edits), `caveman:cavecrew-builder` for 1-2 file edits, `caveman:cavecrew-reviewer` on the diff before any PR. No ticket in `FEATURES.md` → no delegation; the ticket is the scope.

Two rules that matter most here:
- Changes to conventions (this file) are their own ticket, never a side effect of a feature.
- Give the reviewer the static-export context explicitly. Without it, it can't know that `public/sitemap.xml` is what ships and `app/sitemap.xml.tsx` is not.
