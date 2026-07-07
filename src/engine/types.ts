export interface TraitState {
  score: number;
  confidence: number;
}

export type TraitProfile = Record<string, TraitState>;

export interface AnswerRecord {
  questionId: number;
  questionText: string;
  answerIndex: number;
  answerText: string;
  traits: string[];
}

export interface CareerScore {
  career: string;
  score: number;
}

export interface RecommendedCareer {
  career: string;
  description: string;
  whyItMatches: string;
  strongestTraits: string[];
  score: number;
}
