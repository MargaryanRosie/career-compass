import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
  applyAnswer,
  buildRecommendations,
  computeCareerScores,
  createEmptyTraitProfile,
  getFixedFirstQuestion,
  selectNextQuestion,
} from "@/engine/recommendationEngine";
import type { AnswerRecord, TraitProfile } from "@/engine/types";
import type { Question } from "@/config/questionLibrary";
import { saveAssessment } from "@/services/assessments";

const TOTAL_QUESTIONS = 5;

export const Route = createFileRoute("/_authenticated/assessment")({
  head: () => ({
    meta: [
      { title: "Assessment — Compass" },
      { name: "description", content: "Answer five adaptive questions to reveal your best-fit careers." },
    ],
  }),
  component: AssessmentPage,
});

function AssessmentPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [profile, setProfile] = useState<TraitProfile>(() => createEmptyTraitProfile());
  const [asked, setAsked] = useState<number[]>(() => []);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [current, setCurrent] = useState<Question>(() => getFixedFirstQuestion());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const step = answers.length + 1;
  const progress = useMemo(() => (answers.length / TOTAL_QUESTIONS) * 100, [answers.length]);

  async function choose(answerIndex: number) {
    if (saving) return;
    const answer = current.sampleAnswers[answerIndex];
    const nextProfile = applyAnswer(profile, answer.traits);
    const nextAnswers: AnswerRecord[] = [
      ...answers,
      {
        questionId: current.id,
        questionText: current.text,
        answerIndex,
        answerText: answer.answer,
        traits: answer.traits,
      },
    ];
    const nextAsked = [...asked, current.id];

    if (nextAnswers.length >= TOTAL_QUESTIONS) {
      setSaving(true);
      setError(null);
      try {
        const careerScores = computeCareerScores(nextProfile);
        const recs = buildRecommendations(nextProfile, 3);
        const saved = await saveAssessment({
          userId: user!.id,
          traitProfile: nextProfile,
          careerScores,
          recommendedCareers: recs,
          answers: nextAnswers,
        });
        navigate({ to: "/results/$id", params: { id: saved.id }, replace: true });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Could not save your results.");
        setSaving(false);
      }
      return;
    }

    setProfile(nextProfile);
    setAnswers(nextAnswers);
    setAsked(nextAsked);
    setCurrent(selectNextQuestion(nextProfile, nextAsked));
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
          <span>Question {step} of {TOTAL_QUESTIONS}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${(step - 1) / TOTAL_QUESTIONS * 100}%` }}
          />
        </div>
      </div>

      <h1 className="text-3xl text-display sm:text-4xl">{current.text}</h1>
      <p className="mt-2 text-sm text-muted-foreground">Choose the response that feels most true.</p>

      <div className="mt-8 space-y-3">
        {current.sampleAnswers.map((a, i) => (
          <button
            key={i}
            disabled={saving}
            onClick={() => choose(i)}
            className="answer-card"
          >
            <span className="text-base leading-relaxed">{a.answer}</span>
          </button>
        ))}
      </div>

      {saving && (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Composing your recommendations…
        </p>
      )}
      {error && <p className="mt-6 text-center text-sm text-destructive">{error}</p>}
    </div>
  );
}
