import type { Project } from "@/types";

// ─── Add new projects by adding an object to this array ───────────────────
// linkType options:
//   "external"  → opens in new tab
//   "showcase"  → links to an internal sub-page (e.g. /projects/[id])
//   "internal"  → Next.js navigation within the site

export const PROJECTS: Project[] = [
  {
    id: "prediction-market-directory",
    title: "Prediction Market Directory",
    description:
      "A comprehensive directory mapping the prediction market ecosystem across 5 dimensions. Built with AI-assisted development — Next.js, Supabase, and a custom multi-axis taxonomy engine.",
    tags: ["AI Development", "Web3", "Vibe Coding", "Next.js"],
    thumbnail: "/images/projects/prediction-market.jpg",
    link: "https://prediction-market-directory.vercel.app/",
    linkType: "external",
    featured: true,
  },
  {
    id: "blockchain-usc-website",
    title: "Blockchain at USC — Website Revamp",
    description:
      "Full redesign and rebuild of the official site for USC's premier blockchain org. UI designed with Google Stitch + Variant; codebase built from scratch using Claude Code. Next.js, TypeScript, Tailwind.",
    tags: ["Claude Code", "AI Development", "Next.js", "UI Design"],
    thumbnail: "/images/projects/blockchain-usc.jpg",
    link: "https://www.blockchainatusc.com",
    linkType: "external",
    featured: true,
  },
  {
    id: "mma-fight-model",
    title: "MMA Fight Prediction Model",
    description:
      "A proprietary ML model predicting UFC fight outcomes. Select accuracy metrics and sample predictions are showcased — the model itself is private, used for live betting and future paywall.",
    tags: ["Machine Learning", "Data Science", "Sports Analytics"],
    thumbnail: "/images/projects/mma-model.jpg",
    link: "https://2nattypicks.vercel.app/",
    linkType: "external",
    featured: true,
  },
];
