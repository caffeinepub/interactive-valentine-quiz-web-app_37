import { useState } from 'react';
import { quizData } from './quizData';

export function useQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const selectAnswer = (selectedOptionText: string): boolean => {
    const currentQuestion = quizData[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(
      opt => opt.text === selectedOptionText
    );

    if (!selectedOption) return false;

    setIsAnswered(true);

    if (selectedOption.isCorrect) {
      setScore(prev => prev + 1);
      
      // Move to next question after delay
      setTimeout(() => {
        if (currentQuestionIndex < quizData.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          setIsAnswered(false);
        }
      }, 1500);

      return true;
    } else {
      // Move to next question after delay even on wrong answer
      setTimeout(() => {
        if (currentQuestionIndex < quizData.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          setIsAnswered(false);
        }
      }, 1000);

      return false;
    }
  };

  const reset = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsAnswered(false);
  };

  return {
    currentQuestionIndex,
    score,
    isAnswered,
    selectAnswer,
    reset,
  };
}
