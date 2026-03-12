# ROADMAP.md

One prioritized list. No competing roadmaps anywhere else.

---

## Immediate (Do Now)

- [NEXT] **Commit all code to git** — `git add` everything + `git commit -m "Initial portfolio build"`
- [NEXT] **Create GitHub repo** — github.com/new, Public, no README init
- [NEXT] **Push to GitHub** — `git remote add origin <url> && git push -u origin main`
- [NEXT] **Deploy to Vercel** — vercel.com/import, select repo, one-click deploy
- [NEXT] **Add project thumbnails** — drop real PNG/JPG screenshots into `public/images/projects/` for all 3 cards

---

## Soon (Next Session)

- [SOON] **Run `npm run build`** — verify production build has no TypeScript/ESLint errors before deploying
- [SOON] **Replace MMA placeholder stats** — update `src/data/mma-showcase-data.ts` with real model accuracy, weight class breakdown, and recent predictions
- [SOON] **Swap resume PDF** — replace `public/Noah_Neri_resume.pdf` with latest version whenever it's updated
- [SOON] **Add a custom domain** — configure on Vercel dashboard after initial deploy
- [SOON] **Add 4th+ project** — add one object to `src/data/projects.ts`, drop thumbnail in `public/images/projects/`

---

## Later (Backlog)

- [LATER] **Lighthouse audit** — run after Vercel deploy, target 90+ Performance / Accessibility / SEO
- [LATER] **Case study sub-pages** — expand MMA showcase pattern to other projects (dedicated `/projects/[id]` pages with deeper write-ups)
- [LATER] **Contact form** — replace email/phone pills with a working form (Resend or Formspree)
- [LATER] **Blog / Writing section** — add a simple blog for technical writing (MDX)
- [LATER] **OG image** — generate a custom `og-image.png` for social sharing previews
- [LATER] **Analytics** — add Vercel Analytics or Plausible after deploy

---

## Maybe (Low Priority / Uncertain)

- [MAYBE] **Light mode polish** — dark mode is primary; light mode works but hasn't been deeply designed
- [MAYBE] **Project filtering** — tag-based filter on the projects grid once there are 6+ projects
- [MAYBE] **Three.js / WebGL hero** — current Canvas 2D mesh gradient is intentionally lightweight; only upgrade if the aesthetic demands it
- [MAYBE] **MMA model paywall / NDA flow** — add a licensing inquiry form or Calendly link on the MMA showcase page
