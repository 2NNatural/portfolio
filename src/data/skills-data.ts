import type { Skill } from "@/types";

// size controls bento grid span:
//   "lg" = col-span-2 row-span-2 (2x2 cell)
//   "md" = col-span-2 (wide cell)
//   "sm" = col-span-1 (regular cell)

export const SKILLS: Skill[] = [
  {
    label: "AI Agent Orchestration",
    size: "lg",
    description: "Building multi-agent systems that ship real products",
  },
  {
    label: "Vibe Coding",
    size: "md",
    description: "AI-assisted development — idea to product in hours",
  },
  {
    label: "AI Media & Design",
    size: "sm",
    description: "Generative media, brand design, campaign assets",
  },
  {
    label: "Machine Learning",
    size: "sm",
    description: "Predictive models, data pipelines, sports analytics",
  },
  {
    label: "Blockchain & Web3",
    size: "md",
    description: "Governance, DeFi, token economics",
  },
  {
    label: "Sales & BD",
    size: "sm",
    description: "#1 SDR → Manager → $1M+ revenue driven",
  },
  {
    label: "Brand Strategy",
    size: "sm",
    description: "Marketing campaigns, brand positioning, GTM",
  },
];
