/**
 * Navbar — Terminal-style navigation
 * Design: SAMUEL_OS Cyberpunk Terminal
 * Fixed sidebar navigation with command-style links
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const NAV_ITEMS = [
  { id: "about", label: "about_me", icon: "👤" },
  { id: "skills", label: "skills.sh", icon: "⚡" },
  { id: "experience", label: "experience", icon: "📋" },
  { id: "projects", label: "projects", icon: "🚀" },
  { id: "contact", label: "contact.sh", icon: "📡" },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      onNavigate(id);
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop sidebar */}
      <nav
        className="fixed left-0 top-0 h-full w-56 hidden lg:flex flex-col z-40"
        style={{
          background: "oklch(0.09 0.012 265 / 0.95)",
          borderRight: "1px solid oklch(0.87 0.18 195 / 0.15)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Logo */}
        <div
          className="px-5 py-5 border-b"
          style={{ borderColor: "oklch(0.87 0.18 195 / 0.15)" }}
        >
          <div className="text-xs mb-1" style={{ color: "oklch(0.55 0.02 200)" }}>
            samuel@portfolio:~$
          </div>
          <div
            className="text-sm font-bold"
            style={{
              color: "oklch(0.87 0.18 195)",
              textShadow: "0 0 10px oklch(0.87 0.18 195 / 0.5)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            SAMUEL_OS v2.0
          </div>
          <div className="text-xs mt-1" style={{ color: "oklch(0.85 0.22 155)" }}>
            ● ONLINE
          </div>
        </div>

        {/* Nav items */}
        <div className="flex-1 py-4 px-3 space-y-1">
          <div className="text-xs px-2 mb-3" style={{ color: "oklch(0.45 0.02 200)" }}>
            // NAVIGATION
          </div>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full text-left px-3 py-2 text-xs transition-all duration-200 rounded-sm group"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                background: activeSection === item.id
                  ? "oklch(0.87 0.18 195 / 0.1)"
                  : "transparent",
                color: activeSection === item.id
                  ? "oklch(0.87 0.18 195)"
                  : "oklch(0.65 0.02 200)",
                borderLeft: activeSection === item.id
                  ? "2px solid oklch(0.87 0.18 195)"
                  : "2px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  (e.currentTarget as HTMLElement).style.color = "oklch(0.87 0.18 195)";
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.87 0.18 195 / 0.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  (e.currentTarget as HTMLElement).style.color = "oklch(0.65 0.02 200)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }
              }}
            >
              <span className="mr-2">{item.icon}</span>
              <span className="mr-1" style={{ color: "oklch(0.87 0.18 195 / 0.5)" }}>./</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div
          className="px-5 py-4 border-t text-xs"
          style={{
            borderColor: "oklch(0.87 0.18 195 / 0.15)",
            color: "oklch(0.45 0.02 200)",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          <div>Montréal, QC 🇨🇦</div>
          <div className="mt-1">© 2025 Samuel Cariélus</div>
        </div>
      </nav>

      {/* Mobile top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 lg:hidden"
        style={{
          background: "oklch(0.09 0.012 265 / 0.95)",
          borderBottom: "1px solid oklch(0.87 0.18 195 / 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          className="text-sm font-bold"
          style={{
            color: "oklch(0.87 0.18 195)",
            fontFamily: "JetBrains Mono, monospace",
            textShadow: "0 0 10px oklch(0.87 0.18 195 / 0.5)",
          }}
        >
          SAMUEL_OS
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-xs px-3 py-1.5"
          style={{
            color: "oklch(0.87 0.18 195)",
            border: "1px solid oklch(0.87 0.18 195 / 0.3)",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          {mobileOpen ? "[CLOSE]" : "[MENU]"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-12 left-0 right-0 z-40 lg:hidden"
            style={{
              background: "oklch(0.09 0.012 265 / 0.98)",
              borderBottom: "1px solid oklch(0.87 0.18 195 / 0.2)",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left px-5 py-3 text-sm border-b transition-all"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: activeSection === item.id ? "oklch(0.87 0.18 195)" : "oklch(0.65 0.02 200)",
                  borderColor: "oklch(0.87 0.18 195 / 0.1)",
                }}
              >
                <span className="mr-2">{item.icon}</span>
                <span style={{ color: "oklch(0.87 0.18 195 / 0.5)" }}>./</span>
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
