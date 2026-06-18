import { forum, instrumentSerif,  } from "../fonts";

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
        <div className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:pl-14 sm:text-lg">
          <p className={`${forum.className} text-pretty  leading-8 text-[#f4ead0]/80 drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]`}>
            I spend most of my time thinking about backend systems — distributed
            architecture, networking, the stuff that has to work quietly in the
            background. When I&apos;m not doing that, I&apos;m watching anime, following
            F1, or taking photos of clouds for no particular reason.
          </p>
        </div>
      </div>
    </section>
  );
}
