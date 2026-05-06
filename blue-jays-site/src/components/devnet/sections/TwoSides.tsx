import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LINKS } from "@/lib/links";

const builderBullets = [
  "Students building projects",
  "New developers learning with AI",
  "Founders building early products",
  "Business, science, health, engineering, arts, and CS students",
  "People using AI to improve efficiency",
  "Builders looking for collaborators",
  "Anyone who wants to turn ideas into working products",
];

const chapterBullets = [
  "Students who want to lead a builder community",
  "Ambassadors growing DevNet locally",
  "Campus groups focused on AI, software, startups, and projects",
  "Local teams running events, workshops, demo days, or hackathons",
  "Builders who want more ownership in the network",
];

export function TwoSides() {
  return (
    <SectionShell id="two-sides" className="bg-black/15">
      <div className="space-y-12">
        <SectionHeading
          align="center"
          eyebrow="Choose your lane"
          title="Two ways to be part of DevNet."
          description="DevNet is built around two groups: individual builders and independent local chapters. You can join as a builder, start or join a chapter, or participate in both."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-white/10 bg-card/90 backdrop-blur-sm">
            <CardContent className="space-y-6 p-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Builders
                </p>
                <h3 className="font-heading text-2xl font-semibold text-white">
                  For Individual Builders
                </h3>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Individual DevNet Members are builders who want to be part of the
                  broader network without needing to run or formally join a local
                  chapter.
                </p>
                <p>
                  This path is low-commitment by design. You can build at your own
                  pace, submit projects, attend events, meet other builders, and stay
                  connected to the wider DevNet ecosystem.
                </p>
                <p>
                  You do not need to be highly technical. You just need to be
                  interested in building, learning, experimenting, or using modern
                  tools to create something real.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white">
                  Best for
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {builderBullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/join"
                className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
              >
                Join as a Builder
              </Link>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-card/90 backdrop-blur-sm">
            <CardContent className="space-y-6 p-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Chapters
                </p>
                <h3 className="font-heading text-2xl font-semibold text-white">
                  For Independent Chapters
                </h3>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  DevNet Chapters are student-led local communities that use the DevNet
                  name to grow a builder ecosystem in their city.
                </p>
                <p>
                  Chapters operate independently. They manage their own events,
                  socials, recruiting, partnerships, teams, and local strategy.
                  DevNet’s main branch provides brand affiliation, optional support,
                  and broader network visibility.
                </p>
                <p className="font-medium text-white">
                  The goal is autonomy, not micromanagement.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white">
                  Best for
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {chapterBullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/chapters"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto")}
              >
                Start or Join a Chapter
              </Link>
              <p className="text-xs text-muted-foreground">
                Ambassador applications:{" "}
                <a
                  href={LINKS.ambassadorForm}
                  className="text-primary underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply here
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}
