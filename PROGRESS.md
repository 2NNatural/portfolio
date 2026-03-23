# PROGRESS.md — Changelog & Status

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
- Updated `src/data/projects.ts` so all 3 project cards now point to real local assets instead of missing thumbnails
- Updated `src/components/ui/ProjectCard.tsx` so the gray fallback letters only show on actual image failure
- Removed the visible gray `P`, `D`, and `M` watermarks once real images existed

**Live site + metadata**
- Updated `README.md`, `CONTEXT.md`, `PROGRESS.md`, and `ROADMAP.md` to reflect that the site is live at `https://noahneriportfolio.vercel.app/`
- Updated `src/app/layout.tsx` so `metadataBase` and `openGraph.url` use `https://noahneriportfolio.vercel.app/`

**Verification**
- Ran `npm run build`
- Initial sandboxed build failed with a Turbopack environment panic caused by `Operation not permitted` while binding a port during CSS processing
- Reran `npm run build` outside the sandbox and the production build passed successfully

**Git / deploy**
- Committed the imagery refresh as `f9ed6d2 Add live site imagery refresh`
- Pushed `main` to `https://github.com/2NNatural/portfolio`

**Documentation**
- Rewrote `README.md`, `CONTEXT.md`, `PROGRESS.md`, and `ROADMAP.md` to be the current single source of truth
- Consolidated next steps into one canonical roadmap file

### Implementation Decisions Made This Session

- Used a real local headshot file for the hero instead of a placeholder frame
- Used custom SVG project cover art for the 3 project cards so the visuals stay cohesive with the site’s dark neon aesthetic
- Kept the project card fallback-letter behavior in code, but only as a true failure fallback
- Treated the sandbox build panic as an environment issue, not a code regression, because the unrestricted build passed cleanly

### Trade-Offs Accepted This Session

- Custom SVG project cover art was used instead of raw live screenshots to keep the cards visually consistent and production-ready
- The repo still contains an untracked root source image, `IMG_3427 - Noah Neri.jpeg`, because only the copied `public/` asset is required by the app

---

## 2026-03-21 — Session 2

### Completed This Session

- Production site confirmed live at `https://noahneriportfolio.vercel.app/`
- Repository state confirmed synced to GitHub remote `origin/main`
- Session docs updated to reflect live deployment status instead of pre-deploy state
- Root metadata update was planned around the live Vercel URL

### Notes

- This session established the live-site direction and the imagery refresh plan.
- Final imagery implementation, build verification, and GitHub push landed on 2026-03-23.

---

## 2026-03-12 — Session 1

### Completed This Session

**Foundation**
- Scaffolded Next.js `16.1.6` project with TypeScript, Tailwind v4, ESLint, App Router, and `src/` directory
- Installed `framer-motion`, `clsx`, `tailwind-merge`, and `lucide-react`
- Configured `globals.css` with Tailwind v4 imports, CSS custom properties for dark/light theme, and dot grid background texture
- Added `src/lib/utils.ts` with `cn()` helper
- Added `src/lib/fonts.ts` with `next/font/local` for Cabinet Grotesk + Satoshi
- Added `src/types/index.ts` with `Project`, `ResumeEntry`, `ResumeSection`, `Skill`, `MMAShowcaseData`, `WeightClassBreakdown`, and `SamplePrediction`
- Added `src/app/layout.tsx` with root metadata, Open Graph tags, and dark theme default
- Downloaded and self-hosted Cabinet Grotesk + Satoshi fonts in `public/fonts/`
- Copied resume PDF to `public/Noah_Neri_resume.pdf`

**Data files**
- Added `src/data/projects.ts` with 3 seed projects
- Added `src/data/resume-data.ts` with structured resume content
- Added `src/data/mma-showcase-data.ts` with placeholder MMA stats, sample predictions, methodology copy, and weight class breakdown
- Added `src/data/skills-data.ts` with 7 skills and bento size hints

