# ROADMAP.md

One prioritized list. No competing roadmaps anywhere else.

---

## Immediate

- [NEXT] **Commit and push Session 4 changes** — `src/data/projects.ts`, `src/components/ui/ProjectCard.tsx`, `public/images/projects/*.jpg`, `public/images/projects/blockchain-usc.svg` — push to `main` so Vercel picks up the new thumbnails and the Blockchain card
- [NEXT] **Decide what to do with `/projects/mma-fight-model`** — the internal showcase page is now orphaned (project card links externally). Options: (a) delete it, (b) keep it as a reachable deep-link for people who want details, (c) repurpose it for a different project
- [NEXT] **Generate a real OG image** — add a real `public/og-image.png` so the social preview metadata points to an actual branded image
- [NEXT] **Add a custom domain** — configure on Vercel, then update `metadataBase` and `openGraph.url` in `src/app/layout.tsx`

---

## Soon

- [SOON] **Clean up dead SVG assets** — delete `public/images/projects/prediction-market.svg`, `duolingo-campaign.svg`, `mma-model.svg`, `blockchain-usc.svg` (all unreferenced)
- [SOON] **Swap `public/Noah_Neri_resume.pdf` when the resume changes** — keep the downloadable PDF current
- [SOON] **Add a 4th+ project** — add one object to `src/data/projects.ts`, take a Playwright screenshot, drop the JPEG in `public/images/projects/`
- [SOON] **Add analytics** — integrate Vercel Analytics or Plausible for live traffic visibility

---

## Later

- [LATER] **Run a Lighthouse audit against production** — target `90+` for Performance / Accessibility / SEO
- [LATER] **Expand case-study sub-pages** — apply the (now orphaned) MMA showcase pattern to additional projects if Noah decides to keep that page structure
- [LATER] **Add a real contact form** — replace the current contact pills with a working form (Resend or Formspree)
- [LATER] **Add a writing/blog section** — simple MDX-based technical writing section

---

## Maybe

- [MAYBE] **Polish light mode** — dark mode is still the primary designed experience
- [MAYBE] **Add project filtering** — useful once the grid has 6+ projects
- [MAYBE] **Upgrade the hero to Three.js / WebGL** — only if the aesthetic payoff is worth the added complexity
- [MAYBE] **Add MMA model licensing / NDA flow** — licensing inquiry form, Calendly flow, or similar gated contact path
