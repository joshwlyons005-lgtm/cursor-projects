import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { buttonVariants } from "@/components/ui/button";
import { LINKS, mailtoDevNet } from "@/lib/links";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Join",
  description:
    "Join DevNet as a builder, submit a project for a feature, or apply as an ambassador.",
};

export default function JoinPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-gradient-to-b from-background to-black/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Choose how you want to start.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Three doors — same builder network. Use email for general onboarding until a
            dedicated member form ships.
          </p>
        </div>
      </section>

      <SectionShell className="border-b-0 pb-24">
        <SectionHeading
          align="center"
          title="Participation paths"
          description="Low commitment by default — jump in where it helps you ship."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-card/70 p-8">
            <h2 className="font-heading text-xl font-semibold text-white">
              Join DevNet
            </h2>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              Get connected to the broader network — events, collaborators, and visibility
              when you want it.
            </p>
            <a
              href={mailtoDevNet("Join DevNet")}
              className={cn(buttonVariants({ size: "lg" }), "mt-8 w-full")}
            >
              Email to join
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              We’ll route you to the right community touchpoints.
            </p>
          </div>

          <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-card/70 p-8">
            <h2 className="font-heading text-xl font-semibold text-white">
              Submit a Project
            </h2>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              Share something real — prototypes, betas, live tools, AI workflows, or MVPs.
            </p>
            <a
              href={LINKS.featureForm}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "mt-8 w-full"
              )}
            >
              Open feature form
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              Manual review — no scoring algorithm.
            </p>
          </div>

          <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-card/70 p-8">
            <h2 className="font-heading text-xl font-semibold text-white">
              Become an Ambassador
            </h2>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              Grow DevNet locally — chapters stay autonomous with city-first naming.
            </p>
            <a
              href={LINKS.ambassadorForm}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "mt-8 w-full"
              )}
            >
              Ambassador application
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              For builders who want ownership in their city.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Want context first?{" "}
          <Link href="/about" className="text-primary underline-offset-4 hover:underline">
            Read about DevNet →
          </Link>
        </p>
      </SectionShell>
    </>
  );
}
