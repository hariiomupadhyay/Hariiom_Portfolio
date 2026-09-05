import { motion } from "framer-motion";
import { FaLightbulb, FaPencilAlt, FaCode, FaRocket } from "react-icons/fa";
import { useLanguage } from "@/lib/language";

interface StepItem {
  icon: React.ReactNode;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
}

const stepsData: StepItem[] = [
  {
    icon: <FaLightbulb className="text-xl text-[color:var(--color-accent)]" />,
    titleEn: "Discovery",
    titleHi: "डिस्कवरी (समझना)",
    descEn: "Understand your business goals, target audience, and project requirements in detail.",
    descHi: "आपके व्यावसायिक लक्ष्यों, लक्षित दर्शकों और प्रोजेक्ट की आवश्यकताओं को विस्तार से समझना।"
  },
  {
    icon: <FaPencilAlt className="text-xl text-[color:var(--color-accent)]" />,
    titleEn: "Planning & Design",
    titleHi: "प्लानिंग और डिज़ाइन",
    descEn: "Structure UI/UX mockups and define system architecture for scalability and performance.",
    descHi: "स्केलेबिलिटी और परफॉर्मेंस के लिए UI/UX मॉकअप तैयार करना और सिस्टम आर्किटेक्चर परिभाषित करना।"
  },
  {
    icon: <FaCode className="text-xl text-[color:var(--color-accent)]" />,
    titleEn: "Development",
    titleHi: "डेवलपमेंट",
    descEn: "Build clean, high-performance applications with modern tech stack and best practices.",
    descHi: "आधुनिक तकनीक स्टैक और सर्वोत्तम प्रथाओं के साथ स्वच्छ, उच्च-प्रदर्शन वाले एप्लीकेशन बनाना।"
  },
  {
    icon: <FaRocket className="text-xl text-[color:var(--color-accent)]" />,
    titleEn: "Delivery & Optimization",
    titleHi: "डिलीवरी और ऑप्टिमाइजेशन",
    descEn: "Launch, test thoroughly, optimize performance, and ensure long-term success.",
    descHi: "लॉन्च करना, अच्छी तरह से परीक्षण करना, परफॉर्मेंस को ऑप्टिमाइज़ करना और दीर्घकालिक सफलता सुनिश्चित करना।"
  }
];

const HowIWork = () => {
  const { t } = useLanguage();

  return (
    <section id="how-i-work" className="py-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[color:var(--color-bg-surface-2)]/40 border-t border-[color:var(--color-border)]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[color:var(--color-accent)]/5 rounded-full blur-[150px] pointer-events-none" />

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
            <span>{t("A SIMPLE PROVEN PROCESS", "एक सरल और साबित प्रक्रिया")}</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[color:var(--color-text-primary)] tracking-tight font-display mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("How I Work", "मैं कैसे काम करता हूँ")}
          </motion.h2>
          <p className="text-sm sm:text-base text-[color:var(--color-text-tertiary)] max-w-xl">
            {t("A structured, step-by-step approach to turning your vision into reality.", "आपके विजन को वास्तविकता में बदलने के लिए एक संरचित, चरण-दर-चरण दृष्टिकोण।")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsData.map((step, i) => (
            <motion.div
              key={step.titleEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[color:var(--color-bg-card)]/80 backdrop-blur-xl border border-[color:var(--color-border)] rounded-2xl p-7 flex flex-col justify-between hover:border-[color:var(--color-accent)] transition-all duration-300 shadow-xl hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top glowing line accent on hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/20 flex items-center justify-center text-[color:var(--color-accent)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[color:var(--color-accent)] group-hover:text-white">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-[color:var(--color-text-tertiary)]">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[color:var(--color-text-primary)] mb-3 group-hover:text-[color:var(--color-accent)] transition-colors">
                  {t(step.titleEn, step.titleHi)}
                </h3>
                <p className="text-sm text-[color:var(--color-text-tertiary)] leading-relaxed">
                  {t(step.descEn, step.descHi)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowIWork;