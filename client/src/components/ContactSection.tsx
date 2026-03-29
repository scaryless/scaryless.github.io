/**
 * ContactSection — Terminal-style contact form
 * Design: SAMUEL_OS Cyberpunk Terminal
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const inputStyle = (field: string) => ({
    background: focused === field ? "oklch(0.87 0.18 195 / 0.05)" : "oklch(0.09 0.012 265)",
    border: `1px solid ${focused === field ? "oklch(0.87 0.18 195 / 0.5)" : "oklch(0.87 0.18 195 / 0.2)"}`,
    color: "oklch(0.88 0.005 200)",
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "13px",
    outline: "none",
    width: "100%",
    padding: "10px 12px",
    transition: "all 0.2s ease",
    boxShadow: focused === field ? "0 0 10px oklch(0.87 0.18 195 / 0.1)" : "none",
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 relative"
      style={{
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663102982137/Da7gq8UmgQR22is9BJu7Sz/contact-bg-PwqtXo9LiXjS9BdTjngGPY.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0.08 0.01 265 / 0.92)" }}
      />

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
            <span style={{ color: "oklch(0.85 0.22 155)" }}>./contact.sh --init</span>
          </div>
          <h2
            className="text-3xl font-bold"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "oklch(0.87 0.18 195)",
              textShadow: "0 0 20px oklch(0.87 0.18 195 / 0.3)",
            }}
          >
            Contact
          </h2>
          <div
            className="mt-2 h-px w-24"
            style={{ background: "linear-gradient(90deg, oklch(0.87 0.18 195), transparent)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div
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
                // INFORMATIONS DE CONTACT
              </div>

              <div className="space-y-4">
                {[
                  { icon: "📧", label: "Email", value: "carielus2@gmail.com", href: "mailto:carielus2@gmail.com" },
                  { icon: "📱", label: "Téléphone", value: "438-887-0785", href: "tel:4388870785" },
                  { icon: "📍", label: "Localisation", value: "Montréal, QC H1J 1W2", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <div
                        className="text-xs mb-0.5"
                        style={{ color: "oklch(0.55 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm transition-all duration-200"
                          style={{
                            color: "oklch(0.87 0.18 195)",
                            fontFamily: "JetBrains Mono, monospace",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.textShadow = "0 0 10px oklch(0.87 0.18 195 / 0.6)";
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.textShadow = "none";
                          }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span
                          className="text-sm"
                          style={{ color: "oklch(0.72 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
                        >
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div
              className="p-4"
              style={{
                background: "oklch(0.11 0.015 265)",
                border: "1px solid oklch(0.85 0.22 155 / 0.3)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "oklch(0.85 0.22 155)",
                    boxShadow: "0 0 6px oklch(0.85 0.22 155 / 0.8)",
                    animation: "pulse-neon 2s ease-in-out infinite",
                  }}
                />
                <span
                  className="text-xs"
                  style={{ color: "oklch(0.85 0.22 155)", fontFamily: "JetBrains Mono, monospace" }}
                >
                  STATUT: DISPONIBLE
                </span>
              </div>
              <p
                className="text-xs"
                style={{ color: "oklch(0.62 0.02 200)", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Ouvert aux opportunités de travail, stages et collaborations. Réponse sous 24h.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className="p-5"
              style={{
                background: "oklch(0.11 0.015 265)",
                border: "1px solid oklch(0.87 0.18 195 / 0.2)",
              }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 mb-5 pb-3"
                style={{ borderBottom: "1px solid oklch(0.87 0.18 195 / 0.1)" }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28ca42" }} />
                <span
                  className="ml-2 text-xs"
                  style={{ color: "oklch(0.55 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
                >
                  send_message.sh
                </span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 text-center"
                >
                  <div
                    className="text-4xl mb-3"
                    style={{
                      color: "oklch(0.85 0.22 155)",
                      textShadow: "0 0 20px oklch(0.85 0.22 155 / 0.5)",
                    }}
                  >
                    ✓
                  </div>
                  <div
                    className="text-sm mb-1"
                    style={{ color: "oklch(0.85 0.22 155)", fontFamily: "JetBrains Mono, monospace" }}
                  >
                    [SUCCESS] Message envoyé !
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(0.55 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
                  >
                    Je vous répondrai dans les plus brefs délais.
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className="block text-xs mb-1.5"
                      style={{ color: "oklch(0.55 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
                    >
                      $ nom --required
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder="Votre nom complet"
                      style={inputStyle("name") as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs mb-1.5"
                      style={{ color: "oklch(0.55 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
                    >
                      $ email --required
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder="votre@email.com"
                      style={inputStyle("email") as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs mb-1.5"
                      style={{ color: "oklch(0.55 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
                    >
                      $ message --required
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      placeholder="Votre message..."
                      style={{ ...inputStyle("message") as React.CSSProperties, resize: "none" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 text-sm font-medium transition-all duration-200"
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      background: "oklch(0.87 0.18 195)",
                      color: "oklch(0.08 0.01 265)",
                      boxShadow: "0 0 15px oklch(0.87 0.18 195 / 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px oklch(0.87 0.18 195 / 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px oklch(0.87 0.18 195 / 0.3)";
                    }}
                  >
                    [ENVOYER_MESSAGE]
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 pt-6 text-center"
          style={{ borderTop: "1px solid oklch(0.87 0.18 195 / 0.1)" }}
        >
          <div
            className="text-xs"
            style={{ color: "oklch(0.35 0.02 200)", fontFamily: "JetBrains Mono, monospace" }}
          >
            © 2025 Samuel Cariélus — SAMUEL_OS v2.0 — Montréal, QC, Canada
          </div>

        </motion.div>
      </div>
    </section>
  );
}
