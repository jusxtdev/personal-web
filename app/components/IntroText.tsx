import { instrumentSerif } from "../fonts";

export default function IntroText() {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-6 pt-[42vh] text-left text-white">
      <div className="w-full max-w-3xl">
        <h1
          className={`${instrumentSerif.className} text-5xl font-semibold sm:text-7xl`}
        >
          Dev Prajapati
        </h1>
        <div className="mt-8 max-w-2xl pl-8 text-base leading-7 text-white/75 sm:pl-14 sm:text-lg">
          <p>Write your text here.</p>
        </div>
      </div>
    </section>
  );
}
