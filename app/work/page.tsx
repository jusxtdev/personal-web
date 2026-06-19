import type { Metadata } from "next";
import { instrumentSerif, forum } from "../fonts";

export const metadata: Metadata = {
  title: "Work | Dev Prajapati",
  description:
    "Projects in distributed systems, backend architecture, and software engineering.",
};

type SkillCategory = {
  category: string;
  skills: string[];
};

const skills: SkillCategory[] = [
  { category: "Languages", skills: ["TypeScript", "Python"] },
  {
    category: "Backend",
    skills: ["Express", "FastAPI", "REST APIs", "Node JS"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    category: "Tools",
    skills: ["Zod", "Prisma", "Drizzle", "SQLAlchemy", "JWT", "Git", "Github", "Pydantic"],
  },
  {
    category: "Frontend",
    skills: ["React", "Vite", "Tailwind", "NextJS"],
  },
];

type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Clavier",
    description:
      "Keyboard Selling e-commerce platform with user authentication, Role-based Access, product management, and shopping cart functionality.",
    tech: ["TypeScript", "PostgreSQL", "Express", "Node JS", "React", "Tailwind"],
    href: "https://clavier-pkbt.onrender.com/",
    github: "https://github.com/jusxtdev/Clavier.git",
  },
  {
    title: "Gym Personal Record Tracker",
    description:
      "Full-stack web application to log and track gym progress",
    tech: ["TypeScript", "PostgreSQL", "Express", "Node JS", "React", "Tailwind"],
    href: "https://gym-pr-tracker-frontend.onrender.com",
    github : "https://github.com/jusxtdev/gym-PR-tracker"
  },
  {
    title: "Bookmarks API",
    description:
      "A FastAPI project for managing personal bookmarks with JWT authentication, SQLAlchemy models, and a SQLite database.",
    tech: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "Pydantic"],
    github: "https://github.com/jusxtdev/Bookmarks-API-with-Auth",
  }
];

export default function Portfolio() {
  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-6 py-16 text-white">
      <div className="w-full max-w-3xl">
        {/* Skills Section */}
        <section>
          <h2
            className={`${instrumentSerif.className} text-4xl font-normal text-[#fff7df] sm:text-6xl`}
          >
            Skills
          </h2>

          <div className="mt-6 max-w-2xl pl-10 sm:pl-14">
            <div className="space-y-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-[#9aa394]">
                    {group.category}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm text-[#ece5d3] transition-colors hover:text-[#c9a85f]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative z-10 mx-auto mt-12 h-px w-[calc(100%-3rem)] max-w-3xl bg-white/10" />

        {/* Work Section */}
        <section className="mt-12">
          <h2
            className={`${instrumentSerif.className} text-4xl font-normal text-[#fff7df] sm:text-6xl`}
          >
            Work
          </h2>

          <div className="mt-6 max-w-2xl space-y-8 pl-10 sm:pl-14">
            {projects.map((project) => (
              <article key={project.title} className="group">
                <h3
                  className={`${forum.className} text-[28px] font-medium text-[#ece5d3] transition-colors group-hover:text-[#fff7df]`}
                >
                  {project.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#6b756a]">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs text-[#9aa394]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {project.href && (<a
                    href={project.href}
                    className="text-sm text-[#9aa394] transition-colors hover:text-[#c9a85f]"
                  >
                    View Project ↗
                  </a>)}
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-sm text-[#9aa394] transition-colors hover:text-[#c9a85f]"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
