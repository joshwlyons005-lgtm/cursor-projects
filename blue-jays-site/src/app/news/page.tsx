import type { Metadata } from "next";

import { NewsCard } from "@/components/ui/NewsCard";
import { newsArticles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Latest News",
  description:
    "Team updates, game recaps, trades, and player stories from the Toronto Blue Jays.",
};

export default function NewsPage() {
  const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
  const others = newsArticles.filter((a) => a.id !== featured.id);

  return (
    <div className="bg-[#050b14] pb-24 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white">
          Latest news
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-400">
          Every angle on the club — from the first pitch to the front office.
        </p>

        <div className="mt-12 space-y-10">
          <NewsCard article={featured} featured />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
