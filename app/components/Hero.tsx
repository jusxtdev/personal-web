import { forum, instrumentSerif } from "../fonts";

export default function IntroText() {
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
            className={`${forum.className} text-pretty  leading-8 text-[#f4ead0]/80 drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]`}
          >
            I spend most of my time thinking about backend systems — distributed
            architecture, networking, the stuff that has to work quietly in the
            background. When I&apos;m not doing that, I&apos;m watching anime,
            following F1, or taking photos of clouds for no particular reason.
            <br />
            <a
              href="/work"
              className="group mt-6 inline-flex items-center gap-2 text-[15px] text-[#ece5d3] transition-colors duration-200 hover:text-[#fff7df]"
            >
              <span className="border-b border-[#6b7a64] pb-0.5 transition-colors duration-200 group-hover:border-[#c9a85f]">
                See my work
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
