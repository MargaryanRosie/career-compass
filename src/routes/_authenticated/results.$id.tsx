import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getAssessment } from "@/services/assessments";
import type { RecommendedCareer } from "@/engine/types";

export const Route = createFileRoute("/_authenticated/results/$id")({
  head: () => ({
    meta: [{ title: "Your recommendations — Compass" }],
  }),
  component: ResultsPage,
});

const MEDALS = ["🥇", "🥈", "🥉"];
const LABELS = ["Best Career Match", "Second Match", "Third Match"];

function ResultsPage() {
  const { id } = useParams({ from: "/_authenticated/results/$id" });
  const { data, isLoading, error } = useQuery({
    queryKey: ["assessment", id],
    queryFn: () => getAssessment(id),
  });

  if (isLoading) {
    return <div className="mx-auto max-w-3xl px-6 py-24 text-center text-muted-foreground">Loading your results…</div>;
  }
  if (error || !data) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-muted-foreground">We couldn't find that assessment.</p>
        <Link to="/dashboard" className="btn-outline mt-6">Back to dashboard</Link>
      </div>
    );
  }

  const recs = data.recommended_careers as RecommendedCareer[];

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <p className="gold-chip">Your recommendations</p>
      <h1 className="mt-4 text-4xl text-display">Three careers that fit your strengths.</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Completed {new Date(data.completed_at).toLocaleDateString(undefined, { dateStyle: "long" })}
      </p>

      <div className="mt-10 space-y-6">
        {recs.map((r, i) => (
          <article key={r.career} className="card-elegant p-8">
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {LABELS[i]}
              </span>
              <span className="text-2xl" aria-hidden>{MEDALS[i]}</span>
            </div>
            <h2 className="mt-3 text-3xl text-display">{r.career}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{r.description}</p>
            <div className="mt-5 rounded-xl bg-secondary p-5">
              <p className="text-sm font-medium text-primary">Why it matches</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.whyItMatches}</p>
            </div>
            {r.strongestTraits.length > 0 && (
              <div className="mt-5">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Strongest detected qualities</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {r.strongestTraits.map((t) => (
                    <span key={t} className="gold-chip">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Link to="/assessment" className="btn-primary">Take another assessment</Link>
        <Link to="/dashboard" className="btn-outline">Back to dashboard</Link>
      </div>
    </div>
  );
}
