# PROGRESS.md — Changelog & Status

---

## 2026-03-26 — Session 4

### Completed This Session

**Project card replacement: Duolingo → Blockchain at USC**
- Removed the `duolingo-campaign` project object from `src/data/projects.ts`
- Added `blockchain-usc-website` in its place:
  - Title: "Blockchain at USC — Website Revamp"
  - Description calls out Google Stitch + Variant for UI design and Claude Code for the build
  - Tags: `Claude Code`, `AI Development`, `Next.js`, `UI Design`
  - Links to `https://www.blockchainatusc.com`, `linkType: "external"`, `featured: true`
- Created `public/images/projects/blockchain-usc.svg` as cover art (subsequently replaced by a live screenshot — now a dead asset)

**MMA model link update**
- Changed `linkType` from `"showcase"` → `"external"`
- Changed `link` from `"/projects/mma-fight-model"` → `"https://2nattypicks.vercel.app/"`
- The internal showcase page at `src/app/projects/mma-fight-model/page.tsx` is now orphaned (still exists, not linked)

**Live site screenshots for all project thumbnails**
- Took Playwright screenshots of all 3 live sites at `1600×900`, JPEG quality 90:
  - `prediction-market.jpg` (141 KB) — `https://prediction-market-directory.vercel.app/`
  - `blockchain-usc.jpg` (117 KB) — `https://www.blockchainatusc.com`
  - `mma-model.jpg` (41 KB) — `https://2nattypicks.vercel.app/`
- Updated all `thumbnail` paths in `src/data/projects.ts` from `.svg` → `.jpg`
- All 3 previous SVG cover assets are now dead (`prediction-market.svg`, `duolingo-campaign.svg`, `mma-model.svg`, `blockchain-usc.svg`)

**ProjectCard.tsx fix**
- Changed `unoptimized={project.thumbnail.endsWith(".svg")}` → `unoptimized={false}`
- All thumbnails are now JPEG and go through Next.js image optimization normally

**Documentation rewrite**
- Rewrote `README.md`, `CONTEXT.md`, `PROGRESS.md`, `ROADMAP.md` to reflect Session 4 state

### Implementation Decisions Made This Session

- **Replace vs. add:** Noah explicitly chose to replace Duolingo (not add a 4th card). Rationale: the Blockchain rebuild is a stronger "I ship product" signal than a marketing pitch deck.
- **External link for MMA model:** The project card now links to the live picks site rather than the internal showcase page — the showcase page becomes an orphan.
- **Live screenshots over custom SVGs:** Actual site previews are more compelling than generated artwork; Playwright at 1600×900 gives clean above-the-fold captures.

### Trade-Offs Accepted This Session

- The old SVG cover art assets remain on disk as dead files (intentional — no cleanup needed right now)
- The MMA showcase sub-page at `/projects/mma-fight-model` is still in the codebase but no longer reachable from the main navigation

### Not Yet Pushed

- Session 4 changes are uncommitted as of the doc rewrite. Need to commit and push to `main` before the next session.

---

## 2026-03-23 — Session 3

### Completed This Session

**Portfolio imagery refresh**
- Added a real hero headshot asset at `public/images/headshots/noah-neri-headshot.jpeg`
- Refactored `src/components/sections/Hero.tsx` into a responsive two-column hero with the portrait frame on the right side of the landing section
- Kept the hero eyebrow as `Builder · USC Marshall · Class of '26`
- Removed the bottom hero-frame panel containing `Operating Mode` and `shipping product fast` after review

**Project card imagery**
- Added custom local project cover art at:
  - `public/images/projects/prediction-market.svg`
  - `public/images/projects/duolingo-campaign.svg`
  - `public/images/projects/mma-model.svg`
- Updated `src/data/projects.ts` so all 3 project cards pointed to real local assets
- Updated `src/components/ui/ProjectCard.tsx` so the gray fallback letters only show on actual image failure
- Removed the visible gray `P`, `D`, and `M` watermarks once real images existed

**Live site + metadata**
- Updated `src/app/layout.tsx` so `metadataBase` and `openGraph.url` use `https://noahneriportfolio.vercel.app/`

**Verification**
- `npm run build` passed outside sandbox after a Turbopack port-binding panic in the sandboxed environment (treated as environment limitation, not a code regression)

**Git / deploy**
- Committed as `f9ed6d2 Add live site imagery refresh`
- Pushed `main` to GitHub

---

## 2026-03-21 — Session 2

### Completed This Session

- Production site confirmed live at `https://noahneriportfolio.vercel.app/`
- Repository state confirmed synced to GitHub remote `origin/main`
- Session docs updated to reflect live deployment status
- Root metadata update planned around the live Vercel URL; implemented on 2026-03-23

---

## 2026-03-12 — Session 1

### Completed This Session

