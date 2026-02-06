import { useState } from 'react';
import { Heart, Gift, Share2, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';
import { copyLink } from '../lib/copyLink';
import CelebrationBurst from '../components/CelebrationBurst';

interface ResultsPerfectScreenProps {
  onRestart: () => void;
}

export default function ResultsPerfectScreen({ onRestart }: ResultsPerfectScreenProps) {
  const [showRedeemMessage, setShowRedeemMessage] = useState(false);

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
      <CelebrationBurst type="both" continuous />
      
      <div className="max-w-3xl w-full">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-200/50">
          <div className="text-center mb-8">
            <div className="inline-block animate-pulse-heart mb-6">
              <Heart size={80} fill="oklch(var(--romantic-pink))" stroke="oklch(var(--romantic-red))" strokeWidth={2} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-red-400 to-pink-400 bg-clip-text text-transparent">
              OMG 7/7!!! 😭💖
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-8">
              You are officially the BEST WIFE IN THE WORLD.
            </p>
          </div>

          {/* Meme Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/assets/generated/valentine-win-meme.dim_1200x800.png"
              alt="Romantic celebration"
              className="w-full h-auto"
            />
          </div>

          {/* Date Coupon */}
          <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl p-8 mb-8 border-2 border-pink-300 shadow-lg">
            <div className="text-center mb-6">
              <Gift size={48} className="inline-block text-pink-500 mb-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                🎟 You have won a DATE COUPON!
              </h2>
              <p className="text-lg text-muted-foreground">
                Redeemable for: One full day of love, food, cuddles & surprises.
              </p>
            </div>

            {!showRedeemMessage ? (
              <button
                onClick={() => setShowRedeemMessage(true)}
                className="w-full bg-gradient-to-r from-pink-400 via-pink-500 to-red-400 hover:from-pink-500 hover:via-pink-600 hover:to-red-500 text-white font-semibold text-xl py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Redeem My Date 💌
              </button>
            ) : (
              <div className="bg-white/80 rounded-2xl p-6 text-center animate-slide-up">
                <p className="text-lg font-medium text-foreground">
                  Your husband will contact you shortly for booking 😉
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleShare}
              className="flex-1 bg-white/70 hover:bg-white text-foreground font-medium py-4 px-6 rounded-2xl border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Share2 size={20} />
              Share
            </button>
            <button
              onClick={onRestart}
              className="flex-1 bg-white/70 hover:bg-white text-foreground font-medium py-4 px-6 rounded-2xl border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              Try Again
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
