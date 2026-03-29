/**
 * BootSequence — Animated intro boot screen
 * Design: SAMUEL_OS Cyberpunk Terminal
 * Simulates OS boot with ASCII art and system messages
 */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootSequenceProps {
  onComplete: () => void;
}

const ASCII_ART = `
 ███████╗ █████╗ ███╗   ███╗██╗   ██╗███████╗██╗     
 ██╔════╝██╔══██╗████╗ ████║██║   ██║██╔════╝██║     
 ███████╗███████║██╔████╔██║██║   ██║█████╗  ██║     
 ╚════██║██╔══██║██║╚██╔╝██║██║   ██║██╔══╝  ██║     
 ███████║██║  ██║██║ ╚═╝ ██║╚██████╔╝███████╗███████╗
 ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚══════╝
`;

const BOOT_MESSAGES = [
  { text: "SAMUEL_OS v2.0 — Initialisation du système...", delay: 0 },
  { text: "Chargement des modules: [React] [Node.js] [PHP] [Python]", delay: 400 },
  { text: "Vérification des compétences... OK", delay: 800 },
  { text: "Connexion à la base de données de projets... OK", delay: 1200 },
  { text: "Chargement du profil: CARIÉLUS Samuel — Développeur Web Junior", delay: 1600 },
  { text: "Localisation: Montréal, QC, Canada", delay: 2000 },
  { text: "Statut: DISPONIBLE POUR NOUVELLES OPPORTUNITÉS", delay: 2400 },
  { text: "Démarrage de l'interface portfolio...", delay: 2900 },
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showAscii, setShowAscii] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Show ASCII art first
    const asciiTimer = setTimeout(() => setShowAscii(true), 200);

    // Show messages progressively
    BOOT_MESSAGES.forEach((msg, i) => {
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, i]);
        setProgress(Math.round(((i + 1) / BOOT_MESSAGES.length) * 100));
      }, msg.delay + 600);
    });

    // Complete boot
    const completeTimer = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 600);
    }, 3800);

    return () => {
      clearTimeout(asciiTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Scanlines overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
            }}
          />

          <div className="w-full max-w-3xl px-6 font-terminal">
            {/* ASCII Art */}
            <AnimatePresence>
              {showAscii && (
                <motion.pre
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[7px] sm:text-[9px] md:text-[11px] leading-tight mb-6 whitespace-pre"
                  style={{
                    color: "oklch(0.87 0.18 195)",
                    textShadow: "0 0 10px oklch(0.87 0.18 195 / 0.6), 0 0 30px oklch(0.87 0.18 195 / 0.3)",
                  }}
                >
                  {ASCII_ART}
                </motion.pre>
              )}
            </AnimatePresence>

            {/* Boot messages */}
            <div className="space-y-1 mb-6">
              {BOOT_MESSAGES.map((msg, i) => (
                <AnimatePresence key={i}>
                  {visibleMessages.includes(i) && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-2 text-xs sm:text-sm"
                    >
                      <span style={{ color: "oklch(0.87 0.18 195)" }}>[</span>
                      <span style={{ color: "oklch(0.85 0.22 155)" }}>OK</span>
                      <span style={{ color: "oklch(0.87 0.18 195)" }}>]</span>
                      <span style={{ color: "oklch(0.75 0.02 200)" }}>{msg.text}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1" style={{ color: "oklch(0.55 0.02 200)" }}>
                <span>Chargement du système</span>
                <span style={{ color: "oklch(0.87 0.18 195)" }}>{progress}%</span>
              </div>
              <div
                className="h-1.5 w-full rounded-sm overflow-hidden"
                style={{ background: "oklch(0.87 0.18 195 / 0.1)", border: "1px solid oklch(0.87 0.18 195 / 0.2)" }}
              >
                <motion.div
                  className="h-full"
                  style={{
                    background: "linear-gradient(90deg, oklch(0.87 0.18 195 / 0.7), oklch(0.87 0.18 195))",
                    boxShadow: "0 0 10px oklch(0.87 0.18 195 / 0.6)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Blinking cursor */}
            <div className="mt-4 text-xs" style={{ color: "oklch(0.55 0.02 200)" }}>
              <span>samuel@portfolio:~$ </span>
              <span
                style={{
                  color: "oklch(0.87 0.18 195)",
                  animation: "blink 1s step-end infinite",
                }}
              >
                █
              </span>
            </div>
          </div>

          {/* Skip button */}
          <button
            onClick={() => { setDone(true); setTimeout(onComplete, 300); }}
            className="absolute bottom-6 right-6 text-xs px-3 py-1 transition-all"
            style={{
              color: "oklch(0.55 0.02 200)",
              border: "1px solid oklch(0.87 0.18 195 / 0.2)",
              fontFamily: "JetBrains Mono, monospace",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "oklch(0.87 0.18 195)";
              (e.target as HTMLElement).style.borderColor = "oklch(0.87 0.18 195 / 0.5)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "oklch(0.55 0.02 200)";
              (e.target as HTMLElement).style.borderColor = "oklch(0.87 0.18 195 / 0.2)";
            }}
          >
            [SKIP]
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
