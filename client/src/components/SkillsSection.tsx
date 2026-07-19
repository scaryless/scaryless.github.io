/**
 * SkillsSection — Animated skill bars with neon effects
 * Design: SAMUEL_OS Cyberpunk Terminal
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";

const TEXTS = {
  fr: {
    title: "Compétences",
    techLabel: "// COMPÉTENCES TECHNIQUES — SCAN EN COURS...",
    softLabel: "// SOFT SKILLS",
    toolsLabel: "// OUTILS & ENV.",
    langLabel: "// LANGUES",
    softSkills: [
      "Communication efficace",
      "Travail d'équipe & collaboration",
      "Autonomie & rigueur",
      "Gestion du temps & priorisation",
      "Curiosité & créativité",
    ],
    languages: [
      { name: "Français", level: "Expert" },
      { name: "Anglais", level: "Courant" },
    ],
  },
  en: {
    title: "Skills",
    techLabel: "// TECHNICAL SKILLS — SCANNING...",
    softLabel: "// SOFT SKILLS",
    toolsLabel: "// TOOLS & ENV.",
    langLabel: "// LANGUAGES",
    softSkills: [
      "Effective communication",
      "Teamwork & collaboration",
      "Autonomy & rigor",
      "Time management & prioritization",
      "Curiosity & creativity",
    ],
    languages: [
      { name: "French", level: "Expert" },
      { name: "English", level: "Fluent" },
    ],
  },
};

const TECH_SKILLS = [
  { name: "Claude Code / Cursor / LLM APIs", level: 85, color: "oklch(0.87 0.18 195)" },
  { name: "HTML / CSS", level: 90, color: "oklch(0.87 0.18 195)" },
  { name: "JavaScript / TypeScript", level: 78, color: "oklch(0.87 0.18 195)" },
  { name: "React / React Native", level: 80, color: "oklch(0.87 0.18 195)" },
  { name: "Node.js / Express.js", level: 72, color: "oklch(0.7 0.28 295)" },
  { name: "PHP", level: 70, color: "oklch(0.7 0.28 295)" },
  { name: "Python", level: 65, color: "oklch(0.7 0.28 295)" },
  { name: "Angular / Vue.js", level: 65, color: "oklch(0.7 0.28 295)" },
  { name: "Asp.NET Core MVC", level: 60, color: "oklch(0.85 0.22 155)" },
  { name: "Microsoft SQL Server", level: 68, color: "oklch(0.85 0.22 155)" },
  { name: "Java / JavaFX", level: 62, color: "oklch(0.85 0.22 155)" },
];

const TOOLS = [
  "Claude Code", "Cursor", "API Claude (vision)", "Prompt Engineering",
  "N8N", "FastAPI", "Supabase", "PostgreSQL", "Redis", "Stripe API",
  "Git / GitHub", "GitHub Actions (CI/CD)", "GitHub Pages", "Vite",
  "Tailwind CSS", "Framer Motion", "Expo", "Maestro (tests E2E)",
  "Xcode", "VS Code", "Linux (Ubuntu/Debian)", "macOS",
  "ARIA / Accessibilité",
];

export default function SkillsSection() {
  const { lang } = useLang();
  const t = TEXTS[lang];
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-20 relative">
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
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
            <span style={{ color: "oklch(0.85 0.22 155)" }}>./skills.sh --scan</span>
          </div>
          <h2
            className="text-3xl font-bold"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "oklch(0.87 0.18 195)",
              textShadow: "0 0 20px oklch(0.87 0.18 195 / 0.3)",
            }}
          >
            {t.title}
          </h2>
          <div
            className="mt-2 h-px w-24"
            style={{ background: "linear-gradient(90deg, oklch(0.87 0.18 195), transparent)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tech skills with bars */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5"
              style={{
                background: "oklch(0.11 0.015 265)",
                border: "1px solid oklch(0.87 0.18 195 / 0.2)",
              }}
            >
              <div
                className="text-xs mb-4"
                style={{ color: "oklch(0.87 0.18 195)", fontFamily: "JetBrains Mono, monospace" }}
              >
                {t.techLabel}
              </div>
              <div className="space-y-4">
                {TECH_SKILLS.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span
                        className="text-xs"
                        style={{ color: "oklch(0.82 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: skill.color, fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {visible ? skill.level : 0}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 w-full overflow-hidden"
                      style={{
                        background: "oklch(0.87 0.18 195 / 0.08)",
                        border: `1px solid ${skill.color.replace(")", " / 0.2)")}`,
                      }}
                    >
                      <motion.div
                        className="h-full"
                        initial={{ width: "0%" }}
                        animate={visible ? { width: `${skill.level}%` } : { width: "0%" }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                        style={{
                          background: `linear-gradient(90deg, ${skill.color.replace(")", " / 0.6)")}, ${skill.color})`,
                          boxShadow: `0 0 8px ${skill.color.replace(")", " / 0.5)")}`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Soft skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5"
              style={{
                background: "oklch(0.11 0.015 265)",
                border: "1px solid oklch(0.7 0.28 295 / 0.2)",
              }}
            >
              <div
                className="text-xs mb-3"
                style={{ color: "oklch(0.7 0.28 295)", fontFamily: "JetBrains Mono, monospace" }}
              >
                {t.softLabel}
              </div>
              <div className="space-y-2">
                {t.softSkills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 10 }}
                    animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.07 }}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "oklch(0.72 0.02 200)", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    <span style={{ color: "oklch(0.85 0.22 155)" }}>▸</span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-5"
              style={{
                background: "oklch(0.11 0.015 265)",
                border: "1px solid oklch(0.87 0.18 195 / 0.15)",
              }}
            >
              <div
                className="text-xs mb-3"
                style={{ color: "oklch(0.87 0.18 195)", fontFamily: "JetBrains Mono, monospace" }}
              >
                {t.langLabel}
              </div>
              <div className="space-y-2 text-xs" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                <div className="flex justify-between">
                  <span style={{ color: "oklch(0.72 0.02 200)" }}>{t.languages[0].name}</span>
                  <span style={{ color: "oklch(0.87 0.18 195)" }}>{t.languages[0].level}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "oklch(0.72 0.02 200)" }}>{t.languages[1].name}</span>
                  <span style={{ color: "oklch(0.85 0.22 155)" }}>{t.languages[1].level}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tools — pleine largeur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 p-5"
          style={{
            background: "oklch(0.11 0.015 265)",
            border: "1px solid oklch(0.85 0.22 155 / 0.2)",
          }}
        >
          <div
            className="text-xs mb-3"
            style={{ color: "oklch(0.85 0.22 155)", fontFamily: "JetBrains Mono, monospace" }}
          >
            {t.toolsLabel}
          </div>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={visible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.2, delay: 0.5 + i * 0.03 }}
                className="px-2 py-0.5 text-xs"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: "oklch(0.85 0.22 155)",
                  border: "1px solid oklch(0.85 0.22 155 / 0.3)",
                  background: "oklch(0.85 0.22 155 / 0.05)",
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
