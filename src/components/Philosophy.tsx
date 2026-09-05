import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaCode, FaChartBar, FaShoppingCart, FaServer, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/lib/language";

const Philosophy = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: FaLaptopCode,
      title: t("Website Development", "वेबसाइट डेवलपमेंट"),
      desc: t(
        "I build complete, responsive websites end-to-end — from business landing pages to full e-commerce stores — using the MERN or PERN stack for reliable, production-ready results.",
        "मैं शुरू से अंत तक पूर्ण, रेस्पॉन्सिव वेबसाइट बनाता हूं — बिज़नेस लैंडिंग पेज से लेकर पूरे ई-कॉमर्स स्टोर तक — भरोसेमंद, प्रोडक्शन-रेडी परिणामों के लिए MERN या PERN स्टैक का उपयोग करके।"
      ),
      tag: t("Full Stack", "फुल स्टैक")
    },
    {
      icon: FaPaintBrush,
      title: t("UI/UX Design", "UI/UX डिज़ाइन"),
      desc: t(
        "Clean, intuitive interfaces designed with the user in mind — clear visual hierarchy, accessible layouts, and interactions that make products easy and pleasant to use.",
        "उपयोगकर्ता को ध्यान में रखकर डिज़ाइन किए गए स्वच्छ, सहज इंटरफेस — स्पष्ट विज़ुअल पदानुक्रम, सुलभ लेआउट, और ऐसी इंटरैक्शन जो प्रोडक्ट को उपयोग में आसान और सुखद बनाती हैं।"
      ),
      tag: t("Design", "डिज़ाइन")
    },
    {
      icon: FaCode,
      title: t("Frontend Development", "फ्रंटएंड डेवलपमेंट"),
      desc: t(
        "React-powered frontends built with clean component architecture, responsive Tailwind styling, and smooth interactions across every screen size, backed by a Meta Front-End Certificate.",
        "Meta Front-End प्रमाणपत्र के साथ, स्वच्छ कंपोनेंट आर्किटेक्चर, रेस्पॉन्सिव Tailwind स्टाइलिंग, और हर स्क्रीन साइज़ पर स्मूद इंटरैक्शन के साथ बनाए गए React-आधारित फ्रंटएंड।"
      ),
      tag: t("Frontend", "फ्रंटएंड")
    },
    {
      icon: FaChartBar,
      title: t("Python & AI Solutions", "Python और AI समाधान"),
      desc: t(
        "Beyond web development, I use Python, TensorFlow, and MySQL to analyze data, build machine learning models, and develop data-driven backend features.",
        "वेब डेवलपमेंट के अलावा, मैं डेटा का विश्लेषण करने, मशीन लर्निंग मॉडल बनाने और डेटा-ड्रिवन बैकएंड फीचर्स विकसित करने के लिए Python, TensorFlow और MySQL का उपयोग करता हूं।"
      ),
      tag: t("Data & AI", "डेटा और AI")
    },
    {
      icon: FaShoppingCart,
      title: t("E-Commerce Platforms", "ई-कॉमर्स प्लेटफॉर्म्स"),
      desc: t(
        "Conversion-optimized e-commerce stores featuring secure payment gateway integrations, seamless shopping carts, and fast-loading checkout flows.",
        "सुरक्षित पेमेंट गेटवे इंटीग्रेशन, सहज शॉपिंग कार्ट और तेज लोड होने वाले चेकआउट फ्लो के साथ कन्वर्जन-ऑप्टिमाइज़्ड ई-कॉमर्स स्टोर।"
      ),
      tag: t("E-Commerce", "ई-कॉमर्स")
    },
    {
      icon: FaServer,
      title: t("Backend & Deployment", "बैकएंड और डिप्लॉयमेंट"),
      desc: t(
        "Robust RESTful APIs, secure database management, and hassle-free cloud deployments on Vercel or Netlify to keep your apps running 24/7.",
        "मजबूत RESTful API, सुरक्षित डेटाबेस प्रबंधन, और आपके ऐप्स को 24/7 चालू रखने के लिए Vercel या Netlify पर क्लाउड डिप्लॉयमेंट।"
      ),
      tag: t("Backend", "बैकएंड")
    }
  ];

  return (
    <section id="philosophy" className="py-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden border-t border-[color:var(--color-border)]/60 bg-[color:var(--color-bg-surface-2)]/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[color:var(--color-accent)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/30 text-[color:var(--color-accent)] font-mono text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <span>{t("SERVICES", "सेवाएं")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[color:var(--color-text-primary)] tracking-tight font-display mb-4"
          >
            {t("What I can do for you.", "मैं आपके लिए क्या कर सकता हूँ।")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[color:var(--color-text-tertiary)] max-w-xl"
          >
            {t(
              "From a single bug fix to a full custom build. Clear scope, fast delivery, clean code.",
              "एक छोटे से बग फिक्स से लेकर पूरी कस्टम बिल्ड तक। स्पष्ट दायरा, तेज़ डिलीवरी और साफ़ कोड।"
            )}
          </motion.p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="group relative bg-[color:var(--color-bg-card)]/90 backdrop-blur-xl border border-[color:var(--color-border)] rounded-3xl p-8 hover:border-[color:var(--color-accent)] transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top border glow on hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/20 flex items-center justify-center text-[color:var(--color-accent)] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] text-xs font-mono text-[color:var(--color-accent)] font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[color:var(--color-text-primary)] mb-3 group-hover:text-[color:var(--color-accent)] transition-colors font-display">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[color:var(--color-text-tertiary)] leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[color:var(--color-border)]/60 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[color:var(--color-text-primary)] group-hover:text-[color:var(--color-accent)] transition-colors cursor-pointer"
                  >
                    <span>{t("Let's Discuss", "आइए चर्चा करें")}</span>
                    <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1.5" />
                  </a>
                  <span className="text-xs font-mono text-[color:var(--color-accent)] font-bold bg-[color:var(--color-accent)]/10 px-2.5 py-0.5 rounded-full border border-[color:var(--color-accent)]/20">
                    0{idx + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;