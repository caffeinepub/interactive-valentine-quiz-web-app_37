import { Heart, Share2, RotateCcw, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { copyLink } from '../lib/copyLink';

interface ResultsTeaseScreenProps {
  score: number;
  onContinue: () => void;
  onRestart: () => void;
}

export default function ResultsTeaseScreen({ score, onContinue, onRestart }: ResultsTeaseScreenProps) {
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
      <div className="max-w-3xl w-full">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-200/50">
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <Heart size={80} fill="oklch(var(--romantic-blush))" stroke="oklch(var(--romantic-pink))" strokeWidth={2} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Hmm… not perfect 👀
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
              You scored {score}/7
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              You need to do better… but I still love you.
            </p>
          </div>

          {/* Meme Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/assets/generated/valentine-tease-meme.dim_1200x800.png"
              alt="Teasing but sweet"
              className="w-full h-auto"
            />
          </div>

          {/* Punishment Notice */}
          <div className="bg-pink-50 rounded-2xl p-6 mb-8 border-2 border-pink-200">
            <p className="text-center text-lg font-medium text-foreground">
              But you should do the punishment for low score
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={onContinue}
              className="w-full bg-gradient-to-r from-pink-400 via-pink-500 to-red-400 hover:from-pink-500 hover:via-pink-600 hover:to-red-500 text-white font-semibold text-xl py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Continue
              <ArrowRight size={24} />
            </button>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleShare}
                className="flex-1 bg-white/70 hover:bg-white text-foreground font-medium py-3 px-6 rounded-2xl border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Share2 size={20} />
                Share
              </button>
              <button
                onClick={onRestart}
                className="flex-1 bg-white/70 hover:bg-white text-foreground font-medium py-3 px-6 rounded-2xl border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RotateCcw size={20} />
                Try Again
              </button>
            </div>
          </div>
        </div>

        <footer className="text-center mt-8 text-sm text-muted-foreground">
          <p>© 2026. Built with <Heart size={14} className="inline fill-pink-500 text-pink-500" /> using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-500 transition-colors">caffeine.ai</a></p>
        </footer>
      </div>
    </div>
  );
}
