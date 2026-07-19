/**
 * ExperienceSection — Timeline with education and work experience
 * Design: SAMUEL_OS Cyberpunk Terminal
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";

const DATA = {
  fr: {
    title: "Parcours",
    workLabel: "// EXPÉRIENCES DE TRAVAIL",
    eduLabel: "// ÉDUCATION",
    stats: [
      { value: "2+", label: "ans d'exp. dev" },
      { value: "15+", label: "technos" },
    ],
    experiences: [
      {
        type: "work",
        title: "Développeur Full-Stack",
        company: "Freelance",
        period: "Mars 2024 — Aujourd'hui",
        description: "Conception et développement d'applications web et de chatbots d'IA pour différents clients, de l'analyse du besoin jusqu'à la mise en production. Gestion des projets en autonomie complète : échanges avec les clients, présentation des solutions, livraison et suivi.",
        tags: ["IA", "Chatbots", "API REST", "Autonomie"],
        color: "oklch(0.87 0.18 195)",
      },
      {
        type: "work",
        title: "Stagiaire Développeur",
        company: "ProPro Media inc",
        period: "Mai 2025 — Septembre 2025",
        description: "Développement d'une application mobile pour un client avec l'aide et le suivi d'un mentor. Mise en place de l'authentification utilisateur, développement de fonctionnalités front-end avec React, opérations CRUD, tests et corrections de bugs.",
        tags: ["React Native", "Expo", "CRUD", "Auth"],
        color: "oklch(0.87 0.18 195)",
      },
      {
        type: "work",
        title: "Chauffeur-Livreur",
        company: "Recyclage Philtex",
        period: "Juin 2014 — Avril 2024",
        description: "Collecte de dons dans toute la province du Québec, en contact quotidien avec les clients et les organismes. Dix ans de gestion autonome des priorités, des itinéraires et des horaires.",
        tags: ["Logistique", "Communication", "Organisation"],
        color: "oklch(0.7 0.28 295)",
      },
    ],
    education: [
      {
        degree: "AEC — Programmation en technologies Web",
        school: "Collège Gérald-Godin",
        period: "Avril 2024 — Sept 2025",
        color: "oklch(0.87 0.18 195)",
      },
      {
        degree: "DEC — Sciences Humaines",
        school: "Vanier College",
        period: "Sept 2009 — Mai 2014",
        color: "oklch(0.85 0.22 155)",
      },
      {
        degree: "Diplôme d'études secondaires",
        school: "Collège Mont-Royal",
        period: "Sept 2004 — Juin 2009",
        color: "oklch(0.85 0.22 155)",
      },
    ],
  },
  en: {
    title: "Background",
    workLabel: "// WORK EXPERIENCE",
    eduLabel: "// EDUCATION",
    stats: [
      { value: "2+", label: "yrs dev exp." },
      { value: "15+", label: "techs" },
    ],
    experiences: [
      {
        type: "work",
        title: "Full-Stack Developer",
        company: "Freelance",
        period: "March 2024 — Today",
        description: "Design and development of web applications and AI chatbots for various clients, from needs analysis to production. Fully autonomous project management: client communication, solution presentations, delivery and follow-up.",
        tags: ["AI", "Chatbots", "REST API", "Autonomy"],
        color: "oklch(0.87 0.18 195)",
      },
      {
        type: "work",
        title: "Developer Intern",
        company: "ProPro Media inc",
        period: "May 2025 — September 2025",
        description: "Development of a mobile application for a client with the guidance of a mentor. User authentication setup, front-end feature development with React, CRUD operations, testing and bug fixes.",
        tags: ["React Native", "Expo", "CRUD", "Auth"],
        color: "oklch(0.87 0.18 195)",
      },
      {
        type: "work",
        title: "Delivery Driver",
        company: "Recyclage Philtex",
        period: "June 2014 — April 2024",
        description: "Donation collection across the province of Quebec, in daily contact with clients and organizations. Ten years of autonomous management of priorities, routes and schedules.",
        tags: ["Logistics", "Communication", "Organization"],
        color: "oklch(0.7 0.28 295)",
      },
    ],
    education: [
      {
        degree: "AEC — Web Technologies Programming",
        school: "Collège Gérald-Godin",
        period: "April 2024 — Sept 2025",
        color: "oklch(0.87 0.18 195)",
      },
      {
        degree: "DEC — Social Sciences",
        school: "Vanier College",
        period: "Sept 2009 — May 2014",
        color: "oklch(0.85 0.22 155)",
      },
      {
        degree: "High School Diploma",
        school: "Collège Mont-Royal",
        period: "Sept 2004 — June 2009",
        color: "oklch(0.85 0.22 155)",
      },
    ],
  },
};

export default function ExperienceSection() {
  const { lang } = useLang();
  const t = DATA[lang];
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
    <section id="experience" ref={ref} className="py-20 relative">
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
            <span style={{ color: "oklch(0.85 0.22 155)" }}>cat experience.log</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xs mb-5"
              style={{ color: "oklch(0.87 0.18 195)", fontFamily: "JetBrains Mono, monospace" }}
            >
              {t.workLabel}
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-3 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, oklch(0.87 0.18 195 / 0.5), transparent)" }}
              />

              <div className="space-y-6 pl-8">
                {t.experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-8 top-1.5 w-3 h-3 rounded-full"
                      style={{
                        background: exp.color,
                        boxShadow: `0 0 8px ${exp.color.replace(")", " / 0.6)")}`,
                        border: `2px solid ${exp.color.replace(")", " / 0.3)")}`,
                      }}
                    />

                    <div
                      className="p-4 transition-all duration-300"
                      style={{
                        background: "oklch(0.11 0.015 265)",
                        border: `1px solid ${exp.color.replace(")", " / 0.15)")}`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = exp.color.replace(")", " / 0.4)");
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${exp.color.replace(")", " / 0.1)")}`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = exp.color.replace(")", " / 0.15)");
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                          <h3
                            className="text-sm font-semibold"
                            style={{ color: "oklch(0.92 0.005 200)", fontFamily: "Space Grotesk, sans-serif" }}
                          >
                            {exp.title}
                          </h3>
                          <div
                            className="text-xs"
                            style={{ color: exp.color, fontFamily: "JetBrains Mono, monospace" }}
                          >
                            {exp.company}
                          </div>
                        </div>
                        <span
                          className="text-xs px-2 py-0.5"
                          style={{
                            color: "oklch(0.55 0.02 200)",
                            border: "1px solid oklch(0.87 0.18 195 / 0.1)",
                            fontFamily: "JetBrains Mono, monospace",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <p
                        className="text-xs leading-relaxed mb-3"
                        style={{ color: "oklch(0.65 0.02 200)", fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5"
                            style={{
                              color: exp.color,
                              border: `1px solid ${exp.color.replace(")", " / 0.25)")}`,
                              background: exp.color.replace(")", " / 0.05)"),
                              fontFamily: "JetBrains Mono, monospace",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xs mb-5"
              style={{ color: "oklch(0.7 0.28 295)", fontFamily: "JetBrains Mono, monospace" }}
            >
              {t.eduLabel}
            </motion.div>

            <div className="relative">
              <div
                className="absolute left-3 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, oklch(0.7 0.28 295 / 0.5), transparent)" }}
              />

              <div className="space-y-5 pl-8">
                {t.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                    className="relative"
                  >
                    <div
                      className="absolute -left-8 top-1.5 w-3 h-3 rounded-full"
                      style={{
                        background: edu.color,
                        boxShadow: `0 0 8px ${edu.color.replace(")", " / 0.6)")}`,
                        border: `2px solid ${edu.color.replace(")", " / 0.3)")}`,
                      }}
                    />

                    <div
                      className="p-4"
                      style={{
                        background: "oklch(0.11 0.015 265)",
                        border: `1px solid ${edu.color.replace(")", " / 0.15)")}`,
                      }}
                    >
                      <h3
                        className="text-sm font-semibold mb-1"
                        style={{ color: "oklch(0.92 0.005 200)", fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {edu.degree}
                      </h3>
                      <div
                        className="text-xs mb-1"
                        style={{ color: edu.color, fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {edu.school}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "oklch(0.55 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {edu.period}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 p-4 grid grid-cols-2 gap-3"
              style={{
                background: "oklch(0.11 0.015 265)",
                border: "1px solid oklch(0.87 0.18 195 / 0.15)",
              }}
            >
              {[
                ...t.stats,
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-bold"
                    style={{
                      color: "oklch(0.87 0.18 195)",
                      fontFamily: "Space Grotesk, sans-serif",
                      textShadow: "0 0 15px oklch(0.87 0.18 195 / 0.4)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(0.55 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
