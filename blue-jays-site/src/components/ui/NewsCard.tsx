import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { NewsArticle } from "@/lib/data";
import { imageUrl } from "@/lib/data";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export function NewsCard({ article, featured }: NewsCardProps) {
  return (
    <Link href="/news" className="group block h-full">
      <Card
        className={cn(
          "h-full overflow-hidden border-white/10 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-jays-blue/50",
          featured && "md:grid md:grid-cols-2 md:gap-0"
        )}
      >
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden",
            featured && "md:aspect-auto md:min-h-[280px]"
          )}
        >
          <Image
            src={imageUrl(article.imageSeed, 800, 500)}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <Badge className="absolute left-3 top-3 border-0 bg-jays-red text-white hover:bg-jays-red">
            {article.category}
          </Badge>
        </div>
        <CardContent className="flex flex-col gap-2 p-5 md:justify-center">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            {article.date} · {article.readTime} read
          </p>
          <h3
            className={cn(
              "font-heading font-semibold tracking-tight text-white group-hover:text-jays-blue",
              featured ? "text-2xl sm:text-3xl" : "text-lg"
            )}
          >
            {article.headline}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
            {article.excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
