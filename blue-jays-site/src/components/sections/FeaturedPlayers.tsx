import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { featuredPlayers } from "@/lib/data";
import { imageUrl } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FeaturedPlayers() {
  return (
    <section
      id="featured-players"
      className="scroll-mt-24 border-y border-white/10 bg-gradient-to-b from-[#050b14] to-jays-navy/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured players
            </h2>
            <p className="mt-2 max-w-xl text-slate-400">
              Star power that defines Toronto baseball — leaders who set the tone
              in the biggest moments.
            </p>
          </div>
          <Link
            href="/roster"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-white/20 text-white hover:bg-white/10"
            )}
          >
            Full roster
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredPlayers.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/80 transition-all duration-300 hover:border-jays-blue/60 hover:shadow-xl hover:shadow-jays-navy/30"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={imageUrl(p.imageSeed, 600, 750)}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="font-heading text-5xl font-bold text-white/30">
                      #{p.number}
                    </p>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {p.name}
                    </h3>
                    <p className="text-sm font-medium text-jays-blue">
                      {p.position}
                    </p>
                  </div>
                  <div className="rounded-lg bg-black/50 px-3 py-2 text-right backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      {p.keyStatLabel}
                    </p>
                    <p className="font-heading text-2xl font-bold text-white">
                      {p.keyStat}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-slate-300">
                  {p.writeup}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
