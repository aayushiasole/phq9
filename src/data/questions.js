// ----------------- PHQ-9 Questions -----------------
export const questions = [
  { id: 1, text: "Little interest or pleasure in doing things", category: "PHQ9" },
  { id: 2, text: "Feeling down, depressed, or hopeless", category: "PHQ9" },
  { id: 3, text: "Trouble falling or staying asleep, or sleeping too much", category: "PHQ9" },
  { id: 4, text: "Feeling tired or having little energy", category: "PHQ9" },
  { id: 5, text: "Poor appetite or overeating", category: "PHQ9" },
  { id: 6, text: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down", category: "PHQ9" },
  { id: 7, text: "Trouble concentrating on things, such as reading the newspaper or watching television", category: "PHQ9" },
  { id: 8, text: "Moving or speaking so slowly that other people could have noticed. Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual", category: "PHQ9" },
  { id: 9, text: "Thoughts that you would be better off dead, or of hurting yourself", category: "PHQ9" },
];

// ----------------- PHQ-9 Rating Options -----------------
export const ratingOptions = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

// ----------------- PHQ-9 Scoring Rules -----------------
export const scoringRules = {
  severity: [
    { range: [1, 4], label: "Minimal depression" },
    { range: [5, 9], label: "Mild depression" },
    { range: [10, 14], label: "Moderate depression" },
    { range: [15, 19], label: "Moderately severe depression" },
    { range: [20, 27], label: "Severe depression" },
  ],
  diagnosis: {
    major: "Consider Major Depressive Disorder if ≥5 answers are '3' (and includes Q1 or Q2)",
    other: "Consider Other Depressive Disorder if 2–4 answers are '3' (and includes Q1 or Q2)",
  },
};
