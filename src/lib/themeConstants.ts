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

export const DEFAULT_THEME = "ocean-dark";
export const STORAGE_KEY = "portfolio-theme";