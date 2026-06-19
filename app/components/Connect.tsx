import { instrumentSerif } from "../fonts";

const LINKS = [
  {
    label: "GitHub",
    description: "Code, experiments, and project notes",
    href: "https://github.com/",
  },
  {
    label: "LinkedIn",
    description: "Work, experience, and professional updates",
    href: "https://linkedin.com/",
  },
  {
    label: "X",
    description: "Small thoughts and current interests",
    href: "https://x.com/jusxtdev",
  },
];

export default function Connect() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-16 text-left text-white h-screen">
      <div className="w-full max-w-3xl">
        <h2
          className={`${instrumentSerif.className} text-3xl font-normal text-[#fff7df] sm:text-4xl`}
        >
          Connect
        </h2>
        <div className="mt-6 max-w-2xl space-y-6 sm:pl-14">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group block rounded-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4ead0]/50"
            >
              <span className="flex items-baseline gap-2 text-base text-zinc-200 transition-colors group-hover:text-[#fff7df] group-focus-visible:text-[#fff7df]">
                {link.label}
                <span className="-translate-x-1 text-sm opacity-0 transition-all duration-300 motion-reduce:transition-none group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                  →
                </span>
              </span>
              <span className="mt-1 block text-sm leading-6 text-zinc-500 transition-colors group-hover:text-zinc-400">
                {link.description}
              </span>
            </a>
            
          ))}
        </div>
      </div>
    </section>
  );
}


