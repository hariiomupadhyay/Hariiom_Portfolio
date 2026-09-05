import { useState, useEffect, useRef } from "react";
import { FaTimes, FaBars, FaPalette, FaGlobe, FaStar } from "react-icons/fa";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useTheme } from "@/lib/theme";
import { useLanguage } from "@/lib/language";

const navLinks = [
  { label: { en: "About", hi: "परिचय" }, href: "#about" },
  { label: { en: "Work", hi: "कार्य" }, href: "#projects" },
  { label: { en: "Skills", hi: "कौशल" }, href: "#skills" },
  { label: { en: "Services", hi: "सेवाएं" }, href: "#philosophy" },
  { label: { en: "FAQ", hi: "प्रश्न" }, href: "#faq" },
  { label: { en: "Contact", hi: "संपर्क" }, href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const { theme, setTheme, themes } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const themeMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "skills", "philosophy", "faq", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target as Node)) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-5 pointer-events-none">
      {/* Top Reading Progress Bar with Neon Glow */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-[color:var(--color-accent)] to-purple-500 fixed top-0 left-0 right-0 origin-left z-50 pointer-events-none shadow-[0_0_12px_rgba(var(--color-accent-rgb),0.6)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Glassmorphic Pill Nav */}
      <div className="pointer-events-auto w-full max-w-5xl bg-[color:var(--color-bg-card)]/80 backdrop-blur-2xl border border-[color:var(--color-border)] rounded-full px-4 sm:px-6 py-2.5 shadow-2xl shadow-black/20 flex items-center justify-between gap-3 transition-all">

        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-mono uppercase font-bold text-xs sm:text-sm tracking-wider text-[color:var(--color-text-primary)] hover:text-[color:var(--color-accent)] transition-colors focus-visible:outline-none rounded shrink-0 group"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[color:var(--color-accent)]"></span>
          </span>
          <span>
            Hariom<span className="text-[color:var(--color-accent)]"> Upadhyay</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 text-xs font-medium text-[color:var(--color-text-tertiary)] bg-[color:var(--color-bg-surface)]/60 p-1 rounded-full border border-[color:var(--color-border)]/60">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-full transition-all duration-300 block focus-visible:outline-none ${
                    isActive
                      ? "text-[color:var(--color-text-primary)] font-semibold"
                      : "hover:text-[color:var(--color-text-primary)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-[color:var(--color-accent)]/15 border border-[color:var(--color-accent)]/30 -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {t(link.label.en, link.label.hi)}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Controls: Language, Theme, CTA */}
        <div className="flex items-center gap-2 shrink-0">

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-[color:var(--color-text-tertiary)] bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] hover:text-[color:var(--color-accent)] hover:border-[color:var(--color-accent)]/50 transition-all cursor-pointer shadow-sm"
          >
            <FaGlobe size={11} className="text-[color:var(--color-accent)]" />
            <span>{lang === "en" ? "EN" : "हिं"}</span>
          </button>

          {/* Theme Picker */}
          <div className="relative" ref={themeMenuRef}>
            <button
              onClick={() => setIsThemeOpen((v) => !v)}
              aria-label="Change theme"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-accent)] hover:border-[color:var(--color-accent)]/50 transition-all cursor-pointer shadow-sm"
            >
              <FaPalette size={13} />
            </button>

            <AnimatePresence>
              {isThemeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-12 w-64 bg-[color:var(--color-bg-card)]/95 backdrop-blur-2xl border border-[color:var(--color-border)] rounded-2xl p-3.5 shadow-2xl grid grid-cols-2 gap-2 z-50"
                >
                  {themes.map((th) => (
                    <button
                      key={th.id}
                      onClick={() => {
                        setTheme(th.id);
                        setIsThemeOpen(false);
                      }}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all cursor-pointer border ${
                        theme === th.id
                          ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent)]/15 shadow-sm"
                          : "border-transparent hover:bg-[color:var(--color-bg-surface)]"
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-white/20 shrink-0 shadow-sm"
                        style={{ backgroundColor: th.swatch }}
                      />
                      <span className="text-xs font-medium text-[color:var(--color-text-secondary)] leading-tight truncate">
                        {t(th.nameEn, th.nameHi)}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Let's Talk CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold font-mono uppercase tracking-wider text-[color:var(--color-on-accent)] bg-[color:var(--color-accent)] hover:opacity-90 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.4)] cursor-pointer"
          >
            <FaStar size={10} />
            <span>{t("Let's Talk", "बात करें")}</span>
          </a>

          {/* Mobile Toggle Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-accent)] transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>

      </div>

      {/* Clean Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-auto fixed top-20 left-4 right-4 bg-[color:var(--color-bg-card)]/95 backdrop-blur-2xl border border-[color:var(--color-border)] rounded-3xl p-6 shadow-2xl z-50 md:hidden flex flex-col gap-3"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[color:var(--color-border)]/60 mb-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[color:var(--color-text-tertiary)]">
                {t("Navigation", "नेविगेशन")}
              </span>
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-[color:var(--color-accent)] bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/30"
              >
                <FaGlobe size={10} />
                <span>{lang === "en" ? "हिंदी में बदलें" : "Switch to English"}</span>
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-accent)] py-2.5 px-4 rounded-xl hover:bg-[color:var(--color-bg-surface)] transition-all flex items-center justify-between"
              >
                <span>{t(link.label.en, link.label.hi)}</span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl text-xs font-bold font-mono uppercase tracking-wider text-[color:var(--color-on-accent)] bg-[color:var(--color-accent)] shadow-lg transition-all mt-3 flex items-center justify-center gap-2"
            >
              <FaStar size={11} />
              <span>{t("Let's Talk", "बात करें")}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;