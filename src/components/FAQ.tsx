import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { Typewriter } from "./ui/typewriter";
import { useLanguage } from "@/lib/language";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = t(
    [
      {
        question: "Who is Hariom Upadhyay?",
        answer: "Hariom Upadhyay is a Full Stack MERN Developer, Data Analyst, and M.Sc. student at Shibli National PG College, Azamgarh. He specializes in building responsive websites, web applications, and data-driven solutions."
      },
      {
        question: "What services does Hariom offer?",
        answer: "Hariom offers website development, frontend development, UI/UX design, and data analysis & machine learning solutions — from business websites and e-commerce stores to custom web applications."
      },
      {
        question: "What core technologies does Hariom use?",
        answer: "His core stack includes MongoDB, Express.js, React.js, Node.js, JavaScript, HTML5, CSS3, Bootstrap, and REST APIs, along with Python, Machine Learning, and MySQL for data analytics."
      },
      {
        question: "Is Hariom certified in web development?",
        answer: "Yes. He holds a Meta Front-End Developer Certificate (92.5%, Grade A) from Coursera, a Python & Machine Learning Certificate, and a Complete Web Development Bootcamp certificate from Udemy."
      },
      {
        question: "What is Hariom currently working on?",
        answer: "He is currently building a full-featured e-commerce platform using the MERN stack, covering product browsing, cart, checkout, and an admin dashboard."
      },
      {
        question: "Is Hariom available for freelance projects or internships?",
        answer: "Yes. Hariom is open to freelance website/web app projects as well as internship and entry-level full-stack development opportunities."
      }
    ],
    [
      {
        question: "हरिओम उपाध्याय कौन हैं?",
        answer: "हरिओम उपाध्याय एक फुल स्टैक MERN डेवलपर, डेटा एनालिस्ट, और शिबली नेशनल पीजी कॉलेज, आज़मगढ़ में M.Sc. के छात्र हैं। वे रेस्पॉन्सिव वेबसाइट, वेब एप्लीकेशन और डेटा-ड्रिवन समाधान बनाने में विशेषज्ञ हैं।"
      },
      {
        question: "हरिओम कौन सी सेवाएं प्रदान करते हैं?",
        answer: "हरिओम वेबसाइट डेवलपमेंट, फ्रंटएंड डेवलपमेंट, UI/UX डिज़ाइन, और डेटा एनालिसिस व मशीन लर्निंग समाधान प्रदान करते हैं — बिज़नेस वेबसाइट और ई-कॉमर्स स्टोर से लेकर कस्टम वेब एप्लीकेशन तक।"
      },
      {
        question: "हरिओम किन मुख्य तकनीकों का उपयोग करते हैं?",
        answer: "उनके मुख्य स्टैक में MongoDB, Express.js, React.js, Node.js, JavaScript, HTML5, CSS3, Bootstrap, और REST APIs शामिल हैं, साथ ही डेटा एनालिटिक्स के लिए Python, Machine Learning और MySQL।"
      },
      {
        question: "क्या हरिओम वेब डेवलपमेंट में प्रमाणित हैं?",
        answer: "हां। उनके पास Coursera से Meta Front-End Developer प्रमाणपत्र (92.5%, ग्रेड A), Python और Machine Learning प्रमाणपत्र, और Udemy से Complete Web Development बूटकैंप प्रमाणपत्र है।"
      },
      {
        question: "हरिओम अभी क्या काम कर रहे हैं?",
        answer: "वे अभी MERN स्टैक का उपयोग करके एक पूर्ण-फीचर वाला ई-कॉमर्स प्लेटफॉर्म बना रहे हैं, जिसमें प्रोडक्ट ब्राउज़िंग, कार्ट, चेकआउट और एडमिन डैशबोर्ड शामिल है।"
      },
      {
        question: "क्या हरिओम फ्रीलांस प्रोजेक्ट या इंटर्नशिप के लिए उपलब्ध हैं?",
        answer: "हां। हरिओम फ्रीलांस वेबसाइट/वेब ऐप प्रोजेक्ट के साथ-साथ इंटर्नशिप और एंट्री-लेवल फुल-स्टैक डेवलपमेंट अवसरों के लिए भी उपलब्ध हैं।"
      }
    ]
  );

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden border-t border-[color:var(--color-border)]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[color:var(--color-accent)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/30 text-[color:var(--color-accent)] font-mono text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <FaQuestionCircle size={12} />
            <span>{t("FREQUENTLY ASKED QUESTIONS", "अक्सर पूछे जाने वाले प्रश्न")}</span>
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
                ["Frequently Asked Questions", "Services, Stack & FAQ"],
                ["अक्सर पूछे जाने वाले प्रश्न", "सेवाएं, स्टैक और FAQ"]
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
              "Everything you need to know about my services, technical stack, and availability.",
              "मेरी सेवाओं, तकनीकी स्टैक और उपलब्धता के बारे में जो कुछ भी आपको जानना चाहिए।"
            )}
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`group relative bg-[color:var(--color-bg-card)]/80 backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 shadow-lg ${
                  isOpen ? "border-[color:var(--color-accent)]" : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent)]/50"
                }`}
              >
                {/* Top glowing line accent on active item */}
                {isOpen && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent" />
                )}

                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[color:var(--color-text-primary)] text-base sm:text-lg transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="group-hover:text-[color:var(--color-accent)] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/20 flex items-center justify-center text-[color:var(--color-accent)] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[color:var(--color-accent)] text-white" : ""}`}>
                    <FaChevronDown size={12} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-[color:var(--color-text-secondary)] leading-relaxed border-t border-[color:var(--color-border)]/60 pt-4 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;