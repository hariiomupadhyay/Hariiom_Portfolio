import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const CursorSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices that support fine pointer hover (desktops)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (spotlightRef.current) {
        if (spotlightRef.current.style.opacity === "0") {
          spotlightRef.current.style.opacity = "1";
        }
        // Direct inline style update bypassing React state re-renders
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, color-mix(in srgb, var(--color-accent) 6%, transparent), transparent 80%)`;
      }
    };

    const handleMouseLeave = () => {
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Render via Portal directly into document.body to isolate from app re-renders
  return ReactDOM.createPortal(
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-300 will-change-[background]"
    />,
    document.body
  );
};

export default CursorSpotlight;