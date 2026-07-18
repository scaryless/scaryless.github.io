/**
 * AboutSection — About me with terminal aesthetic
 * Design: SAMUEL_OS Cyberpunk Terminal
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";

const TEXTS = {
  fr: {
    title: "À propos de moi",
    infoItems: [
      { key: "name", value: "Samuel Cariélus" },
      { key: "role", value: "Développeur Web Junior" },
      { key: "location", value: "Montréal, QC, Canada" },
      { key: "email", value: "carielus2@gmail.com" },
      { key: "phone", value: "438-887-0785" },
      { key: "languages", value: "Français (Expert), Anglais (Courant)" },
      { key: "status", value: "DISPONIBLE — Ouvert aux opportunités" },
    ],
    interestsLabel: "// CENTRES D'INTÉRÊTS",
    interests: [
      "🎵 Composition musicale & instrumentales",
      "✈️ Voyages & découverte de cultures",
      "🤖 Machine Learning & Intelligence Artificielle",
      "💡 Prototypage rapide d'idées",
    ],
    description:
      "Développeur web junior basé à Montréal, je combine une formation en technologies web et une expérience de développeur solo auprès de vrais clients. Rigoureux et persévérant, je trouve ma satisfaction dans le travail bien fait et la réussite d'équipe. J'utilise l'IA au quotidien (Claude Code, Cursor, API de LLM) pour livrer plus vite et plus efficacement.",
  },
  en: {
    title: "About me",
    infoItems: [
      { key: "name", value: "Samuel Cariélus" },
      { key: "role", value: "Junior Web Developer" },
      { key: "location", value: "Montreal, QC, Canada" },
      { key: "email", value: "carielus2@gmail.com" },
      { key: "phone", value: "438-887-0785" },
      { key: "languages", value: "French (Expert), English (Fluent)" },
      { key: "status", value: "AVAILABLE — Open to opportunities" },
    ],
    interestsLabel: "// INTERESTS",
    interests: [
      "🎵 Music composition & instrumentals",
      "✈️ Travel & discovering cultures",
      "🤖 Machine Learning & Artificial Intelligence",
      "💡 Rapid idea prototyping",
    ],
    description:
      "Junior web developer based in Montreal, combining formal training in web technologies with hands-on experience as a solo developer for real clients. Rigorous and persistent, I find satisfaction in work done right and in team success. I use AI daily (Claude Code, Cursor, LLM APIs) to ship faster and more efficiently.",
  },
};

export default function AboutSection() {
  const { lang } = useLang();
  const t = TEXTS[lang];
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Section header */}
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
            <span style={{ color: "oklch(0.85 0.22 155)" }}>./about_me</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Terminal info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-5"
            style={{
              background: "oklch(0.11 0.015 265)",
              border: "1px solid oklch(0.87 0.18 195 / 0.2)",
            }}
          >
            {/* Terminal title bar */}
            <div
              className="flex items-center gap-2 mb-4 pb-3"
              style={{ borderBottom: "1px solid oklch(0.87 0.18 195 / 0.1)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28ca42" }} />
              <span
                className="ml-2 text-xs"
                style={{ color: "oklch(0.55 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
              >
                user_profile.json
              </span>
            </div>

            {/* JSON-style info */}
            <div className="space-y-1.5 text-xs" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              <div style={{ color: "oklch(0.87 0.18 195 / 0.6)" }}>{"{"}</div>
              {t.infoItems.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -10 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                  className="pl-4 flex flex-wrap gap-1"
                >
                  <span style={{ color: "oklch(0.7 0.28 295)" }}>"{item.key}"</span>
                  <span style={{ color: "oklch(0.55 0.02 200)" }}>:</span>
                  <span style={{ color: item.key === "status" ? "oklch(0.85 0.22 155)" : "oklch(0.87 0.18 195 / 0.9)" }}>
                    "{item.value}"
                  </span>
                  {i < t.infoItems.length - 1 && <span style={{ color: "oklch(0.55 0.02 200)" }}>,</span>}
                </motion.div>
              ))}
              <div style={{ color: "oklch(0.87 0.18 195 / 0.6)" }}>{"}"}</div>
            </div>
          </motion.div>

          {/* Bio + interests */}
          <div className="space-y-5">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
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
                // DESCRIPTION
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.72 0.02 200)", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {t.description}
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                {t.interestsLabel}
              </div>
              <div className="space-y-2">
                {t.interests.map((interest, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                    className="text-sm"
                    style={{ color: "oklch(0.72 0.02 200)", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {interest}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
