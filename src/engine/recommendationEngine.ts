import { traits as allTraits } from "@/config/traits";
import { careerProfiles } from "@/config/careerProfiles";
import { questionLibrary, type Question } from "@/config/questionLibrary";
import { careerDescriptions } from "@/config/careerDescriptions";
import type {
  AnswerRecord,
  CareerScore,
  RecommendedCareer,
  TraitProfile,
} from "./types";

// -- Constants (tunable, no hardcoded careers/traits/questions) --------------
const FIXED_FIRST_QUESTION_ID = 1;
const TOP_CAREERS_FOR_TARGETING = 5;
const CONFIDENCE_SUFFICIENT = 3;
// Answer traits are provided as an ordered list. First trait gets the largest
// contribution; later traits contribute less. This turns simple trait lists
// into weighted evidence without inventing per-answer numbers.
const ANSWER_TRAIT_WEIGHTS = [3, 2, 1, 1];

export function createEmptyTraitProfile(): TraitProfile {
  const profile: TraitProfile = {};
  for (const t of allTraits) profile[t] = { score: 0, confidence: 0 };
  return profile;
}

/** Apply an answer's trait contributions to the running profile. */
export function applyAnswer(profile: TraitProfile, answerTraits: string[]): TraitProfile {
  const next: TraitProfile = { ...profile };
  answerTraits.forEach((trait, i) => {
    const weight = ANSWER_TRAIT_WEIGHTS[i] ?? 1;
    const prev = next[trait] ?? { score: 0, confidence: 0 };
    next[trait] = {
      score: prev.score + weight,
      confidence: prev.confidence + 1,
    };
  });
  return next;
}

/** Weighted career scoring: Σ (userTraitScore × careerTraitWeight). */
export function computeCareerScores(profile: TraitProfile): CareerScore[] {
  return careerProfiles
    .map((c) => {
      let score = 0;
      for (const wt of c.weightedTraits) {
        const userScore = profile[wt.trait]?.score ?? 0;
        score += userScore * wt.weight;
      }
      return { career: c.career, score };
    })
    .sort((a, b) => b.score - a.score);
}

/**
 * Choose the next question by scanning the entire question library:
 *  - find top-scoring careers
 *  - collect their weighted traits
 *  - discard traits with sufficient confidence already
 *  - score each unused question by how much unknown, important trait
 *    information it would reveal
 */
export function selectNextQuestion(
  profile: TraitProfile,
  askedQuestionIds: number[],
): Question {
  const scored = computeCareerScores(profile);
  // On the first move all scores are zero — fall back to the full set so we
  // still target broadly important traits.
  const hasSignal = scored.some((s) => s.score > 0);
  const topCareers = hasSignal
    ? scored.slice(0, TOP_CAREERS_FOR_TARGETING)
    : scored;

  // Aggregate importance for each candidate trait across the top careers.
  const traitImportance: Record<string, number> = {};
  for (const cs of topCareers) {
    const profile = careerProfiles.find((c) => c.career === cs.career);
    if (!profile) continue;
    for (const wt of profile.weightedTraits) {
      traitImportance[wt.trait] = (traitImportance[wt.trait] ?? 0) + wt.weight;
    }
  }

  const asked = new Set(askedQuestionIds);
  const candidates = questionLibrary.filter((q) => !asked.has(q.id));

  let best: Question | null = null;
  let bestScore = -Infinity;

  for (const q of candidates) {
    let info = 0;
    // Consider both the question's own trait tags and traits its answers surface.
    const measuredTraits = new Set<string>(q.traits);
    for (const a of q.sampleAnswers) for (const t of a.traits) measuredTraits.add(t);

    for (const trait of measuredTraits) {
      const importance = traitImportance[trait] ?? 0;
      if (importance === 0) continue;
      const conf = profile[trait]?.confidence ?? 0;
      if (conf >= CONFIDENCE_SUFFICIENT) continue;
      // Prefer traits we know little about and that matter most.
      info += importance / (1 + conf);
    }

    if (info > bestScore) {
      bestScore = info;
      best = q;
    }
  }

  // Fallback: any unused question.
  if (!best) best = candidates[0] ?? questionLibrary[0];
  return best;
}

export function getFixedFirstQuestion(): Question {
  const q = questionLibrary.find((x) => x.id === FIXED_FIRST_QUESTION_ID);
  if (!q) throw new Error("Fixed first question missing from question library");
  return q;
}

export function buildRecommendations(
  profile: TraitProfile,
  topN = 3,
): RecommendedCareer[] {
  const scores = computeCareerScores(profile);
  return scores.slice(0, topN).map((cs) => {
    const cp = careerProfiles.find((c) => c.career === cs.career)!;
    // Strongest detected traits = the career's important traits, sorted by
    // how much evidence the user actually accumulated for them.
    const strongest = [...cp.weightedTraits]
      .map((wt) => ({
        trait: wt.trait,
        userScore: profile[wt.trait]?.score ?? 0,
      }))
      .sort((a, b) => b.userScore - a.userScore)
      .slice(0, 3)
      .filter((s) => s.userScore > 0)
      .map((s) => s.trait);

    const whyItMatches =
      strongest.length > 0
        ? `Your responses show consistent evidence of ${humanList(strongest)} — the qualities most predictive of success in this role.`
        : `This role aligns with the general profile emerging from your responses.`;

    return {
      career: cp.career,
      description: careerDescriptions[cp.career] ?? "",
      whyItMatches,
      strongestTraits: strongest,
      score: cs.score,
    };
  });
}

function humanList(items: string[]): string {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export type { AnswerRecord };
