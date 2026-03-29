/**
 * HeroSection — Main hero with typing animation
 * Design: SAMUEL_OS Cyberpunk Terminal
 * Full-screen hero with terminal-style introduction
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TYPING_LINES = [
  "Développeur Web Junior",
  "React & Node.js Developer",
  "Mobile App Builder",
  "Passionné d'IA & Machine Learning",
];

export default function HeroSection() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const current = TYPING_LINES[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % TYPING_LINES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, lineIndex]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663102982137/Da7gq8UmgQR22is9BJu7Sz/hero-terminal-bg-Smiy8KY8uNw6rLYrJeXhap.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, oklch(0.08 0.01 265 / 0.92) 0%, oklch(0.08 0.01 265 / 0.75) 50%, oklch(0.08 0.01 265 / 0.88) 100%)" }}
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      <div className="relative z-10 w-full max-w-3xl px-6 lg:px-10">
        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#28ca42" }} />
          <div
            className="ml-3 text-xs"
            style={{ color: "oklch(0.55 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
          >
            samuel@portfolio — bash — 80×24
          </div>
        </motion.div>

        {/* System prompt line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-xs mb-2"
          style={{ color: "oklch(0.55 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
        >
          Last login: Sun Mar 29 2026 — SAMUEL_OS v2.0
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div
            className="text-xs mb-1"
            style={{ color: "oklch(0.87 0.18 195)", fontFamily: "JetBrains Mono, monospace" }}
          >
            samuel@portfolio:~$&nbsp;
            <span style={{ color: "oklch(0.85 0.22 155)" }}>whoami</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 leading-none"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#e2e8f0",
              letterSpacing: "-0.02em",
            }}
          >
            Samuel
          </h1>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-none"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "oklch(0.87 0.18 195)",
              textShadow: "0 0 30px oklch(0.87 0.18 195 / 0.4)",
              letterSpacing: "-0.02em",
            }}
          >
            Cariélus
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mb-8"
        >
          <div
            className="text-xs mb-1"
            style={{ color: "oklch(0.87 0.18 195)", fontFamily: "JetBrains Mono, monospace" }}
          >
            samuel@portfolio:~$&nbsp;
            <span style={{ color: "oklch(0.85 0.22 155)" }}>cat role.txt</span>
          </div>
          <div
            className="text-xl sm:text-2xl font-medium h-8"
            style={{ fontFamily: "JetBrains Mono, monospace", color: "oklch(0.87 0.18 195)" }}
          >
            {displayed}
            <span style={{ opacity: showCursor ? 1 : 0, color: "oklch(0.87 0.18 195)" }}>█</span>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-8 max-w-xl"
        >
          <div
            className="text-xs mb-2"
            style={{ color: "oklch(0.87 0.18 195)", fontFamily: "JetBrains Mono, monospace" }}
          >
            samuel@portfolio:~$&nbsp;
            <span style={{ color: "oklch(0.85 0.22 155)" }}>cat bio.txt</span>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "oklch(0.72 0.02 200)", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Récemment diplômé d'une AEC en Programmation en technologies Web, motivé par les défis et passionné d'IA. Je cherche à intégrer une équipe qui me permettra de grandir tant au niveau de mon expérience que dans mes compétences techniques.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap gap-3"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 py-2.5 text-sm font-medium transition-all duration-200"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              background: "oklch(0.87 0.18 195)",
              color: "oklch(0.08 0.01 265)",
              boxShadow: "0 0 20px oklch(0.87 0.18 195 / 0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px oklch(0.87 0.18 195 / 0.7)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px oklch(0.87 0.18 195 / 0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            [CONTACT_ME]
          </button>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 py-2.5 text-sm font-medium transition-all duration-200"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: "oklch(0.87 0.18 195)",
              border: "1px solid oklch(0.87 0.18 195 / 0.4)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.87 0.18 195 / 0.08)";
              (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.87 0.18 195 / 0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.87 0.18 195 / 0.4)";
            }}
          >
            [VIEW_PROJECTS]
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.5 }}
          className="mt-12 flex items-center gap-2"
          style={{ color: "oklch(0.45 0.02 200)", fontFamily: "JetBrains Mono, monospace", fontSize: "11px" }}
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
          <span>scroll pour explorer</span>
        </motion.div>
      </div>

      {/* Avatar image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute right-8 bottom-0 hidden xl:block"
        style={{ width: "320px" }}
      >
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663102982137/Da7gq8UmgQR22is9BJu7Sz/profile-avatar-d2Da8qbqDAvUDxBpHWqVpY.webp"
          alt="Samuel Cariélus"
          className="w-full object-contain"
          style={{
            filter: "drop-shadow(0 0 30px oklch(0.87 0.18 195 / 0.4))",
            maskImage: "linear-gradient(to top, transparent 0%, black 20%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%)",
          }}
        />
      </motion.div>
    </section>
  );
}
