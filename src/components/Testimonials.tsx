import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaChevronLeft, FaChevronRight, FaCertificate, FaGraduationCap } from "react-icons/fa";

import { Typewriter } from "./ui/typewriter";
import { useLanguage } from "@/lib/language";

const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: t("Meta Front-End Developer Certificate", "Meta Front-End Developer प्रमाणपत्र"),
      issuer: t("Offered by Meta, via Coursera", "Meta द्वारा, Coursera के माध्यम से"),
      detail: t("Completed with distinction — 92.5% (Grade A)", "विशिष्टता के साथ पूर्ण — 92.5% (ग्रेड A)"),
    },
    {
      title: t("Python Certificate", "Python प्रमाणपत्र"),
      issuer: t("Advanced certification in Python programming", "पायथन प्रोग्रामिंग में एडवांस्ड प्रमाणन"),
      detail: t("Certified in Python and data analytics", "पायथन और डेटा एनालिटिक्स में प्रमाणित"),
    },
    {
      title: t("Complete Web Development Bootcamp", "Complete Web Development बूटकैंप"),
      issuer: t("Udemy — Nov 2025", "Udemy — नवंबर 2025"),
      detail: t("Completed full-stack curriculum with Grade A", "ग्रेड A के साथ फुल-स्टैक पाठ्यक्रम पूर्ण किया"),
    }
  ];

  const trustStats = [
    { label: t("Certifications Earned", "अर्जित प्रमाणपत्र"), value: "3" },
    { label: t("B.Sc. CGPA", "B.Sc. सीजीपीए"), value: "7.2" },
    { label: t("Meta Certificate Grade", "मेटा प्रमाणपत्र ग्रेड"), value: "92.5%" },
  ];

  const nextCert = () => setCurrentIndex((prev) => (prev + 1) % certifications.length);
  const prevCert = () => setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);

  const current = certifications[currentIndex];

  return (
    <section id="testimonials" className="py-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden border-t border-[color:var(--color-border)]/60 bg-[color:var(--color-bg-surface-2)]/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[color:var(--color-accent)]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/30 text-[color:var(--color-accent)] font-mono text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <FaGraduationCap size={12} />
            <span>{t("CERTIFICATIONS & EDUCATION", "प्रमाणपत्र और शिक्षा")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[color:var(--color-text-primary)] tracking-tight font-display mb-3"
          >
            <Typewriter
              words={t(
                ["Certifications & Achievements", "Education & Credentials"],
                ["प्रमाणपत्र और उपलब्धियां", "शिक्षा और योग्यताएं"]
              )}
              typingSpeed={60}
              pauseTime={2500}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[color:var(--color-text-tertiary)] max-w-lg"
          >
            {t(
              "Certifications and coursework I've completed alongside my M.Sc. studies.",
              "मेरी M.Sc. पढ़ाई के साथ-साथ पूरे किए गए प्रमाणपत्र और कोर्सवर्क।"
            )}
          </motion.p>
        </div>

        {/* Certification Card Slider Bento Style */}
        <div className="relative bg-[color:var(--color-bg-card)]/90 backdrop-blur-2xl border border-[color:var(--color-border)] rounded-3xl p-8 sm:p-12 shadow-2xl mb-10 overflow-hidden group">
          {/* Top glowing line accent */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent opacity-75" />

          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/20 flex items-center justify-center text-[color:var(--color-accent)] shadow-sm">
              <FaCertificate size={22} />
            </div>
            <div className="text-xs font-mono font-bold text-[color:var(--color-text-tertiary)] bg-[color:var(--color-bg-surface)] px-3 py-1 rounded-full border border-[color:var(--color-border)]">
              0{currentIndex + 1} / 0{certifications.length}
            </div>
          </div>

          <div className="min-h-[140px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full space-y-4"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[color:var(--color-text-primary)] leading-snug font-display">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-[color:var(--color-text-secondary)] font-mono">
                  {current.detail}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[color:var(--color-border)]/80">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/20 flex items-center justify-center text-[color:var(--color-accent)]">
                      <FaAward size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-semibold text-[color:var(--color-text-secondary)]">{current.issuer}</div>
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={prevCert}
                      className="w-10 h-10 rounded-xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] flex items-center justify-center text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-accent)] hover:border-[color:var(--color-accent)] hover:scale-105 transition-all cursor-pointer shadow-sm"
                      aria-label="Previous certification"
                    >
                      <FaChevronLeft size={13} />
                    </button>
                    <button
                      onClick={nextCert}
                      className="w-10 h-10 rounded-xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] flex items-center justify-center text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-accent)] hover:border-[color:var(--color-accent)] hover:scale-105 transition-all cursor-pointer shadow-sm"
                      aria-label="Next certification"
                    >
                      <FaChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Trust Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="group relative bg-[color:var(--color-bg-card)]/80 backdrop-blur-xl border border-[color:var(--color-border)] rounded-2xl p-6 text-center shadow-lg hover:border-[color:var(--color-accent)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[color:var(--color-accent)] font-mono mb-1.5 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[color:var(--color-text-tertiary)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;