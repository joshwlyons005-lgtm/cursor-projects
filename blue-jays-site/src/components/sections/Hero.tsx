import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { tickerStats } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hero() {
  const items = [...tickerStats, ...tickerStats];

  return (
    <section
      id="hero"
      className="relative flex min-h-[min(100vh,920px)] flex-col justify-end overflow-hidden bg-jays-navy"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -18deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.35) 40px,
            rgba(255,255,255,0.35) 41px
          )`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-jays-navy/20 via-[#050b14]/80 to-[#050b14]" />
      <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-jays-blue/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-40 h-72 w-72 rounded-full bg-jays-red/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-8 pt-24 sm:px-6 lg:px-8 lg:pb-16 lg:pt-28">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.35em] text-jays-blue">
          Toronto · MLB · AL East
        </p>
        <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          THIS IS TORONTO.
          <span className="block text-jays-blue">THIS IS OUR TEAM.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          The Blue Jays belong to Canada’s biggest city — loud nights at Rogers
          Centre, neighbourhood pride across the GTA, and a fanbase that rides
          every pitch.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/schedule"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-jays-blue text-white hover:bg-jays-blue/90"
            )}
          >
            View Schedule
          </Link>
          <Link
            href="/news"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/25 bg-white/5 text-white hover:bg-white/10"
            )}
          >
            Latest News
          </Link>
          <a
            href="https://www.mlb.com/bluejays/tickets"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-jays-red text-white hover:bg-jays-red/90"
            )}
          >
            Buy Tickets
          </a>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-black/30">
        <div className="overflow-hidden py-3">
          <div className="animate-ticker flex w-max gap-12 whitespace-nowrap pr-12 font-heading text-sm font-semibold uppercase tracking-wider text-slate-300">
            {items.map((t, i) => (
              <span key={`${t.label}-${i}`} className="inline-flex items-center gap-2">
                <span className="text-jays-red">/</span>
                <span className="text-slate-500">{t.label}</span>
                <span className="text-white">{t.value}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
