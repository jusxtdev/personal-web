import type { Metadata } from "next";
import { instrumentSerif, forum } from "../fonts";

export const metadata: Metadata = {
  title: "Work | Dev Prajapati",
  description: "Projects in distributed systems, backend architecture, and software engineering.",
};

type SkillCategory = {
  category: string;
  skills: string[];
};

const skills: SkillCategory[] = [
  { category: "Languages", skills: ["Go", "Rust", "TypeScript", "Python", "SQL"] },
  { category: "Backend", skills: ["gRPC", "REST APIs", "GraphQL", "WebSockets"] },
  { category: "Databases", skills: ["PostgreSQL", "Redis", "MongoDB", "InfluxDB"] },
  { category: "Infrastructure", skills: ["Docker", "Kubernetes", "AWS", "Terraform"] },
  { category: "Concepts", skills: ["Distributed Systems", "Event-Driven Architecture", "API Design", "Caching Strategies"] },
];

type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Distributed Cache System",
    description: "High-performance caching layer with consistency guarantees across distributed nodes.",
    tech: ["Go", "Redis", "gRPC"],
    href: "#",
    github: "#",
  },
  {
    title: "Event-Driven Microservices",
    description: "Scalable event processing pipeline handling millions of events per second.",
    tech: ["Rust", "Kafka", "PostgreSQL"],
    href: "#",
  },
  {
    title: "API Gateway",
    description: "Unified entry point with rate limiting, authentication, and request routing.",
    tech: ["Go", "Docker", "Kubernetes"],
    href: "#",
    github: "#",
  },
  {
    title: "Real-time Dashboard",
    description: "Live metrics visualization with WebSocket updates and custom alerting.",
    tech: ["TypeScript", "React", "InfluxDB"],
    href: "#",
    github: "#",
  },
];

export default function Portfolio() {
  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-6 py-16 text-white">
      <div className="w-full max-w-3xl">
        {/* Skills Section */}
        <section>
          <h2 className={`${instrumentSerif.className} text-4xl font-normal text-[#fff7df] sm:text-6xl`}>
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
          <h2 className={`${instrumentSerif.className} text-4xl font-normal text-[#fff7df] sm:text-6xl`}>
            Work
          </h2>

          <div className="mt-6 max-w-2xl space-y-8 pl-10 sm:pl-14">
            {projects.map((project) => (
              <article key={project.title} className="group">
                <h3 className={`${forum.className} text-[28px] font-medium text-[#ece5d3] transition-colors group-hover:text-[#fff7df]`}>
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
                  <a
                    href={project.href}
                    className="text-sm text-[#9aa394] transition-colors hover:text-[#c9a85f]"
                  >
                    View Project ↗
                  </a>
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
