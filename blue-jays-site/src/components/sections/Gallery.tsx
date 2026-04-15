"use client";

import Image from "next/image";

import { galleryItems } from "@/lib/data";
import { imageUrl } from "@/lib/data";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-[#050b14] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Gallery & media
        </h2>
        <p className="mt-2 max-w-xl text-slate-400">
          The speed, the swings, the city behind every frame — a snapshot of
          Blue Jays baseball.
        </p>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl border border-white/10"
            >
              <div
                className={`relative ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"}`}
              >
                <Image
                  src={imageUrl(item.imageSeed, 600, 800)}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
