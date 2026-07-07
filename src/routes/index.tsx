import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Layers, Brain } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
        <span className="gold-chip">Adaptive Career Intelligence</span>
        <h1 className="mt-6 text-5xl leading-[1.05] text-display sm:text-6xl md:text-7xl">
          Discover the work you were<br/>quietly built for.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Compass is a five-question adaptive assessment that gently learns how you think,
          decide, and lead — then reveals the careers where your natural strengths compound.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/auth" className="btn-primary">
            Begin your assessment <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/features" className="btn-outline">How it works</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Brain, title: "Adaptive by design", body: "Every answer reshapes the next question. No fixed script." },
            { icon: Layers, title: "Weighted evidence", body: "Traits accumulate quietly across your responses — never binary." },
            { icon: Sparkles, title: "Grounded recommendations", body: "Careers emerge from patterns of strength, not shortcuts." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-elegant p-8">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-xl text-display">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
