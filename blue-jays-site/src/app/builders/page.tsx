import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { FaqSection } from "@/components/devnet/sections/FaqSection";
import { FeaturePipeline } from "@/components/devnet/sections/FeaturePipeline";
import { buttonVariants } from "@/components/ui/button";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Builders",
  description:
    "Join DevNet as an individual builder — low commitment, real projects, modern tools, and community.",
};

export default function BuildersPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-gradient-to-b from-background to-black/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Individual members
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Build on your own terms.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            DevNet Members join the broader builder network without heavy requirements.
            No posting quotas, no activity minimums — just a network when you need it.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/join" className={buttonVariants({ size: "lg" })}>
              Join DevNet
            </Link>
            <a
              href={LINKS.featureForm}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Submit a Project
            </a>
          </div>
        </div>
      </section>

      <SectionShell>
        <SectionHeading
          title="Who it’s for"
          description="Students building projects, founders testing MVPs, designers shipping portfolios, and anyone learning to build faster with AI — technical depth optional."
        />
      </SectionShell>

      <SectionShell className="bg-black/15">
        <div className="grid gap-8 lg:grid-cols-2">
          <SectionHeading title="Member benefits" />
          <ul className="space-y-4 text-muted-foreground">
            <li className="leading-relaxed">
              Build at your own pace — no forced cadence.
            </li>
            <li className="leading-relaxed">
              Meet students, founders, developers, designers, and AI-native creators.
            </li>
            <li className="leading-relaxed">
              Find collaborators for technical and non-technical roles.
            </li>
            <li className="leading-relaxed">
              Attend webinars, hackathons, demo days, workshops, and chapter events.
            </li>
            <li className="leading-relaxed">
              Submit projects for potential features on DevNet’s main channels.
            </li>
            <li className="leading-relaxed">
              Learn how others use AI, automation, and modern workflows.
            </li>
          </ul>
        </div>
      </SectionShell>

      <FeaturePipeline />

      <SectionShell>
        <SectionHeading
          title="Events"
          description="Join events across the network when they’re useful — from build nights to webinars."
        />
        <Link href="/events" className={cn(buttonVariants({ variant: "outline" }), "mt-8 inline-flex")}>
          Browse events →
        </Link>
      </SectionShell>

      <FaqSection />

      <SectionShell className="border-b-0">
        <div className="rounded-3xl border border-white/10 bg-card/60 p-10 text-center">
          <h2 className="font-heading text-2xl font-semibold text-white">
            Ready to join the network?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start with low commitment — stay as active as you want.
          </p>
          <Link href="/join" className={cn(buttonVariants({ size: "lg" }), "mt-8 inline-flex")}>
            Join DevNet
          </Link>
        </div>
      </SectionShell>
    </>
  );
}
