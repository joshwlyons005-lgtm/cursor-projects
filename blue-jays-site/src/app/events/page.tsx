import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { buttonVariants } from "@/components/ui/button";
import { mailtoDevNet } from "@/lib/links";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Events",
  description:
    "Build nights, workshops, hackathons, demo days, and webinars across DevNet.",
};

export default function EventsPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-gradient-to-b from-background to-black/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Learn · build · connect
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Build with the network.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Events might come from DevNet’s main programming or from independent local
            chapters — both are part of the ecosystem.
          </p>
        </div>
      </section>

      <SectionShell>
        <SectionHeading title="Upcoming events" description="Calendar integration can land here — for now, this is a structured placeholder you can wire to your tooling." />
        <div className="mt-8 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-8 text-sm text-muted-foreground">
          No upcoming events published on this static demo — add dates or embed a
          calendar when ready.
        </div>
      </SectionShell>

      <SectionShell className="bg-black/15">
        <SectionHeading title="Past events" />
        <div className="mt-8 rounded-2xl border border-white/10 bg-card/50 p-6 text-sm text-muted-foreground">
          Archive placeholder — drop recaps, recordings, and highlights as you run
          programming.
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          title="Chapter events"
          description="Follow local chapters for city-specific build nights, demo days, and hackathons."
        />
        <Link href="/chapters" className={cn(buttonVariants({ variant: "outline" }), "mt-8 inline-flex")}>
          Explore chapters →
        </Link>
      </SectionShell>

      <SectionShell className="border-b-0">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 to-card p-10 text-center">
          <h2 className="font-heading text-2xl font-semibold text-white">
            Want to host something?
          </h2>
          <p className="mt-3 text-muted-foreground">
            For chapters and ambassadors — start local, stay autonomous, and loop HQ in
            when it helps.
          </p>
          <a
            href={mailtoDevNet("Host a DevNet event")}
            className={cn(buttonVariants({ size: "lg" }), "mt-8 inline-flex")}
          >
            Host an event (email)
          </a>
        </div>
      </SectionShell>
    </>
  );
}
