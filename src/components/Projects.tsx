import { motion } from "framer-motion";
import { FaCheckCircle, FaShoppingCart, FaTools, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { Typewriter } from "./ui/typewriter";
import { useLanguage } from "@/lib/language";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden border-t border-[color:var(--color-border)]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[color:var(--color-accent)]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/30 text-[color:var(--color-accent)] font-mono text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <span>{t("FEATURED WORK", "प्रमुख कार्य")}</span>
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
                ["Projects & Work in Progress", "Building Real Products"],
                ["प्रोजेक्ट्स और निर्माणाधीन कार्य", "असली प्रोडक्ट बनाना"]
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
            className="text-sm sm:text-base text-[color:var(--color-text-tertiary)] max-w-xl"
          >
            {t(
              "I'm currently building my first full-scale product using the MERN stack. Here's what's in progress right now.",
              "मैं अभी MERN स्टैक का उपयोग करके अपना पहला पूर्ण-स्तरीय प्रोडक्ट बना रहा हूं। यहाँ देखें अभी क्या निर्माणाधीन है।"
            )}
          </motion.p>
        </div>

        <div className="space-y-12">

          {/* 01 — E-Commerce Website (In Progress) */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative bg-[color:var(--color-bg-card)]/80 backdrop-blur-xl border border-[color:var(--color-border)] rounded-3xl overflow-hidden shadow-2xl hover:border-[color:var(--color-accent)] transition-all duration-500"
          >
            {/* Top glowing line accent on card hover */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">

              {/* Left Column: Narrative & Technical Specs */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[color:var(--color-accent)]">01</span>
                    <span className="px-3.5 py-1 rounded-full bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/30 text-[color:var(--color-accent)] font-mono text-xs font-semibold tracking-wider uppercase">
                      {t("E-Commerce / MERN Stack", "ई-कॉमर्स / MERN स्टैक")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 font-mono text-xs font-semibold">
                      <FaTools size={11} /> {t("IN PROGRESS", "निर्माणाधीन")}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[color:var(--color-text-primary)] mb-6 tracking-tight font-display">
                    {t("E-Commerce Platform", "ई-कॉमर्स प्लेटफॉर्म")}
                  </h3>

                  <p className="text-xs sm:text-sm text-[color:var(--color-text-secondary)] leading-relaxed mb-8 font-normal">
                    {t(
                      "A full-featured online store built on the MERN stack, covering product browsing, cart management, checkout, and an admin dashboard for managing inventory and orders.",
                      "MERN स्टैक पर बना एक पूर्ण-फीचर वाला ऑनलाइन स्टोर, जिसमें प्रोडक्ट ब्राउज़िंग, कार्ट प्रबंधन, चेकआउट, और इन्वेंटरी व ऑर्डर प्रबंधन के लिए एडमिन डैशबोर्ड शामिल है।"
                    )}
                  </p>

                  {/* Key Capabilities */}
                  <div className="space-y-3 mb-8 text-xs sm:text-sm text-[color:var(--color-text-tertiary)]">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-[color:var(--color-accent)] mt-0.5 shrink-0" />
                      <span>{t(
                        "Product catalog with categories, search, and a dynamic shopping cart.",
                        "श्रेणियों, सर्च और डायनामिक शॉपिंग कार्ट के साथ प्रोडक्ट कैटलॉग।"
                      )}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-[color:var(--color-accent)] mt-0.5 shrink-0" />
                      <span>{t(
                        "User authentication with JWT and a secure checkout flow.",
                        "JWT के साथ यूज़र ऑथेंटिकेशन और सुरक्षित चेकआउट फ्लो।"
                      )}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-[color:var(--color-accent)] mt-0.5 shrink-0" />
                      <span>{t(
                        "Admin panel for product, order, and inventory management via REST APIs.",
                        "REST APIs के जरिए प्रोडक्ट, ऑर्डर और इन्वेंटरी प्रबंधन के लिए एडमिन पैनल।"
                      )}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack & Action Links */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    {["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] font-mono text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href="#contact"
                      className="group/btn inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold font-mono uppercase tracking-wider text-[color:var(--color-text-primary)] bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/40 hover:bg-[color:var(--color-accent)] hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      <span>{t("Follow Progress — Get in Touch", "प्रगति जानें — संपर्क करें")}</span>
                      <FaExternalLinkAlt className="text-[10px] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Status Mockup Panel */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] flex flex-col h-full min-h-[320px]">
                  
                  {/* Browser Header Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[color:var(--color-bg-card)] border-b border-[color:var(--color-border)] text-xs font-mono text-[color:var(--color-text-tertiary)]">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <span className="text-[color:var(--color-text-secondary)]">Preview</span>
                    <span className="text-[color:var(--color-accent)] font-bold uppercase text-[10px] px-2 py-0.5 rounded bg-[color:var(--color-accent)]/10">
                      {t("LIVE ", "लाइव ")}
                    </span>
                  </div>

                  {/* Placeholder Visual Content */}
                  <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center bg-gradient-to-b from-transparent to-[color:var(--color-accent)]/5">
                    <div className="w-20 h-20 rounded-2xl bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/20 flex items-center justify-center text-[color:var(--color-accent)] shadow-inner">
                      <FaShoppingCart size={32} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[color:var(--color-text-primary)] text-base mb-1">
                        {t("E-commerce App", "ई-कॉमर्स एप्लिकेशन")}
                      </h4>
                      <p className="text-xs text-[color:var(--color-text-tertiary)] font-mono max-w-[240px] leading-relaxed">
                        {t("Screens & live preview coming soon", "स्क्रीन और लाइव प्रीव्यू जल्द आ रहा है")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.article>

          {/* More Projects Coming Soon Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="border border-dashed border-[color:var(--color-border)] rounded-2xl p-8 sm:p-12 text-center bg-[color:var(--color-bg-card)]/40 backdrop-blur-md"
          >
            <div className="w-12 h-12 rounded-xl bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/20 flex items-center justify-center text-[color:var(--color-accent)] mx-auto mb-4">
              <FaCode size={20} />
            </div>
            <h4 className="text-lg font-bold text-[color:var(--color-text-primary)] mb-2">
              {t("More Innovations on the Way", "और भी प्रोजेक्ट्स जल्द आ रहे हैं")}
            </h4>
            <p className="text-sm text-[color:var(--color-text-tertiary)] max-w-md mx-auto">
              {t(
                "More projects coming soon as I continue building and learning.",
                "मैं लगातार नए प्रोजेक्ट्स पर काम कर रहा हूँ — जल्द ही और भी शानदार एप्लीकेशन यहाँ जोड़े जाएंगे।"
              )}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Projects;