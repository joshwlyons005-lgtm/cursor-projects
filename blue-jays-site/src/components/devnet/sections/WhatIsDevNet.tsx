import Link from "next/link";

import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Build",
    body: "Use AI, code, no-code tools, design tools, automation platforms, or whatever helps you ship.",
  },
  {
    title: "Connect",
    body: "Meet students, builders, founders, developers, designers, and collaborators across the DevNet network.",
  },
  {
    title: "Showcase",
    body: "Submit projects to be featured through DevNet’s main distribution channels and build public proof of work.",
  },
];

export function WhatIsDevNet() {
  return (
    <SectionShell id="what-is-devnet">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Overview"
            title="A network for people building real things."
          />
          <div className="space-y-5 text-muted-foreground">
            <p className="leading-relaxed">
              DevNet connects builders across campuses, cities, and online. We help
              people learn modern tools, build useful products, showcase their work,
              and meet others who are building with the same mindset.
            </p>
            <p className="leading-relaxed">
              DevNet is not just for computer science students. It is for anyone using
              technology, AI, software, automation, or modern tools to create something
              useful.
            </p>
            <p className="leading-relaxed">
              Whether you are building your first project, launching a startup,
              improving your workflow, or learning how to use AI to move faster, DevNet
              gives you a network to build around.
            </p>
          </div>
          <Link
            href="/about"
            className={cn(buttonVariants({ variant: "ghost" }), "w-fit px-0")}
          >
            How DevNet is structured →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
          {pillars.map((p) => (
            <Card
              key={p.title}
              className="border-white/10 bg-card/80 backdrop-blur-sm transition-colors hover:border-primary/35"
            >
              <CardContent className="space-y-3 p-6">
                <h3 className="font-heading text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
