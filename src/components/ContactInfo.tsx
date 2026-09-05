import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useLanguage } from "@/lib/language";

const ContactInfo = () => {
  const { t } = useLanguage();
  const emailAddress = "hariiomupadhyay@outlook.com";

  const socials = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/hariiomupadhyay" },
    { icon: FaXTwitter, label: "X", href: "https://x.com/hariiomupadhyay" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hariiomupadhyay" },
    { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/iam.hariiom" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full lg:w-5/12 flex flex-col justify-between space-y-6 bg-[color:var(--color-bg-card)]/80 backdrop-blur-2xl border border-[color:var(--color-border)] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden group"
    >
      {/* Top glowing accent line */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent opacity-70" />

      <div className="space-y-6">
        <div>
          <span className="text-[color:var(--color-accent)] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
            {t("GET IN TOUCH", "संपर्क करें")}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[color:var(--color-text-primary)] font-display tracking-tight mb-3">
            {t("Say Hello!", "सीधा संपर्क और त्वरित जवाब")}
          </h3>
          <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed">
            {t(
              "Have a project in mind, an idea you want to discuss, or an internship opportunity? Reach out directly via form, email, or WhatsApp — I am happy to help!",
              "किसी प्रोजेक्ट, किसी आइडिया, या इंटर्नशिप के अवसर के बारे में बात करनी है? फॉर्म, ईमेल या WhatsApp के जरिए सीधे संपर्क करें — मुझे मदद करके खुशी होगी!"
            )}
          </p>
        </div>

        {/* Email Direct Link Box */}
        <a
          href={`mailto:${emailAddress}`}
          className="group/mail relative p-4 rounded-2xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] transition-all duration-300 flex items-center justify-between flex-wrap gap-3 shadow-sm hover:shadow-lg"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/20 flex items-center justify-center text-[color:var(--color-accent)] group-hover/mail:scale-110 transition-transform duration-300">
              <MdEmail size={20} />
            </div>
            <div>
              <div className="text-[10px] font-mono font-semibold text-[color:var(--color-text-tertiary)] uppercase tracking-wider">{t("PRIMARY EMAIL", "प्राथमिक ईमेल")}</div>
              <div className="text-xs sm:text-sm font-mono font-bold text-[color:var(--color-text-primary)] group-hover/mail:text-[color:var(--color-accent)] transition-colors">{emailAddress}</div>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-[color:var(--color-accent)] flex items-center gap-1 group-hover/mail:translate-x-1 transition-transform">
            {t("Send Email", "ईमेल भेजें")} <FaArrowRight size={10} />
          </span>
        </a>

        {/* Action Touchpoints (WhatsApp) */}
        <div className="space-y-3">
          <a
            href="https://wa.me/916387768909"
            target="_blank"
            rel="noopener noreferrer"
            className="group/wa relative flex items-center justify-between p-4 rounded-2xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/20 flex items-center justify-center text-[color:var(--color-accent)] group-hover/wa:scale-110 transition-transform duration-300">
                <FaWhatsapp size={22} />
              </div>
              <div>
                <h4 className="text-xs font-mono font-semibold text-[color:var(--color-text-tertiary)] uppercase tracking-wider">{t("WhatsApp Chat", "WhatsApp चैट")}</h4>
                <p className="text-xs sm:text-sm font-mono font-bold text-[color:var(--color-text-primary)]">+91 63877 68909</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-[color:var(--color-accent)] flex items-center gap-1 group-hover/wa:translate-x-1 transition-transform">
              {t("Direct Message", "सीधा संदेश")} <FaArrowRight size={10} />
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div className="pt-2">
          <span className="text-[10px] font-mono text-[color:var(--color-text-tertiary)] uppercase tracking-widest block mb-3">
            {t("CONNECT ON SOCIALS", "सोशल मीडिया पर जुड़ें")}
          </span>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] flex items-center justify-center text-[color:var(--color-text-secondary)] hover:text-white hover:bg-[color:var(--color-accent)] hover:border-[color:var(--color-accent)] transition-all duration-300 shadow-sm"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Response Expectation Badge */}
      <div className="p-4 rounded-2xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] text-xs font-mono text-[color:var(--color-text-secondary)] flex items-center justify-between shadow-inner mt-4">
        <span className="font-semibold text-[color:var(--color-text-tertiary)]">{t("RESPONSE EXPECTATION", "जवाब की अपेक्षा")}</span>
        <span className="px-3 py-1 rounded-full bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/30 text-[color:var(--color-accent)] font-bold">
          &lt; 24 {t("Hours", "घंटे")}
        </span>
      </div>
    </motion.div>
  );
};

export default ContactInfo;