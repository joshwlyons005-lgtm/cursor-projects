import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const blocks = [
  {
    title: "Rogers Centre",
    body: "Downtown’s dome — skyline views, retractable roof drama, and the roar when Toronto ties it late.",
    cta: "Venue info",
    href: "https://www.mlb.com/bluejays/ballpark",
  },
  {
    title: "Game day",
    body: "Gates, transit, food lines, and the best spots to catch BP — make the most of every visit.",
    cta: "Game day guide",
    href: "/#fan-zone",
  },
  {
    title: "Community & merch",
    body: "Rep the city — jerseys, caps, and grassroots baseball programs across the GTA.",
    cta: "Shop team store",
    href: "https://www.mlbshop.com/toronto-blue-jays",
  },
];

export function FanExperience() {
  return (
    <section
      id="fan-zone"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/10 py-20 sm:py-28"
    >
      <Image
        src="https://picsum.photos/seed/rogers-centre-fan/1920/900"
        alt=""
        fill
        className="object-cover opacity-30"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-[#050b14]/95 to-jays-navy/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Fan experience
        </h2>
        <p className="mt-2 max-w-2xl text-lg text-slate-300">
          More than baseball — it’s the sound of the city under one roof, from
          first pitch to the last train out of Union.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-jays-blue/50"
            >
              <h3 className="font-heading text-xl font-bold text-white">
                {b.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {b.body}
              </p>
              <a
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "mt-6 border-jays-blue/50 text-jays-blue hover:bg-jays-blue/10"
                )}
              >
                {b.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
