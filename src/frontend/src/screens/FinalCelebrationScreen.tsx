import { Heart, RotateCcw } from 'lucide-react';
import CelebrationBurst from '../components/CelebrationBurst';

interface FinalCelebrationScreenProps {
  onRestart: () => void;
}

export default function FinalCelebrationScreen({ onRestart }: FinalCelebrationScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
      <CelebrationBurst type="both" continuous />
      
      <div className="max-w-3xl w-full">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-200/50">
          <div className="text-center">
            <div className="inline-block animate-pulse-heart mb-8">
              <Heart size={120} fill="oklch(var(--romantic-pink))" stroke="oklch(var(--romantic-red))" strokeWidth={2} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-red-400 to-pink-400 bg-clip-text text-transparent">
              YAY!!! You are my Valentine forever 💖🌹
            </h1>

            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                I love you so much! 💕
              </p>
              <p className="text-lg text-muted-foreground">
                Thank you for being the best wife in the world
              </p>
            </div>

            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-pink-400 via-pink-500 to-red-400 hover:from-pink-500 hover:via-pink-600 hover:to-red-500 text-white font-semibold text-xl py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
            >
              <RotateCcw size={24} />
              Start Over
            </button>
          </div>
        </div>

        <footer className="text-center mt-8 text-sm text-muted-foreground">
          <p>© 2026. Built with <Heart size={14} className="inline fill-pink-500 text-pink-500" /> using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-500 transition-colors">caffeine.ai</a></p>
        </footer>
      </div>
    </div>
  );
}
