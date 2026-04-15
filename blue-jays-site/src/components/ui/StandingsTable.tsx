import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { StandingsRow } from "@/lib/data";
import { cn } from "@/lib/utils";

interface StandingsTableProps {
  rows: StandingsRow[];
}

export function StandingsTable({ rows }: StandingsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 bg-card/50">
      <Table>
        <TableHeader>
          <TableRow className="border-white/10 hover:bg-transparent">
            <TableHead className="text-slate-300">Team</TableHead>
            <TableHead className="text-right text-slate-300">W</TableHead>
            <TableHead className="text-right text-slate-300">L</TableHead>
            <TableHead className="text-right text-slate-300">PCT</TableHead>
            <TableHead className="text-right text-slate-300">GB</TableHead>
            <TableHead className="hidden text-right text-slate-300 md:table-cell">
              Home
            </TableHead>
            <TableHead className="hidden text-right text-slate-300 md:table-cell">
              Away
            </TableHead>
            <TableHead className="text-right text-slate-300">L10</TableHead>
            <TableHead className="text-right text-slate-300">Strk</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.abbr}
              className={cn(
                "border-white/10",
                row.isBlueJays && "bg-jays-navy/40 hover:bg-jays-navy/50"
              )}
            >
              <TableCell
                className={cn(
                  "font-medium",
                  row.isBlueJays ? "text-white" : "text-slate-200"
                )}
              >
                <span className="font-heading">{row.team}</span>
                <span className="ml-2 text-slate-500">{row.abbr}</span>
              </TableCell>
              <TableCell className="text-right tabular-nums text-slate-200">
                {row.w}
              </TableCell>
              <TableCell className="text-right tabular-nums text-slate-200">
                {row.l}
              </TableCell>
              <TableCell className="text-right tabular-nums text-slate-200">
                {row.pct}
              </TableCell>
              <TableCell className="text-right tabular-nums text-slate-200">
                {row.gb}
              </TableCell>
              <TableCell className="hidden text-right tabular-nums text-slate-400 md:table-cell">
                {row.home}
              </TableCell>
              <TableCell className="hidden text-right tabular-nums text-slate-400 md:table-cell">
                {row.away}
              </TableCell>
              <TableCell className="text-right tabular-nums text-slate-300">
                {row.l10}
              </TableCell>
              <TableCell className="text-right font-medium text-jays-blue">
                {row.streak}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
