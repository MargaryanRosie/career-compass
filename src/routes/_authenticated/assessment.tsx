import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
  answerQuestion,
  finalizeAssessment,
  getInitialAssessmentState,
  getInitialQuestion,
  TOTAL_QUESTIONS,
  type AssessmentState,
} from "@/engine/assessmentEngine";
import type { Question } from "@/config/questionLibrary";
import { saveAssessment } from "@/services/assessments";

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

  const [state, setState] = useState<AssessmentState>(() => getInitialAssessmentState());
  const [current, setCurrent] = useState<Question>(() => getInitialQuestion());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const step = state.answers.length + 1;
  const progress = useMemo(() => (state.answers.length / TOTAL_QUESTIONS) * 100, [state.answers.length]);

  async function choose(answerIndex: number) {
    if (saving) return;
    const result = answerQuestion(current, answerIndex, state);

    if (result.done) {
      setSaving(true);
      setError(null);
      try {
        const { careerScores, recommendedCareers } = finalizeAssessment(result.state.profile, 3);
        const saved = await saveAssessment({
          userId: user!.id,
          traitProfile: result.state.profile,
          careerScores,
          recommendedCareers,
          answers: result.state.answers,
        });
        navigate({ to: "/results/$id", params: { id: saved.id }, replace: true });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Could not save your results.");
        setSaving(false);
      }
      return;
    }

    setState(result.state);
    setCurrent(result.nextQuestion);
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
