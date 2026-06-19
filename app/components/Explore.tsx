// import { instrumentSerif } from "../fonts";

// export default function Explore() {
//   return (
//     <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-16 text-left text-white">
//       <div className="w-full max-w-3xl">
//         <h2
//           className={`${instrumentSerif.className} text-3xl font-normal text-[#fff7df] sm:text-4xl`}
//         >
//           Explore
//         </h2>
//         <div></div>
//       </div>
//     </section>
//   );
// }

"use client";

// import { Cormorant_Garamond, Inter } from 'next/font/google';

// const cormorant = Cormorant_Garamond({
//   subsets: ['latin'],
//   weight: ['500'],
//   style: ['normal', 'italic'],
//   variable: '--font-cormorant',
// });

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500'],
//   variable: '--font-inter',
// });

import { forum, instrumentSerif } from "../fonts";

type ExploreItem = {
  title: string;
  tagline: string;
  href: string;
};

const items: ExploreItem[] = [
  {
    title: "Interests",
    tagline: "Things that keep me curious",
    href: "/interests",
  },
  {
    title: "Favorites",
    tagline: "Stories that stayed with me",
    href: "/favorites",
  },
  {
    title: "Photography",
    tagline: "Things I wanted to remember",
    href: "/photography",
  },
  {
    title: "Scenery",
    tagline: "A collection of wallpapers and landscapes",
    href: "/scenery",
  },
  
];

export default function Explore() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-16 text-left text-white">
      <div className="w-full max-w-3xl">
        <p
          className={`${instrumentSerif.className} text-4xl font-normal text-[#fff7df] sm:text-6xl`}
        >
          Explore
        </p>
{/*  */}
        <div className="relative mt-4 max-w-2xl space-y-6 pl-10 sm:pl-14">
          <div
            className="absolute left-15 top-5.5 bottom-5.5 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(124,138,120,0.5), rgba(124,138,120,0.15))",
            }}
          />

          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group relative flex items-baseline gap-6 py-2 pl-8"
            >
              <span className="absolute left-0 top-1/2 h-2.25 w-2.25 -translate-y-1/2 rounded-full border-[1.5px] border-[#6b7a64] bg-[#0a0e0a] transition-colors duration-200 group-hover:border-[#c9a85f] group-hover:bg-[#c9a85f]" />

              <div>
                <div
                  className={`${forum.className} text-[28px] font-medium text-[#ece5d3] transition-colors duration-200 group-hover:text-[#fbf7ec]`}
                >
                  {item.title}
                </div>
                <div
                  className="mt-1 text-[13.5px] italic text-[#6b756a] transition-colors duration-200 group-hover:text-[#8a9388]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
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
