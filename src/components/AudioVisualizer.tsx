import { useEffect, useRef } from "react";

export default function AudioVisualizer({ isPlaying }: { isPlaying: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let frame: number;
    let time = 0;
    
    function draw() {
      if (!ctx || !canvas) return;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const bars = 48;
      const barWidth = canvas.width / bars;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < bars; i++) {
        const x = i * barWidth;
        
        // Create wave-like animation when playing
        let height: number;
        if (isPlaying) {
          const wave = Math.sin(time * 0.02 + i * 0.3) * 0.5 + 0.5;
          const noise = Math.random() * 0.4;
          height = (wave + noise) * canvas.height * 0.7;
        } else {
          // Static bars when not playing
          height = canvas.height * 0.15;
        }
        
        // Gradient colors based on position and time
        const hue = (220 + i * 4 + time * 0.3) % 360;
        const saturation = isPlaying ? 80 + Math.sin(time * 0.01 + i * 0.2) * 20 : 60;
        const lightness = isPlaying ? 60 + Math.sin(time * 0.015 + i * 0.25) * 20 : 40;
        
        // Create gradient for each bar
        const gradient = ctx.createLinearGradient(x, centerY - height, x, centerY + height);
        gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)`);
        gradient.addColorStop(0.5, `hsla(${hue}, ${saturation}%, ${lightness}%, 0.9)`);
        gradient.addColorStop(1, `hsla(${hue}, ${saturation}%, ${lightness}%, 0.4)`);
        
        ctx.fillStyle = gradient;
        
        // Draw rounded bars
        const barHeight = height * 0.8;
        const y = centerY - barHeight / 2;
        
        // Rounded rectangle
        ctx.beginPath();
        ctx.roundRect(x + 1, y, barWidth - 2, barHeight, 3);
        ctx.fill();
        
        // Add glow effect when playing
        if (isPlaying) {
          ctx.shadowColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
          
          // Add reflection effect
          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness + 20}%, 0.3)`;
          ctx.fillRect(x + 2, y + 2, barWidth - 4, barHeight * 0.3);
        }
      }
      
      // Add floating particles when playing
      if (isPlaying) {
        for (let i = 0; i < 6; i++) {
          const particleX = (Math.sin(time * 0.003 + i) * 0.5 + 0.5) * canvas.width;
          const particleY = (Math.cos(time * 0.004 + i * 0.6) * 0.5 + 0.5) * canvas.height;
          const size = Math.sin(time * 0.02 + i) * 0.5 + 0.8;
          
          ctx.fillStyle = `hsla(${200 + i * 25}, 80%, 70%, ${0.5 + Math.sin(time * 0.025 + i) * 0.2})`;
          ctx.beginPath();
          ctx.arc(particleX, particleY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      time++;
      frame = requestAnimationFrame(draw);
    }
    
    draw();
    
    return () => cancelAnimationFrame(frame);
  }, [isPlaying]);
  
  return (
    <div className="relative">
      <canvas 
        ref={canvasRef} 
        width={400} 
        height={64} 
        className="w-full max-w-lg h-16 rounded-xl bg-gradient-to-r from-slate-900/30 to-purple-900/30 backdrop-blur-sm border border-white/5 shadow-lg"
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white/10 text-xs font-mono tracking-widest">
            PAUSE
          </div>
        </div>
      )}
    </div>
  );
} 