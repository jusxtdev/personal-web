export type SkillCategory = {
  category: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  github?: string;
};

export const skills: SkillCategory[] = [
  { category: "Languages", skills: ["TypeScript", "Python"] },
  { category: "Backend", skills: ["Express", "FastAPI", "REST APIs", "Node JS"] },
  { category: "Databases", skills: ["PostgreSQL", "MongoDB", "SQLite"] },
  { category: "Tools", skills: ["Zod", "Prisma", "Drizzle", "SQLAlchemy", "JWT", "Git", "Github", "Pydantic"] },
  { category: "Frontend", skills: ["React", "Vite", "Tailwind", "NextJS"] },
];

export const projects: Project[] = [
  {
    title: "Clavier",
    description: "Keyboard Selling e-commerce platform with user authentication, Role-based Access, product management, and shopping cart functionality.",
    tech: ["TypeScript", "PostgreSQL", "Express", "Node JS", "React", "Tailwind"],
    href: "https://clavier-pkbt.onrender.com/",
    github: "https://github.com/jusxtdev/Clavier.git",
  },
  {
    title: "Gym Personal Record Tracker",
    description: "Full-stack web application to log and track gym progress",
    tech: ["TypeScript", "PostgreSQL", "Express", "Node JS", "React", "Tailwind"],
    href: "https://gym-pr-tracker-frontend.onrender.com",
    github: "https://github.com/jusxtdev/gym-PR-tracker",
  },
  {
    title: "Bookmarks API",
    description: "A FastAPI project for managing personal bookmarks with JWT authentication, SQLAlchemy models, and a SQLite database.",
    tech: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "Pydantic"],
    github: "https://github.com/jusxtdev/Bookmarks-API-with-Auth",
  },
];
