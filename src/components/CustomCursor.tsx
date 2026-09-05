import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // desktop pointer 
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Make cursor visible smoothly 
      if (cursorRef.current && cursorRef.current.style.opacity === "0") {
        cursorRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    // High-performance animation loop synced with screen refresh rate (RAF)
    const render = () => {
      // Linear interpolation (lerp) for buttery-smooth trailing effect (0.25 = snappy yet fluid)
      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;

      if (cursorRef.current) {
        // Direct GPU-accelerated translate3d transform (Zero React re-render lag)
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);
    
    // Start animation loop
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Render via Portal directly into document.body to isolate from App.tsx tree re-renders & overlays
  return ReactDOM.createPortal(
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[color:var(--color-accent)] bg-[color:var(--color-accent)]/15 pointer-events-none z-[999999] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 will-change-transform"
      style={{ backfaceVisibility: "hidden" }}
    />,
    document.body
  );
};

export default CustomCursor;