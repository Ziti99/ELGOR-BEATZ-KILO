"use client";
import { useEffect, useState, useMemo } from "react";

/** Halo diffuse — poussière de studio, très léger (remplace les pixels « durs »). */
export default function ParticlesBg() {
  const [mounted, setMounted] = useState(false);

  const halos = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 140 + Math.random() * 220,
      opacity: 0.035 + Math.random() * 0.045,
      blur: 48 + Math.random() * 40,
      delay: Math.random() * 8,
      duration: 22 + Math.random() * 18,
      hue: ["#c2410c", "#b8860b", "#8b7355", "#7c6aad"][i % 4],
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {halos.map((h) => (
        <div
          key={h.id}
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: `${h.size}px`,
            height: `${h.size}px`,
            left: `${h.left}%`,
            top: `${h.top}%`,
            marginLeft: `-${h.size / 2}px`,
            marginTop: `-${h.size / 2}px`,
            background: `radial-gradient(circle, ${h.hue} 0%, transparent 68%)`,
            opacity: h.opacity,
            filter: `blur(${h.blur}px)`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
