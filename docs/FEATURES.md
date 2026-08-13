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

- Estado: done · Prioridad: P2
- AC:
  - [x] `better-auth-boilerplate-and-tradeoffs` presente en el sitemap servido
  - [x] El sitemap se deriva de `data/projects.data.ts`, no se edita a mano
  - [x] Un proyecto nuevo aparece en el sitemap sin tocar ningún fichero extra
- Notas: `app/sitemap.xml.tsx` no se emitía porque no es ninguna convención de Next: un route handler necesita `app/sitemap.xml/route.ts`, y la convención de metadata es `app/sitemap.ts`. Sustituido por `app/sitemap.ts` (`MetadataRoute.Sitemap`), que sí se prerenderiza a `out/sitemap.xml` bajo `output: "export"`. `public/sitemap.xml` borrado — si volviera, ganaría él (los ficheros de `public/` se copian sobre el output). Las rutas estáticas siguen listadas a mano en `STATIC_PATHS`; solo los proyectos son automáticos. Detectado en f-001.
- Pendiente (ticket propio): `STATIC_PATHS` puede desincronizarse en silencio. Ver f-008.
- PR #5, mergeada. Verificado en producción: `sitemap.xml` sirve 15 `<loc>` y 0 de `full-stack-calendar`.

## f-008 — `STATIC_PATHS` del sitemap se puede desincronizar en silencio

- Estado: backlog · Prioridad: P2
- Depende de: f-003
- AC:
  - [ ] Añadir una ruta estática nueva bajo `app/` la mete en el sitemap sin editar `app/sitemap.ts`, **o** el build falla si `STATIC_PATHS` no cuadra con el árbol de rutas
- Notas: f-003 automatizó las rutas de proyecto pero dejó las estáticas (`""`, `about`, `portfolio`, `experience`, `contact`, `metrics`) a mano. Hoy cuadran una a una con los `page.tsx` de `app/`, pero nada lo comprueba: una página nueva (`/privacy`, `/terms`) se quedaría fuera del sitemap sin aviso. Salió en el review de f-003. Ojo al derivarlo del filesystem: hay que ignorar route groups, segmentos dinámicos y carpetas privadas, y `app/portfolio/[slug]` ya lo cubren los proyectos.

## f-004 — El dark mode no está enchufado

- Estado: done · Prioridad: P2
- AC:
  - [x] Decidir: montar `ThemeProvider` en `app/layout.tsx` o borrar `components/theme-provider.tsx` y las variables `.dark` — **decisión del owner: borrar, el sitio es light-only**
  - [x] Si se monta: revisar contraste con la skill `impeccable`, incluido el botón scroll-to-top del footer (`bg-accent` es casi invisible en light) — N/A, no se monta
- Notas: borrados `components/theme-provider.tsx` y el bloque `.dark` de `app/globals.css`. **`@custom-variant dark (&:is(.dark *))` se queda a propósito**: los 43 `dark:` de los primitivos generados de `components/ui/` dependen de él, y sin él Tailwind v4 cae a su variante `dark` nativa por `prefers-color-scheme` y los encendería para visitantes con el SO en oscuro, contra tokens light-only. Verificado en el CSS emitido: 0 `prefers-color-scheme`, 0 `.dark{`, 35 selectores `:is(.dark *)` inertes. `next-themes` **sigue en dependencias** porque `components/ui/sonner.tsx` importa `useTheme`; ese primitivo no está montado en ninguna parte, así que borrarlo + quitar la dep es su propio ticket de limpieza de `components/ui/`. El botón scroll-to-top del footer sigue con `bg-accent` casi invisible en light — sigue abierto, ahora sin relación con el dark mode.
- PR #6, mergeada. El review verificó el claim del `@custom-variant` construyendo sin él: aparece `@media (prefers-color-scheme:dark)` y se encenderían 35 utilidades.

## f-005 — `npm run lint` está roto

- Estado: done · Prioridad: P2
- AC:
  - [x] O se instala eslint + config y el script pasa, o se borra el script — **decisión del owner: instalar**. `npm run lint` sale con 0 errores y 0 warnings
  - [x] `typescript.ignoreBuildErrors` revisado: hoy el build pasa con errores de tipos — **borrado**, el build ya falla con un type error (verificado metiendo uno a propósito)
