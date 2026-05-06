import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { NetworkMapSection } from "@/components/devnet/sections/NetworkMap";
import { buttonVariants } from "@/components/ui/button";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Chapters",
  description:
    "Start or join an independent DevNet chapter — city-first naming, local autonomy, and builder-focused programming.",
};

export default function ChaptersPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-gradient-to-b from-background to-black/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Local communities
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Start a local builder community.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            DevNet Chapters are independent, student-led affiliates that grow builder
            ecosystems in their cities — with autonomy over events, socials, recruiting,
            and partnerships.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={LINKS.ambassadorForm}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              Apply to Become an Ambassador
            </a>
            <Link
              href="/join"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              Chapter questions
            </Link>
          </div>
        </div>
      </section>

      <SectionShell>
        <SectionHeading
          title="What chapters are"
          description="Chapters use the DevNet name to signal a serious builder community locally. They operate independently — managing events, teams, social accounts, and strategy — while staying aligned with DevNet’s mission."
        />
      </SectionShell>

      <SectionShell className="bg-black/15">
        <SectionHeading title="What chapters can do" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Host workshops, build nights, hackathons, demo days, and speaker sessions",
            "Recruit builders across campuses and cities",
            "Define leadership roles and operating rituals",
            "Run city social accounts that showcase local builders",
            "Partner with clubs, startups, and organizations locally",
            "Send standout projects back into the broader DevNet network",
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-white/10 bg-card/70 p-5 text-sm text-muted-foreground"
            >
              {t}
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="standards">
        <SectionHeading
          eyebrow="Alignment"
          title="Independent, but aligned."
          description="Autonomy is the default — we’re not here to micromanage local communities. Chapters should stay professional and builder-centered."
        />
        <div className="mt-10 space-y-6 text-muted-foreground">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-heading text-lg font-semibold text-white">Standards</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>Keep the brand professional — represent DevNet clearly and seriously.</li>
              <li>
                Stay focused on builders — AI, software, startups, projects, and learning
                by doing.
              </li>
              <li>Use city-first naming: DevNet [City].</li>
              <li>Do not misrepresent yourself as DevNet HQ.</li>
              <li>
                Do not create major obligations for DevNet HQ without approval — large
                partnerships, sponsorships, or contracts require sign-off.
              </li>
            </ul>
          </div>
          <p className="text-sm leading-relaxed">
            Short version: chapters are independent local affiliates. They own events,
            socials, recruiting, teams, partnerships, and community. HQ provides brand
            affiliation, optional support, and broader visibility.
          </p>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          title="City-first naming keeps DevNet scalable."
          description="Chapters should use DevNet [City]. Schools can appear for context — for example DevNet London — Western University — but the public-facing brand stays city-first."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { city: "DevNet London", note: "Western University" },
            { city: "DevNet Halifax", note: "Dalhousie University" },
            { city: "DevNet Kingston", note: "Queen’s University" },
            { city: "DevNet Waterloo", note: "UW / Laurier" },
            { city: "DevNet Toronto", note: "UofT / TMU / York" },
          ].map((row) => (
            <div
              key={row.city}
              className="rounded-xl border border-white/10 bg-card/60 px-4 py-3 text-sm"
            >
              <p className="font-medium text-white">{row.city}</p>
              <p className="mt-1 text-muted-foreground">{row.note}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <NetworkMapSection />

      <SectionShell>
        <SectionHeading title="Ambassador responsibilities" />
        <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-muted-foreground">
          <li>Grow a builder culture locally — consistent events and storytelling.</li>
          <li>Connect builders to collaborators and opportunities.</li>
          <li>Host programming that helps people ship — not just talk.</li>
          <li>Represent DevNet with professionalism in your city.</li>
          <li>Feed strong projects and stories back to the wider network.</li>
        </ul>
        <a
          href={LINKS.ambassadorForm}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "mt-10 inline-flex")}
        >
          Apply to Become an Ambassador
        </a>
      </SectionShell>
    </>
  );
}
