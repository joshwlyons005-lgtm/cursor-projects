import Link from "next/link";

import { NewsCard } from "@/components/ui/NewsCard";
import { buttonVariants } from "@/components/ui/button";
import { newsArticles } from "@/lib/data";
import { cn } from "@/lib/utils";

export function LatestNews() {
  const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
  const rest = newsArticles.filter((a) => a.id !== featured.id).slice(0, 3);

  return (
    <section id="news" className="scroll-mt-24 bg-[#050b14] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Latest news
            </h2>
            <p className="mt-2 max-w-xl text-slate-400">
              Recaps, roster moves, and stories from the clubhouse — updated for
              fans who never miss an inning.
            </p>
          </div>
          <Link
            href="/news"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-jays-blue/50 text-jays-blue hover:bg-jays-blue/10"
            )}
          >
            All news
          </Link>
        </div>

        <div className="mt-10 space-y-8">
          <NewsCard article={featured} featured />
          <div className="grid gap-6 md:grid-cols-3">
            {rest.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
