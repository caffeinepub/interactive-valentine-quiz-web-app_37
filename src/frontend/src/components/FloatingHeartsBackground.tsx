import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export default function FloatingHeartsBackground() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generatedHearts: FloatingHeart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 20 + Math.random() * 30,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 4,
      opacity: 0.1 + Math.random() * 0.15,
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            animation: `float-slow ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
            opacity: heart.opacity,
          }}
        >
          <Heart
            size={heart.size}
            fill="oklch(var(--romantic-pink))"
            stroke="oklch(var(--romantic-pink))"
            strokeWidth={1}
          />
        </div>
      ))}
    </div>
  );
}
