import type { Metadata } from "next";

import { RosterClient } from "./RosterClient";

export const metadata: Metadata = {
  title: "Roster",
  description:
    "Toronto Blue Jays roster — players, positions, and profiles.",
};

export default function RosterPage() {
  return (
    <div className="bg-[#050b14] pb-24 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white">
          Team roster
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-400">
          Filter by position group — the depth chart that fuels a full season.
        </p>

        <div className="mt-12">
          <RosterClient />
        </div>
      </div>
    </div>
  );
}
