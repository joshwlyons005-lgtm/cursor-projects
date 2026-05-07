import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { buttonVariants } from "@/components/ui/button";
import { LINKS, mailtoDevNet } from "@/lib/links";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "About",
  description:
    "DevNet is a builder network across North America — mission, structure, and how chapters relate to HQ.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-gradient-to-b from-background to-black/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Mission
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            About DevNet
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            DevNet is a builder network for students, developers, founders, and AI-native
            creators across North America. Our mission is to help people ship real
            projects, connect with other builders, and build public proof of work.
          </p>
        </div>
      </section>

      <SectionShell>
        <div className="space-y-6 text-muted-foreground">
          <p className="leading-relaxed">
            DevNet operates as a parent brand and network layer. The main branch connects
            builders, features projects, supports the broader ecosystem, and helps
            individual members and local chapters get more visibility.
          </p>
          <p className="leading-relaxed">
            Local chapters operate independently. Individual builders can join without
            needing to run or formally participate in a chapter — flexible participation is
            a feature, not a bug.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-black/15">
        <SectionHeading
          align="center"
          title="How DevNet is structured."
          description="Three layers — one network."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-card/70 p-8">
            <h3 className="font-heading text-xl font-semibold text-white">DevNet Main</h3>
            <p className="mt-2 text-sm text-primary">Parent brand & distribution</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-muted-foreground">
              <li>Connects builders across cities and campuses</li>
              <li>Features projects through main social channels</li>
              <li>Supports members and chapters</li>
              <li>Promotes events, webinars, hackathons, and demo days</li>
              <li>Builds broader partnerships and visibility</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-card/70 p-8">
            <h3 className="font-heading text-xl font-semibold text-white">
              DevNet Members
            </h3>
            <p className="mt-2 text-sm text-primary">Individual builders</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-muted-foreground">
              <li>Build at their own pace</li>
              <li>Submit projects</li>
              <li>Attend events when useful</li>
              <li>Meet collaborators</li>
              <li>Learn modern tools</li>
              <li>Stay connected without heavy commitments</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-card/70 p-8">
            <h3 className="font-heading text-xl font-semibold text-white">
              DevNet Chapters
            </h3>
            <p className="mt-2 text-sm text-primary">Independent local affiliates</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-muted-foreground">
              <li>Run their own events</li>
              <li>Recruit local members</li>
              <li>Manage their own socials</li>
              <li>Build their own teams</li>
              <li>Create local partnerships</li>
              <li>Represent DevNet in their city</li>
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="border-b-0">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
          <p className="text-muted-foreground">
            Ready to plug in? Pick the entry that matches how you want to contribute.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
            <a
              href={mailtoDevNet()}
              className={cn(buttonVariants({ size: "lg", variant: "ghost" }))}
            >
              Email the team
            </a>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
