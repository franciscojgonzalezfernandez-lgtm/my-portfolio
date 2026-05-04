# Portfolio Website — Notas de Arquitectura

## Stack

- **Next.js 16** (React 19) — estructura `app/` router
- **Tailwind CSS v4** — configuración inline via `@theme` en `app/globals.css` (no hay `tailwind.config.ts`)
- **motion/react v12** — import: `from "motion/react"` (NO `framer-motion`)
- **ShadcnUI** — componentes en `components/ui/`
- **Zustand** — estado de idioma en `stores/useLanguageStore.ts`
- **i18n manual** — inglés/alemán via props `data_english` / `data_german` o ternarios `language == "english"`

## Patrones de animación establecidos

```ts
// Easing estándar del proyecto (usar siempre este)
ease: [0.16, 1, 0.3, 1]

// Entrada desde abajo
initial: { opacity: 0, y: 20-40 }
animate: { opacity: 1, y: 0 }
duration: 0.45-0.65s

// Stagger en listas
staggerChildren: 0.08-0.12
delayChildren: 0.05-0.15

// Viewport trigger
viewport={{ once: true, amount: 0.2 }}
```

## Componentes principales

| Componente | Sección | Animaciones |
|---|---|---|
| `hero.tsx` | Home hero | Slide-in desde x ±60 al cargar |
| `portfolio.tsx` | Portfolio grid | Stagger entrada + shine hover |
| `experience.tsx` | Experiencia | Stagger + spring en project badges |
| `metrics.tsx` | Lighthouse scores | Rocket launch + shine hover |
| `CustomCertifications.tsx` | About > certs | Shine hover |
| `about.tsx` | About | Fade-in en título, video, texto, skills |
| `contact.tsx` | Contacto | Micro-animaciones en botones |
| `tech-carousel.tsx` | Carrusel | `animate-pulse` Tailwind |
| `architecture.tsx` | Arquitecturas | Carrusel Embla |
| `header.tsx` | Navegación | Subrayado con gradiente al hover |
| `footer.tsx` | Pie de página | Subrayado con gradiente al hover |

## Colores (OKLCH)

- `--background`: blanco / negro profundo en dark
- `--foreground`: negro / blanco en dark  
- `--accent`: casi blanco en light (`oklch(0.97 0 0)`) — OJO: invisible como borde en light mode
- `--border`: gris muy claro en light
- Paleta monochromática — los glows deben ser `rgba(255,255,255,*)` en dark, `rgba(0,0,0,*)` en light

## Issues corregidos

- `border-l-accent` en Experience cards → cambiado a `border-l-foreground/20` (visible en ambos modos)
- Tags `+N more` en Portfolio → cambiado a `bg-foreground text-background` (compatible con temas)

## Issues pendientes / a vigilar

- `bg-accent` en el botón scroll-to-top del footer: en light mode `accent ≈ blanco`, el botón es casi invisible

## Estructura de datos

```
data/
├── projects.data.ts          # Array de proyectos con slug, images[], tags[]
├── projects/*.data.ts         # Datos individuales de cada proyecto
├── experiences.data.ts        # Trabajos con achievements[], relatedProjects[]
├── certifications.data.ts     # Certs con driveUrl, type, title, issuer
├── hero.data.ts               # Datos del hero (título, subtítulo, CTA)
└── metrics.data.ts            # Textos de la página de métricas
```

## Comandos

```bash
cd /Users/javi/Desktop/React-Projects/portfolio-website
npm run dev    # Puerto 3000
npm run build
```
