import { motion } from "framer-motion";
import { FaShieldAlt, FaRobot, FaUsers, FaCheck } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative w-full max-w-lg mx-auto group"
    >
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[color:var(--color-accent)]/20 via-purple-500/10 to-teal-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Main SaaS Product Container */}
      <div className="relative bg-[color:var(--color-bg-card)]/90 backdrop-blur-2xl border border-[color:var(--color-border)] rounded-3xl overflow-hidden shadow-2xl p-5 sm:p-6 space-y-5">
        
        {/* Top Developer & System Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[color:var(--color-border)]/80">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <img
                src="/developer_image.jpg"
                alt="Hariom Upadhyay"
                className="w-11 h-11 rounded-2xl object-cover border-2 border-[color:var(--color-accent)]/40 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[color:var(--color-bg-card)]" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[color:var(--color-text-primary)] flex items-center gap-1.5 font-display">
                Hariom Upadhyay
              </h3>
              <p className="text-[11px] font-mono text-[color:var(--color-accent)] font-medium">Full-Stack & SaaS Engineer</p>
            </div>
          </div>

          <div className="px-3 py-1 rounded-full bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/30 text-[10px] font-mono text-[color:var(--color-accent)] font-bold tracking-wider">
            PRODUCT SUITE
          </div>
        </div>

        {/* Product Preview Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-[color:var(--color-border)] bg-[color:var(--color-bg)] group/frame shadow-inner">
          {/* Chrome Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[color:var(--color-bg-surface)] border-b border-[color:var(--color-border)] text-[11px] font-mono text-[color:var(--color-text-tertiary)]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-[color:var(--color-text-secondary)] font-medium">cleanmeets-crm.app</span>
            <span className="text-[color:var(--color-accent)] font-bold bg-[color:var(--color-accent)]/10 px-2 py-0.5 rounded text-[10px]">RBAC ACTIVE</span>
          </div>

          {/* Screenshot Preview */}
          <div className="relative overflow-hidden">
            <img
              src="/Cleanmeets CRM (1).jpg"
              alt="CleanMeets CRM Dashboard"
              className="w-full h-48 object-cover object-top group-hover/frame:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>

          {/* Floating AI Engine Card Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-3 right-3 bg-[color:var(--color-bg-card)]/95 backdrop-blur-xl border border-[color:var(--color-border)] rounded-xl p-3 shadow-2xl max-w-[220px]"
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-[color:var(--color-accent)] mb-1">
              <span className="flex items-center gap-1.5 font-bold">
                <FaRobot className="text-[color:var(--color-accent)]" /> SchoolSync AI
              </span>
              <span className="text-[color:var(--color-text-muted)] bg-[color:var(--color-bg-surface)] px-1.5 rounded">v2.0</span>
            </div>
            <p className="text-[10px] text-[color:var(--color-text-secondary)] font-mono leading-tight">
              Generating report comments... <span className="text-emerald-400 font-bold">Done</span>
            </p>
          </motion.div>
        </div>

        {/* Feature Pill Highlights */}
        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] flex items-center justify-between text-[color:var(--color-text-secondary)] shadow-sm">
            <span className="flex items-center gap-2 text-[color:var(--color-text-tertiary)]">
              <FaShieldAlt className="text-[color:var(--color-accent)]" /> RBAC Matrix
            </span>
            <span className="text-[color:var(--color-accent)] font-bold">4 Roles</span>
          </div>

          <div className="p-3 rounded-xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] flex items-center justify-between text-[color:var(--color-text-secondary)] shadow-sm">
            <span className="flex items-center gap-2 text-[color:var(--color-text-tertiary)]">
              <FaUsers className="text-[color:var(--color-accent)]" /> Socket.IO
            </span>
            <span className="text-[color:var(--color-accent)] font-bold">Real-time</span>
          </div>
        </div>

        {/* Bottom Quick Metric Bar */}
        <div className="pt-3 border-t border-[color:var(--color-border)]/80 flex items-center justify-between text-xs font-mono">
          <span className="flex items-center gap-1.5 text-[color:var(--color-text-tertiary)] font-medium">
            <FaCheck className="text-[color:var(--color-accent)]" /> Full-Stack Architecture
          </span>
          <a
            href="#projects"
            className="text-[color:var(--color-accent)] hover:underline font-bold flex items-center gap-1.5 transition-colors"
          >
            <span>Explore Work</span>
            <FaArrowUpRightFromSquare size={10} />
          </a>
        </div>

      </div>
    </motion.div>
  );
};

export default HeroVisual;