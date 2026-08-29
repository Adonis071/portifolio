import { useEffect, useRef } from 'react';

export default function CursorSmoke() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastSpawnTime = 0;
    // Controla a frequência das partículas (menor = mais denso)
    const spawnRate = 20; 

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const now = Date.now();
      if (now - lastSpawnTime < spawnRate) return;
      lastSpawnTime = now;

      let clientX, clientY;
      if ('touches' in e) {
        if (e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          return;
        }
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // Cria a partícula no DOM
      const particle = document.createElement('div');
      particle.className = 'cursor-smoke-particle';
      particle.style.left = `${clientX}px`;
      particle.style.top = `${clientY}px`;
      
      container.appendChild(particle);

      // Remove a partícula exatamente após o tempo de animação (1.5s)
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 1500);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[100] overflow-hidden" />;
}
