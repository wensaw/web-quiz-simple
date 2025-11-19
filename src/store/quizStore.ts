import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SessionResult {
  sessionId: string;
  completedAt: Date;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  answers: any[];
}

interface QuizState {
  currentSessionId: string | null;
  currentQuestionIndex: number;
  answers: Record<string, number>;
  completedSessions: string[];
  sessionResults: SessionResult[];
  badges: string[]; // ← 追加
  
  setCurrentSession: (sessionId: string) => void;
  setCurrentQuestion: (index: number) => void;
  setAnswer: (questionId: string, answerIndex: number) => void;
  completeSession: (result: SessionResult) => void;
  resetCurrentSession: () => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      currentSessionId: null,
      currentQuestionIndex: 0,
      answers: {},
      completedSessions: [],
      sessionResults: [],
      badges: [], // ← 追加

      setCurrentSession: (sessionId) =>
        set({ currentSessionId: sessionId, currentQuestionIndex: 0, answers: {} }),

      setCurrentQuestion: (index) =>
        set({ currentQuestionIndex: index }),

      setAnswer: (questionId, answerIndex) =>
        set((state) => ({
          answers: { ...state.answers, [questionId]: answerIndex },
        })),

      completeSession: (result) =>
        set((state) => ({
          completedSessions: [...new Set([...state.completedSessions, result.sessionId])],
          sessionResults: [...state.sessionResults, result],
        })),

      resetCurrentSession: () =>
        set({ currentSessionId: null, currentQuestionIndex: 0, answers: {} }),
    }),
    {
      name: 'quiz-storage',
    }
  )
);