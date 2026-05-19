import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const sync = () => setHide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (hide) return;
    const move = (e: MouseEvent) => {
      if (ref.current) {
      ref.current.style.left = e.clientX - 48 + "px";
      ref.current.style.top = e.clientY - 48 + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [hide]);

  if (hide) return null;

  return (
    <div
      ref={ref}
      className="fixed z-[2] pointer-events-none w-24 h-24 rounded-full bg-gradient-to-br from-foil/12 via-accent-copper/8 to-accent-plum/10 opacity-30 blur-3xl transition-all duration-100 mix-blend-multiply hidden md:block"
      style={{ left: 0, top: 0 }}
    />
  );
} 