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
    year: "numeric",
  });
}

export default function PhotoCard({ src, alt, title, date, caption, href = "#", onClick }: PhotoCardProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative mb-6 block break-inside-avoid overflow-hidden rounded-lg border border-transparent bg-[#1a1a1a] transition-colors duration-200 hover:border-[#6b7a64]/40"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={src}
          alt={alt || title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          quality={85}
          className="object-cover"
        />
      </div>
      <div className="flex items-start justify-between gap-4 py-3 px-4">
        <div>
          <h3 className={`${forum.className} text-[22px] font-medium text-[#ece5d3] transition-colors group-hover:text-[#fff7df]`}>
            {title}
          </h3>
          <p className="mt-1 text-sm text-[#6b756a]">
            {formatPhotoDate(date)}
          </p>
        </div>
        {caption && (
          <p className="text-right text-sm italic text-[#9aa394]">
            {caption}
          </p>
        )}
      </div>
    </a>
  );
}
