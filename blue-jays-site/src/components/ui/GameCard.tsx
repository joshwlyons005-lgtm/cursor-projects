import { MapPin, Tv } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Game } from "@/lib/data";
import { cn } from "@/lib/utils";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="border-white/10 bg-card/90 transition-all duration-300 hover:border-jays-blue/40 hover:shadow-lg hover:shadow-jays-navy/20">
      <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              className={cn(
                "border-white/20 font-heading text-xs uppercase tracking-wider",
                game.isHome
                  ? "border-jays-blue/60 text-jays-blue"
                  : "text-slate-300"
              )}
            >
              {game.isHome ? "Home" : "Away"}
            </Badge>
            <span className="font-heading text-lg font-bold text-white">
              vs {game.opponent}
            </span>
            <span className="text-sm text-slate-500">{game.opponentAbbr}</span>
          </div>
          <p className="text-sm font-medium text-slate-200">{game.date}</p>
          <p className="text-sm text-jays-blue">{game.time}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-400 sm:items-end">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 shrink-0 text-slate-500" />
            {game.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Tv className="size-4 shrink-0 text-slate-500" />
            {game.tv}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
