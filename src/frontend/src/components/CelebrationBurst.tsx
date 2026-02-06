import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface CelebrationBurstProps {
  type?: 'hearts' | 'confetti' | 'both';
  continuous?: boolean;
  onComplete?: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
  color: string;
  type: 'heart' | 'sparkle';
}

export default function CelebrationBurst({ 
  type = 'both', 
  continuous = false,
  onComplete 
}: CelebrationBurstProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      'oklch(var(--romantic-pink))',
      'oklch(var(--romantic-red))',
      'oklch(var(--romantic-blush))',
      'oklch(var(--romantic-beige))',
    ];

    const generateParticles = () => {
      const count = continuous ? 30 : 20;
      const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 20,
        rotation: Math.random() * 360,
        delay: Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: type === 'hearts' ? 'heart' : (Math.random() > 0.5 ? 'heart' : 'sparkle'),
      }));
      setParticles(newParticles);
    };

    generateParticles();

    if (continuous) {
      const interval = setInterval(generateParticles, 2000);
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => {
        onComplete?.();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [type, continuous, onComplete]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.type === 'heart' ? (
            <Heart
              size={24}
              fill={particle.color}
              stroke={particle.color}
              strokeWidth={1}
            />
          ) : (
            <Sparkles
              size={20}
              fill={particle.color}
              stroke={particle.color}
              strokeWidth={2}
            />
          )}
        </div>
      ))}
    </div>
  );
}
