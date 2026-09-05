import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export interface ThemeInfo {
  id: string;
  nameEn: string;
  nameHi: string;
  mode: "dark" | "light";
  swatch: string;
}

export const THEMES: ThemeInfo[] = [
  { id: "emerald-dark", nameEn: "Emerald Dark", nameHi: "एमराल्ड डार्क", mode: "dark", swatch: "#10b981" },
  { id: "ocean-dark", nameEn: "Ocean Dark", nameHi: "ओशन डार्क", mode: "dark", swatch: "#0ea5e9" },
  { id: "violet-dark", nameEn: "Violet Dark", nameHi: "वायलेट डार्क", mode: "dark", swatch: "#8b5cf6" },
  { id: "sunset-dark", nameEn: "Sunset Dark", nameHi: "सनसेट डार्क", mode: "dark", swatch: "#f97316" },
  { id: "crimson-light", nameEn: "Crimson Light", nameHi: "क्रिमसन लाइट", mode: "light", swatch: "#dc2626" },
  { id: "arctic-light", nameEn: "Arctic Light", nameHi: "आर्कटिक लाइट", mode: "light", swatch: "#2563eb" },
  { id: "mint-light", nameEn: "Mint Light", nameHi: "मिंट लाइट", mode: "light", swatch: "#059669" },
  { id: "amber-light", nameEn: "Amber Light", nameHi: "एम्बर लाइट", mode: "light", swatch: "#b45309" },
];

const DEFAULT_THEME = "ocean-dark";
const STORAGE_KEY = "portfolio-theme";

interface ThemeContextValue {
  theme: string;
  setTheme: (id: string) => void;
  themes: ThemeInfo[];
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<string>(() => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && THEMES.some((t: ThemeInfo) => t.id === stored)) return stored;
    return DEFAULT_THEME;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = (id: string) => {
    if (THEMES.some((t: ThemeInfo) => t.id === id)) setThemeState(id);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};