import { useState, useRef, useCallback, useEffect } from "react";

export default function CursorSpotlight({ children }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (prefersReducedMotion) return;

    // Clear previous timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Debounce: update only every 50ms instead of every mousemove
    timeoutRef.current = setTimeout(() => {
      setMouse({
        x: e.clientX,
        y: e.clientY
      });
    }, 50);
  }, [prefersReducedMotion]);

  // Skip rendering cursor effect on devices that prefer reduced motion
  if (prefersReducedMotion) {
    return <div className="relative min-h-screen">{children}</div>;
  }

  return (
    <div
      className="relative min-h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Use will-change for GPU acceleration */}
      <div
        className="pointer-events-none fixed inset-0 z-30 will-change-transform"
        style={{
          background: `radial-gradient(900px circle at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.15), transparent 30%)`
        }}
      />
      {children}
    </div>
  );
}