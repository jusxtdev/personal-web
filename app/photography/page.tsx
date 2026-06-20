"use client";

import { useState, useEffect } from "react";
import { instrumentSerif } from "../fonts";
import { photos } from "@/data/photography";
import type { Photo } from "@/data/photography";
import PhotoCard from "../components/PhotoCard";

export default function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  return (
    <>
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
          className={`${instrumentSerif.className} mt-8 text-4xl font-normal text-[#fff7df] sm:text-6xl`}
        >
          Photography
        </h1>
        <p className="mt-2 text-[15px] text-[#6b756a]">
          Moments I wanted to remember
        </p>

        {/* Photo Grid - Masonry layout */}
        <div className="mt-8 [column-count:1] sm:[column-count:2] lg:[column-count:3] gap-6 [column-fill:balance]">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              title={photo.title}
              date={photo.date}
              caption={photo.caption}
              href={photo.href}
              onClick={() => setSelectedPhoto(photo)}
            />
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-6 top-6 text-sm text-[#9aa394] transition-colors hover:text-[#c9a85f]"
          >
            ESC to close
          </button>

          {/* Photo */}
          <div
            className="relative max-h-[75vh] max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-h-[65vh] w-auto rounded-lg object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className={`${instrumentSerif.className} text-2xl text-[#fff7df]`}>
                {selectedPhoto.title}
              </h3>
              {selectedPhoto.caption && (
                <p className="mt-2 text-base text-[#9aa394]">
                  {selectedPhoto.caption}
                </p>
              )}
            </div>
          </div>

          {/* Navigation hint
          <p className="absolute bottom-6 text-xs text-[#6b7a64]">
            Click anywhere to close
          </p> */}
        </div>
      )}
    </>
  );
}
