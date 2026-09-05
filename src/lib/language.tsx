import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";

const STORAGE_KEY = "portfolio-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  /** Pick the right string for the current language. */
  t: <T,>(en: T, hi: T) => T;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "hi" ? "hi" : "en";
  });

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "hi" ? "hi" : "en");
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggleLang = () => setLangState((prev) => (prev === "en" ? "hi" : "en"));

  const t = <T,>(en: T, hi: T): T => (lang === "hi" ? hi : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
