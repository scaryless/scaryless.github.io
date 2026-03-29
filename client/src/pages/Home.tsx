/**
 * Home — Main portfolio page
 * Design: SAMUEL_OS Cyberpunk Terminal
 * Assembles all sections with boot sequence and matrix rain background
 */
import { useEffect, useState, useCallback } from "react";
import MatrixRain from "@/components/MatrixRain";
import BootSequence from "@/components/BootSequence";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const SECTIONS = ["hero", "about", "skills", "experience", "projects", "contact"];

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (!booted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [booted]);

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.08 0.01 265)" }}
    >
      {/* Boot sequence overlay */}
      {!booted && <BootSequence onComplete={handleBootComplete} />}

      {/* Matrix rain background */}
      {booted && <MatrixRain />}

      {/* Main layout */}
      {booted && (
        <>
          {/* Sidebar navigation */}
          <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

          {/* Main content — offset for sidebar on desktop */}
          <main className="lg:ml-56 relative z-10">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        </>
      )}
    </div>
  );
}
