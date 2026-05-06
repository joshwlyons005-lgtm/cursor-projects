import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { buttonVariants } from "@/components/ui/button";

const chapterActions = [
  {
    title: "Host Events",
    body: "Run workshops, build nights, hackathons, demo days, networking sessions, and speaker events.",
  },
  {
    title: "Recruit Local Builders",
    body: "Grow a city or campus community around AI, software, startups, and real projects.",
  },
  {
    title: "Build a Local Team",
    body: "Create your own internal roles, leadership structure, and operating system.",
  },
  {
    title: "Run Local Socials",
    body: "Create and manage your own DevNet city social accounts.",
  },
  {
    title: "Collaborate Locally",
    body: "Work with clubs, schools, startups, founders, and organizations in your city.",
  },
  {
    title: "Feature Local Projects",
    body: "Showcase strong builders and send top projects back into the broader DevNet network.",
  },
];

export function ForChaptersHome() {
  return (
    <SectionShell id="for-chapters" className="bg-black/15">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Local communities"
          title="Build a local DevNet community."
          description="DevNet Chapters are independently operated student-led communities that help builders connect locally. Each chapter owns its operations and local strategy — DevNet’s main branch supports brand, visibility, distribution, and optional collaboration."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {chapterActions.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-card/70 p-6 backdrop-blur-sm"
            >
              <h3 className="font-heading text-lg font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/chapters" className={buttonVariants({ size: "lg" })}>
            Chapter playbook & standards
          </Link>
          <Link
            href="/chapters#standards"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Independent, but aligned
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
