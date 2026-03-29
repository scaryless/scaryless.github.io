/**
 * ProjectsSection — Project cards with neon hover effects
 * Design: SAMUEL_OS Cyberpunk Terminal
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "01",
    title: "Application Mobile Client",
    company: "ProPro Media inc",
    description: "Application mobile développée durant le stage chez ProPro Media inc. Mise en place de l'authentification utilisateur, développement de fonctionnalités front-end avec React Native, opérations CRUD complètes et correction de bugs.",
    tags: ["React Native", "Expo", "JavaScript", "CRUD", "Auth"],
    status: "COMPLETED",
    color: "oklch(0.87 0.18 195)",
    year: "2025",
  },
  {
    id: "02",
    title: "Portfolio Personnel",
    company: "Projet personnel",
    description: "Ce portfolio interactif style terminal cyberpunk. Développé avec React, TypeScript, Framer Motion et Tailwind CSS. Concept SAMUEL_OS avec boot sequence animée, effets néon et navigation terminal.",
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    status: "LIVE",
    color: "oklch(0.85 0.22 155)",
    year: "2025",
  },
  {
    id: "03",
    title: "Projets Académiques",
    company: "Collège Gérald-Godin",
    description: "Ensemble de projets réalisés durant la formation AEC en Programmation Web : applications PHP/MySQL, projets ASP.NET Core MVC, interfaces Angular et Vue.js, applications Java avec JavaFX.",
    tags: ["PHP", "ASP.NET", "Angular", "Vue.js", "Java", "MySQL"],
    status: "ACADEMIC",
    color: "oklch(0.7 0.28 295)",
    year: "2024-2025",
  },
];

const STATUS_COLORS: Record<string, string> = {
  COMPLETED: "oklch(0.87 0.18 195)",
  LIVE: "oklch(0.85 0.22 155)",
  ACADEMIC: "oklch(0.7 0.28 295)",
};

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div
            className="text-xs mb-2"
            style={{ color: "oklch(0.55 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
          >
            samuel@portfolio:~$&nbsp;
            <span style={{ color: "oklch(0.85 0.22 155)" }}>ls -la ./projects/</span>
          </div>
          <h2
            className="text-3xl font-bold"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "oklch(0.87 0.18 195)",
              textShadow: "0 0 20px oklch(0.87 0.18 195 / 0.3)",
            }}
          >
            Projets
          </h2>
          <div
            className="mt-2 h-px w-24"
            style={{ background: "linear-gradient(90deg, oklch(0.87 0.18 195), transparent)" }}
          />
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group relative flex flex-col p-5 transition-all duration-300 cursor-default"
              style={{
                background: "oklch(0.11 0.015 265)",
                border: `1px solid ${project.color.replace(")", " / 0.15)")}`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = project.color.replace(")", " / 0.5)");
                el.style.boxShadow = `0 0 25px ${project.color.replace(")", " / 0.1)")}, 0 0 50px ${project.color.replace(")", " / 0.05)")}`;
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = project.color.replace(")", " / 0.15)");
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Project number + status */}
              <div className="flex justify-between items-center mb-4">
                <span
                  className="text-3xl font-bold opacity-20"
                  style={{ color: project.color, fontFamily: "JetBrains Mono, monospace" }}
                >
                  {project.id}
                </span>
                <span
                  className="text-xs px-2 py-0.5"
                  style={{
                    color: STATUS_COLORS[project.status],
                    border: `1px solid ${STATUS_COLORS[project.status].replace(")", " / 0.3)")}`,
                    background: STATUS_COLORS[project.status].replace(")", " / 0.08)"),
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  ● {project.status}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-base font-semibold mb-1"
                style={{ color: "oklch(0.92 0.005 200)", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {project.title}
              </h3>
              <div
                className="text-xs mb-3"
                style={{ color: project.color, fontFamily: "JetBrains Mono, monospace" }}
              >
                {project.company} — {project.year}
              </div>

              {/* Description */}
              <p
                className="text-xs leading-relaxed flex-1 mb-4"
                style={{ color: "oklch(0.62 0.02 200)", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-1.5 py-0.5"
                    style={{
                      color: project.color,
                      border: `1px solid ${project.color.replace(")", " / 0.2)")}`,
                      background: project.color.replace(")", " / 0.05)"),
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 p-4 text-center"
          style={{
            border: "1px dashed oklch(0.87 0.18 195 / 0.2)",
            background: "oklch(0.87 0.18 195 / 0.02)",
          }}
        >
          <span
            className="text-xs"
            style={{ color: "oklch(0.45 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
          >
            // Plus de projets à venir — En cours de développement...
            <span style={{ animation: "blink 1s step-end infinite", color: "oklch(0.87 0.18 195)" }}> █</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
