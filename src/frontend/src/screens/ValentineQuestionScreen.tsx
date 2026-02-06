import { useState } from 'react';
import { Heart } from 'lucide-react';

interface ValentineQuestionScreenProps {
  onYes: () => void;
}

export default function ValentineQuestionScreen({ onYes }: ValentineQuestionScreenProps) {
  const [noClickCount, setNoClickCount] = useState(0);

  const handleNoClick = () => {
    setNoClickCount(prev => prev + 1);
  };

  const getPromptText = () => {
    if (noClickCount === 0) return "Will you still be my Valentine? 💘";
    if (noClickCount === 1) return "Are you sure?? 🥺";
    return "You have no escape 😌";
  };

  // Calculate button sizes based on click count
  const yesScale = 1 + (noClickCount * 0.4);
  const noScale = Math.max(0.3, 1 - (noClickCount * 0.15));

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
      <div className="max-w-3xl w-full">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-200/50">
          <div className="text-center mb-12">
            <div className="inline-block animate-pulse-heart mb-6">
              <Heart size={80} fill="oklch(var(--romantic-pink))" stroke="oklch(var(--romantic-red))" strokeWidth={2} />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {getPromptText()}
            </h1>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button
              onClick={onYes}
              style={{
                transform: `scale(${yesScale})`,
                transition: 'transform 0.3s ease-out',
              }}
              className="bg-gradient-to-r from-pink-400 via-pink-500 to-red-400 hover:from-pink-500 hover:via-pink-600 hover:to-red-500 text-white font-bold text-2xl py-6 px-12 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              Yes 💖
            </button>

            <button
              onClick={handleNoClick}
              style={{
                transform: `scale(${noScale})`,
                transition: 'transform 0.3s ease-out',
              }}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              No 😈
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
