import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { listAssessments } from "@/services/assessments";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/_authenticated/history")({
  head: () => ({
    meta: [{ title: "Assessment history — Compass" }],
  }),
  component: History,
});

function History() {
  const { user } = useAuth();
  const userId = user?.id ?? "";
  const { data = [], isLoading } = useQuery({
    queryKey: ["assessments", userId],
    queryFn: () => listAssessments(userId),
    enabled: !!userId,
  });

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <div className="flex items-center justify-between">
        <div>
          <p className="gold-chip">History</p>
          <h1 className="mt-3 text-4xl text-display">Your assessments</h1>
        </div>
        <Link to="/assessment" className="btn-primary">Start new assessment</Link>
      </div>

      <div className="mt-10 space-y-3">
        {isLoading && <p className="text-muted-foreground">Loading…</p>}
        {!isLoading && data.length === 0 && (
          <div className="card-elegant p-8 text-center text-muted-foreground">
            No assessments yet. Your history will appear here.
          </div>
        )}
        {data.map((a) => (
          <Link
            key={a.id}
            to="/results/$id"
            params={{ id: a.id }}
            className="card-elegant flex items-center justify-between p-6 transition hover:-translate-y-0.5"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {new Date(a.completed_at).toLocaleDateString(undefined, { dateStyle: "long" })}
              </p>
              <p className="mt-1 text-lg text-display">
                🥇 {a.recommended_careers[0]?.career}
              </p>
            </div>
            <span className="text-sm text-muted-foreground">View →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
