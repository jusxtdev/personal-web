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

async function downloadWallpaper(src: string, alt: string) {
  try {
    const response = await fetch(src);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${alt.replace(/\s+/g, "-").toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
  }
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
      {/* Back to Home */}
      <a
        href="/"
        className="group inline-flex items-center gap-2 text-sm text-[#9aa394] transition-colors hover:text-[#c9a85f]"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        <span>Go to Home</span>
      </a>

      <h1
        className={`${instrumentSerif.className} text-4xl font-normal text-[#fff7df] sm:text-6xl mt-8`}
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
            className="group relative mb-6 break-inside-avoid cursor-pointer overflow-hidden rounded-lg border border-transparent bg-[#1a1a1a] transition-colors duration-200 hover:border-[#6b7a64]/40"
            onClick={() => downloadWallpaper(wallpaper.src, wallpaper.alt)}
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
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <span className="text-sm text-white/80">Click to download</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
