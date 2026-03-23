# ROADMAP.md

One prioritized list. No competing roadmaps anywhere else.

---

## Immediate

- [NEXT] **Replace MMA placeholder stats** — update `src/data/mma-showcase-data.ts` with real model accuracy, weight class breakdown, and recent predictions
- [NEXT] **Generate a real OG image** — add a real `public/og-image.png` so the social preview metadata points to an actual branded image
- [NEXT] **Add a custom domain** — configure the domain on Vercel, then update `src/app/layout.tsx` so `metadataBase` and `openGraph.url` stop using the Vercel URL

---

## Soon

- [SOON] **Swap `public/Noah_Neri_resume.pdf` when the resume changes** — keep the downloadable PDF current with the latest resume version
- [SOON] **Add a 4th+ project** — add one object to `src/data/projects.ts` and a matching asset in `public/images/projects/`
- [SOON] **Add analytics** — integrate Vercel Analytics or Plausible for live traffic visibility

---

## Later

- [LATER] **Run a Lighthouse audit against production** — target `90+` for Performance / Accessibility / SEO
- [LATER] **Expand case-study sub-pages** — apply the MMA showcase pattern to additional projects
- [LATER] **Add a real contact form** — replace the current contact pills with a working form (Resend or Formspree)
- [LATER] **Add a writing/blog section** — simple MDX-based technical writing section

---

## Maybe

- [MAYBE] **Polish light mode** — dark mode is still the primary designed experience
- [MAYBE] **Add project filtering** — useful once the grid has 6+ projects
- [MAYBE] **Upgrade the hero to Three.js / WebGL** — only if the aesthetic payoff is worth the added complexity
- [MAYBE] **Add MMA model licensing / NDA flow** — licensing inquiry form, Calendly flow, or similar gated contact path
