import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { href: "/news", label: "Latest News" },
  { href: "/schedule", label: "Schedule" },
  { href: "/roster", label: "Roster" },
  { href: "/#fan-zone", label: "Fan Zone" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/logo.svg"
              alt="Toronto Blue Jays"
              width={180}
              height={36}
              className="h-9 w-auto opacity-95"
            />
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Toronto’s team. Rogers Centre energy. A city that shows up — this
              is built for fans who live the innings.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/15 p-2 text-slate-300 transition-colors hover:border-jays-blue hover:text-white"
                aria-label="X (Twitter)"
              >
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/15 p-2 text-slate-300 transition-colors hover:border-jays-blue hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/15 p-2 text-slate-300 transition-colors hover:border-jays-blue hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/15 p-2 text-slate-300 transition-colors hover:border-jays-blue hover:text-white"
                aria-label="YouTube"
              >
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon
                    fill="#050b14"
                    points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <address className="mt-4 not-italic text-sm text-slate-400">
              <p>Rogers Centre</p>
              <p>1 Blue Jays Way</p>
              <p>Toronto, ON M5V 1J1</p>
              <p className="mt-3">
                <a
                  href="tel:+14163413661"
                  className="hover:text-white"
                >
                  (416) 341-3661
                </a>
              </p>
              <p>
                <a
                  href="mailto:fans@bluejays.demo"
                  className="hover:text-white"
                >
                  fans@bluejays.demo
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-slate-400">
              Game recaps, ticket drops, and city stories — straight to your
              inbox.
            </p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row" action="#" method="get">
              <Input
                type="email"
                required
                placeholder="you@email.com"
                className="border-white/15 bg-white/5 text-white placeholder:text-slate-500"
              />
              <Button
                type="submit"
                className="shrink-0 bg-jays-red text-white hover:bg-jays-red/90"
              >
                Sign up
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Fan demo site. Not affiliated with MLB
            or the Toronto Blue Jays.
          </p>
          <p className="max-w-xl sm:text-right">
            Placeholder content for design showcase. Tickets and links point to
            public MLB destinations where applicable.
          </p>
        </div>
      </div>
    </footer>
  );
}
