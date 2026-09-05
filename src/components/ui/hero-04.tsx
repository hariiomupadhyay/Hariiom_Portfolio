import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, Cpu, Globe, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import DevImg from "@/assets/hariom_profile.jpg";
import { useLanguage } from "@/lib/language";
import { Typewriter } from "@/components/ui/typewriter";

export function HeroSection04({ isReady = true }: { isReady?: boolean }) {
  const { t } = useLanguage();

  const stats = [
    { value: "3", label: t("Certificates", "प्रमाणपत्र") },
    { value: "7.2", label: t("CGPA (B.Sc.)", "सीजीपीए (B.Sc.)") },
    { value: "92.5%", label: t("Meta Front-End Grade A", "मेटा फ्रंट-एंड ग्रेड A") },
  ];

  return (
    <section className="min-h-screen relative pt-32 pb-24 px-4 sm:px-6 lg:px-12 flex items-center justify-center bg-[color:var(--color-bg)] overflow-hidden select-none">
      
      {/* Modern High-Tech Ambient Grid & Multi-layered Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-[color:var(--color-accent)]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* LEFT COLUMN: Editorial Bio & Intro (7 Cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Global Location & Working World-Wide Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl bg-[color:var(--color-bg-card)]/90 backdrop-blur-2xl border border-[color:var(--color-border)] shadow-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[color:var(--color-accent)]" />
            </span>
            <Globe size={14} className="text-[color:var(--color-accent)] shrink-0" />
            <span className="font-mono text-[11px] tracking-wider uppercase text-[color:var(--color-text-secondary)] font-bold">
              {t("FROM AZAMGARH, U.P., INDIA - WORKING WORLD-WIDE", "आज़मगढ़, उत्तर प्रदेश, भारत से - विश्व स्तर पर काम कर रहा हू")}
            </span>
          </motion.div>

          {/* Massive Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight font-display text-[color:var(--color-text-primary)] leading-[1.02]">
              {t("HARIOM", "हरिओम")} <br />
              <span className="text-[color:var(--color-accent)] drop-shadow-md">{t("UPADHYAY", "उपाध्याय")}</span>
            </h1>
            
            {/* Dynamic Typewriter Box */}
            <div className="pt-2 flex items-center gap-2 font-mono text-xs sm:text-sm text-[color:var(--color-text-secondary)]">
              <Sparkles size={16} className="text-[color:var(--color-accent)] shrink-0 animate-pulse" />
              <Typewriter
                words={t(
                  [
                    "WEB DEVELOPMENT • FRONTEND • BACKEND • UI/UX",
                    "FULL STACK WEB APPLICATIONS",
                    "E-COMMERCE WEBSITES",
                  ],
                  [
                    "वेब डेवलपमेंट • फ्रंटएंड • बैकएंड • UI/UX",
                    "FULL स्टैक वेब एप्लीकेशन",
                    "ई-कॉमर्स वेबसाइट",
                  ]
                )}
                typingSpeed={60}
                pauseTime={2000}
              />
            </div>
          </motion.div>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs sm:text-sm md:text-base text-[color:var(--color-text-secondary)] leading-relaxed max-w-xl font-medium"
          >
            {t(
              "I build fast, user-friendly, scalable web apps and reliable digital products using MERN, PERN and Python.",
              "मैं MERN, PERN और Python का उपयोग करके तेज, उपयोगकर्ता-अनुकूल, स्केलेबल वेब एप्लिकेशन और विश्वसनीय डिजिटल प्रोडक्ट बनाता हूं।"
            )}
          </motion.p>

          {/* Action Hub Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button size="lg" asChild className="rounded-2xl px-8 py-6 font-mono text-xs uppercase tracking-wider font-bold shadow-xl shadow-[color:var(--color-accent)]/20 hover:scale-105 transition-all">
              <a href="#projects" className="flex items-center gap-2 cursor-pointer">
                {t("View Work", " काम देखें")} <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-2xl px-8 py-6 font-mono text-xs uppercase tracking-wider font-bold border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] backdrop-blur-xl hover:scale-105 transition-all">
              <a href="#contact" className="cursor-pointer">
                {t("Let's Talk", "बात करें")}
              </a>
            </Button>
          </motion.div>

          {/* Stack Ticker Pills */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.35 }}
            className="pt-2 flex flex-wrap gap-2 font-mono text-xs"
          >
            <span className="px-3.5 py-1.5 rounded-lg bg-[color:var(--color-bg-card)] border border-[color:var(--color-border)] text-[color:var(--color-text-tertiary)] font-medium">React & MongoDB</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[color:var(--color-bg-card)] border border-[color:var(--color-border)] text-[color:var(--color-text-tertiary)] font-medium">Node.js & Express</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[color:var(--color-bg-card)] border border-[color:var(--color-border)] text-[color:var(--color-text-tertiary)] font-medium">Python</span>
          </motion.div>
        </div>


        {/* RIGHT COLUMN: Modern Floating Glass Card & Stats Box (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Ultra-Modern Holographic Profile Card (Reduced Image Height) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)]/80 backdrop-blur-2xl shadow-2xl group hover:border-[color:var(--color-accent)]/50 transition-all duration-500 p-4"
          >
            {/* Absolute Decorative Tech Accent Ring */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[color:var(--color-accent)]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[color:var(--color-accent)]/20 transition-all" />

            {/* Slightly smaller image frame height for a balanced look */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl border border-[color:var(--color-border)]">
              <img
                src={DevImg}
                alt="Hariom Upadhyay"
                className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-bg)] via-transparent to-transparent opacity-80" />
            </div>

            {/* Bottom Info Bar: Balanced Spacing & Symmetrical Layout */}
            <div className="mt-4 p-4 rounded-2xl bg-[color:var(--color-bg)]/95 backdrop-blur-xl border border-[color:var(--color-border)] flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] flex items-center justify-center border border-[color:var(--color-accent)]/20 shadow-inner shrink-0">
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className="font-mono text-xs sm:text-sm font-bold text-[color:var(--color-text-primary)] tracking-wide">
                    HARIOM UPADHYAY
                  </h3>
                  <p className="font-mono text-[10px] text-[color:var(--color-text-tertiary)] uppercase tracking-wider font-semibold">
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold shrink-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>ONLINE</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid Bento Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[color:var(--color-bg-card)]/70 backdrop-blur-md border border-[color:var(--color-border)] rounded-2xl p-4 text-center shadow-lg flex flex-col justify-center hover:border-[color:var(--color-accent)]/40 transition-colors"
              >
                <div className="text-xl sm:text-2xl font-black text-[color:var(--color-accent)] font-mono">
                  {stat.value}
                </div>
                <div className="text-[10px] text-[color:var(--color-text-tertiary)] mt-1 font-mono tracking-tight leading-tight font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Live Project Banner Bento */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-4 rounded-2xl bg-[color:var(--color-bg-card)]/60 backdrop-blur-xl border border-[color:var(--color-border)] flex items-center justify-between shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
                <Layers size={18} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-tertiary)] font-bold">
                  {t("Currently Building", "अभी निर्माणाधीन")}
                </p>
                <p className="font-display font-bold text-sm text-[color:var(--color-text-primary)]">
                  {t("An E-Commerce Platform", "ई-कॉमर्स प्लेटफॉर्म")}
                </p>
              </div>
            </div>
            <Cpu size={18} className="text-[color:var(--color-accent)] animate-pulse" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}