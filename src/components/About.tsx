import DevImg from "../assets/hariom_profile.jpg";
import { motion } from "framer-motion";
import Resume from "../assets/Hariom_Upadhyay_Resume.pdf";
import { FaDownload, FaArrowRight, FaCertificate, FaBriefcase, FaCheckCircle, FaStar, FaCode, FaGraduationCap, FaSmile } from "react-icons/fa";
import { useLanguage } from "@/lib/language";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: FaBriefcase,
      value: "3+",
      label: t("Years Experience", "वर्षों का अनुभव"),
      desc: t("Full-Stack Development & Coding", "फुल-स्टैक डेवलपमेंट और कोडिंग"),
    },
    {
      icon: FaCheckCircle,
      value: "100%",
      label: t("On-Time Delivery", "समय पर डिलीवरी"),
      desc: t("Reliable & Punctual Execution", "भरोसेमंद और समयबद्ध निष्पादन"),
    },
    {
      icon: FaStar,
      value: "5.0",
      label: t("Avg. Client Rating", "औसत क्लाइंट रेटिंग"),
      desc: t("Top Quality & Clean Code Output", "शीर्ष गुणवत्ता और साफ कोड आउटपुट"),
    },
    {
      icon: FaSmile,
      value: "156+",
      label: t("Client Reviews", "क्लाइंट समीक्षाएं"),
      desc: t("Trusted by Happy Clients", "खुश क्लाइंट्स द्वारा भरोसेमंद"),
    },
    {
      icon: FaCode,
      value: "MERN/PERN",
      label: t("Modern Tech Stack", "आधुनिक टेक स्टैक"),
      desc: t("React, Node, Express, DB", "React, Node, Express, DB"),
    },
    {
      icon: FaGraduationCap,
      value: "M.Sc.",
      label: t("Academic Focus", "शैक्षणिक फोकस"),
      desc: t("Maharaja Suheldev Univ.", "महाराजा सुहेलदेव यूनिवर्सिटी"),
    },
  ];

  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden border-t border-[color:var(--color-border)]/60 bg-[color:var(--color-bg)]">
      {/* Editorial Ambient Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[color:var(--color-accent)]/[0.07] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header Tag */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[color:var(--color-accent)]/5 border border-[color:var(--color-accent)]/20 text-[color:var(--color-accent)] font-mono text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-sm"
          >
            <span>{t("ABOUT ME", "मेरे बारे में")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[color:var(--color-text-primary)] font-display max-w-3xl leading-[1.1]"
          >
            {t(
              "Full-Stack Developer Obsessed with fast, clean code and scalable solutions.",
              "फुल-स्टैक डेवलपर जो तेज, साफ कोड और स्केलेबल समाधानों के लिए जुनूनी है।"
            )}
          </motion.h2>
        </div>

        {/* Main Grid Layout: Profile & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">

          {/* Left Column: Single Unified Frame Containing Everything */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative w-full max-w-md group"
            >
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--color-accent)]/20 via-transparent to-blue-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* SINGLE MASTER FRAME */}
              <div className="relative rounded-3xl overflow-hidden bg-[color:var(--color-bg-card)]/60 border border-[color:var(--color-border)] p-5 shadow-2xl backdrop-blur-2xl group-hover:border-[color:var(--color-accent)]/50 transition-all duration-300 flex flex-col gap-4">
                
                {/* 1. Top Bar: Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[color:var(--color-bg-surface)]/90 rounded-2xl border border-[color:var(--color-border)] text-[11px] font-mono text-[color:var(--color-text-tertiary)] shadow-inner">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block shadow-sm" />
                  </div>
                  <span className="tracking-widest font-semibold uppercase opacity-90 text-[color:var(--color-accent)]">PROFILE PICTURE</span>
                </div>

                {/* 2. Middle Section: Picture Frame with Location Overlay */}
                <div className="relative rounded-2xl overflow-hidden border border-[color:var(--color-border)] aspect-[4/5] max-h-[350px] bg-gradient-to-b from-[color:var(--color-bg-surface)] to-[color:var(--color-bg)]">
                  <img
                    src={DevImg}
                    alt="Hariom Upadhyay"
                    className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  
                  {/* Atmospheric Lighting Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-bg)] via-transparent to-black/20 opacity-90" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
                  
                  {/* Floating Location Badge inside Image Frame */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[color:var(--color-bg)]/85 backdrop-blur-md rounded-2xl border border-[color:var(--color-border)] flex items-center justify-between text-xs font-mono shadow-lg">
                    <span className="text-[color:var(--color-text-tertiary)] uppercase tracking-wider font-medium">{t("LOCATION", "स्थान")}</span>
                    <span className="text-[color:var(--color-accent)] font-bold tracking-wide">Azamgarh, UP, India</span>
                  </div>
                </div>

                {/* 3. Bottom Bar inside the same frame: Available for Work Status Bar */}
                <div className="p-3.5 bg-[color:var(--color-bg-surface)]/60 rounded-2xl border border-[color:var(--color-border)] flex items-center justify-between text-xs font-mono shadow-sm">
                  <span className="text-[color:var(--color-text-secondary)] flex items-center gap-2.5 font-medium">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    {t("STATUS", "स्थिति")}
                  </span>
                  <span className="text-[color:var(--color-accent)] font-bold tracking-wider uppercase text-[11px]">
                    {t("Available for Work", "काम के लिए उपलब्ध")}
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: Detailed Narrative, CV Button & Certificate Paragraph */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[color:var(--color-text-secondary)] leading-relaxed font-mono text-xs sm:text-sm tracking-wide"
            >
              {t(
                "Hey, I'm a full-stack developer who builds fast, responsive web apps and digital products. From sleek front-end interfaces to robust back-end systems using the MERN, PERN, and Python, I ship clean, maintainable code that turns ideas into high-performance web solutions.",
                "नमस्ते, मैं एक फुल-स्टैक डेवलपर हूं जो तेज़, रेस्पॉन्सिव वेब ऐप्स और डिजिटल उत्पाद बनाता है। चिकनी फ्रंट-एंड इंटरफेस से लेकर मजबूत बैक-एंड सिस्टम तक, MERN, PERN और पायथन का उपयोग करके, मैं साफ, मेंटेन करने योग्य कोड शिप करता हूं जो विचारों को उच्च-प्रदर्शन वेब समाधानों में बदल देता है।"
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <a
                href={Resume}
                download="Hariom_Upadhyay_Resume.pdf"
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-xl font-bold font-mono text-xs uppercase tracking-wider text-[color:var(--color-bg)] bg-[color:var(--color-text-primary)] hover:opacity-90 transition-all duration-300 shadow-lg cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <FaDownload className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>{t("Download CV", "सीवी डाउनलोड करें")}</span>
                <FaArrowRight className="text-[10px] opacity-70 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </motion.div>

            {/* Certificate Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-[color:var(--color-bg-card)]/40 border border-[color:var(--color-border)] backdrop-blur-xl shadow-lg relative overflow-hidden mt-2 w-full hover:border-[color:var(--color-accent)]/30 transition-colors"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[color:var(--color-accent)]" />
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] mt-0.5 shrink-0 border border-[color:var(--color-accent)]/20">
                  <FaCertificate size={15} />
                </div>
                <p className="text-[color:var(--color-text-secondary)] font-mono text-xs sm:text-sm leading-relaxed">
                  {t(
                    "I hold a Meta Front-End Developer Certificate (92.5%, Grade A), a Python & Machine Learning Certificate, and a Complete Web Development Certificate from Udemy. I also bring strong leadership and public speaking skills as a college event anchor.",
                    "मेरे पास Meta Front-End Developer प्रमाणपत्र (92.5%, ग्रेड A), Python और Machine Learning प्रमाणपत्र, और Udemy से Complete Web Development प्रमाणपत्र है। मैं कॉलेज कार्यक्रमों में एंकरिंग के जरिए मजबूत लीडरशिप और पब्लिक स्पीकिंग स्किल भी लाता हूं।"
                  )}
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 6 Professional Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((st, i) => {
            const StIcon = st.icon;
            return (
              <motion.div
                key={st.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative bg-[color:var(--color-bg-card)]/40 backdrop-blur-xl border border-[color:var(--color-border)] rounded-2xl p-6 hover:border-[color:var(--color-accent)]/40 transition-all duration-300 shadow-xl hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
              >
                {/* Top glowing line accent on card hover */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] flex items-center justify-center text-[color:var(--color-accent)] transition-transform duration-300 group-hover:scale-105 group-hover:border-[color:var(--color-accent)]/40">
                      <StIcon size={18} />
                    </div>
                    <span className="text-[11px] font-mono text-[color:var(--color-text-tertiary)] font-semibold bg-[color:var(--color-bg-surface)] px-2.5 py-1 rounded-md border border-[color:var(--color-border)]">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="text-2xl sm:text-3xl font-black text-[color:var(--color-text-primary)] font-mono mb-2 tracking-tight">
                    {st.value}
                  </div>

                  <h3 className="text-base font-bold text-[color:var(--color-text-primary)] mb-1.5 group-hover:text-[color:var(--color-accent)] transition-colors">
                    {st.label}
                  </h3>
                  
                  <p className="font-mono text-xs text-[color:var(--color-text-tertiary)] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;