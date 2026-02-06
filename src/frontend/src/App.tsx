import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import WelcomeScreen from './screens/WelcomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultsPerfectScreen from './screens/ResultsPerfectScreen';
import ResultsTeaseScreen from './screens/ResultsTeaseScreen';
import PunishmentScreen from './screens/PunishmentScreen';
import ValentineQuestionScreen from './screens/ValentineQuestionScreen';
import FinalCelebrationScreen from './screens/FinalCelebrationScreen';
import FloatingHeartsBackground from './components/FloatingHeartsBackground';
import AudioControls from './features/audio/AudioControls';
import { Toaster } from 'sonner';

type Screen = 
  | 'welcome' 
  | 'quiz' 
  | 'results-perfect' 
  | 'results-tease' 
  | 'punishment' 
  | 'valentine-question' 
  | 'final-celebration';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [quizScore, setQuizScore] = useState<number>(0);

  const handleStartQuiz = () => {
    setQuizScore(0);
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    if (score === 7) {
      setCurrentScreen('results-perfect');
    } else {
      setCurrentScreen('results-tease');
    }
  };

  const handleContinueToPunishment = () => {
    setCurrentScreen('punishment');
  };

  const handleContinueToValentine = () => {
    setCurrentScreen('valentine-question');
  };

  const handleValentineYes = () => {
    setCurrentScreen('final-celebration');
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setQuizScore(0);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen relative overflow-hidden romantic-gradient-soft">
        <FloatingHeartsBackground />
        
        <div className="relative z-10">
          <AudioControls />
          
          {currentScreen === 'welcome' && (
            <WelcomeScreen onStart={handleStartQuiz} />
          )}
          
          {currentScreen === 'quiz' && (
            <QuizScreen onComplete={handleQuizComplete} />
          )}
          
          {currentScreen === 'results-perfect' && (
            <ResultsPerfectScreen onRestart={handleRestart} />
          )}
          
          {currentScreen === 'results-tease' && (
            <ResultsTeaseScreen 
              score={quizScore} 
              onContinue={handleContinueToPunishment}
              onRestart={handleRestart}
            />
          )}
          
          {currentScreen === 'punishment' && (
            <PunishmentScreen onContinue={handleContinueToValentine} />
          )}
          
          {currentScreen === 'valentine-question' && (
            <ValentineQuestionScreen onYes={handleValentineYes} />
          )}
          
          {currentScreen === 'final-celebration' && (
            <FinalCelebrationScreen onRestart={handleRestart} />
          )}
        </div>
        
        <Toaster position="top-center" richColors />
      </div>
    </ThemeProvider>
  );
}

export default App;
