import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

const samples = [
  {
    title: "Campus ops dashboard",
    meta: "Automation · shipped internally",
  },
  {
    title: "AI workflow for research notes",
    meta: "AI tooling · working prototype",
  },
  {
    title: "Micro-SaaS billing MVP",
    meta: "No-code + APIs · beta users",
  },
];

export function FeaturedProjectsTeaser() {
  return (
    <SectionShell id="featured-projects">
      <div className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Get your work seen."
            description="DevNet helps builders create public proof of work by featuring strong projects through our main distribution channels. Your project does not need to be perfect — it needs to be real."
          />
          <a
            href={LINKS.featureForm}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "shrink-0")}
          >
            Submit Your Project
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {samples.map((p) => (
            <Card key={p.title} className="border-white/10 bg-gradient-to-b from-card to-black/40">
              <CardContent className="space-y-3 p-6">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/25 to-violet-600/10 ring-1 ring-white/10" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.meta}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Want the full showcase?{" "}
          <Link href="/projects" className="text-primary underline-offset-4 hover:underline">
            Browse featured projects →
          </Link>
        </p>
      </div>
    </SectionShell>
  );
}
