import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";

const beliefs = [
  {
    title: "Anyone can build.",
    body: "Coding is no longer limited to people with years of technical training. AI and modern tools have lowered the barrier to entry. If you are willing to learn and experiment, you can build.",
  },
  {
    title: "Execution matters more than ideas.",
    body: "Ideas are easy to talk about. DevNet is for people who want to test, build, launch, and improve.",
  },
  {
    title: "Real products matter more than concepts.",
    body: "We care about working projects, prototypes, experiments, and shipped products. They do not need to be perfect. They need to be real.",
  },
  {
    title: "Public proof of work creates opportunity.",
    body: "When people can see what you are building, they are more likely to collaborate, support, hire, invest, or pay attention.",
  },
  {
    title: "Builders grow faster around other builders.",
    body: "The right network helps you find ideas, feedback, collaborators, and momentum.",
  },
];

export function CoreBeliefs() {
  return (
    <SectionShell id="beliefs" className="bg-black/15">
      <div className="space-y-12">
        <SectionHeading
          align="center"
          eyebrow="Principles"
          title="What DevNet believes."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {beliefs.map((b, i) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-sm sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Belief {i + 1}
              </p>
              <h3 className="mt-3 font-heading text-xl font-semibold text-white">
                {b.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
