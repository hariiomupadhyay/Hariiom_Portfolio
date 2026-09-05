import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaLayerGroup, FaFigma, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/lib/language";

interface ServiceItem {
  icon: React.ReactNode;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  ctaEn: string;
  ctaHi: string;
}

const servicesData: ServiceItem[] = [
  {
    icon: <FaLaptopCode className="text-[color:var(--color-accent)] text-xl" />,
    titleEn: "Modern Web Applications",
    titleHi: "आधुनिक वेब एप्लीकेशन",
    descEn: "I build scalable, high-performance web apps using React & Node.js tailored to your business needs.",
    descHi: "मैं आपकी व्यावसायिक ज़रूरतों के अनुसार React और Node.js का उपयोग करके स्केलेबल, उच्च-प्रदर्शन वाले वेब ऐप बनाता हूँ।",
    ctaEn: "Start a Project",
    ctaHi: "प्रोजेक्ट शुरू करें",
  },
  {
    icon: <FaRocket className="text-[color:var(--color-accent)] text-xl" />,
    titleEn: "High-Converting Landing Pages",
    titleHi: "हाई-कन्वर्टिंग लैंडिंग पेज",
    descEn: "Designed to turn visitors into customers using modern UI/UX principles and conversion-focused design.",
    descHi: "आधुनिक UI/UX सिद्धांतों और रूपांतरण-केंद्रित डिज़ाइन का उपयोग करके विज़िटर्स को ग्राहकों में बदलने के लिए डिज़ाइन किया गया।",
    ctaEn: "Let’s Work Together",
    ctaHi: "साथ मिलकर काम करें",
  },
  {
    icon: <FaLayerGroup className="text-[color:var(--color-accent)] text-xl" />,
    titleEn: "Full-Stack Development",
    titleHi: "फुल-स्टैक डेवलपमेंट",
    descEn: "End-to-end development from frontend to backend with clean, scalable architecture for real business value.",
    descHi: "वास्तविक व्यावसायिक मूल्य के लिए स्वच्छ, स्केलेबल आर्किटेक्चर के साथ फ्रंटएंड से बैकएंड तक एंड-टू-एंड डेवलपमेंट।",
    ctaEn: "Hire Me",
    ctaHi: "मुझे काम पर रखें",
  },
  {
    icon: <FaFigma className="text-[color:var(--color-accent)] text-xl" />,
    titleEn: "UI to Code (Figma to React)",
    titleHi: "UI से कोड (Figma से React)",
    descEn: "Convert designs into pixel-perfect, responsive React applications that match your vision.",
    descHi: "डिज़ाइन को पिक्सेल-परफेक्ट, रिस्पॉन्सिव React एप्लीकेशन में बदलें जो आपके विजन से मेल खाते हों।",
    ctaEn: "Start a Project",
    ctaHi: "प्रोजेक्ट शुरू करें",
  },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-12 relative border-t border-[color:var(--color-border)]/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Clean Left/Center Balance */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[color:var(--color-accent)] font-mono text-xs font-semibold tracking-widest uppercase block mb-2">
              {t("WHAT I OFFER", "मेरी सेवाएं")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[color:var(--color-text-primary)] tracking-tight font-display">
              {t("My Professional Services", "मेरी पेशेवर सेवाएं")}
            </h2>
          </div>
          <p className="text-sm text-[color:var(--color-text-tertiary)] max-w-sm">
            {t("Delivering high-quality solutions tailored to elevate your web presence.", "आपके वेब प्रेजेंस को बेहतर बनाने के लिए उच्च गुणवत्ता वाले समाधान।")}
          </p>
        </div>

        {/* Services Grid - Sleek Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[color:var(--color-bg-card)] border border-[color:var(--color-border)] rounded-2xl p-8 flex flex-col justify-between hover:border-[color:var(--color-accent)]/60 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/20 flex items-center justify-center text-[color:var(--color-accent)] transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <span className="text-xs font-mono text-[color:var(--color-text-tertiary)]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[color:var(--color-text-primary)] mb-3 group-hover:text-[color:var(--color-accent)] transition-colors">
                  {t(service.titleEn, service.titleHi)}
                </h3>
                <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed mb-8">
                  {t(service.descEn, service.descHi)}
                </p>
              </div>

              <div className="pt-4 border-t border-[color:var(--color-border)]/60 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[color:var(--color-text-primary)] group-hover:text-[color:var(--color-accent)] transition-colors"
                >
                  <span>{t(service.ctaEn, service.ctaHi)}</span>
                  <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;