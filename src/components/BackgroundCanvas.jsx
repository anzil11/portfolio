import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas({ theme = 'dark' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const isLight = theme === 'light';

    // Particle nodes
    const particleCount = Math.min(Math.floor(window.innerWidth / 35), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * (isLight ? 0.15 : 0.12);
            ctx.strokeStyle = isLight 
              ? `rgba(13, 148, 136, ${alpha})`
              : `rgba(20, 184, 166, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = isLight
          ? `rgba(13, 148, 136, ${p.alpha * 1.2})`
          : `rgba(45, 212, 191, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-500">
      {/* Subtle background ambient gradients */}
      <div className={`absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[130px] transition-colors duration-500 ${
        theme === 'light' ? 'bg-teal-500/10' : 'bg-teal-500/10'
      }`} />
      <div className={`absolute top-[40%] -right-[15%] w-[650px] h-[650px] rounded-full blur-[140px] transition-colors duration-500 ${
        theme === 'light' ? 'bg-indigo-400/10' : 'bg-indigo-500/10'
      }`} />
      <div className={`absolute -bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[120px] transition-colors duration-500 ${
        theme === 'light' ? 'bg-cyan-400/10' : 'bg-cyan-500/10'
      }`} />
      
      {/* Interactive canvas grid */}
      <canvas ref={canvasRef} className={`w-full h-full ${theme === 'light' ? 'opacity-70' : 'opacity-60'}`} />
    </div>
  );
}
