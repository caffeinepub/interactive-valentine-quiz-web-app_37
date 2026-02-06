import { Heart, ArrowRight } from 'lucide-react';

interface PunishmentScreenProps {
  onContinue: () => void;
}

export default function PunishmentScreen({ onContinue }: PunishmentScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
      <div className="max-w-3xl w-full">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-200/50">
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <Heart size={80} fill="oklch(var(--romantic-pink))" stroke="oklch(var(--romantic-red))" strokeWidth={2} />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              The punishment is:
            </h1>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-pink-200 shadow-lg">
            <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
              You still haven't sent me the fit-check video wearing the waist chain, so no excuses. Without giving any reason, you have to send me the video.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed text-center mt-4">
              (It's not fully naughty… but yeah, a little naughty 😋😋)
            </p>
          </div>

          <button
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-pink-400 via-pink-500 to-red-400 hover:from-pink-500 hover:via-pink-600 hover:to-red-500 text-white font-semibold text-xl py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Continue
            <ArrowRight size={24} />
          </button>
        </div>

        <footer className="text-center mt-8 text-sm text-muted-foreground">
          <p>© 2026. Built with <Heart size={14} className="inline fill-pink-500 text-pink-500" /> using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-500 transition-colors">caffeine.ai</a></p>
        </footer>
      </div>
    </div>
  );
}
