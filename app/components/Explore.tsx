"use client";

import { forum, instrumentSerif } from "../fonts";
import { exploreItems } from "@/data/explore";

export default function Explore() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-16 text-left text-white">
      <div className="w-full max-w-3xl">
        <h2 className={`${instrumentSerif.className} text-4xl font-normal text-[#fff7df] sm:text-6xl`}>
          Explore
        </h2>

        <div className="relative mt-4 max-w-2xl space-y-6 pl-10 sm:pl-14">
          <div className="absolute left-15 top-5.5 bottom-5.5 w-px bg-linear-to-b from-[#6b7a64]/50 to-[#6b7a64]/15" />

          {exploreItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group relative flex items-baseline gap-6 py-2 pl-8"
            >
              <span className="absolute left-0 top-1/2 size-2.25 -translate-y-1/2 rounded-full border-[1.5px] border-[#6b7a64] bg-[#0a0e0a] transition-colors group-hover:border-[#c9a85f] group-hover:bg-[#c9a85f]" />

              <div>
                <div className={`${forum.className} text-[28px] font-medium text-[#ece5d3] transition-colors group-hover:text-[#fbf7ec]`}>
                  {item.title}
                </div>
                <div className="mt-1 font-inter text-[13.5px] italic text-[#6b756a] transition-colors group-hover:text-[#8a9388]">
                  {item.tagline}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
