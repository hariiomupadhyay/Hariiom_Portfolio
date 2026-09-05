import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "@/lib/language";

const Footer = () => {
  const { t } = useLanguage();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const navLinks = [
    { label: t("About", "परिचय"), href: "#about" },
    { label: t("Work", "कार्य"), href: "#projects" },
    { label: t("Skills", "कौशल"), href: "#skills" },
    { label: t("Services", "सेवाएं"), href: "#philosophy" },
    { label: t("FAQ", "प्रश्न"), href: "#faq" },
    { label: t("Contact", "संपर्क"), href: "#contact" },
  ];

  const socials = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/hariiomupadhyay" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hariiomupadhyay" },
    { icon: FaXTwitter, label: "X", href: "https://x.com/hariiomupadhyay" },
    { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/iam.hariiom" },
    { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/916387768909" },
  ];

  return (
    <footer className="relative bg-[color:var(--color-bg)] border-t border-[color:var(--color-border)] py-16 px-4 sm:px-6 lg:px-12 text-[color:var(--color-text-tertiary)] overflow-hidden">
      {/* Top glowing accent line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Brand & Copy */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="#"
            className="flex items-center gap-2.5 font-mono uppercase font-bold text-sm tracking-wider text-[color:var(--color-text-primary)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[color:var(--color-accent)] animate-pulse" />
            <span>
              Hariom<span className="text-[color:var(--color-accent)]"> Upadhyay</span>
            </span>
          </a>
          <p className="text-xs font-mono text-[color:var(--color-text-tertiary)] bg-[color:var(--color-bg-surface)] px-3 py-1 rounded-full border border-[color:var(--color-border)]">
            {t("Full Stack Developer", "फुल स्टैक डेवलपर")}
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs font-mono font-medium text-[color:var(--color-text-secondary)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[color:var(--color-accent)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] flex items-center justify-center text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-accent)] hover:border-[color:var(--color-accent)] hover:scale-105 transition-all shadow-sm"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>

          <p className="text-xs font-mono text-[color:var(--color-text-tertiary)] text-center md:text-right">
            &copy; {year} Hariom Upadhyay. {t("All rights reserved.", "सर्वाधिकार सुरक्षित।")}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;