**Foundation**
- Scaffolded Next.js `16.1.6` with TypeScript, Tailwind v4, ESLint, App Router, `src/` directory
- Installed `framer-motion`, `clsx`, `tailwind-merge`, `lucide-react`
- Configured `globals.css` with Tailwind v4 imports, CSS custom properties for dark/light theme, dot grid background texture
- `src/lib/utils.ts` — `cn()` helper
- `src/lib/fonts.ts` — `next/font/local` for Cabinet Grotesk + Satoshi
- `src/types/index.ts` — `Project`, `ResumeEntry`, `ResumeSection`, `Skill`, `MMAShowcaseData`, `WeightClassBreakdown`, `SamplePrediction`
- `src/app/layout.tsx` — root metadata, Open Graph tags, dark theme default
- Downloaded and self-hosted Cabinet Grotesk + Satoshi fonts in `public/fonts/`
- Copied resume PDF to `public/Noah_Neri_resume.pdf`

**Data files**
- `src/data/projects.ts` — 3 seed projects
- `src/data/resume-data.ts` — structured resume content
- `src/data/mma-showcase-data.ts` — placeholder MMA stats, sample predictions, methodology, weight class breakdown
- `src/data/skills-data.ts` — 7 skills with bento size hints

**UI primitives**
- `ScrollReveal.tsx`, `SectionHeading.tsx`, `ProjectCard.tsx`, `SkillTag.tsx`, `TimelineItem.tsx`, `StatsCard.tsx`

**Layout**
- `Navbar.tsx`, `Footer.tsx`, `ThemeToggle.tsx`

**Sections**
- `Hero.tsx`, `About.tsx`, `Projects.tsx`, `Resume.tsx`, `Contact.tsx`

**Hero background**
- `MeshGradientCanvas.tsx` — animated Canvas 2D mesh gradient, 30fps throttle, reduced-motion fallback

**Hooks**
- `useActiveSection.ts`

**Pages**
- `src/app/page.tsx`
- `src/app/projects/mma-fight-model/page.tsx`

---

## Current Feature Status

| Feature | Status | Notes |
|---------|--------|-------|
| Hero section | ✅ Done | Animated canvas bg, name stagger, CTAs, social links, framed headshot |
| Hero frame cleanup | ✅ Done | Removed `Operating Mode` / `shipping product fast` panel |
| About / Skills bento | ✅ Done | 7 skills, bento grid layout |
| Projects grid | ✅ Done | Data-driven, 3 projects |
| Project thumbnails | ✅ Done | Live site screenshots (JPEG) for all 3 cards |
| Project card watermark cleanup | ✅ Done | Gray fallback letters only show on broken image |
| Blockchain at USC card | ✅ Done | Replaced DuoLingo; links to live site |
| MMA model → external link | ✅ Done | Now links to `https://2nattypicks.vercel.app/` |
| Resume timeline | ✅ Done | Updated from March 2026 PDF |
| Resume PDF download | ✅ Done | Links to `public/Noah_Neri_resume.pdf` |
| MMA showcase sub-page | ⚠️ Orphaned | `/projects/mma-fight-model` still exists, not linked from card |
| MMA real data | ❌ Placeholder | Values in `src/data/mma-showcase-data.ts` are not real model output |
| Contact section | ✅ Done | Email, phone, LinkedIn pills |
| Navbar + mobile nav | ✅ Done | Hamburger drawer, active-section highlighting |
| Footer | ✅ Done | Social links and copyright |
| Dark/light toggle | ✅ Done | Persists to `localStorage` |
| Responsive layout | ✅ Done | Mobile, tablet, desktop |
| SEO / OG tags | ✅ Done | Root metadata present, live URL set |
| Custom OG image | ❌ Missing | `/og-image.png` needs a real branded asset |
| Framer Motion animations | ✅ Done | Scroll reveals, staggers, count-up stats |
| `prefers-reduced-motion` | ✅ Done | Respected across all animations |
| `npm run build` | ✅ Verified | Passed on 2026-03-23 outside sandbox |
| GitHub push (Session 4) | ❌ Pending | Session 4 changes not yet committed/pushed |
| Vercel deploy | ✅ Live | `https://noahneriportfolio.vercel.app/` |
| Custom domain | ❌ Not started | Still using the default `.vercel.app` URL |

---

## Known Bugs / Issues / Notes

### Orphaned MMA Showcase Page

- `src/app/projects/mma-fight-model/page.tsx` is no longer linked from the project card. Still exists in the codebase. Needs a decision: keep and link somewhere, repurpose, or delete.

### Dead SVG Assets

- `public/images/projects/prediction-market.svg`, `duolingo-campaign.svg`, `mma-model.svg`, `blockchain-usc.svg` are all unreferenced. Safe to delete.

### Placeholder MMA Data

- `src/data/mma-showcase-data.ts` still uses placeholder accuracy metrics, totals, and sample stats.

### Social Preview Asset Missing

- Metadata references `/og-image.png`, but a custom OG image has not been generated yet.

### Custom Domain Not Configured

- The portfolio is still on the default Vercel URL.

### Local Workspace Note

- `IMG_3427 - Noah Neri.jpeg` remains untracked at the repo root.

### Resume Data Note

- Original prompt said GPA `3.28`; the March 2026 PDF shows `3.34`. The site uses `3.34`.
