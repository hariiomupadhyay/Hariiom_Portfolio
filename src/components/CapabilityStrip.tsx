import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";

const capabilitiesEn = [
  "Website Development",
  "E-Commerce Website",
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "Build MERN & PERN Stack Apps",
  "Internship / Full-Stack Role",
];

const capabilitiesHi = [
  "वेबसाइट डेवलपमेंट",
  "ई-कॉमर्स वेबसाइट",
  "फ्रंटएंड डेवलपमेंट",
  "बैकएंड डेवलपमेंट",
  "UI/UX डिज़ाइन",
  "MERN & PERN स्टैक एप्लिकेशन डेवलपमेंट",
  "इंटर्नशिप / फुल-स्टैक रोल",
];

const CapabilityStrip = () => {
  const { t } = useLanguage();
  const capabilities = t(capabilitiesEn, capabilitiesHi);

  return (
    <section
      id="capabilities"
      className="py-8 bg-[color:var(--color-bg-surface-2)]/60 backdrop-blur-md border-y border-[color:var(--color-border)]/60 overflow-hidden relative group select-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
    >
      {/* Ambient background glow line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 bg-[color:var(--color-accent)]/5 blur-2xl pointer-events-none" />

      {/* Enhanced fade masks on left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[color:var(--color-bg-surface-2)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[color:var(--color-bg-surface-2)] to-transparent z-10 pointer-events-none" />

      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-6 whitespace-nowrap group-hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // Slightly slower for better readability
            ease: "linear",
          }}
        >
          {/* Duplicate loop array for seamless continuous marquee */}
          {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center px-4 py-2 rounded-full bg-[color:var(--color-bg-surface)]/40 border border-[color:var(--color-border)]/40 shadow-sm transition-all duration-300 hover:border-[color:var(--color-accent)]/50 hover:bg-[color:var(--color-accent)]/5 hover:scale-[1.02] cursor-default"
            >
              <span className="text-xs sm:text-sm font-mono font-medium text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] tracking-wider uppercase flex items-center gap-3 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-accent)]"></span>
                </span>
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilityStrip;