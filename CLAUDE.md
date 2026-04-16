# Anna Bengaly — Portfolio Website

## Project Overview

Personal portfolio and résumé website for **Anna Luisa Bengaly**, UX/UI Product Designer based in Rio de Janeiro, Brazil. The site functions as her primary professional presence — showcasing projects, biography, and contact.

- **Behance**: https://www.behance.net/annabengaly
- **LinkedIn**: https://www.linkedin.com/in/anna-bengaly
- **Current role**: Stefanini Group
- **Status**: Available for full-time and remote opportunities

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, SSG) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Language | TypeScript |
| Font | Space Grotesk via `next/font/google` |
| Deploy | Vercel (connected to GitHub, auto-deploy on push) |
| Backend | None — fully static |

---

## Pages

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Home — hero, floating skill badges, brief bio, CTA |
| `/about` | `app/about/page.tsx` | About — expanded bio, skills, photo |
| `/portfolio` | `app/portfolio/page.tsx` | Projects grid from `projects.json` |

---

## Design System

Both modes share the same accent palette, typography, and shape rules. Only the neutral background changes.

> **Implementation order**: Light mode first. Dark mode is planned from the start and will be added via Tailwind's `dark:` variant and `next-themes`.

---

### Light Mode

Full spec: `design-system/light-mode/DESIGN.md`
Visual reference: `design-system/light-mode/light-mode-visual.png`
Aesthetic: **Neo-Brutalist Vibrant** — warm, bold, graphic

#### Colors

| Token | Hex | Usage |
|---|---|---|
| Primary / Lavender | `#d8b4fe` | Primary actions, badge backgrounds, accents |
| Secondary / Mint | `#98ffd9` | Supporting UI, section backgrounds |
| Tertiary / Deep Pink | `#ea4c88` | Highlights, decorative badges |
| Neutral Background | `#fdfcf0` | Page and card background (Warm Bone) |
| Black | `#000000` | All borders, shadows, body text, headings |

---

### Dark Mode

Full spec: `design-system/dark-mode/DESIGN.md`
Aesthetic: **Cyber-Geometric** — deep dark, electric accents, command-center feel

#### Colors

| Token | Hex | Usage |
|---|---|---|
| Primary / Electric Lavender | `#d8b4fe` | Primary actions, brand presence (same as light) |
| Secondary / Mint Neo | `#98ffd9` | Success states, secondary interactive elements (same as light) |
| Tertiary / Dystopian Pink | `#ea4c88` | Badges, notifications, decorative emphasis (same as light) |
| Neutral Base | `#121212` | All surfaces and background layers (True Dark) |
| Text / Borders | `#ffffff` | Body text, headings, borders, shadows in dark mode |

**Key difference from light mode**: Background swaps from `#fdfcf0` → `#121212`. Borders and shadows swap from `#000000` → `#ffffff`. Accent colors are identical.

---

### Shared Rules (both modes)

**Colors:**
- Accent colors (`#d8b4fe`, `#98ffd9`, `#ea4c88`) are **background fills only** — never as text color
- High-contrast text on all accent backgrounds (black in light, white in dark)
- No colors outside this palette in either mode

**Typography:**
- **Font**: Space Grotesk exclusively — headings, body, labels, captions
- **Display weight**: Black (900) for hero headlines
- **Heading weight**: Bold (700)
- **Body weight**: Regular (400)
- **Fluid hero**: `clamp(2.5rem, 8vw, 6rem)`

**Shape:**
- **Border radius: 0** — sharp 90° corners everywhere, no exceptions in either mode
- **Borders**: `border-2 border-black dark:border-white` (2px solid)
- **Shadows**: Solid offset only — `shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff]`
- **Hover shadow**: increases to `8px_8px` with `x: -4, y: -4` translate (Framer Motion)

---

## Hero Section

The hero has **two images** (left and right) flanking a centered headline. Currently using placeholders — final images will be provided by the user.

- Left image: `public/images/hero-left.png` (placeholder)
- Right image: `public/images/hero-right.png` (placeholder)
- On mobile: images are hidden, typography and badges carry the layout

---

## Project Data

Projects are stored locally in `src/data/projects.json` — **no Behance API integration** (API limits cover images only; descriptions not accessible). When Anna wants to add a project, she edits the JSON and pushes to GitHub — Vercel auto-deploys.

Raw data scraped from Behance is in `behance-projects.json` at the repo root (reference only).

### Anna's 6 Projects

| # | Title | Behance ID | Tags |
|---|---|---|---|
| 1 | Nutri Track — All-in-one Fitness & Nutrition App | 236877329 | UX, UI, Research, Case Study, Mobile, Fitness |
| 2 | Conecta Eventos App | 159766653 | App Design, Mobile, UX/UI |
| 3 | Smart Home | 114344793 | UI, UX, Interface |
| 4 | Paisagismo Digital | 109345211 | UI, UX, Interface |
| 5 | Virtual MED | 109343675 | UI, UX, Telemedicine |
| 6 | Fashi-on | 109341327 | UI, UX, Ecommerce, Mobile |

