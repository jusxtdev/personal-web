import { forum, instrumentSerif } from "../fonts";

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-6 pt-[42vh] text-left text-white">
      <div className="w-full max-w-3xl">
        <h1
          className={`${instrumentSerif.className} text-6xl font-normal leading-none text-[#fff7df] drop-shadow-[0_10px_24px_rgba(0,0,0,0.9)] sm:text-8xl`}
        >
          Dev <span>Prajapati</span>
        </h1>
        <p className="mt-3 pl-1 text-sm font-normal text-zinc-400/80 sm:text-base">
          @jusxtdev
        </p>
        <div className="mt-4 max-w-2xl text-base leading-7 text-white/75 pl-10 sm:pl-14 sm:text-lg">
          <p
            className={`${forum.className} text-pretty leading-8 text-[#f4ead0]/80 drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]`}
          >
            I spend most of my time thinking about backend systems — distributed
            architecture, networking, the stuff that has to work quietly in the
            background. When I&apos;m not doing that, I&apos;m watching anime,
            following F1, or taking photos of clouds for no particular reason.
            <br />
            <span className="mt-6 inline-flex items-center gap-3 text-[15px] text-[#ece5d3]">
              {/* GitHub Icon */}
              <a
                href="https://github.com/jusxtdev"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#c9a85f]"
              >
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* X Icon */}
              <a
                href="https://x.com/DevPrajapati25"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#c9a85f]"
              >
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href="/work"
                className="group inline-flex items-center gap-1 transition-colors duration-200 hover:text-[#fff7df]"
              >
                <span className="border-b border-[#6b7a64] pb-0.5 transition-colors duration-200 group-hover:border-[#c9a85f] ml-2.5">
                  See my work
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