- Notas: eslint 9 + `eslint-config-next` 16.0.7 en flat config (`eslint.config.mjs`). Next 16 eliminó `next lint`, así que el script sigue siendo `eslint .`. El baseline eran 13 findings; los de código propio están arreglados de verdad, no silenciados:
  - `components/metrics.tsx` llamaba a `Math.random()` en el render para 20 estrellas → posiciones distintas en el prerender y en el cliente, o sea hydration mismatch. Ahora es un PRNG mulberry32 con semilla fija a nivel de módulo: determinista y visualmente igual.
  - `CustomImage` recibía `alt` por el spread de props, lo que ocultaba el `<img>` a `jsx-a11y/alt-text`. Ahora `alt` es obligatorio en la interfaz y se pasa explícito; los 5 callers ya lo pasaban.
  - `exhaustive-deps` en `architecture.tsx` (`[architectures.length]`) y `language-switch.tsx` (`[setLanguage]`).
  - Silenciado con motivo: `components/ui/**` y `hooks/use-mobile.ts` (generado por shadcn, `CLAUDE.md` dice regenerar en vez de editar; `ui/sidebar.tsx`, único consumidor del hook, no está montado), y la regla `@next/next/no-img-element` (bajo `output: "export"` + `images.unoptimized` el patrón del repo son los HOCs `CustomImage`/`CustomVideo`, así que solo daría falsos positivos).
  - `tsconfig.tsbuildinfo` añadido a `.gitignore`: lo genera `tsc --noEmit` y ensuciaba `git status` en cada worktree.
- Pendiente (ticket propio): el workflow de deploy no ejecuta `npm run lint`, así que la puerta es local. Ver f-007.
- PR #7, mergeada. Rebasada sobre f-003 antes del merge: `app/sitemap.ts` entra en el scope del lint y pasa.

## f-006 — El deploy usa acciones sobre Node 20, ya deprecado

- Estado: done · Prioridad: P1
- AC:
  - [x] `.github/workflows/deploy.yml` sin acciones que targeteen Node 20
  - [x] `node-version` alineado con el Node local de desarrollo (24)
  - [x] El run de deploy en `main` termina sin el warning `Node.js 20 is deprecated`
- Notas: el run 31673603328 avisa `The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/checkout@v4, actions/setup-node@v4, actions/upload-artifact@v4, actions/deploy-pages@v4`. El runtime ya era Node 24 de facto; el bump solo lo hace explícito. Ver [deprecación de Node 20](https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/).

## f-007 — El deploy no ejecuta lint

- Estado: backlog · Prioridad: P2
- Depende de: f-005, f-006
- AC:
  - [ ] `.github/workflows/deploy.yml` ejecuta `npm run lint` antes del build
  - [ ] Un error de lint tumba el deploy
- Notas: desde f-005 `npm run lint` pasa limpio, así que enchufarlo a CI ya no arrastra deuda. No se metió en f-005 para no chocar con las PRs que ya tocaban ese fichero (f-006 y f-009).

## f-009 — Un re-run del workflow puede republicar un commit viejo sobre producción

- Estado: review · Prioridad: P0
- Depende de: f-006
- AC:
  - [x] Dos merges seguidos no cancelan ningún deploy
  - [x] Un re-run de un run cuyo commit ya no es el tip de `main` falla en vez de publicar
  - [x] El mensaje de error dice cuál es la alternativa correcta (`workflow_dispatch` sobre `main`)
- Notas: **incidente real, no hipotético.** f-001 escondió Full Stack Calendar y aun así el proyecto seguía en producción. Secuencia, sacada de la API de Actions y Deployments:
  1. `06:22:16` se mergea la PR #3 → push de `65be17f`, arranca el run `31673580686`.
  2. `06:22:38` se mergea la PR #2 (f-001) → push de `5c06af5`; con `cancel-in-progress: true` el run de `65be17f` se **cancela**.
  3. `06:24:45` `5c06af5` despliega bien: el calendario desaparece de producción.
  4. `~06:27:52` se hace **re-run** del run cancelado (`run_attempt=2`).
  5. `06:28:15` ese intento despliega **`65be17f`**, que es anterior a f-001 y todavía lleva `FULL_STACK_CALENDAR` en el array. `06:28:17` el deployment correcto pasa a `inactive`.
  → producción rueda hacia atrás en silencio. Confirmado: `git merge-base --is-ancestor 5cfb03a 65be17f` es falso.
  
  La clave es que **"Re-run jobs" reejecuta el commit al que estaba fijado el run, no el tip de `main`**. Un run cancelado parece algo que hay que reintentar, y reintentarlo es justo lo que rompe producción. `cancel-in-progress: false` quita el motivo para reintentar (los runs se encolan en orden de push, así que el último que publica es el más nuevo) y el step guarda la puerta para el caso manual. El guard solo corre si `github.run_attempt != '1'`: en el intento 1 el commit pusheado es el tip por definición.
  
  Probado en local contra el commit real del incidente: con `65be17f` sale `exit 1`; con el tip actual continúa.
