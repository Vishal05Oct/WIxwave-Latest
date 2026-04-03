import { useEffect, useRef, useState } from "react";

export default function CursorSpotlight({ children }) {
  const spotlightRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const update = () => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(
          900px circle at ${mouse.current.x}px ${mouse.current.y}px,
          rgba(59,130,246,0.15),
          transparent 30%
        )`;
      }
      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafRef.current);
  }, [prefersReducedMotion]);

  const handleMouseMove = (e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  };

  if (prefersReducedMotion) {
    return <div className="relative min-h-screen">{children}</div>;
  }

  return (
    <div className="relative min-h-screen" onMouseMove={handleMouseMove}>
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30 will-change-transform"
      />
      {children}
    </div>
  );
}