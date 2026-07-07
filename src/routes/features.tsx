import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "How Compass works — Adaptive assessment methodology" },
      { name: "description", content: "Compass uses weighted trait evidence and information-theoretic question selection to recommend careers that fit your strengths." },
      { property: "og:title", content: "How Compass works" },
      { property: "og:description", content: "The methodology behind Compass' adaptive career recommendation engine." },
    ],
  }),
  component: Features,
});

const sections = [
  {
    title: "A hidden trait profile",
    body: "Every answer contributes weighted evidence to multiple work-related traits. Nothing is binary. Every response nudges an internal profile that no one but the engine sees.",
  },
  {
    title: "Weighted career scoring",
    body: "Each career carries a weighted signature of the traits that predict success. Your score for a career is the sum of your evidence against those weights — not simple counting.",
  },
  {
    title: "Adaptive question selection",
    body: "After every answer, the engine scans the entire library and picks the next question by how much it would reduce uncertainty in the traits that matter for your current top careers.",
  },
  {
    title: "Recommendations that emerge",
    body: "Your final matches are the natural output of accumulated evidence — not the answer to any single question.",
  },
];

function Features() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-5xl text-display">How Compass works</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A brief look under the hood — without revealing which traits you're being measured for.
        </p>
        <div className="mt-12 space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="card-elegant p-8">
              <h2 className="text-2xl text-display">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
