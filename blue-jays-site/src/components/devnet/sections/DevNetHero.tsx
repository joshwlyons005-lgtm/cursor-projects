"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

function TiltCard({
  className,
  children,
  intensity = 8,
}: {
  className?: string;
  children: React.ReactNode;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(900px) rotateX(0deg) rotateY(0deg)"
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rx = (-dy * intensity).toFixed(2);
      const ry = (dx * intensity).toFixed(2);
      setTransform(
        `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
      );
    };

    const onLeave = () =>
      setTransform("perspective(900px) rotateX(0deg) rotateY(0deg)");

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [intensity]);

  return (
    <div
      ref={ref}
      style={{ transform }}
      className={cn(
        "rounded-2xl border border-white/15 bg-white/[0.04] p-4 shadow-[0_20px_60px_oklch(0_0_0/0.45)] backdrop-blur-md transition-transform duration-200 will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DevNetHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="devnet-grid-bg devnet-radial-glow relative min-h-[min(100vh,920px)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-primary/25 blur-3xl animate-devnet-float"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 size-[380px] rounded-full bg-violet-500/15 blur-3xl animate-devnet-float-reverse"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Image
                src="/devnet-logo.svg"
                alt="DevNet"
                width={176}
                height={40}
                priority
                className="h-9 w-auto"
              />
            </div>
            <div className="space-y-5">
              <h1 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                Anyone can build now.
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                DevNet is a North American builder network helping students,
                developers, founders, and AI-native creators ship real projects,
                connect with other builders, and build public proof of work.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                You do not need to be a technical expert to start. If you have an
                idea, a workflow, a product, a startup, or a problem you want to
                solve, DevNet helps you build faster and get connected.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/join"
                className={cn(buttonVariants({ size: "lg" }), "h-10 px-4 text-base")}
              >
                Join DevNet
              </Link>
              <a
                href={LINKS.featureForm}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-10 px-4 text-base"
                )}
              >
                Submit a Project
              </a>
              <Link
                href="/chapters"
                className={cn(
                  buttonVariants({ size: "lg", variant: "ghost" }),
                  "h-10 px-4 text-base"
                )}
              >
                Explore Chapters
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-white/90">13 cities</span> across
              North America ·{" "}
              <span className="text-white/80">8 in Canada</span>
              <span className="text-muted-foreground"> · </span>
              <span className="text-white/80">5 in the United States</span>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div className="relative grid min-h-[420px] grid-cols-6 grid-rows-6 gap-3 lg:min-h-[480px]">
              <TiltCard className="col-span-4 col-start-1 row-span-3 row-start-1">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-primary">
                  Featured project
                </p>
                <p className="mt-2 font-medium text-white">
                  AI study planner built by a Western student
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Working prototype · shipped with modern tools
                </p>
              </TiltCard>

              <TiltCard className="col-span-3 col-start-4 row-span-2 row-start-3 translate-x-2">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-primary">
                  Chapter network
                </p>
                <p className="mt-2 text-sm text-white">
                  DevNet London · DevNet Toronto · DevNet Waterloo
                </p>
              </TiltCard>

              <TiltCard className="col-span-4 col-start-2 row-span-2 row-start-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-primary">
                  Builder path
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  Build → Submit → Get Featured → Connect
                </p>
              </TiltCard>

              <TiltCard className="col-span-3 col-start-1 row-span-2 row-start-4 -translate-y-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-primary">
                  Event
                </p>
                <p className="mt-2 text-sm text-white">
                  Demo day · workshop · build night
                </p>
              </TiltCard>

              <div className="col-span-6 col-start-1 row-start-6 rounded-2xl border border-dashed border-white/20 bg-black/20 p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                  Feature pipeline
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-white">
                  <span className="rounded-full bg-white/10 px-3 py-1">Submitted</span>
                  <span aria-hidden className="text-muted-foreground">
                    →
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Reviewed</span>
                  <span aria-hidden className="text-muted-foreground">
                    →
                  </span>
                  <span className="rounded-full bg-primary/25 px-3 py-1 text-primary">
                    Featured
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
