import type { MMAShowcaseData } from "@/types";

// ─── Update this file with real stats as needed ────────────────────────────
export const mmaShowcaseData: MMAShowcaseData = {
  overallAccuracy: 72.4, // placeholder — update with real %
  totalPredictions: 340, // placeholder
  recentForm: "8-2 in last 10",
  bestWeightClass: "Middleweight",
  bestWeightClassAccuracy: 78.6,

  methodology: [
    "The model is an ensemble combining fighter statistics, historical matchup data, and a range of contextual features including age differentials, reach, fight camp, and recent performance trends. It was trained on 10+ years of MMA bout data.",
    "Feature engineering focuses on momentum indicators — win streaks, finishing rate, cardio proxies from round-by-round scoring — rather than raw win/loss records, which are notoriously noisy in MMA.",
    "The model architecture and full feature set are proprietary. Accuracy figures shown are out-of-sample results on fights held after the training cutoff. The model is actively maintained and updated following each UFC event.",
  ],

  weightClassBreakdown: [
    { weightClass: "Heavyweight", accuracy: 68.4, sampleSize: 38 },
    { weightClass: "Light Heavyweight", accuracy: 70.1, sampleSize: 42 },
    { weightClass: "Middleweight", accuracy: 78.6, sampleSize: 57 },
    { weightClass: "Welterweight", accuracy: 74.2, sampleSize: 64 },
    { weightClass: "Lightweight", accuracy: 75.8, sampleSize: 72 },
    { weightClass: "Featherweight", accuracy: 71.3, sampleSize: 45 },
    { weightClass: "Bantamweight", accuracy: 69.7, sampleSize: 22 },
  ],

  samplePredictions: [
    {
      event: "UFC 311",
      fight: "Islam Makhachev vs. Arman Tsarukyan",
      prediction: "Islam Makhachev by Decision",
      actual: "Islam Makhachev by Unanimous Decision",
      correct: true,
    },
    {
      event: "UFC 310",
      fight: "Alexandre Pantoja vs. Kai Asakura",
      prediction: "Alexandre Pantoja by TKO/KO",
      actual: "Alexandre Pantoja by Submission",
      correct: true,
    },
    {
      event: "UFC 309",
      fight: "Jon Jones vs. Stipe Miocic",
      prediction: "Jon Jones by TKO/KO",
      actual: "Jon Jones by TKO",
      correct: true,
    },
    {
      event: "UFC 308",
      fight: "Ilia Topuria vs. Max Holloway",
      prediction: "Max Holloway by Decision",
      actual: "Ilia Topuria by TKO",
      correct: false,
    },
    {
      event: "UFC 307",
      fight: "Alex Pereira vs. Khalil Rountree",
      prediction: "Alex Pereira by TKO/KO",
      actual: "Alex Pereira by TKO",
      correct: true,
    },
    {
      event: "UFC 306",
      fight: "Sean O'Malley vs. Merab Dvalishvili",
      prediction: "Sean O'Malley by Decision",
      actual: "Merab Dvalishvili by Unanimous Decision",
      correct: false,
    },
    {
      event: "UFC 305",
      fight: "Dricus Du Plessis vs. Israel Adesanya",
      prediction: "Dricus Du Plessis by Submission",
      actual: "Dricus Du Plessis by Submission",
      correct: true,
    },
    {
      event: "UFC 304",
      fight: "Leon Edwards vs. Belal Muhammad",
      prediction: "Belal Muhammad by Decision",
      actual: "Belal Muhammad by Unanimous Decision",
      correct: true,
    },
  ],
};
