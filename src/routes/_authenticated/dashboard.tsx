import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Sparkles } from "lucide-react";
import { listAssessments, getProfile } from "@/services/assessments";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const { user } = useAuth();
  const userId = user?.id ?? "";

  const { data: assessments = [] } = useQuery({
    queryKey: ["assessments", userId],
    queryFn: () => listAssessments(userId),
    enabled: !!userId,
  });
  const { data: profile } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getProfile(userId),
    enabled: !!userId,
  });

  const latest = assessments[0];
  const name = profile?.full_name || user?.email?.split("@")[0] || "there";

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <p className="gold-chip">Dashboard</p>
      <h1 className="mt-4 text-4xl text-display">Welcome back, {name}.</h1>
      <p className="mt-2 text-muted-foreground">
        Take a fresh five-question assessment, or revisit your past results.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="card-elegant md:col-span-2 p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl text-display">Start a new assessment</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Five adaptive questions. Roughly three minutes. Recommendations emerge naturally.
              </p>
            </div>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div className="mt-6">
            <Link to="/assessment" className="btn-primary">
              Begin assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="card-elegant p-8">
          <h3 className="text-lg text-display">Profile</h3>
          <dl className="mt-4 space-y-2 text-sm">
            <div>
              <dt className="text-muted-foreground">Name</dt>
              <dd>{profile?.full_name || "—"}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd className="break-all">{user?.email}</dd>
            </div>
          </dl>
          <Link to="/settings" className="btn-ghost mt-4 -ml-3">Edit profile →</Link>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl text-display">Latest recommendation</h2>
          <Link to="/history" className="btn-ghost">All assessments →</Link>
        </div>
        {latest ? (
          <Link
            to="/results/$id"
            params={{ id: latest.id }}
            className="card-elegant mt-4 block p-8 transition hover:-translate-y-0.5"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {new Date(latest.completed_at).toLocaleDateString(undefined, { dateStyle: "long" })}
            </p>
            <p className="mt-3 text-3xl text-display">
              🥇 {latest.recommended_careers[0]?.career}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {latest.recommended_careers[0]?.description}
            </p>
          </Link>
        ) : (
          <div className="card-elegant mt-4 p-8 text-center text-muted-foreground">
            You haven't completed an assessment yet.
          </div>
        )}
      </div>
    </div>
  );
}
