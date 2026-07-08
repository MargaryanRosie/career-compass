import type { Question } from "@/config/questionLibrary";

/**
 * The single, hand-authored question every user answers first.
 *
 * It intentionally reuses the same `Question` shape as entries in
 * `questionLibrary.ts` (id, text, traits, sampleAnswers) so the assessment
 * UI can render it with no special-casing — but it lives in its own file
 * and is never added to `questionLibrary`, and the adaptive recommendation
 * engine never references it. See `assessmentEngine.ts` for how the two
 * are stitched together.
 *
 * `id: 0` is a sentinel that never collides with a `questionLibrary` id
 * (those start at 1), so it can never accidentally be treated as an
 * "asked" adaptive question.
 */
export const fixedQuestion: Question = {
  id: 0,
  text: "Think about a moment when you felt genuinely proud of something you accomplished. What made that moment so satisfying?",
  traits: [],
  sampleAnswers: [
    {
      answer: "I solved a difficult problem that others couldn't.",
      traits: ["Problem-Solving", "Critical Thinking", "Resilience", "Initiative"],
    },
    {
      answer: "I created something original from my own ideas.",
      traits: ["Creativity", "Innovation", "Flexibility", "Initiative"],
    },
    {
      answer: "I helped someone overcome a challenge.",
      traits: ["Empathy", "Communication", "Emotional Intelligence", "Collaboration"],
    },
    {
      answer: "I organized people and made everything run smoothly.",
      traits: ["Leadership", "Time Management", "Strategic Vision", "Accountability"],
    },
    {
      answer: "I discovered something new through researching or experimenting.",
      traits: ["Critical Thinking", "Attention to Detail", "Adaptability", "Initiative"],
    },
    {
      answer: "I convinced others with my ideas.",
      traits: ["Communication", "Leadership", "Motivation", "Decision-Making"],
    },
    {
      answer: "I built or repaired something that worked perfectly.",
      traits: ["Attention to Detail", "Problem-Solving", "Accountability", "Integrity"],
    },
    {
      answer: "I mastered a difficult concept after putting in significant effort.",
      traits: ["Resilience", "Motivation", "Initiative", "Adaptability"],
    },
  ],
};
