import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const types = [
  {
    title: "Build Nights",
    body: "Work alongside other builders, get feedback, and make progress on real projects.",
  },
  {
    title: "Workshops",
    body: "Learn practical tools, AI workflows, product-building skills, and startup execution.",
  },
  {
    title: "Hackathons",
    body: "Build quickly, test ideas, and collaborate with others.",
  },
  {
    title: "Demo Days",
    body: "Show what you built and get your work in front of the network.",
  },
  {
    title: "Webinars",
    body: "Learn from builders, founders, developers, operators, and students shipping real products.",
  },
];

export function EventsHome() {
  return (
    <SectionShell id="events">
      <div className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Learn, build, and connect through events."
            description="DevNet supports events that help builders improve, meet people, and show their work. Events may happen through the main DevNet network or through independent local chapters."
          />
          <Link href="/events" className={cn(buttonVariants({ size: "lg" }), "shrink-0")}>
            View events
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {types.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary/35"
            >
              <h3 className="font-heading text-lg font-semibold text-white">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {e.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
