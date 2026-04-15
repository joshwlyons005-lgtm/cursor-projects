import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import type { Player } from "@/lib/data";
import { imageUrl } from "@/lib/data";

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Card className="group overflow-hidden border-white/10 bg-card/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-jays-blue/50">
      <div className="relative aspect-[3/4] overflow-hidden bg-jays-navy/40">
        <Image
          src={imageUrl(player.imageSeed, 400, 520)}
          alt={player.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent opacity-90" />
        <span className="absolute right-3 top-3 font-heading text-4xl font-bold text-white/25">
          #{player.number}
        </span>
      </div>
      <CardContent className="space-y-1 p-4">
        <h3 className="font-heading text-lg font-bold tracking-tight text-white">
          {player.name}
        </h3>
        <p className="text-sm font-medium text-jays-blue">{player.position}</p>
        <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
          {player.profile}
        </p>
      </CardContent>
    </Card>
  );
}
