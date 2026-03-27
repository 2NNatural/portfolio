# CONTEXT.md — Session Memory

> Upload this file at the start of every new session. It contains everything needed to pick up exactly where we left off.

---

## Project Snapshot

- **Project:** Noah Neri portfolio
- **Live URL:** `https://noahneriportfolio.vercel.app/`
- **Repo path:** `/Users/noahneri/portfolio`
- **GitHub remote:** `https://github.com/2NNatural/portfolio.git`
- **Branch:** `main`
- **Latest pushed commit:** `ea31c68 Rewrite project docs and session memory` (Session 3 push — Session 4 changes not yet pushed as of 2026-03-26)
- **Deploy target:** Vercel
- **Local workspace notes:**
  - `IMG_3427 - Noah Neri.jpeg` is still untracked at the repo root (original headshot source — not needed by the app)
  - Dead SVG assets remain in `public/images/projects/` (`prediction-market.svg`, `duolingo-campaign.svg`, `mma-model.svg`, `blockchain-usc.svg`) — safe to delete, but left in place intentionally

---

## Who I Am

- **Name:** Noah Neri
- **School:** USC Marshall School of Business — B.S. Business Administration / Finance, Minor in Blockchain
- **GPA:** 3.34
- **Graduating:** May 2026
- **Location:** Los Angeles, CA
- **Contact:** noahneri2@gmail.com | (661) 600-6327 | [LinkedIn](https://www.linkedin.com/in/noah-neri-14a975251/)
- **Focus:** AI-powered development, agent orchestration & automation, vibe coding — shipping fast

---

## Project Goals & Context

### Core Purpose — Verbatim

- **Goal of this site:** Land employment by showcasing ability to use AI tools to ship real projects fast
- **Focus:** AI-powered development, agent orchestration & automation, vibe coding — shipping fast

### Project Framing

- The site is meant to feel like a serious builder portfolio, not a generic personal site.
- The recurring theme across the work: "this person ships product."
- The portfolio is a single-page main experience.
- The site is already live on Vercel and should now be treated as an actively maintained production portfolio, not a pre-deploy mockup.

### Audience

- Employers
- Hiring managers
- Collaborators
- People evaluating Noah's ability to use AI tools to ship real projects fast

### Recurring Topics / Themes

- AI-powered development
- Agent orchestration
- Vibe coding
- Shipping fast
- Dark, technical, custom-built aesthetic
- Data-driven extensibility

---

## My Exact Instructions — Verbatim

### Original Tone & Format Instructions

- No generic template vibes. This should feel custom-built.
- No AI slop aesthetics (purple gradients, generic card layouts with rounded corners and drop shadows everywhere).
- No walls of text. Keep copy tight and punchy.
- No fake testimonials or filler content.
- Don't embed my full resume as a giant text block — make it visual and interactive.

### Original Design Direction

- Dark theme as default (near-black background, not pure #000).
- The vibe should say "this person ships product."
- Developer portfolio meets venture studio.
- Aesthetic: Dark, technical, confident — but not cold.
- Use a distinctive display/heading font — something geometric and modern (e.g., Satoshi, General Sans, Clash Display, or Cabinet Grotesk from Fontshare — NOT Inter, NOT Roboto, NOT Space Grotesk).
- Accent color: Electric blue, neon green, or a vibrant coral — pick ONE dominant accent. Use it sparingly for CTAs, hover states, and highlights.
- Background texture: Subtle dot grid, noise grain, or faint grid lines to add depth without clutter.
- Animations: Smooth page transitions, staggered reveal on scroll for project cards, subtle hover effects on cards (slight scale + glow). Keep it polished, not distracting.
- Layout: Clean grid with generous whitespace. Asymmetric hero section. Project cards should feel tactile — slight depth via shadows or border treatments.

### Original Technical Mandates

- Extensibility is critical: The project grid should be data-driven (a single array/config file where I add new projects as objects). Same for the ML model showcase data. I should be able to add a new project by adding one object to a file — no template surgery.
- Fully responsive — must look great on mobile, tablet, and desktop.
- SEO basics: proper meta tags, Open Graph tags, semantic HTML.
- Performance: optimize images (next/image), lazy load project cards if the list grows.
- Accessibility: proper contrast ratios, focus states, alt text.

### Session Start Instructions — Verbatim

> SESSION START — READ BEFORE ANYTHING ELSE

> You are resuming an active development project. I am picking up from my last work session on a different machine. Do not write any code yet. Do not make any file changes yet. Your first job is to read and internalize everything below.

> STEP 1 — READ THE PROJECT FILES
> Read the following files in this exact order. Do not skip any.
> `@CONTEXT.md`
> `@PROGRESS.md`
> `@ROADMAP.md`
> `@README.md`

> STEP 2 — RE-READ MY BEHAVIORAL RULES
> Inside CONTEXT.md there is a section containing my exact instructions for how you should respond — tone, format, style, "always do X", "never do Y". Re-read every single one of those rules now. They are active from this moment forward for the entire session. Do not revert to defaults.

> STEP 3 — RUN ENVIRONMENT SANITY CHECK
> Before we write a single line of code, run the following and report back briefly:
> — git status  (any uncommitted changes? which branch?)
> — git log --oneline -5  (last 5 commits so I can confirm we're in sync)
> — Check that dependencies are installed (look at package.json / requirements.txt / whatever applies to this stack and confirm install state)
> — Flag anything that looks off: merge conflicts, missing deps, wrong branch

> Keep this report short. One line per check. Flag anything that needs attention with ⚠️.

> DO NOT start any task until I reply to this confirmation.

> Wait for my go-ahead. I will either confirm the task from ROADMAP.md or give you a different one.

### Standing Session Rules — Verbatim

- My behavioral rules from CONTEXT.md override your defaults at all times
- If I correct you during this session, apply that correction immediately and for the rest of the session
- If something contradicts CONTEXT.md, ask me before proceeding
- Never make changes outside the scope of the current task without asking first
- If you notice an unrelated bug while working, flag it — don't fix it silently
- Always tell me which files you're about to modify before you modify them
- Check in after each logical chunk of work — don't auto-continue
- If you're uncertain about intent, ask one focused question rather than guessing
- Keep responses tight — I'm here to build, not read essays

### Approval / Check-In Rules — Verbatim

> If I left [TASK] blank above:
> → Confirm the [NEXT] item from ROADMAP.md is what we're doing today
> → Break it into steps before starting
> → Wait for my approval on the breakdown before writing any code

> If I filled in [TASK] above:
> → Acknowledge it
> → Check if it conflicts with anything in ROADMAP.md or PROGRESS.md
> → Break it into steps
> → Wait for my approval before starting

> ONCE I APPROVE:
> Start working. Apply all behavioral rules from CONTEXT.md from the first response.
> After completing each logical chunk of work, pause and ask if I want to continue to the next step or change direction.
> Do not barrel through the entire task without check-ins.

### End of Session Rule — Verbatim

> When I say "wrap up" or "end session":
> → Stop any active work immediately
> → Remind me to run the Session Wrap-Up prompt
> → List anything we completed this session so I don't forget to log it

### Documentation Rewrite Instructions — Verbatim

> ROLE
> You are my project documentation and memory system. Your job at the end of this work session is to produce fully updated, clean, forward-looking markdown files that serve as the single source of truth for this project going forward.

> PRIMARY OBJECTIVE
> Scan all existing markdown files in this project. Absorb every detail from our conversation history and this coding session. Then rewrite the docs so they are complete, non-redundant, and clearly point to what comes next. Preserve my words verbatim wherever possible. Do not paraphrase, summarize, or collapse my specific instructions into generalities.

> VERBATIM PRESERVATION
> — When documenting my instructions, preferences, or corrections: use my exact words
> — If I said "never write walls of text" — write exactly that, don't rephrase it as "be concise"

> COMPLETENESS OVER BREVITY
> — Do not summarize. Do not group entries. Do not omit anything.
> — If something was said, it belongs in the docs. The docs are the memory.
> — Better to have too much in CONTEXT.md than to lose any detail.

> TONE
> — Write docs like a developer wrote them for another developer
> — Direct, specific, no filler sentences
> — Use headers generously — scannable is better than prose-heavy

---

## Session Requests & Corrections — Verbatim

### Session 1–3 Requests (preserved)

> My website is now live at https://noahneriportfolio.vercel.app/
> Please reflect this in the markdown files.

> I want to add images to my website. I want a frame with my headshot on the landing page on the other side of my name and "Builder · USC Marshall · Class of '26". Additionally, I want photos in the 3 frames for my projects. They can pull directly from the site for a thumbnail or be a graphic correlating to each project's content. Make them fit the aesthetic of the site

> Remove the "P", "D", and "M" gray watermarks over the project cards now that we have images for them. Also, remove the "Operating Mode" and "shipping product fast" from the hero frame

### Session 4 Requests (2026-03-26)

> I want to add a new section to my website for a revamp I did for my club's website. I did the design using Google Stitch and Variant for UI and fully built code from scratch using Claude Code.

> [When I proposed adding a 4th card] Let's replace the duolingo card with the blockchain @ usc revamp card

> Change MMA model to link to: https://2nattypicks.vercel.app/

> Also use live site previews for all 3 websites as thumbnails instead of the generated stock images

---

## Technical Stack & Tooling

| Layer | Choice | Version / Notes |
|-------|--------|-----------------|
| Framework | Next.js (App Router) | `16.1.6` |
| Language | TypeScript | `^5` |
| Runtime | React | `19.2.3` |
| Styling | Tailwind CSS | `v4` |
| Animations | Framer Motion | `^12.36.0` |
| Icons | lucide-react | `^0.577.0` |
| Utilities | clsx | `^2.1.1` |
| Utilities | tailwind-merge | `^3.5.0` |
| Linting | ESLint | `^9` |
| Next lint config | eslint-config-next | `16.1.6` |
| Types | @types/node | `^20` |
| Types | @types/react | `^19` |
| Types | @types/react-dom | `^19` |
| PostCSS / Tailwind | @tailwindcss/postcss | `^4` |
| Fonts | Cabinet Grotesk + Satoshi | self-hosted via `next/font/local` |
| Deployment | Vercel | live |
| Git host | GitHub | `https://github.com/2NNatural/portfolio` |

### Screenshot Tooling (Session 4)

- **Playwright** `v1.58.2` — used via `npx playwright screenshot` to capture live site screenshots at `1600×900`
- Browsers: Chromium (`chrome-headless-shell v1208`) — downloaded to `~/.cache/ms-playwright/`
- Screenshot command pattern: `npx playwright screenshot --browser chromium --viewport-size "1600,900" --wait-for-timeout 2000 <URL> <OUTPUT_PATH>`

### Fonts

- **Display/Headings:** Cabinet Grotesk (from Fontshare) — self-hosted via `src/lib/fonts.ts`
- **Body:** Satoshi (from Fontshare) — self-hosted via `src/lib/fonts.ts`
- Explicitly NOT: Inter, Roboto, Space Grotesk

### Color System

| Token | Dark | Light |
|-------|------|-------|
| `--bg-primary` | `#0A0A0A` | `#FAFAFA` |
| `--bg-secondary` | `#141414` | `#FFFFFF` |
| `--bg-tertiary` | `#1A1A1A` | `#F0F0F0` |
| `--text-primary` | `#FAFAFA` | `#0A0A0A` |
| `--text-secondary` | `#A0A0A0` | `#4A4A4A` |
| `--text-muted` | `#606060` | `#8A8A8A` |
| `--border` | `#1F1F1F` | `#E5E5E5` |
| `--border-hover` | `#2A2A2A` | `#D0D0D0` |
| `--accent` | `#00E5A0` | `#00B87A` |

### Environment Notes

- Shell: `zsh`
- Local dev URL: `http://localhost:3000`
- `npm run build` passes locally after the March 23, 2026 imagery refresh
- In the sandbox, `npm run build` hit a Turbopack panic caused by `Operation not permitted` while trying to bind a port for CSS processing; rerunning outside the sandbox succeeded. Treat that as an environment limitation, not a repo bug.

---

## Architecture & Key Decisions

### Canonical Architecture Decisions

1. **Single-page scroll for main site** (`Hero → About → Projects → Resume → Contact`) — keeps it tight and scannable
2. **MMA showcase sub-page exists at `/projects/mma-fight-model`** but is now orphaned — the project card links externally to `https://2nattypicks.vercel.app/` as of Session 4. The page still exists in code; decide whether to repurpose, link to, or delete it.
3. **Neon green accent (`#00E5A0`)** — technical, builder-oriented, avoids overused blue/purple AI-slop palette
4. **Canvas 2D mesh gradient** (no Three.js/WebGL) — keeps bundle lean, looks organic, Lissajous curve animation
5. **Self-hosted fonts via `next/font/local`** — zero external requests, best performance
6. **Dot grid background texture** — subtle depth without clutter
7. **All content in `/src/data/`** — adding a project = one object in `projects.ts`, no template surgery
8. **Project card thumbnails stored locally** — hero headshot in `public/images/headshots/`, project covers in `public/images/projects/`
9. **Project thumbnails are live site screenshots (JPEG)** as of Session 4 — taken with Playwright at 1600×900. Previous custom SVG cover art exists as dead assets and can be deleted.
10. **Project card fallback letters remain in code only for broken assets** — the visible gray overlays were removed once real assets existed
11. **Hero frame cleanup** — the bottom overlay containing "Operating Mode" / "shipping product fast" was removed after review
12. **Metadata base URL** — `src/app/layout.tsx` now points to `https://noahneriportfolio.vercel.app/` until a custom domain exists
13. **`ProjectCard.tsx` image optimization** — `unoptimized` prop is `false` for all thumbnails (previously was conditionally `true` for `.svg` files; no longer needed since all thumbnails are JPEG)

### Session 4 Decision: Replace vs. Add for New Projects

> "Let's replace the duolingo card with the blockchain @ usc revamp card"

- DuoLingo Marketing Campaign was replaced, not appended. Rationale: keep the grid at 3 cards; the Blockchain rebuild is a better "I ship product" signal than a marketing pitch deck.

### File Structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/mma-fight-model/page.tsx   ← orphaned as of Session 4, not linked from cards
├── components/
│   ├── hero/MeshGradientCanvas.tsx
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
│   ├── projects.ts
│   ├── mma-showcase-data.ts
│   ├── resume-data.ts
│   └── skills-data.ts
├── hooks/useActiveSection.ts
├── lib/
└── types/index.ts
```

### Data-Driven Content Locations

- Add projects in `src/data/projects.ts`
- Update MMA stats in `src/data/mma-showcase-data.ts`
- Update resume entries in `src/data/resume-data.ts`
- Update skills bento content in `src/data/skills-data.ts`

---

## Current Site Content

### Personal Info in the Site

- **Tagline:** "I build with AI — fast."
- **CTA copy:** "Let's build something."
- **Social:** LinkedIn, email, phone
- **Hero eyebrow:** `Builder · USC Marshall · Class of '26`

### Current Project Inventory

| ID | Title | Link Type | Featured | Thumbnail |
|----|-------|-----------|----------|-----------|
| `prediction-market-directory` | Prediction Market Directory | external → `https://prediction-market-directory.vercel.app/` | yes | `public/images/projects/prediction-market.jpg` |
| `blockchain-usc-website` | Blockchain at USC — Website Revamp | external → `https://www.blockchainatusc.com` | yes | `public/images/projects/blockchain-usc.jpg` |
| `mma-fight-model` | MMA Fight Prediction Model | external → `https://2nattypicks.vercel.app/` | yes | `public/images/projects/mma-model.jpg` |

### Blockchain at USC Project Context

- **Live site:** `https://www.blockchainatusc.com`
- **GitHub:** `https://github.com/BlockchainUSC/bchainuscwebsite`
- **Design process:** UI designed with Google Stitch + Variant
- **Build process:** Full codebase built from scratch using Claude Code
- **Stack:** Next.js, TypeScript, Tailwind CSS
- **Noah's role:** President of Blockchain at USC; led the rebuild

### Hero / Image Assets

- **Hero headshot:** `public/images/headshots/noah-neri-headshot.jpeg`
- **Project covers (active):** `prediction-market.jpg`, `blockchain-usc.jpg`, `mma-model.jpg`
- **Dead assets (safe to delete):** `prediction-market.svg`, `duolingo-campaign.svg`, `mma-model.svg`, `blockchain-usc.svg`

### Resume Data Snapshot

- USC Marshall — B.S. Business Admin/Finance, Minor Blockchain, GPA 3.34, Jan 2024–May 2026
- Passes — Creator Acquisitions & Success Intern (May 2025–Aug 2025)
- Helium Mobile — Campus Ambassador (Jan 2025–Jun 2025)
- Quokka Brew — Sales & Partnerships Manager, promoted from #1 SDR Intern (Jun 2023–Jul 2024)
- Blockchain at USC — President, $10M+ governance delegations (Sep 2024–Present)
- Phi Delta Theta — Philanthropy Coordinator, Iron Phi, $10K+ raised (Apr 2024–Apr 2025)
- USC Avenues Consulting Group — Finance Associate (Sep 2024–Apr 2025)
- Eagle Scout — Boy Scouts of America (Sep 2016–Dec 2021)

---

## Animation System

| Element | Type | Trigger |
|---------|------|---------|
| Hero name | Character stagger fade-up | Page load |
| Hero tagline/CTAs | Fade up, sequential delay | Page load |
| Hero portrait frame | Fade/slide in | Page load |
| Canvas background | Lissajous drift, 30fps | Always |
| Section headings | Fade up | Scroll into view |
| Skill bento cells | Staggered fade + scale | Scroll into view |
| Project cards | Staggered fade up | Scroll into view |
| Timeline items | Slide from left + fade | Scroll into view |
| MMA stat numbers | Count-up `0 → target` | Scroll into view |
| MMA bar chart | Width animate | Scroll into view |
| Card hover | `scale(1.02) + border glow` | CSS hover |

All animations respect `prefers-reduced-motion`.

---

## Git / Deploy State

- Repo initialized at `/Users/noahneri/portfolio/`
- Branch: `main`
- Tracking: `origin/main`
- GitHub remote: `https://github.com/2NNatural/portfolio.git`
- **Session 4 changes are uncommitted as of doc-rewrite** — push needed
- Site live on Vercel: `https://noahneriportfolio.vercel.app/`
- Deployment flow: commit locally → push to `main` → Vercel redeploys

### Recent Git History

- `ea31c68 Rewrite project docs and session memory`
- `f9ed6d2 Add live site imagery refresh`
- `3ed0eee Initial portfolio build`
- `e40c31a Initial commit from Create Next App`

---

## Current Known Issues / Gaps

### Orphaned MMA Showcase Sub-Page

- `src/app/projects/mma-fight-model/page.tsx` still exists but is no longer linked from the project card (which now points to `https://2nattypicks.vercel.app/`).
- Decision needed: repurpose it, add a link to it somewhere, or delete it.

### Dead SVG Assets

- `public/images/projects/prediction-market.svg`, `duolingo-campaign.svg`, `mma-model.svg`, `blockchain-usc.svg` are unreferenced. Safe to delete.

### Resume Update Gap

- `public/Noah_Neri_resume.pdf` may need to be swapped when a newer version is ready.

### Domain Gap

- No custom domain configured yet. The site is still on the default Vercel domain: `noahneriportfolio.vercel.app`.

### Social Preview Gap

- `og-image.png` is still referenced by metadata, but a real custom OG image has not been generated yet.

### Local Workspace Cleanup Note

- `IMG_3427 - Noah Neri.jpeg` is still sitting untracked at the repo root as the original source headshot.

### Resume Data Note

- Original prompt said GPA `3.28`; the March 2026 resume PDF shows `3.34`. The site uses `3.34`.

### Screenshot Quality Note

- Thumbnails were captured at 1600×900 JPEG quality 90. If any screenshot captured a loading state or looks off, reshoot with: `npx playwright screenshot --browser chromium --viewport-size "1600,900" --wait-for-timeout 2000 <URL> <OUTPUT_PATH>`

---

## What Another Agent Needs To Know Immediately

- Read `PROGRESS.md` for the dated implementation log.
- Read `ROADMAP.md` for the only canonical next-step list.
- Do not invent new roadmaps anywhere else.
- Preserve Noah's exact wording when updating instructions or preferences.
- Check in after each logical chunk of work.
- Always tell Noah which files are about to be modified before modifying them.
- Do not silently fix unrelated bugs.
- The MMA showcase sub-page at `/projects/mma-fight-model` is orphaned — do not treat it as a primary feature until Noah decides what to do with it.
