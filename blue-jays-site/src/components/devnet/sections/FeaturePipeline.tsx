import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";

const steps = [
  {
    title: "Submit",
    body: "Builders submit their project through the DevNet feature form.",
  },
  {
    title: "Review",
    body: "Every submission is reviewed manually — no scoring algorithm and no unnecessary gatekeeping. We look for projects that are real, working, and interesting.",
  },
  {
    title: "Feature",
    body: "Accepted projects are featured through DevNet’s main channels, including X and LinkedIn.",
  },
  {
    title: "Stay Connected",
    body: "After being featured, builders can stay in the network, meet others, attend events, submit future projects, or keep building independently.",
  },
];

export function FeaturePipeline() {
  return (
    <SectionShell id="feature-pipeline" className="bg-black/15">
      <div className="space-y-12">
        <SectionHeading
          align="center"
          eyebrow="Transparency"
          title="How project features work."
        />
        <ol className="grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-white/10 bg-card/70 p-6 backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Step {i + 1}: {s.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
