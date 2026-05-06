import Link from "next/link";

import { SectionShell } from "@/components/devnet/SectionShell";
import { buttonVariants } from "@/components/ui/button";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <SectionShell id="final-cta" className="border-b-0 pb-24 pt-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/25 via-card to-black px-8 py-14 sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-[380px] rounded-full bg-violet-500/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Start building with DevNet.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Join a network of students and builders using AI, modern tools, and real
            projects to learn faster, build faster, and create public proof of work.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/join" className={cn(buttonVariants({ size: "lg" }), "min-w-[200px]")}>
              Join DevNet
            </Link>
            <a
              href={LINKS.featureForm}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "min-w-[200px]"
              )}
            >
              Submit a Project
            </a>
            <Link
              href="/chapters"
              className={cn(
                buttonVariants({ size: "lg", variant: "ghost" }),
                "min-w-[200px]"
              )}
            >
              Start a Chapter
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
