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

- Estado: backlog · Prioridad: P2
- AC:
  - [ ] `better-auth-boilerplate-and-tradeoffs` presente en el sitemap servido
  - [ ] El sitemap se deriva de `data/projects.data.ts`, no se edita a mano
  - [ ] Un proyecto nuevo aparece en el sitemap sin tocar ningún fichero extra
- Notas: `app/sitemap.xml.tsx` ya existe pero **no se emite** bajo `output: "export"` — el que se sirve es el estático de `public/`. Detectado en f-001.

## f-004 — El dark mode no está enchufado

- Estado: review · Prioridad: P2
- AC:
  - [x] Decidir: montar `ThemeProvider` en `app/layout.tsx` o borrar `components/theme-provider.tsx` y las variables `.dark` — **decisión del owner: borrar, el sitio es light-only**
  - [x] Si se monta: revisar contraste con la skill `impeccable`, incluido el botón scroll-to-top del footer (`bg-accent` es casi invisible en light) — N/A, no se monta
- Notas: borrados `components/theme-provider.tsx` y el bloque `.dark` de `app/globals.css`. **`@custom-variant dark (&:is(.dark *))` se queda a propósito**: los 43 `dark:` de los primitivos generados de `components/ui/` dependen de él, y sin él Tailwind v4 cae a su variante `dark` nativa por `prefers-color-scheme` y los encendería para visitantes con el SO en oscuro, contra tokens light-only. Verificado en el CSS emitido: 0 `prefers-color-scheme`, 0 `.dark{`, 35 selectores `:is(.dark *)` inertes. `next-themes` **sigue en dependencias** porque `components/ui/sonner.tsx` importa `useTheme`; ese primitivo no está montado en ninguna parte, así que borrarlo + quitar la dep es su propio ticket de limpieza de `components/ui/`. El botón scroll-to-top del footer sigue con `bg-accent` casi invisible en light — sigue abierto, ahora sin relación con el dark mode.

## f-005 — `npm run lint` está roto

- Estado: backlog · Prioridad: P2
- AC:
  - [ ] O se instala eslint + config y el script pasa, o se borra el script
  - [ ] `typescript.ignoreBuildErrors` revisado: hoy el build pasa con errores de tipos
- Notas: `package.json` declara `"lint": "eslint ."` pero eslint no está en dependencias y no hay config.
