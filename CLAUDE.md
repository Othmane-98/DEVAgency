# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Vite dev server on :8080
npm run build        # Vite production build
npm run lint         # ESLint check
npm run test         # Vitest single run
npm run test:watch   # Vitest watch mode
```

> **Note:** `package.json` has an unresolved git merge conflict (lines ~16–77). Resolve it before running commands.

## Architecture

This is a **Next.js 14 App Router** project serving as a web agency template platform — it showcases premium website demos for restaurant, hotel, and medical clinic clients.

### Dual-stack situation

The repo contains two coexisting build systems:
- `app/` — **Next.js 14 (primary)**: App Router, Server Components, `next/font`, `next-themes`
- `src/` — **Vite + React Router (legacy)**: appears unmaintained; do not add features here

The `vite.config.ts` and `next.config.mjs` both exist, but Next.js is the active runtime.

### Directory layout

| Path | Purpose |
|------|---------|
| `app/` | Next.js pages (App Router) |
| `app/templates/` | Template demo pages: `restaurant/`, `hotel/`, `medical/` |
| `components/templates/` | Section components per template (Hero, Menu, Gallery, etc.) |
| `components/layout/` | `Header.tsx`, `Footer.tsx` |
| `components/common/` | `Breadcrumbs`, `ThemeToggle`, `WhatsAppFloat` |
| `components/providers/` | `ThemeProvider` (next-themes) |
| `src/components/ui/` | shadcn/ui primitives (50+ components) — shared across both stacks |
| `src/lib/utils.ts` | `cn()` helper (clsx + tailwind-merge) |
| `public/` | Static assets |

### Missing critical file

`@/lib/site-config.ts` is imported by `Header.tsx`, `Footer.tsx`, and `app/layout.tsx` but does not exist. It must export:
- `navItems` — main navigation links
- `serviceNavLinks` — services dropdown
- `siteConfig` — site-wide metadata
- `getWhatsAppLink()` — WhatsApp contact URL builder

### Styling system

- Tailwind CSS with **HSL CSS variables** for theming (`--background`, `--foreground`, etc.)
- Dark mode via `class` strategy (toggled by `ThemeProvider`)
- shadcn/ui components consume the HSL variables — override via `tailwind.config.ts`

### Key technology choices

- **UI primitives:** Radix UI wrapped by shadcn/ui
- **Forms:** React Hook Form + Zod validation
- **Animations:** Framer Motion (v12)
- **Async data:** TanStack Query
- **Icons:** Lucide React
- **E2E tests:** Playwright (`playwright.config.ts`)

## Known issues (tracked in `A_REGLER.md`)

- Dead navigation links (`href="#"`) throughout
- Mobile overflow and typography sizing regressions
- Missing ARIA labels and focus states
- `any` types scattered across components — replace with proper interfaces
- No `sitemap.xml` or structured metadata on template pages
