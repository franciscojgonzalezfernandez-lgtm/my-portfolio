# FEATURES — Web Portfolio

Backlog vivo. **Fuente de verdad del scope por ticket.** Sin ticket aquí, no se delega a un subagente.

Formato en [`WORKFLOW.md`](./WORKFLOW.md) §"Formato de ticket". Estados: `backlog | in-progress | review | done | blocked`.

---

## f-001 — Ocultar el proyecto Full Stack Calendar

- Estado: review · Prioridad: P1
- AC:
  - [x] `FULL_STACK_CALENDAR` fuera del array `projects`
  - [x] Sin card en `/portfolio` y sin página `/portfolio/full-stack-calendar` en `out/`
  - [x] Sin links muertos: fuera de `relatedProjects` en `data/experiences.data.ts`
  - [x] Fuera de `public/sitemap.xml`
  - [x] `data/projects/FullStackCalendar.data.ts` y los assets `/public/calendar-*` intactos, para poder restaurarlo
- Notas: PR #2. Restaurar = volver a añadir la entrada al array de `data/projects.data.ts`.

## f-002 — Documentación de proyecto + workflow con agentes

- Estado: review · Prioridad: P1
- AC:
  - [x] `CLAUDE.md` describe las constraints reales del export estático
  - [x] Ritual de git (worktrees, commits `Qué/Por qué/Cómo verificar/Refs`, PRs) documentado
  - [x] Loop de subagentes documentado en `docs/WORKFLOW.md`
  - [x] `AGENTS.md` como puntero fino, sin convenciones propias
- Notas: portado de `snowboard-booking-platform`.

## f-003 — `public/sitemap.xml` se mantiene a mano y ya está desincronizado

- Estado: review · Prioridad: P2
- AC:
  - [x] `better-auth-boilerplate-and-tradeoffs` presente en el sitemap servido
  - [x] El sitemap se deriva de `data/projects.data.ts`, no se edita a mano
  - [x] Un proyecto nuevo aparece en el sitemap sin tocar ningún fichero extra
- Notas: `app/sitemap.xml.tsx` no se emitía porque no es ninguna convención de Next: un route handler necesita `app/sitemap.xml/route.ts`, y la convención de metadata es `app/sitemap.ts`. Sustituido por `app/sitemap.ts` (`MetadataRoute.Sitemap`), que sí se prerenderiza a `out/sitemap.xml` bajo `output: "export"`. `public/sitemap.xml` borrado — si volviera, ganaría él (los ficheros de `public/` se copian sobre el output). Las rutas estáticas siguen listadas a mano en `STATIC_PATHS`; solo los proyectos son automáticos. Detectado en f-001.

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
