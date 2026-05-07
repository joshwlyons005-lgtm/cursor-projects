"use client";

import { useState } from "react";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { Chapter } from "@/lib/chapters";
import { chapters } from "@/lib/chapters";
import { cn } from "@/lib/utils";

function statusStyles(status: Chapter["status"]) {
  switch (status) {
    case "Active":
      return "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30";
    case "Launching":
      return "bg-amber-500/15 text-amber-200 ring-amber-400/30";
    case "Recruiting":
      return "bg-primary/15 text-primary ring-primary/30";
    default: {
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}

export function NetworkMapSection() {
  const [selected, setSelected] = useState<Chapter | null>(null);

  return (
    <>
      <SectionShell id="network">
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Presence"
            title="A growing builder network across North America."
            description="DevNet currently spans 13 cities across North America, with 8 in Canada and 5 in the United States. Tap a marker to see chapter context."
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-card to-black/60">
            <div className="relative aspect-[16/10] w-full">
              <svg
                className="absolute inset-0 h-full w-full text-white/10"
                viewBox="0 0 100 62"
                aria-hidden
              >
                <defs>
                  <linearGradient id="land" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#land)"
                  d="M12 38 C 8 30 10 22 18 18 C 28 12 44 14 52 10 C 62 6 78 8 88 14 C 94 18 96 26 92 34 C 88 44 76 52 62 54 C 48 56 38 52 28 48 C 18 44 14 42 12 38 Z"
                />
                <path
                  fill="currentColor"
                  fillOpacity="0.06"
                  d="M18 24 C 26 20 36 22 44 20 C 54 18 66 20 74 26 C 78 30 76 38 70 42 C 62 46 50 44 40 42 C 30 40 22 36 18 30 Z"
                />
              </svg>

              {chapters.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  style={{
                    left: `${c.mapPosition.x}%`,
                    top: `${c.mapPosition.y}%`,
                  }}
                  className={cn(
                    "absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full",
                    "bg-primary shadow-[0_0_0_6px_oklch(0.62_0.22_285/0.18)] ring-2 ring-white/40",
                    "transition-transform hover:scale-125 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
                  )}
                  aria-label={`Open details for ${c.brandName}`}
                  onClick={() => setSelected(c)}
                />
              ))}

              <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
                Stylized map · markers approximate
              </div>
            </div>

            <div className="grid gap-6 border-t border-white/10 p-6 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white">
                  Canada
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Toronto · London · Guelph · Kingston · Halifax · Montréal · Waterloo · Vancouver
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white">
                  United States
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Tucson · Miami · Los Angeles · Boston · New York City
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <Sheet open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent side="right" className="border-white/10 bg-popover">
          {selected ? (
            <>
              <SheetHeader>
                <SheetTitle>{selected.brandName}</SheetTitle>
                <SheetDescription>
                  {selected.schools ? `${selected.schools} · ` : null}
                  {selected.country === "CA" ? "Canada" : "United States"}
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-4 px-4 pb-6">
                <span
                  className={cn(
                    "inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1",
                    statusStyles(selected.status)
                  )}
                >
                  Status: {selected.status}
                </span>
                <p className="text-sm text-muted-foreground">
                  Chapters use city-first naming ({selected.brandName}). School names can
                  appear for context — for example{" "}
                  <span className="text-white">
                    DevNet London — Western University
                  </span>
                  .
                </p>
              </div>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </>
  );
}
