# PROGRESS.md — Changelog & Status

---

## Session 2 — March 21, 2026

### Completed This Session

- Production site confirmed live at `https://noahneriportfolio.vercel.app/`
- Repository state confirmed synced to GitHub remote `origin/main`
- Session docs updated to reflect live deployment status instead of pre-deploy state
- Root metadata updated to use the live Vercel URL as the site base
- Added framed hero headshot using a local asset in `public/images/headshots/`
- Added custom local cover art for all 3 project cards in `public/images/projects/`
- Ran `npm run build` successfully and verified production output

---

## Session 1 — March 12, 2026

### Completed This Session

**Foundation**
- Scaffolded Next.js 16.1.6 project with TypeScript, Tailwind v4, ESLint, App Router, src dir
- Installed: `framer-motion`, `clsx`, `tailwind-merge`, `lucide-react`
- Configured `globals.css`: Tailwind v4 imports, CSS custom properties (dark/light theme), dot grid background texture
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `src/lib/fonts.ts` — `next/font/local` for Cabinet Grotesk + Satoshi
- `src/types/index.ts` — all TypeScript interfaces: `Project`, `ResumeEntry`, `ResumeSection`, `Skill`, `MMAShowcaseData`, `WeightClassBreakdown`, `SamplePrediction`
- `src/app/layout.tsx` — root layout with fonts, full metadata, Open Graph tags, dark theme default
- Downloaded and self-hosted Cabinet Grotesk + Satoshi fonts to `public/fonts/`
- Resume PDF copied to `public/Noah_Neri_resume.pdf`

**Data Files**
- `src/data/projects.ts` — 3 seed projects (Prediction Market Directory, DuoLingo Campaign, MMA Model)
- `src/data/resume-data.ts` — full structured resume from updated PDF (Education, Experience, Leadership)
- `src/data/mma-showcase-data.ts` — placeholder stats, 8 sample fight predictions, methodology copy, weight class breakdown
- `src/data/skills-data.ts` — 7 skills with bento grid size hints

**Components — UI Primitives**
- `src/components/ui/ScrollReveal.tsx` — Framer Motion `whileInView` wrapper, configurable direction/delay, `prefers-reduced-motion` support
- `src/components/ui/SectionHeading.tsx` — accent rule + title + optional subtitle
- `src/components/ui/ProjectCard.tsx` — thumbnail (next/image), title, description, tag pills, link, letter fallback for missing images
- `src/components/ui/SkillTag.tsx` — bento grid cell with hover glow, size variants
- `src/components/ui/TimelineItem.tsx` — resume entry with timeline connector, bullet list, highlight badge
- `src/components/ui/StatsCard.tsx` — count-up animation stat display for MMA showcase

**Components — Layout**
- `src/components/layout/Navbar.tsx` — fixed/sticky, transparent → backdrop-blur on scroll, active section highlighting, mobile hamburger drawer
- `src/components/layout/Footer.tsx` — copyright + social icon links
- `src/components/layout/ThemeToggle.tsx` — sun/moon toggle, persists to localStorage

**Components — Sections**
- `src/components/sections/Hero.tsx` — full viewport, asymmetric layout, name animation, tagline, CTAs, social links
- `src/components/sections/About.tsx` — bio + skills bento grid with staggered scroll animation
- `src/components/sections/Projects.tsx` — data-driven grid from `projects.ts`, responsive 1→2→3 col, staggered reveal
- `src/components/sections/Resume.tsx` — vertical timeline, three groups (Education/Experience/Leadership), PDF download button
- `src/components/sections/Contact.tsx` — "Let's build something." CTA + contact pills (email, phone, LinkedIn)

**Components — Hero Background**
- `src/components/hero/MeshGradientCanvas.tsx` — Canvas 2D animated mesh gradient, 5-6 Lissajous-curve drifting radial gradient blobs, 30fps throttle, reduced-motion static fallback

**Hooks**
- `src/hooks/useActiveSection.ts` — IntersectionObserver for nav active state

**Pages**
- `src/app/page.tsx` — single-page site: Hero → About → Projects → Resume → Contact
- `src/app/projects/mma-fight-model/page.tsx` — MMA showcase sub-page: stats row, methodology, weight class bar chart (animated), sample predictions table, licensing note

**Docs**
- `README.md` — rewritten as front door with links to docs, quick start, how to add projects
- `CONTEXT.md` — full session memory file (created this session)
- `PROGRESS.md` — this file (created this session)
- `ROADMAP.md` — created this session

---

## Current Feature Status

| Feature | Status | Notes |
|---------|--------|-------|
| Hero section | ✅ Done | Animated canvas bg, name stagger, CTAs, social links, framed headshot |
| About / Skills bento | ✅ Done | 7 skills, bento grid layout |
| Projects grid | ✅ Done | Data-driven, 3 seed projects |
| Project thumbnails | ✅ Done | Local project cover art added for all 3 cards |
| Resume timeline | ✅ Done | Updated from new PDF (Mar 2026) |
| Resume PDF download | ✅ Done | Links to `public/Noah_Neri_resume.pdf` |
| MMA showcase page | ✅ Done | Stats, bar chart, predictions table, methodology |
| MMA real data | ❌ Placeholder | All stats are placeholder — needs real model output |
| Contact section | ✅ Done | Email, phone, LinkedIn pills |
| Navbar + mobile nav | ✅ Done | Hamburger drawer, active section highlighting |
| Footer | ✅ Done | Social links, copyright |
| Dark/light toggle | ✅ Done | Persists to localStorage |
| Responsive layout | ✅ Done | Mobile, tablet, desktop |
| SEO / OG tags | ✅ Done | In root layout |
| Framer Motion animations | ✅ Done | All scroll reveals, staggered cards, count-up stats |
| `prefers-reduced-motion` | ✅ Done | All animations respect it |
| `npm run build` | ✅ Verified | Production build passes locally |
| GitHub push | ✅ Done | Repo is connected to GitHub remote `origin/main` |
| Vercel deploy | ✅ Live | Production URL: `https://noahneriportfolio.vercel.app/` |
| Custom domain | ❌ Not started | — |

---

## Known Bugs / Issues

- **MMA showcase data is still placeholder** — accuracy metrics and sample stats still need to be replaced with real model output.
- **GPA discrepancy** — Original prompt said 3.28; resume PDF (March 2026) shows 3.34. Site uses 3.34 (correct value from PDF).
