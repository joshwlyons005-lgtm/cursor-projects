import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { buttonVariants } from "@/components/ui/button";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

const paths = [
  {
    title: "Join as a Builder",
    description:
      "For people who want to build, learn, meet others, and stay connected without formal responsibilities.",
    bullets: [
      "Build projects",
      "Learn AI and modern tools",
      "Meet collaborators",
      "Attend events",
      "Submit your work",
      "Stay low-commitment",
    ],
    cta: { label: "Join as a Builder", href: "/join" },
    variant: "default" as const,
  },
  {
    title: "Submit a Project",
    description:
      "For builders who already have something working and want visibility.",
    bullets: [
      "Showcase your project",
      "Build public proof of work",
      "Get your work shared",
      "Reach other builders",
      "Build credibility",
    ],
    cta: { label: "Submit a Project", href: LINKS.featureForm, external: true },
    variant: "outline" as const,
  },
  {
    title: "Become an Ambassador",
    description: "For people who want to help grow DevNet in their city.",
    bullets: [
      "Lead locally",
      "Connect builders",
      "Host events",
      "Build a chapter",
      "Represent DevNet in your city",
      "Take more ownership in the network",
    ],
    cta: { label: "Apply to Become an Ambassador", href: LINKS.ambassadorForm, external: true },
    variant: "outline" as const,
  },
];

export function ParticipationPaths() {
  return (
    <SectionShell id="paths" className="bg-black/15">
      <div className="space-y-12">
        <SectionHeading align="center" title="Choose your path." />
        <div className="grid gap-8 lg:grid-cols-3">
          {paths.map((p) => (
            <div
              key={p.title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-card/70 p-8 backdrop-blur-sm"
            >
              <h3 className="font-heading text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-white">
                  Best if you want to
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-8">
                {p.cta.external ? (
                  <a
                    href={p.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg", variant: p.variant }),
                      "w-full"
                    )}
                  >
                    {p.cta.label}
                  </a>
                ) : (
                  <Link
                    href={p.cta.href}
                    className={cn(
                      buttonVariants({ size: "lg", variant: p.variant }),
                      "inline-flex w-full justify-center"
                    )}
                  >
                    {p.cta.label}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
