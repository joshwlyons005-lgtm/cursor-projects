import Link from "next/link";

import { PlayerCard } from "@/components/ui/PlayerCard";
import { buttonVariants } from "@/components/ui/button";
import { roster } from "@/lib/data";
import { cn } from "@/lib/utils";

export function RosterSection() {
  const preview = roster.slice(0, 8);

  return (
    <section id="roster" className="scroll-mt-24 bg-[#050b14] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Team roster
            </h2>
            <p className="mt-2 max-w-xl text-slate-400">
              Faces of the club — stars, grinders, and the depth that wins
              series.
            </p>
          </div>
          <Link
            href="/roster"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-white/20 text-white hover:bg-white/10"
            )}
          >
            View all players
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </section>
  );
}