**Note**: Project descriptions are `null` in `behance-projects.json` — Anna will provide them manually before launch.

---

## Responsiveness

Responsiveness is **planned from the first component**, not retrofitted. Rules:
- Write base (mobile) styles first, scale up with `sm:`, `md:`, `lg:`, `xl:`
- Test at 375px, 768px, 1024px, 1280px from the start
- Floating badges become a horizontal scroll strip on mobile
- Hero images (`hidden lg:block`) are hidden on mobile — headline carries the layout
- Navigation: hamburger menu on mobile, horizontal links on desktop

---

## Key Architectural Decisions

- **No backend** — fully static site, no API routes needed
- **No Behance API** — projects are hardcoded in `src/data/projects.json`
- **No CMS** — low update frequency (every few months), JSON file is sufficient
- **SSG** — all pages are statically generated at build time
- **`next/image` everywhere** — Behance CDN domain added to `remotePatterns` in `next.config.ts`
- **Framer Motion** for all animations — floating badges, page transitions, scroll reveals, hover states
- **Space Grotesk** via `next/font/google` (self-hosted, zero layout shift)

---

## Project Structure (planned)

```
anna-portfolio-website/
├── CLAUDE.md
├── behance-projects.json          # Raw Behance data (reference)
├── design-system/
│   └── light-mode/
│       ├── DESIGN.md
│       └── light-mode-visual.png
├── public/
│   └── images/
│       ├── hero-left.png          # Placeholder (user will provide)
│       ├── hero-right.png         # Placeholder (user will provide)
│       └── projects/              # Project covers
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout, Space Grotesk, AnimatePresence
│   │   ├── page.tsx               # Home
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── ui/                    # Primitive components (Button, Badge, Card)
│   │   └── sections/              # Page sections (Hero, ProjectGrid, etc.)
│   ├── data/
│   │   └── projects.json          # Source of truth for portfolio
│   ├── lib/
│   │   ├── image-utils.ts         # getBlurDataURL helper
│   │   └── utils.ts               # cn() and shared utilities
│   └── types/
│       └── index.ts               # Project, shared types
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Relevant Skills

These skills are pre-loaded for this project. Reference them for patterns and decisions.

### User-created (global)

| Skill | When to use |
|---|---|
| `framer-motion-animations` | Floating badges, page transitions, scroll reveals, hover interactions |
| `responsive-design` | Any layout component, navbar, grid, breakpoint decisions |
| `a11y-accessibility` | Every component before marking done — contrast, semantics, keyboard |
| `nextjs-image-optimization` | Any `<Image>` usage, hero, project cards, external Behance CDN |

### ECC skills (relevant to this project)

| Skill | When to use |
|---|---|
| `ecc:nextjs-turbopack` | Next.js build, dev server, bundler config |
| `ecc:frontend-patterns` | Component composition, state, data fetching patterns |
| `ecc:frontend-design` | Visual design decisions, layout, motion direction |
| `ecc:design-system` | Translating design tokens into Tailwind config |
| `ecc:seo` | Meta tags, Open Graph, sitemap, robots.txt |
| `ecc:security-review` | Before any deploy — env vars, headers, no secrets in code |
| `ecc:git-workflow` | Commit conventions, branch strategy |
| `ecc:blueprint` | Project scaffolding, initial file setup |

---

## Relevant Agents

These agents are available and calibrated for this project.

### User-created (global)

| Agent | When to spawn |
|---|---|
| `nextjs-reviewer` | After writing/modifying any `page.tsx`, `layout.tsx`, or component — checks RSC vs client boundaries, metadata, `next/image`, routing conventions |
| `a11y-reviewer` | After writing/modifying any UI component — checks semantics, contrast against our palette, keyboard access, ARIA |
| `design-system-enforcer` | After writing/modifying any visual component — checks colors, no rounded corners, offset shadows only, Space Grotesk only |

### ECC agents (relevant to this project)

| Agent | When to spawn |
|---|---|
| `ecc:typescript-reviewer` | After writing any `.ts` / `.tsx` file — type safety, async correctness, React hook rules |
| `ecc:code-reviewer` | General quality review — readability, patterns, dead code |
| `ecc:security-reviewer` | Before any deploy — env vars, headers, no hardcoded secrets |
| `ecc:performance-optimizer` | After completing a page — Lighthouse score, bundle size, image loading |
| `ecc:e2e-runner` | Navigation flows between pages, contact form, project card interactions |
| `ecc:refactor-cleaner` | After a feature is complete — remove dead code, consolidate duplication |

---

## Standard Review Flow (per component)

After writing or significantly modifying a component, run these agents — they can be spawned in parallel:

1. `nextjs-reviewer` + `a11y-reviewer` + `design-system-enforcer` (parallel)
2. `ecc:typescript-reviewer` (sequential, after above pass)
3. `ecc:security-reviewer` (before any deploy)

---

## External References

- Design system visual: `design-system/light-mode/light-mode-visual.png`
- Behance profile: https://www.behance.net/annabengaly
- Design inspiration: NeoBrutalism — thick black borders, offset solid shadows, bold typography, no rounded corners
