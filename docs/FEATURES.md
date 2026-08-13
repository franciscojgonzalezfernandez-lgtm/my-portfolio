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

- Estado: review · Prioridad: P2
- AC:
  - [x] `better-auth-boilerplate-and-tradeoffs` presente en el sitemap servido
  - [x] El sitemap se deriva de `data/projects.data.ts`, no se edita a mano
  - [x] Un proyecto nuevo aparece en el sitemap sin tocar ningún fichero extra
- Notas: `app/sitemap.xml.tsx` no se emitía porque no es ninguna convención de Next: un route handler necesita `app/sitemap.xml/route.ts`, y la convención de metadata es `app/sitemap.ts`. Sustituido por `app/sitemap.ts` (`MetadataRoute.Sitemap`), que sí se prerenderiza a `out/sitemap.xml` bajo `output: "export"`. `public/sitemap.xml` borrado — si volviera, ganaría él (los ficheros de `public/` se copian sobre el output). Las rutas estáticas siguen listadas a mano en `STATIC_PATHS`; solo los proyectos son automáticos. Detectado en f-001.
- Pendiente (ticket propio): `STATIC_PATHS` puede desincronizarse en silencio. Ver f-008.

## f-008 — `STATIC_PATHS` del sitemap se puede desincronizar en silencio

- Estado: backlog · Prioridad: P2
- Depende de: f-003
- AC:
  - [ ] Añadir una ruta estática nueva bajo `app/` la mete en el sitemap sin editar `app/sitemap.ts`, **o** el build falla si `STATIC_PATHS` no cuadra con el árbol de rutas
- Notas: f-003 automatizó las rutas de proyecto pero dejó las estáticas (`""`, `about`, `portfolio`, `experience`, `contact`, `metrics`) a mano. Hoy cuadran una a una con los `page.tsx` de `app/`, pero nada lo comprueba: una página nueva (`/privacy`, `/terms`) se quedaría fuera del sitemap sin aviso. Salió en el review de f-003. Ojo al derivarlo del filesystem: hay que ignorar route groups, segmentos dinámicos y carpetas privadas, y `app/portfolio/[slug]` ya lo cubren los proyectos.

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

## f-006 — El deploy usa acciones sobre Node 20, ya deprecado

- Estado: review · Prioridad: P1
- AC:
  - [x] `.github/workflows/deploy.yml` sin acciones que targeteen Node 20
  - [x] `node-version` alineado con el Node local de desarrollo (24)
  - [x] El run de deploy en `main` termina sin el warning `Node.js 20 is deprecated`
- Notas: el run 31673603328 avisa `The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/checkout@v4, actions/setup-node@v4, actions/upload-artifact@v4, actions/deploy-pages@v4`. El runtime ya era Node 24 de facto; el bump solo lo hace explícito. Ver [deprecación de Node 20](https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/).
