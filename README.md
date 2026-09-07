<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Portfolio — Muhammad Arya Arjuna Habibullah

Personal portfolio for an independent security researcher from Jakarta. Includes an interactive 3D orbital lattice (Three.js), CVE / acknowledgment records, write-ups, and contact links.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config via `@config`)
- [Three.js](https://threejs.org) for the hero 3D scene (`components/scene`)
- [lucide-react](https://lucide.dev) icons

## Project structure

- `app/` — route pages + root layout & global styles
- `components/layout/` — Navbar, Footer, ScrollProgress
- `components/sections/` — page content sections
- `components/scene/` — Three.js hero scene (client-only, lazy loaded)
- `components/ui/` — shared UI primitives (SplitSection, SectionHeading, ArrowLink)
- `lib/` — data + site constants (`lib/data.ts`, `lib/site.ts`)

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Notes

- The 3D scene respects `prefers-reduced-motion`, pauses when off-screen, falls back to a static pattern when WebGL is unavailable, and adapts its density/pixel ratio on mobile.
- Theme follows `localStorage`, system preference, or a `?theme=light|dark` override.
