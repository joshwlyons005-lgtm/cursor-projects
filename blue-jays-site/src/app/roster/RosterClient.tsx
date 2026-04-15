"use client";

import { PlayerCard } from "@/components/ui/PlayerCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { PlayerCategory } from "@/lib/data";
import { roster } from "@/lib/data";

const categories: { id: PlayerCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "pitchers", label: "Pitchers" },
  { id: "catchers", label: "Catchers" },
  { id: "infield", label: "Infield" },
  { id: "outfield", label: "Outfield" },
];

export function RosterClient() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-10 flex h-auto w-full flex-wrap justify-start gap-2 bg-white/5 p-2">
        {categories.map((c) => (
          <TabsTrigger
            key={c.id}
            value={c.id}
            className="font-heading data-[state=active]:bg-jays-blue data-[state=active]:text-white dark:data-[state=active]:bg-jays-blue dark:data-[state=active]:text-white"
          >
            {c.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((c) => (
        <TabsContent key={c.id} value={c.id} className="mt-0 outline-none">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {roster
              .filter((p) => c.id === "all" || p.category === c.id)
              .map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
