# FEATURES — Web Portfolio

Backlog vivo. **Fuente de verdad del scope por ticket.** Sin ticket aquí, no se delega a un subagente.

Formato en [`WORKFLOW.md`](./WORKFLOW.md) §"Formato de ticket". Estados: `backlog | in-progress | review | done | blocked`.

---

## f-001 — Ocultar el proyecto Full Stack Calendar

- Estado: done · Prioridad: P1
- AC:
  - [x] `FULL_STACK_CALENDAR` fuera del array `projects`
  - [x] Sin card en `/portfolio` y sin página `/portfolio/full-stack-calendar` en `out/`
  - [x] Sin links muertos: fuera de `relatedProjects` en `data/experiences.data.ts`
  - [x] Fuera de `public/sitemap.xml`
  - [x] `data/projects/FullStackCalendar.data.ts` y los assets `/public/calendar-*` intactos, para poder restaurarlo
- Notas: PR #2, mergeada. Restaurar = volver a añadir la entrada al array de `data/projects.data.ts`.

## f-002 — Documentación de proyecto + workflow con agentes

- Estado: done · Prioridad: P1
- AC:
  - [x] `CLAUDE.md` describe las constraints reales del export estático
  - [x] Ritual de git (worktrees, commits `Qué/Por qué/Cómo verificar/Refs`, PRs) documentado
  - [x] Loop de subagentes documentado en `docs/WORKFLOW.md`
  - [x] `AGENTS.md` como puntero fino, sin convenciones propias
- Notas: PR #3, mergeada. Portado de `snowboard-booking-platform`.

## f-003 — `public/sitemap.xml` se mantiene a mano y ya está desincronizado

- Estado: backlog · Prioridad: P2
- AC:
  - [ ] `better-auth-boilerplate-and-tradeoffs` presente en el sitemap servido
  - [ ] El sitemap se deriva de `data/projects.data.ts`, no se edita a mano
  - [ ] Un proyecto nuevo aparece en el sitemap sin tocar ningún fichero extra
- Notas: `app/sitemap.xml.tsx` ya existe pero **no se emite** bajo `output: "export"` — el que se sirve es el estático de `public/`. Detectado en f-001.

## f-004 — El dark mode no está enchufado

- Estado: backlog · Prioridad: P2
- AC:
  - [ ] Decidir: montar `ThemeProvider` en `app/layout.tsx` o borrar `components/theme-provider.tsx` y las variables `.dark`
  - [ ] Si se monta: revisar contraste con la skill `impeccable`, incluido el botón scroll-to-top del footer (`bg-accent` es casi invisible en light)
- Notas: hoy nada añade la clase `.dark`, así que todo el bloque `.dark` de `app/globals.css` es código muerto.

## f-005 — `npm run lint` está roto

- Estado: backlog · Prioridad: P2
- AC:
  - [ ] O se instala eslint + config y el script pasa, o se borra el script
  - [ ] `typescript.ignoreBuildErrors` revisado: hoy el build pasa con errores de tipos
- Notas: `package.json` declara `"lint": "eslint ."` pero eslint no está en dependencias y no hay config.

## f-006 — El deploy usa acciones sobre Node 20, ya deprecado

- Estado: review · Prioridad: P1
- AC:
  - [x] `.github/workflows/deploy.yml` sin acciones que targeteen Node 20
  - [x] `node-version` alineado con el Node local de desarrollo (24)
  - [x] El run de deploy en `main` termina sin el warning `Node.js 20 is deprecated`
- Notas: el run 31673603328 avisa `The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/checkout@v4, actions/setup-node@v4, actions/upload-artifact@v4, actions/deploy-pages@v4`. El runtime ya era Node 24 de facto; el bump solo lo hace explícito. Ver [deprecación de Node 20](https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/).
