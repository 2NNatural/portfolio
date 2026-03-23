# CONTEXT.md — Session Memory

> Upload this file at the start of every new session. It contains everything needed to pick up exactly where we left off.

---

## Who I Am

- **Name:** Noah Neri
- **School:** USC Marshall School of Business — B.S. Business Administration / Finance, Minor in Blockchain
- **GPA:** 3.34
- **Graduating:** May 2026
- **Location:** Los Angeles, CA
- **Contact:** noahneri2@gmail.com | (661) 600-6327 | [LinkedIn](https://www.linkedin.com/in/noah-neri-14a975251/)
- **Focus:** AI-powered development, agent orchestration & automation, vibe coding — shipping fast
- **Goal of this site:** Land employment by showcasing ability to use AI tools to ship real projects fast

---

## My Instructions — Verbatim (Do Not Rephrase)

### Tone & Format
- No generic template vibes. This should feel custom-built.
- No AI slop aesthetics (purple gradients, generic card layouts with rounded corners and drop shadows everywhere).
- No walls of text. Keep copy tight and punchy.
- No fake testimonials or filler content.
- Don't embed my full resume as a giant text block — make it visual and interactive.

### Design Direction
- Dark theme as default (near-black background, not pure #000).
- The vibe should say "this person ships product."
- Developer portfolio meets venture studio.
- Aesthetic: Dark, technical, confident — but not cold.
- Use a distinctive display/heading font — something geometric and modern (e.g., Satoshi, General Sans, Clash Display, or Cabinet Grotesk from Fontshare — NOT Inter, NOT Roboto, NOT Space Grotesk).
- Accent color: Electric blue, neon green, or a vibrant coral — pick ONE dominant accent. Use it sparingly for CTAs, hover states, and highlights.
- Background texture: Subtle dot grid, noise grain, or faint grid lines to add depth without clutter.
- Animations: Smooth page transitions, staggered reveal on scroll for project cards, subtle hover effects on cards (slight scale + glow). Keep it polished, not distracting.
- Layout: Clean grid with generous whitespace. Asymmetric hero section. Project cards should feel tactile — slight depth via shadows or border treatments.

### Technical Mandates
- Extensibility is critical: The project grid should be data-driven (a single array/config file where I add new projects as objects). Same for the ML model showcase data. I should be able to add a new project by adding one object to a file — no template surgery.
- Fully responsive — must look great on mobile, tablet, and desktop.
- SEO basics: proper meta tags, Open Graph tags, semantic HTML.
- Performance: optimize images (next/image), lazy load project cards if the list grows.
- Accessibility: proper contrast ratios, focus states, alt text.

---

## Technical Stack

| Layer | Choice | Version |
|-------|--------|---------|
| Framework | Next.js (App Router) | 16.1.6 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | v4 |
| Animations | Framer Motion | ^12.36.0 |
| Icons | lucide-react | ^0.577.0 |
| Utilities | clsx + tailwind-merge | latest |
| Runtime | React | 19.2.3 |
| Deploy target | Vercel | — |
| Fonts | Cabinet Grotesk (display) + Satoshi (body) | self-hosted via next/font/local |
| Accent color | `#00E5A0` (neon green) | — |
| Background | `#0A0A0A` near-black | — |

### Fonts
- **Display/Headings:** Cabinet Grotesk (from Fontshare) — self-hosted in `public/fonts/cabinet-grotesk/`
- **Body:** Satoshi (from Fontshare) — self-hosted in `public/fonts/satoshi/`
- These are loaded via `next/font/local` in `src/lib/fonts.ts`
- Explicitly NOT: Inter, Roboto, Space Grotesk

### Color System (CSS Variables)
| Token | Dark | Light |
|-------|------|-------|
| `--bg-primary` | `#0A0A0A` | `#FAFAFA` |
| `--bg-secondary` | `#141414` | `#FFFFFF` |
| `--text-primary` | `#FAFAFA` | `#0A0A0A` |
| `--text-secondary` | `#A0A0A0` | `#4A4A4A` |
| `--border` | `#1F1F1F` | `#E5E5E5` |
| `--accent` | `#00E5A0` | `#00B87A` |

---

## Project Architecture

### Key Design Decisions & Reasoning

1. **Single-page scroll for main site** (Hero → About → Projects → Resume → Contact) — keeps it tight and scannable
2. **MMA showcase as a sub-page** (`/projects/mma-fight-model`), not a modal — too much content for a modal, gets its own URL/SEO
3. **Neon green accent (`#00E5A0`)** — technical, builder-oriented, avoids overused blue/purple AI-slop palette
4. **Canvas 2D mesh gradient** (no Three.js/WebGL) — keeps bundle lean, looks organic, Lissajous curve animation
5. **Self-hosted fonts via `next/font/local`** — zero external requests, best performance
6. **Dot grid background texture** — subtle depth without clutter
7. **All content in `/src/data/`** — adding a project = one object in `projects.ts`, no template surgery

### File Structure
```
src/
├── app/
│   ├── globals.css               # Tailwind v4, CSS vars, font-face, dot grid bg
│   ├── layout.tsx                # Root layout: fonts, metadata, OG tags, dark theme
│   ├── page.tsx                  # Single-page: Hero → About → Projects → Resume → Contact
│   └── projects/mma-fight-model/
│       └── page.tsx              # MMA showcase sub-page
├── components/
│   ├── hero/MeshGradientCanvas.tsx
│   ├── layout/Navbar.tsx
│   ├── layout/Footer.tsx
│   ├── layout/ThemeToggle.tsx
│   ├── sections/Hero.tsx
│   ├── sections/About.tsx
│   ├── sections/Projects.tsx
│   ├── sections/Resume.tsx
│   ├── sections/Contact.tsx
│   ├── ui/ProjectCard.tsx
│   ├── ui/ScrollReveal.tsx
│   ├── ui/SectionHeading.tsx
│   ├── ui/SkillTag.tsx
│   ├── ui/StatsCard.tsx
│   └── ui/TimelineItem.tsx
├── data/
│   ├── projects.ts               # ← add new projects here
│   ├── mma-showcase-data.ts      # ← update MMA stats here
│   ├── resume-data.ts            # ← resume entries
│   └── skills-data.ts            # ← skills bento grid
├── hooks/useActiveSection.ts
├── lib/utils.ts                  # cn() helper
├── lib/fonts.ts                  # next/font/local config
└── types/index.ts                # All TypeScript interfaces
```

---

## Content — What's On the Site

### Personal Info
- **Tagline:** "I build with AI — fast."
- **CTA copy:** "Let's build something."
- **Social:** LinkedIn, email (noahneri2@gmail.com), phone (661) 600-6327

### Projects (seeded)
| ID | Title | Link Type | Featured |
|----|-------|-----------|----------|
| `prediction-market-directory` | Prediction Market Directory | external → https://prediction-market-directory.vercel.app/ | yes |
| `duolingo-campaign` | DuoLingo Marketing Campaign | external → Google Slides | no |
| `mma-fight-model` | MMA Fight Prediction Model | showcase → `/projects/mma-fight-model` | yes |

**Project imagery**
- Hero headshot: `public/images/headshots/noah-neri-headshot.jpeg`
- Project covers:
  - `public/images/projects/prediction-market.svg`
  - `public/images/projects/duolingo-campaign.svg`
  - `public/images/projects/mma-model.svg`

### Resume Data (from updated resume PDF — March 2026)
**Education**
- USC Marshall — B.S. Business Admin/Finance, Minor Blockchain, GPA 3.34, Jan 2024–May 2026

**Experience**
- Passes — Creator Acquisitions & Success Intern (May 2025–Aug 2025)
- Helium Mobile — Campus Ambassador (Jan 2025–Jun 2025)
- Quokka Brew — Sales & Partnerships Manager, promoted from #1 SDR Intern (Jun 2023–Jul 2024)

**Leadership**
- Blockchain at USC — President, $10M+ governance delegations (Sep 2024–Present)
- Phi Delta Theta — Philanthropy Coordinator, Iron Phi, $10K+ raised (Apr 2024–Apr 2025)
- USC Avenues Consulting Group — Finance Associate (Sep 2024–Apr 2025)
- Eagle Scout — Boy Scouts of America (Sep 2016–Dec 2021)

**Note:** Resume PDF is at `public/Noah_Neri_resume.pdf`. Resume data in the site was updated from the new resume PDF (document_pdf.pdf) provided during the session. The original prompt had slightly outdated info (e.g., GPA was listed as 3.28 in the original brief; correct value from PDF is 3.34).

### MMA Showcase Data (all placeholder — update with real stats)
- Overall accuracy: 72.4% (placeholder)
- Total predictions: 340 (placeholder)
- Recent form: "8-2 in last 10" (placeholder)
- Best weight class: Middleweight at 78.6% (placeholder)
- Sample predictions: 8 real-looking UFC fights seeded (UFC 304–311)

### Skills (bento grid)
- AI Agent Orchestration (lg — 2×2)
- Vibe Coding (md — wide)
- AI Media & Design (sm)
- Machine Learning (sm)
- Blockchain & Web3 (md — wide)
- Sales & BD (sm)
- Brand Strategy (sm)

---

## Animation System

| Element | Type | Trigger |
|---------|------|---------|
| Hero name | Character stagger fade-up | Page load |
| Hero tagline/CTAs | Fade up, sequential delay | Page load |
| Canvas background | Lissajous drift, 30fps | Always |
| Section headings | Fade up | Scroll into view |
| Skill bento cells | Staggered fade + scale | Scroll into view |
| Project cards | Staggered fade up | Scroll into view |
| Timeline items | Slide from left + fade | Scroll into view |
| MMA stat numbers | Count-up 0 → target | Scroll into view |
| MMA bar chart | Width animate | Scroll into view |
| Card hover | scale(1.02) + border glow | CSS hover (not framer) |

All animations respect `prefers-reduced-motion`.

---

## Git / Deploy State (as of March 21, 2026)

- Git repo initialized at `/Users/noahneri/portfolio/`
- On branch `main`
- Tracking remote branch `origin/main`
- GitHub remote configured: `https://github.com/2NNatural/portfolio.git`
- Latest local portfolio commit: `3ed0eee Initial portfolio build`
- Portfolio is live at `https://noahneriportfolio.vercel.app/`
- Dev server confirmed working on `localhost:3000`

### Deploy Workflow
1. Make changes locally
2. Commit to git
3. Push to `main`
4. Vercel redeploys from the connected GitHub repo

---

## Known Issues / Gaps

- **MMA stats are all placeholder** — needs real data from the actual model
- **Resume PDF may need updating** — `public/Noah_Neri_resume.pdf` should be swapped out when a new version is ready
- **No custom domain configured** — site is live on the default Vercel domain for now: `noahneriportfolio.vercel.app`
- **Production build verified on March 23, 2026** — local `npm run build` now passes
