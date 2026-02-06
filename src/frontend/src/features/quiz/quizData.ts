export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export const quizData: QuizQuestion[] = [
  {
    question: "When did I propose to you?",
    options: [
      { text: "16th sep 2025", isCorrect: false },
      { text: "6th oct 2025", isCorrect: true },
      { text: "14th dec 2025", isCorrect: false },
      { text: "You were born knowing me", isCorrect: false },
    ],
  },
  {
    question: "Where do you want to meet me in our first date?",
    options: [
      { text: "A cafe", isCorrect: true },
      { text: "Restuarant", isCorrect: true },
      { text: "Beach", isCorrect: true },
      { text: "In my dreams", isCorrect: true },
    ],
  },
  {
    question: "Will you love me forever?",
    options: [
      { text: "Nope", isCorrect: false },
      { text: "Yes babe", isCorrect: true },
      { text: "Defenently honey", isCorrect: true },
      { text: "Maybee", isCorrect: false },
    ],
  },
  {
    question: "Will you marry me?",
    options: [
      { text: "Yes I will😘", isCorrect: true },
      { text: "No", isCorrect: false },
      { text: "Maybee", isCorrect: false },
      { text: "I don't know", isCorrect: false },
    ],
  },
  {
    question: "How many kisses will I get on our first meet?",
    options: [
      { text: "Only one 😒🥺", isCorrect: false },
      { text: "Uncountable", isCorrect: true },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: true },
    ],
  },
  {
    question: "Which thing do I love the most?",
    options: [
      { text: "Myself", isCorrect: false },
      { text: "Ronaldo", isCorrect: false },
      { text: "You", isCorrect: true },
      { text: "Food", isCorrect: false },
    ],
  },
  {
    question: "Guess how much I love you?",
    options: [
      { text: "You don't love me", isCorrect: true },
      { text: "size of ocean", isCorrect: false },
      { text: "Bigger than the world", isCorrect: false },
      { text: "Bigger than the universe", isCorrect: false },
    ],
  },
];
