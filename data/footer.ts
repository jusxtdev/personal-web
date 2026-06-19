export type Link = {
  label: string;
  href: string;
  external?: boolean;
};

export const footerLinks: Link[] = [
  { label: "Portfolio", href: "/work" },
  { label: "GitHub", href: "https://github.com/jusxtdev", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/jusxtdev", external: true },
  { label: "Email", href: "mailto:jusxtdev@gmail.com" },
  { label: "X", href: "https://x.com/DevPrajapati25", external: true },
  { label: "Resume", href: "/resume.pdf", external: true },
];
