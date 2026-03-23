# ROADMAP.md

One prioritized list. No competing roadmaps anywhere else.

---

## Immediate (Do Now)

- [NEXT] **Replace MMA placeholder stats** — update `src/data/mma-showcase-data.ts` with real model accuracy, weight class breakdown, and recent predictions
- [NEXT] **Add a custom domain** — configure on Vercel dashboard when ready to move off the default `.vercel.app` URL
- [NEXT] **Swap resume PDF** — replace `public/Noah_Neri_resume.pdf` with the latest version whenever it's updated

---

## Soon (Next Session)

- [SOON] **Add 4th+ project** — add one object to `src/data/projects.ts`, drop thumbnail in `public/images/projects/`
- [SOON] **Generate a custom OG image** — replace the placeholder `/og-image.png` setup with a real social preview image
- [SOON] **Add Vercel Analytics or Plausible** — start tracking live traffic and engagement

---

## Later (Backlog)

- [LATER] **Lighthouse audit** — run against the live Vercel deployment, target 90+ Performance / Accessibility / SEO
- [LATER] **Case study sub-pages** — expand MMA showcase pattern to other projects (dedicated `/projects/[id]` pages with deeper write-ups)
- [LATER] **Contact form** — replace email/phone pills with a working form (Resend or Formspree)
- [LATER] **Blog / Writing section** — add a simple blog for technical writing (MDX)

---

## Maybe (Low Priority / Uncertain)

- [MAYBE] **Light mode polish** — dark mode is primary; light mode works but hasn't been deeply designed
- [MAYBE] **Project filtering** — tag-based filter on the projects grid once there are 6+ projects
- [MAYBE] **Three.js / WebGL hero** — current Canvas 2D mesh gradient is intentionally lightweight; only upgrade if the aesthetic demands it
- [MAYBE] **MMA model paywall / NDA flow** — add a licensing inquiry form or Calendly link on the MMA showcase page
