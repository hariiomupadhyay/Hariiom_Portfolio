import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 3;
      });
    }, 14);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="thin-mono-loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-[99999] bg-[color:var(--color-bg)] flex flex-col items-center justify-center p-6 font-mono select-none"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute w-[400px] h-[400px] bg-[color:var(--color-accent)]/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative flex flex-col items-center gap-6 z-10 w-full max-w-xs">
          
          {/* Thin Developer Monospace Title */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xl sm:text-2xl font-light tracking-widest text-[color:var(--color-text-primary)]"
          >
            <span className="text-[color:var(--color-accent)] font-normal">&lt;</span>
            <span className="font-mono font-light tracking-wide">Hariom Upadhyay</span>
            <span className="text-[color:var(--color-accent)] font-normal">/&gt;</span>
          </motion.div>

          {/* Minimal 1 to 100 Counter & Progress */}
          <div className="w-full flex flex-col items-center gap-2">
            <div className="text-3xl sm:text-4xl font-extralight tracking-tighter text-[color:var(--color-accent)]">
              {progress}<span className="text-sm font-light text-[color:var(--color-text-muted)] ml-0.5">%</span>
            </div>

            {/* Ultra-Thin Developer Line Bar */}
            <div className="w-full h-[2px] rounded-full bg-[color:var(--color-bg-surface)] overflow-hidden border border-[color:var(--color-border)]/40">
              <motion.div
                className="h-full bg-[color:var(--color-accent)] rounded-full shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.5)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] font-light text-[color:var(--color-text-tertiary)] tracking-[0.2em] uppercase"
          >
            {t("INITIALIZING SYSTEM", "सिस्टम इनिशियलाइज हो रहा है")}
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;