import { useState } from "react";

export default function CursorSpotlight({ children }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative min-h-screen"
      onMouseMove={(e) => {
        setMouse({
          x: e.clientX,
          y: e.clientY
        });
      }}
    >
      {/* Global Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-75"
        style={{
          background: `radial-gradient(900px circle at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.15), transparent 30%)`
        }}
      />

      {children}
    </div>
  );
}