import { useEffect, useState } from 'react';
import { Sparkles, Star } from 'lucide-react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export default function SparkleBurst() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles: Sparkle[] = Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const distance = 60 + Math.random() * 40;
      return {
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: 20 + Math.random() * 15,
        delay: Math.random() * 0.3,
      };
    });
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            transform: `translate(${sparkle.x}px, ${sparkle.y}px)`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          {sparkle.id % 2 === 0 ? (
            <Sparkles
              size={sparkle.size}
              fill="oklch(var(--romantic-pink))"
              stroke="oklch(var(--romantic-pink))"
              strokeWidth={2}
            />
          ) : (
            <Star
              size={sparkle.size}
              fill="oklch(var(--romantic-red))"
              stroke="oklch(var(--romantic-red))"
              strokeWidth={2}
            />
          )}
        </div>
      ))}
    </div>
  );
}
