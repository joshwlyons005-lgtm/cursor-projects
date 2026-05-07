import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { buttonVariants } from "@/components/ui/button";

const benefits = [
  {
    title: "Build at your own pace",
    body: "No pressure to constantly post, attend, or participate. Stay focused on shipping.",
  },
  {
    title: "Meet other builders",
    body: "Connect with students, founders, developers, designers, and AI-native creators.",
  },
  {
    title: "Find collaborators",
    body: "Bounce ideas, find technical or non-technical teammates, and meet people building in similar areas.",
  },
  {
    title: "Attend events",
    body: "Join webinars, hackathons, demo days, workshops, and local chapter events when relevant.",
  },
  {
    title: "Get your work seen",
    body: "Submit projects to be featured through DevNet’s main X and LinkedIn channels.",
  },
  {
    title: "Learn modern tools",
    body: "Discover how other builders are using AI, software, automation, and modern workflows to build faster.",
  },
];

export function ForBuildersHome() {
  return (
    <SectionShell id="for-builders">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Members"
            title="Join the network. Build on your terms."
          />
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              DevNet Members join the broader builder network without heavy requirements.
              There are no posting quotas, no activity minimums, and no forced
              participation.
            </p>
            <p className="leading-relaxed">
              You can stay focused on your own work, get active when it helps, and use
              the network when you need feedback, collaborators, visibility, or support.
            </p>
            <p className="leading-relaxed">
              DevNet does not control your workflow. You use your own tools, your own
              process, and your own pace.
            </p>
          </div>
          <Link href="/builders" className={buttonVariants({ variant: "outline" })}>
            Explore the Builders page →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-primary/35"
            >
              <h3 className="font-heading text-base font-semibold text-white">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
