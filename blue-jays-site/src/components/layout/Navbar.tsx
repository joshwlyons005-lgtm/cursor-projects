"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/builders", label: "Builders" },
  { href: "/chapters", label: "Chapters" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

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
          ? "bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-background/80"
          : "bg-background/70 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <Image
            src="/devnet-logo.svg"
            alt="DevNet"
            width={176}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/10 hover:text-white",
                  isActive && "bg-white/10 text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="relative ml-2">
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/10 hover:text-white"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((v) => !v)}
            >
              More
              <ChevronDown className="size-4 opacity-70" />
            </button>
            {moreOpen ? (
              <div className="absolute right-0 top-full z-50 mt-2 min-w-[220px] rounded-xl border border-white/10 bg-popover p-2 shadow-lg">
                <a
                  href={LINKS.featureForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg px-3 py-2 text-sm text-popover-foreground hover:bg-white/10"
                >
                  Submit a Project
                </a>
                <Link
                  href="/chapters"
                  className="block rounded-lg px-3 py-2 text-sm text-popover-foreground hover:bg-white/10"
                  onClick={() => setMoreOpen(false)}
                >
                  Start a Chapter
                </Link>
                <a
                  href={LINKS.ambassadorForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg px-3 py-2 text-sm text-popover-foreground hover:bg-white/10"
                >
                  Become an Ambassador
                </a>
              </div>
            ) : null}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/join"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex"
            )}
          >
            Join DevNet
          </Link>

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
              className="border-white/10 bg-background text-white"
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
                  href={LINKS.featureForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-100 hover:bg-white/10"
                >
                  Submit a Project
                </a>
                <Link
                  href="/chapters"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-100 hover:bg-white/10"
                >
                  Start a Chapter
                </Link>
                <a
                  href={LINKS.ambassadorForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-100 hover:bg-white/10"
                >
                  Become an Ambassador
                </a>
                <Link
                  href="/join"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  Join DevNet
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
