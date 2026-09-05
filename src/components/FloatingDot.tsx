import { useMemo } from "react";
import { motion } from "framer-motion";

interface Dot {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  driftX: number;
  opacity: number;
}

const DOT_COUNT = 26;

const FloatingDots = () => {
  const dots = useMemo<Dot[]>(() => {
    return Array.from({ length: DOT_COUNT }, (_, i) => ({
      id: i,
      size: 3 + Math.random() * 7,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 14 + Math.random() * 16,
      delay: Math.random() * -20,
      driftX: (Math.random() - 0.5) * 60,
      opacity: 0.12 + Math.random() * 0.18,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className="absolute rounded-full bg-[color:var(--color-accent)]"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            opacity: dot.opacity,
          }}
          animate={{
            y: [0, -40, 0, 40, 0],
            x: [0, dot.driftX, 0, -dot.driftX, 0],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;