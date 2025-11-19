export type Category = 'design' | 'figma' | 'coding';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface CodeExample {
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'jsx';
  code: string;
  description?: string;
}

export interface Reference {
  title: string;
  url: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  codeExample?: CodeExample;
  figmaLink?: string;
  references?: Reference[];
}

export interface QuizSession {
  id: string;
  week: number;
  day: number;
  month: number;
  category: Category;
  title: string;
  duration: number;
  difficulty: Difficulty;
  questions: Question[];
  backgroundQuiz?: string;
  prerequisites?: string[];
  tags: string[];
  learningGoals: string[];
}

export interface UserProgress {
  userId: string;
  totalSessions: number;
  completedSessions: number;
  currentSession: number;
  designTrackProgress: number;
  figmaTrackProgress: number;
  codingTrackProgress: number;
  overallScore: number;
  sessionHistory: SessionResult[];
  studyStreak: number;
}

export interface SessionResult {
  sessionId: string;
  completedAt: Date;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  answers: Answer[];
}

export interface Answer {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
  timeSpent: number;
}
