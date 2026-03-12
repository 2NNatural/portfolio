// ─── Project Types ────────────────────────────────────────────────────────────
export type ProjectLinkType = "external" | "internal" | "showcase";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  link: string;
  linkType: ProjectLinkType;
  featured: boolean;
}

// ─── Resume Types ─────────────────────────────────────────────────────────────
export interface ResumeEntry {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  highlight?: string;
}

export interface ResumeSection {
  id: string;
  label: string;
  entries: ResumeEntry[];
}

// ─── Skills Types ─────────────────────────────────────────────────────────────
export type SkillSize = "lg" | "md" | "sm";

export interface Skill {
  label: string;
  size: SkillSize;
  icon?: string;
  description?: string;
}

// ─── MMA Showcase Types ───────────────────────────────────────────────────────
export interface WeightClassBreakdown {
  weightClass: string;
  accuracy: number;
  sampleSize: number;
}

export interface SamplePrediction {
  event: string;
  fight: string;
  prediction: string;
  actual: string;
  correct: boolean;
}

export interface MMAShowcaseData {
  overallAccuracy: number;
  totalPredictions: number;
  recentForm: string;
  bestWeightClass: string;
  bestWeightClassAccuracy: number;
  methodology: string[];
  weightClassBreakdown: WeightClassBreakdown[];
  samplePredictions: SamplePrediction[];
}
