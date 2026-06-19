"use client";

import Image from "next/image";
import { useState } from "react";
import { instrumentSerif } from "../fonts";
import { wallpapers } from "@/data/scenery";

function WallpaperSkeleton() {
  return (
    <div className="mb-6 break-inside-avoid">
      <div className="h-48 animate-pulse rounded-lg bg-[#1a1a1a]" />
    </div>
  );
}

export default function Scenery() {
  const [isLoading, setIsLoading] = useState(true);
  let loadedCount = 0;

  const handleLoad = () => {
    loadedCount++;
    if (loadedCount >= wallpapers.length) {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative z-10 mx-auto min-h-screen w-full max-w-7xl px-6 py-16 text-white">
      <h1
        className={`${instrumentSerif.className} text-4xl font-normal text-[#fff7df] sm:text-6xl`}
      >
        Scenery
      </h1>
      <p className="mt-2 text-[15px] text-[#6b756a]">
        A collection of wallpapers and landscapes
      </p>

      <div className="mt-8 [column-count:1] sm:[column-count:2] lg:[column-count:3] gap-6 [column-fill:balance]">
        {isLoading && (
          <>
            <WallpaperSkeleton />
            <WallpaperSkeleton />
            <WallpaperSkeleton />
          </>
        )}
        {wallpapers.map((wallpaper) => (
          <div
            key={wallpaper.src}
            className="group relative mb-6 break-inside-avoid overflow-hidden rounded-lg border border-transparent bg-[#1a1a1a] transition-colors duration-200 hover:border-[#6b7a64]/40"
          >
            <Image
              src={wallpaper.src}
              alt={wallpaper.alt}
              width={800}
              height={600}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={85}
              className="w-full h-auto"
              onLoad={handleLoad}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
