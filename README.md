# Noah Neri — Portfolio

> Personal portfolio site. Dark, technical, custom-built. Purpose: land employment by showcasing the ability to use AI tools to ship real projects fast.

**Status:** Built. Uncommitted. Pending GitHub push → Vercel deploy.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Docs

| File | Contents |
|------|----------|
| [CONTEXT.md](CONTEXT.md) | Full session memory — instructions, stack, decisions, preferences. Upload this to start the next session. |
| [PROGRESS.md](PROGRESS.md) | Changelog of everything built. Current status per feature. Known issues. |
| [ROADMAP.md](ROADMAP.md) | Single prioritized list of what comes next. |

---

## How to Add a New Project

Open [`src/data/projects.ts`](src/data/projects.ts) and add one object to the `PROJECTS` array:

```ts
{
  id: "my-new-project",
  title: "My New Project",
  description: "2-3 sentence description.",
  tags: ["AI", "Web3"],
  thumbnail: "/images/projects/my-project.png",  // drop file in public/images/projects/
  link: "https://...",
  linkType: "external",   // "external" | "showcase" | "internal"
  featured: false,
}
```

No other file changes needed.

---

## How to Update MMA Model Stats

Edit [`src/data/mma-showcase-data.ts`](src/data/mma-showcase-data.ts) — every field is plainly labeled with a comment.

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                      # Main single-page site (Hero → About → Projects → Resume → Contact)
│   └── projects/mma-fight-model/     # MMA showcase sub-page
├── components/
│   ├── hero/MeshGradientCanvas.tsx   # Animated canvas hero background
│   ├── layout/                       # Navbar, Footer, ThemeToggle
│   ├── sections/                     # Hero, About, Projects, Resume, Contact
│   └── ui/                           # ProjectCard, SkillTag, TimelineItem, StatsCard, ScrollReveal, SectionHeading
├── data/                             # ALL content lives here — projects, resume, skills, MMA stats
├── hooks/                            # useActiveSection (IntersectionObserver)
├── lib/                              # utils (cn), fonts
└── types/                            # TypeScript interfaces
```

---

## Deploy

1. Commit all files
2. Create GitHub repo at [github.com/new](https://github.com/new) (Public, no README init)
3. `git remote add origin https://github.com/USERNAME/portfolio.git && git push -u origin main`
4. Import at [vercel.com/import](https://vercel.com/import) — Next.js auto-detected, no config needed
