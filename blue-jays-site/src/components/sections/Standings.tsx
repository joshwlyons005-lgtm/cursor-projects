import { StandingsTable } from "@/components/ui/StandingsTable";
import { alEastStandings, teamKeyStats } from "@/lib/data";

export function Standings() {
  return (
    <section id="standings" className="scroll-mt-24 bg-jays-navy/20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AL East standings
        </h2>
        <p className="mt-2 max-w-xl text-slate-400">
          Where Toronto sits in the division race — snapshot numbers for the
          season grind.
        </p>

        <div className="mt-10">
          <StandingsTable rows={alEastStandings} />
        </div>

        <div className="mt-10">
          <h3 className="font-heading text-lg font-semibold uppercase tracking-widest text-slate-400">
            Team stats snapshot
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {teamKeyStats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-card/60 px-4 py-4 transition-colors hover:border-jays-blue/40"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {s.label}
                </p>
                <p className="mt-1 font-heading text-3xl font-bold text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-jays-blue">{s.rank}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
