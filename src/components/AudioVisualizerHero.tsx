import { useEffect, useRef } from "react";

export default function AudioVisualizerHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    let frame: number;
    let time = 0;
    
    function draw() {
      if (!canvas || !ctx) return;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const bars = 64;
      const barWidth = canvas.width / bars;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < bars; i++) {
        const x = i * barWidth;
        
        // Create wave-like animation
        const wave = Math.sin(time * 0.01 + i * 0.2) * 0.5 + 0.5;
        const noise = Math.random() * 0.3;
        const height = (wave + noise) * canvas.height * 0.6;
        
        // Gradient colors based on position and time
        const hue = (220 + i * 3 + time * 0.5) % 360;
        const saturation = 80 + Math.sin(time * 0.01 + i * 0.1) * 20;
        const lightness = 60 + Math.sin(time * 0.02 + i * 0.15) * 20;
        
        // Create gradient for each bar
        const gradient = ctx.createLinearGradient(x, centerY - height, x, centerY + height);
        gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`);
        gradient.addColorStop(0.5, `hsla(${hue}, ${saturation}%, ${lightness}%, 1)`);
        gradient.addColorStop(1, `hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)`);
        
        ctx.fillStyle = gradient;
        
        // Draw rounded bars
        const barHeight = height * 0.8;
        const y = centerY - barHeight / 2;
        
        // Rounded rectangle
        ctx.beginPath();
        ctx.roundRect(x + 1, y, barWidth - 2, barHeight, 4);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Add reflection effect
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness + 20}%, 0.3)`;
        ctx.fillRect(x + 2, y + 2, barWidth - 4, barHeight * 0.3);
      }
      
      // Add floating particles
      for (let i = 0; i < 8; i++) {
        const particleX = (Math.sin(time * 0.002 + i) * 0.5 + 0.5) * canvas.width;
        const particleY = (Math.cos(time * 0.003 + i * 0.5) * 0.5 + 0.5) * canvas.height;
        const size = Math.sin(time * 0.01 + i) * 0.5 + 1;
        
        ctx.fillStyle = `hsla(${200 + i * 20}, 80%, 70%, ${0.6 + Math.sin(time * 0.02 + i) * 0.2})`;
        ctx.beginPath();
        ctx.arc(particleX, particleY, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      time++;
      frame = requestAnimationFrame(draw);
    }
    
    draw();
    
    return () => cancelAnimationFrame(frame);
  }, []);
  
  return (
    <div className="relative">
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={80} 
        className="w-full max-w-2xl h-20 rounded-2xl bg-gradient-to-r from-slate-900/50 to-purple-900/50 backdrop-blur-sm border border-white/10 shadow-2xl"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-white/20 text-xs font-mono tracking-widest">
          AUDIO VISUALIZER
        </div>
      </div>
    </div>
  );
} 