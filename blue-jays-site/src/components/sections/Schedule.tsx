import Link from "next/link";

import { GameCard } from "@/components/ui/GameCard";
import { buttonVariants } from "@/components/ui/button";
import { upcomingGames } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Schedule() {
  const preview = upcomingGames.slice(0, 8);

  return (
    <section id="schedule" className="scroll-mt-24 bg-[#050b14] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Upcoming games
            </h2>
            <p className="mt-2 max-w-xl text-slate-400">
              Next matchups — home at Rogers Centre or on the road with the
              same Toronto energy.
            </p>
          </div>
          <Link
            href="/schedule"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-jays-blue/50 text-jays-blue hover:bg-jays-blue/10"
            )}
          >
            Full schedule
          </Link>
        </div>

        <div className="mt-10 grid gap-4">
          {preview.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
