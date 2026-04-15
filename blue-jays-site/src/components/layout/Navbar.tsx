"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/roster", label: "Roster" },
  { href: "/schedule", label: "Schedule" },
  { href: "/#standings", label: "Standings" },
  { href: "/#fan-zone", label: "Fan Zone" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 transition-colors",
        scrolled
          ? "bg-jays-navy/90 backdrop-blur-md supports-backdrop-filter:bg-jays-navy/80"
          : "bg-jays-navy/70 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.svg"
            alt="Toronto Blue Jays"
            width={160}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                  ? false
                  : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white",
                  isActive && "bg-white/10 text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.mlb.com/bluejays/tickets"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden bg-jays-red text-white hover:bg-jays-red/90 sm:inline-flex"
            )}
          >
            Buy Tickets
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "border-white/20 bg-white/5 text-white lg:hidden"
              )}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-white/10 bg-jays-navy text-white"
            >
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-lg tracking-wide text-white">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-2 pb-6">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-100 hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://www.mlb.com/bluejays/tickets"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "mt-4 bg-jays-red text-white hover:bg-jays-red/90"
                  )}
                >
                  Buy Tickets
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
