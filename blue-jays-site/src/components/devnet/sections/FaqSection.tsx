import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need coding experience?",
    a: "No. DevNet is open to beginners and experienced builders. You can use AI, code, no-code tools, design tools, or any workflow that helps you build.",
  },
  {
    q: "Do I need to be in computer science?",
    a: "No. DevNet is open to students from every faculty. Business, health science, engineering, arts, media, social science, and computer science students can all build useful things.",
  },
  {
    q: "Is DevNet only for developers?",
    a: "No. DevNet is for builders — developers, founders, designers, operators, students, AI users, and people learning how to turn ideas into real products.",
  },
  {
    q: "What if I am not technical?",
    a: "You can still join. DevNet is designed for people who want to learn, experiment, and improve their ability to build using AI and modern tools.",
  },
  {
    q: "Do I need to post or be active?",
    a: "No. There are no posting requirements, activity minimums, or forced participation.",
  },
  {
    q: "Can I submit a project if it is not finished?",
    a: "Yes, as long as there is something working. Prototypes, beta products, live tools, and early MVPs are all valid.",
  },
  {
    q: "What does DevNet look for in featured projects?",
    a: "We look for real projects that show execution. They do not need to be perfect, highly technical, or fully launched.",
  },
  {
    q: "Can I start a chapter?",
    a: "Yes. Builders who want to grow DevNet locally can apply to become an ambassador or start a chapter.",
  },
  {
    q: "Are chapters controlled by DevNet HQ?",
    a: "No. Chapters operate independently. DevNet’s main branch provides brand affiliation, optional support, and broader network visibility.",
  },
  {
    q: "What is the difference between a member and a chapter?",
    a: "A member joins the broader network as an individual. A chapter is a local student-led affiliate that runs its own community, events, team, and local strategy.",
  },
];

export function FaqSection() {
  return (
    <SectionShell id="faq">
      <div className="space-y-10">
        <SectionHeading align="center" title="Questions people usually ask." />
        <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-3xl border border-white/10 bg-card/40">
          {faqs.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="cursor-pointer list-none font-medium text-white [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
