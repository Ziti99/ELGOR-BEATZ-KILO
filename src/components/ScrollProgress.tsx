'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setPct(height <= 0 ? 0 : Math.min(100, (scrollTop / height) * 100));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className="scroll-progress-track fixed left-0 right-0 top-0 z-[110] h-[2px] pointer-events-none overflow-hidden"
      aria-hidden
    >
      <div
        className="scroll-progress-fill h-full will-change-[width]"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
