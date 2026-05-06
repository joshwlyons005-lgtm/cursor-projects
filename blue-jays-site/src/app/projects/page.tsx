import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { buttonVariants } from "@/components/ui/button";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Projects",
  description:
    "See what DevNet builders ship — and submit your project for a feature.",
};

const criteriaYes = [
  "Working prototypes",
  "Beta products",
  "Live products",
  "AI tools",
  "Automation systems",
  "Student startups",
  "Apps and websites",
  "Useful internal tools",
  "Creative technical projects",
  "Projects built with code, AI, or no-code tools",
];

const criteriaNoNeed = [
  "Perfect design",
  "A massive user base",
  "A fully incorporated company",
  "Advanced technical complexity",
  "Years of coding experience",
];

const recent = [
  "Workflow automation for student clubs",
  "AI-assisted research workspace",
  "Lightweight CRM built for a campus team",
];

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-gradient-to-b from-background to-black/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Public proof of work
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            See what DevNet builders are shipping.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Strong execution beats polish. Share something real — prototypes, betas, and
            live tools all count.
          </p>
          <a
            href={LINKS.featureForm}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "mt-10 inline-flex")}
          >
            Submit Your Project
          </a>
        </div>
      </section>

      <SectionShell>
        <SectionHeading title="Featured projects" description="Placeholder showcase grid — swap in real projects as you feature them." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["Shipped internal tool", "Student SaaS beta", "Campus AI assistant"].map(
            (title) => (
              <div
                key={title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-card/70"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-violet-600/10" />
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Replace with screenshot, link, and builder attribution.
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </SectionShell>

      <SectionShell className="bg-black/15">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-heading text-xl font-semibold text-white">
              What we feature
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {criteriaYes.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-white">
              What we do not need
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {criteriaNoNeed.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading title="Recent features" description="Examples of the kinds of projects we amplify — update this list as you ship features." />
        <ul className="mt-8 list-disc space-y-2 pl-5 text-muted-foreground">
          {recent.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <a
          href={LINKS.featureForm}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "mt-10 inline-flex")}
        >
          Submit Your Project
        </a>
        <p className="mt-6 text-sm text-muted-foreground">
          Curious how review works?{" "}
          <Link href="/#feature-pipeline" className="text-primary underline-offset-4 hover:underline">
            Read the pipeline →
          </Link>
        </p>
      </SectionShell>
    </>
  );
}
