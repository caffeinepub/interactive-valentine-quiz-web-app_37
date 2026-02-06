import { Heart, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { copyLink } from '../lib/copyLink';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const handleShare = async () => {
    const success = await copyLink();
    if (success) {
      toast.success('Link copied to clipboard! 💕');
    } else {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block animate-pulse-heart mb-6">
            <Heart size={80} fill="oklch(var(--romantic-pink))" stroke="oklch(var(--romantic-red))" strokeWidth={2} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-red-400 to-pink-400 bg-clip-text text-transparent">
            How Well Do You Know Your Husband? 💖
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            A tiny test made with love just for you
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-200/50">
          <div className="space-y-6">
            <button
              onClick={onStart}
              className="w-full bg-gradient-to-r from-pink-400 via-pink-500 to-red-400 hover:from-pink-500 hover:via-pink-600 hover:to-red-500 text-white font-semibold text-xl py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Start the Love Test →
            </button>

            <button
              onClick={handleShare}
              className="w-full bg-white/50 hover:bg-white/70 text-foreground font-medium py-4 px-6 rounded-2xl border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Share2 size={20} />
              Copy Link
            </button>
          </div>
        </div>

        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>© 2026. Built with <Heart size={14} className="inline fill-pink-500 text-pink-500" /> using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-500 transition-colors">caffeine.ai</a></p>
        </footer>
      </div>
    </div>
  );
}
