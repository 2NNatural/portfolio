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
    thumbnail: "/images/projects/prediction-market.png",
    link: "https://prediction-market-directory.vercel.app/",
    linkType: "external",
    featured: true,
  },
  {
    id: "duolingo-campaign",
    title: "DuoLingo Marketing Campaign",
    description:
      "A full marketing campaign pitch for DuoLingo — AI-powered storyboarding, cohesive brand design using Nano Banana, and data-driven targeting strategy.",
    tags: ["AI Media & Design", "Marketing", "Brand Strategy"],
    thumbnail: "/images/projects/duolingo-campaign.png",
    link: "https://docs.google.com/presentation/d/18GtXHATSaxgdtmFoto0gN84mt3Hc3O-4/edit?slide=id.p6#slide=id.p6",
    linkType: "external",
    featured: false,
  },
  {
    id: "mma-fight-model",
    title: "MMA Fight Prediction Model",
    description:
      "A proprietary ML model predicting UFC fight outcomes. Select accuracy metrics and sample predictions are showcased — the model itself is private, used for live betting and future paywall.",
    tags: ["Machine Learning", "Data Science", "Sports Analytics"],
    thumbnail: "/images/projects/mma-model.png",
    link: "/projects/mma-fight-model",
    linkType: "showcase",
    featured: true,
  },
];
