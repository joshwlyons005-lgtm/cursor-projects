import Image from "next/image";
import Link from "next/link";

import { LINKS, mailtoDevNet } from "@/lib/links";

const quickLinks = [
  { href: "/builders", label: "Builders" },
  { href: "/chapters", label: "Chapters" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/devnet-logo.svg"
              alt="DevNet"
              width={180}
              height={40}
              className="h-9 w-auto opacity-95"
            />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              DevNet is a North American builder network helping students,
              developers, founders, and AI-native creators ship real projects,
              connect with other builders, and build public proof of work.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/15 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-white"
              >
                X @devnet_x
              </a>
              <a
                href={LINKS.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/15 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-white"
              >
                LinkedIn @devnet
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Forms
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={LINKS.featureForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-white"
                >
                  Apply for a Feature
                </a>
              </li>
              <li>
                <a
                  href={LINKS.ambassadorForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-white"
                >
                  Apply to Become an Ambassador
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <address className="mt-4 not-italic text-sm text-muted-foreground">
              <p>
                <a href={mailtoDevNet()} className="hover:text-white">
                  {LINKS.email}
                </a>
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                Prefer starting in public? Message us on X or LinkedIn — we read
                everything.
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DevNet. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            Builder network — not a traditional coding club. Ship real projects and build
            public proof of work.
          </p>
        </div>
      </div>
    </footer>
  );
}