**UI primitives**
- Added `src/components/ui/ScrollReveal.tsx`
- Added `src/components/ui/SectionHeading.tsx`
- Added `src/components/ui/ProjectCard.tsx`
- Added `src/components/ui/SkillTag.tsx`
- Added `src/components/ui/TimelineItem.tsx`
- Added `src/components/ui/StatsCard.tsx`

**Layout**
- Added `src/components/layout/Navbar.tsx`
- Added `src/components/layout/Footer.tsx`
- Added `src/components/layout/ThemeToggle.tsx`

**Sections**
- Added `src/components/sections/Hero.tsx`
- Added `src/components/sections/About.tsx`
- Added `src/components/sections/Projects.tsx`
- Added `src/components/sections/Resume.tsx`
- Added `src/components/sections/Contact.tsx`

**Hero background**
- Added `src/components/hero/MeshGradientCanvas.tsx` with animated Canvas 2D mesh gradient, 30fps throttle, and reduced-motion fallback

**Hooks**
- Added `src/hooks/useActiveSection.ts`

**Pages**
- Added `src/app/page.tsx`
- Added `src/app/projects/mma-fight-model/page.tsx`

**Docs**
- Added initial versions of `README.md`, `CONTEXT.md`, `PROGRESS.md`, and `ROADMAP.md`

### Key Decisions Captured in Session 1

- Main site is single-page scroll
- MMA project gets its own showcase route
- Accent color is neon green `#00E5A0`
- Hero background uses Canvas 2D, not Three.js/WebGL
- Fonts are self-hosted via `next/font/local`
- All content lives in `/src/data/`

---

## Current Feature Status

| Feature | Status | Notes |
|---------|--------|-------|
| Hero section | ✅ Done | Animated canvas bg, name stagger, CTAs, social links, framed headshot |
| Hero frame cleanup | ✅ Done | Removed `Operating Mode` / `shipping product fast` panel |
| About / Skills bento | ✅ Done | 7 skills, bento grid layout |
| Projects grid | ✅ Done | Data-driven, 3 seeded projects |
| Project thumbnails | ✅ Done | Local SVG cover art added for all 3 cards |
| Project card watermark cleanup | ✅ Done | Gray `P`, `D`, `M` overlays removed for working assets |
| Resume timeline | ✅ Done | Updated from March 2026 PDF |
| Resume PDF download | ✅ Done | Links to `public/Noah_Neri_resume.pdf` |
| MMA showcase page | ✅ Done | Stats, bar chart, predictions table, methodology |
| MMA real data | ❌ Placeholder | Current values in `src/data/mma-showcase-data.ts` are not real model output yet |
| Contact section | ✅ Done | Email, phone, LinkedIn pills |
| Navbar + mobile nav | ✅ Done | Hamburger drawer and active-section highlighting |
| Footer | ✅ Done | Social links and copyright |
| Dark/light toggle | ✅ Done | Persists to `localStorage` |
| Responsive layout | ✅ Done | Mobile, tablet, desktop |
| SEO / OG tags | ✅ Done | Root metadata present and live URL updated |
| Custom OG image | ❌ Missing | `/og-image.png` still needs a real asset |
| Framer Motion animations | ✅ Done | Scroll reveals, staggers, count-up stats |
| `prefers-reduced-motion` | ✅ Done | Respected across animations |
| `npm run build` | ✅ Verified | Passed on 2026-03-23 outside sandbox |
| GitHub push | ✅ Done | `main` pushed to `origin` |
| Vercel deploy | ✅ Live | `https://noahneriportfolio.vercel.app/` |
| Custom domain | ❌ Not started | Still using the default `.vercel.app` URL |

---

## Known Bugs / Issues / Notes

### Placeholder MMA Data

- The MMA showcase still uses placeholder accuracy metrics, totals, and sample stats.

### Social Preview Asset Missing

- Metadata references `/og-image.png`, but a custom OG image has not been generated yet.

### Custom Domain Not Configured

- The portfolio is still on the default Vercel URL.

### Local Workspace Note

- `IMG_3427 - Noah Neri.jpeg` remains untracked at the repo root as the original source headshot.

### Resume Data Note

- Original prompt said GPA `3.28`; the updated March 2026 PDF shows `3.34`. The site uses `3.34`.
