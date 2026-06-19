import { Fragment } from "react";
import { instrumentSerif } from "../fonts";

type Link = { label: string; href: string; external?: true };

const links: Link[] = [
  { label: "Portfolio", href: "/work" },
  { label: "GitHub", href: "https://github.com/jusxtdev", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/jusxtdev", external: true },
  { label: "Email", href: "mailto:jusxtdev@gmail.com" },
  { label: "X", href: "https://x.com/DevPrajapati25", external: true },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-start px-6 py-16 pl-28">
      <h2 className={`${instrumentSerif.className} text-4xl font-normal text-[#fff7df] sm:text-6xl`}>
        Connect
      </h2>

      <nav className="mt-7 flex flex-wrap pl-10 sm:pl-14">
        {links.map((link, i) => (
          <Fragment key={link.label}>
            <a
              href={link.href}
              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              className="border-b border-transparent py-1.5 text-[15px] text-[#9aa394] transition-colors hover:border-[#c9a85f] hover:text-[#c9a85f]"
            >
              {link.label}
            </a>
            {i < links.length - 1 && (
              <span className="mx-4 text-[#3f4a3b]">/</span>
            )}
          </Fragment>
        ))}
      </nav>
    </footer>
  );
}
