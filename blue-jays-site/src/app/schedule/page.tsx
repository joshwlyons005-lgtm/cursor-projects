import type { Metadata } from "next";

import { GameCard } from "@/components/ui/GameCard";
import { upcomingGames } from "@/lib/data";

export const metadata: Metadata = {
  title: "Schedule",
  description: "Upcoming Toronto Blue Jays games — home and away.",
};

export default function SchedulePage() {
  return (
    <div className="bg-[#050b14] pb-24 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white">
          Schedule
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-400">
          Full upcoming slate — sync the dates and plan your nights at Rogers
          Centre.
        </p>

        <div className="mt-12 grid gap-4">
          {upcomingGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
