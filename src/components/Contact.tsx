import { motion } from "framer-motion";
import Form from "./Form";
import ContactInfo from "./ContactInfo";
import { useLanguage } from "@/lib/language";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden border-t border-[color:var(--color-border)]/60">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[color:var(--color-accent)]/5 rounded-full blur-[160px] pointer-events-none" />

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
            <span>{t("GET IN TOUCH", "संपर्क करें")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[color:var(--color-text-primary)] tracking-tight font-display mb-4"
          >
            {t("Let's Work Together", "आइए मिलकर आपके अगले प्रोजेक्ट पर काम करें")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[color:var(--color-text-tertiary)] max-w-2xl leading-relaxed"
          >
            {t(
              "Whether you need a new business website, an e-commerce online store, a custom web application, or a data-driven feature — send a message below and I'll get back to you within 24 hours.",
              "चाहे आपको नई बिज़नेस वेबसाइट चाहिए, एक ई-कॉमर्स ऑनलाइन स्टोर, एक कस्टम वेब एप्लीकेशन, या कोई डेटा-ड्रिवन फीचर — नीचे संदेश भेजें और मैं 24 घंटे के भीतर जवाब दूंगा।"
            )}
          </motion.p>
        </div>

        {/* Contact Form & Info Grid Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
          <Form />
          <ContactInfo />
        </div>

      </div>
    </section>
  );
};

export default Contact;