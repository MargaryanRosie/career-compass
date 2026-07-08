import { fixedQuestion } from "@/config/fixedQuestion";
import type { Question } from "@/config/questionLibrary";
import {
  applyAnswer,
  buildRecommendations,
  computeCareerScores,
  createEmptyTraitProfile,
  selectNextQuestion,
} from "./recommendationEngine";
import type { AnswerRecord, CareerScore, RecommendedCareer, TraitProfile } from "./types";

/**
 * Controls the end-to-end assessment flow described in the architecture
 * diagram:
 *
 *   Start Assessment
 *     -> Load fixedQuestion.ts, display Question 1
 *     -> user answers -> update hidden trait profile
 *     -> initialize recommendation engine, calculate initial career scores
 *     -> select best adaptive question from questionLibrary.ts
 *     -> display Question 2
 *     -> repeat (update profile, recalc scores, select next question)
 *       until 5 questions have been answered
 *     -> generate final recommendation
 *
 * The recommendation engine (recommendationEngine.ts) never references
 * fixedQuestion or its id — this module is the only place that knows the
 * assessment begins with a fixed question before the adaptive engine
 * starts.
 */
export const TOTAL_QUESTIONS = 5;

/** Step 1: always start with the fixed question, no engine involved. */
export function getInitialQuestion(): Question {
  return fixedQuestion;
}

/** The hidden trait profile starts empty and is filled in as questions are answered. */
export function getInitialTraitProfile(): TraitProfile {
  return createEmptyTraitProfile();
}

export interface AssessmentState {
  profile: TraitProfile;
  answers: AnswerRecord[];
  askedQuestionIds: number[];
}

export function getInitialAssessmentState(): AssessmentState {
  return {
    profile: getInitialTraitProfile(),
    answers: [],
    askedQuestionIds: [],
  };
}

export type AnswerStepResult =
  | { done: false; state: AssessmentState; nextQuestion: Question }
  | { done: true; state: AssessmentState };

/**
 * Record an answer to `current` and figure out what happens next.
 *
 * - While `current` is the fixed question, we only update the trait
 *   profile — the recommendation engine is not touched, and the fixed
 *   question's id is never added to `askedQuestionIds` (that list is
 *   reserved for questionLibrary ids the adaptive engine has already used).
 * - The moment the fixed question is answered, the recommendation engine
 *   is "initialized" for the first time: we compute career scores from
 *   the trait profile it just produced and ask the engine to select the
 *   best adaptive question (Question 2) from questionLibrary.ts.
 * - Every subsequent answer repeats: update profile -> recalculate career
 *   scores -> select next question, until TOTAL_QUESTIONS is reached.
 */
export function answerQuestion(
  current: Question,
  answerIndex: number,
  state: AssessmentState,
): AnswerStepResult {
  const answer = current.sampleAnswers[answerIndex];

  // Update hidden trait profile.
  const nextProfile = applyAnswer(state.profile, answer.traits);

  const nextAnswers: AnswerRecord[] = [
    ...state.answers,
    {
      questionId: current.id,
      questionText: current.text,
      answerIndex,
      answerText: answer.answer,
      traits: answer.traits,
    },
  ];

  // The fixed question is intentionally excluded from the "asked" list
  // that the adaptive engine consults — it never knows Question 1 existed.
  const isFixedQuestion = current.id === fixedQuestion.id;
  const nextAsked = isFixedQuestion
    ? state.askedQuestionIds
    : [...state.askedQuestionIds, current.id];

  const nextState: AssessmentState = {
    profile: nextProfile,
    answers: nextAnswers,
    askedQuestionIds: nextAsked,
  };

  if (nextAnswers.length >= TOTAL_QUESTIONS) {
    return { done: true, state: nextState };
  }

  // Initialize / re-run the recommendation engine: recalculate career
  // scores from the latest trait profile, then pick the next question.
  computeCareerScores(nextProfile);
  const nextQuestion = selectNextQuestion(nextProfile, nextAsked);

  return { done: false, state: nextState, nextQuestion };
}

export interface AssessmentResult {
  careerScores: CareerScore[];
  recommendedCareers: RecommendedCareer[];
}

/** Step: generate final recommendation once all questions are answered. */
export function finalizeAssessment(profile: TraitProfile, topN = 3): AssessmentResult {
  return {
    careerScores: computeCareerScores(profile),
    recommendedCareers: buildRecommendations(profile, topN),
  };
}
