import Image from "next/image";
import { forum } from "../fonts";
import type { Photo } from "@/data/photography";

type PhotoCardProps = Omit<Photo, "alt"> & {
  alt?: string;
  onClick?: () => void;
};

function formatPhotoDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function PhotoCard({ src, alt, title, date, onClick }: PhotoCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative mb-6 block w-full break-inside-avoid cursor-pointer overflow-hidden rounded-lg border border-transparent bg-[#1a1a1a] transition-colors duration-200 hover:border-[#6b7a64]/40"
    >
      <Image
        src={src}
        alt={alt || title}
        width={800}
        height={600}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={85}
        className="w-full h-auto"
      />
      {/* Bottom text */}
      <div className="flex items-baseline justify-between px-3 py-2">
        <span className={`${forum.className} text-sm text-[#ece5d3]`}>
          {title}
        </span>
        <span className="text-xs text-[#9aa394]">
          {formatPhotoDate(date)}
        </span>
      </div>
    </button>
  );
}
