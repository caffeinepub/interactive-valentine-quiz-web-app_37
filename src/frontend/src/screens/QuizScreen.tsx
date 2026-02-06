import { useState } from 'react';
import { quizData } from '../features/quiz/quizData';
import { useQuiz } from '../features/quiz/useQuiz';
import { Heart, ArrowRight } from 'lucide-react';
import CelebrationBurst from '../components/CelebrationBurst';
import SparkleBurst from '../components/SparkleBurst';

interface QuizScreenProps {
  onComplete: (score: number) => void;
}

export default function QuizScreen({ onComplete }: QuizScreenProps) {
  const { currentQuestionIndex, selectAnswer, score, isAnswered } = useQuiz();
  const [showCelebration, setShowCelebration] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQuestion = quizData[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;

  const handleOptionClick = (optionText: string) => {
    if (isAnswered) return;

    setSelectedOption(optionText);
    const isCorrect = selectAnswer(optionText);

    if (isCorrect) {
      setShowCelebration(true);
      
      // Special sparkle for Q4 "Yes I will😘"
      if (currentQuestionIndex === 3 && optionText === "Yes I will😘") {
        setShowSparkle(true);
        setTimeout(() => setShowSparkle(false), 1000);
      }

      setTimeout(() => {
        setShowCelebration(false);
        setSelectedOption(null);
        
        if (currentQuestionIndex === quizData.length - 1) {
          onComplete(score + 1);
        }
      }, 1500);
    } else {
      setTimeout(() => {
        setSelectedOption(null);
        
        if (currentQuestionIndex === quizData.length - 1) {
          onComplete(score);
        }
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
      {showCelebration && <CelebrationBurst type="both" />}
      
      <div className="max-w-3xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Question {currentQuestionIndex + 1} of {quizData.length}
            </span>
            <span className="text-sm font-medium text-pink-500">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-3 bg-white/50 rounded-full overflow-hidden border border-pink-200">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-red-400 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-200/50 relative">
          {showSparkle && <SparkleBurst />}
          
          <div className="mb-8">
            <div className="flex items-start gap-3 mb-4">
              <Heart size={28} fill="oklch(var(--romantic-pink))" stroke="oklch(var(--romantic-red))" strokeWidth={2} className="flex-shrink-0 mt-1" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {currentQuestion.question}
              </h2>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption === option.text;
              const isCorrectAnswer = option.isCorrect;
              const showResult = isAnswered && isSelected;

              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option.text)}
                  disabled={isAnswered}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-102 ${
                    showResult && isCorrectAnswer
                      ? 'bg-green-100 border-green-400 shadow-lg'
                      : showResult && !isCorrectAnswer
                      ? 'bg-red-100 border-red-400 shadow-lg'
                      : isSelected
                      ? 'bg-pink-100 border-pink-400 shadow-lg scale-102'
                      : 'bg-white/70 border-pink-200 hover:border-pink-400 hover:bg-pink-50 hover:shadow-md'
                  } ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">{option.text}</span>
                    {showResult && isCorrectAnswer && (
                      <Heart size={24} fill="oklch(var(--romantic-pink))" stroke="oklch(var(--romantic-red))" strokeWidth={2} className="animate-pulse-heart" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
