/**
 * LanguageContext — bilinguisme FR/EN avec persistance localStorage.
 * Usage dans un composant :
 *   const { lang, toggleLang } = useLang();
 *   const t = TEXTS[lang];  // TEXTS = { fr: {...}, en: {...} } local au composant
 */
import React, { createContext, useContext, useEffect, useState } from "react";

export type Lang = "fr" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang");
    return stored === "en" || stored === "fr" ? stored : "fr";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "fr" ? "en" : "fr"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
