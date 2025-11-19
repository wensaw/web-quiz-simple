import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuizStore } from '../store/quizStore';
import { allSessions, type QuizSession } from '../data/index';
import { Home, RotateCcw, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../types/category';

interface AnswerResult {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
}

export const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { completeSession } = useQuizStore();

  const { sessionId, answers, totalQuestions } = (location.state as { sessionId: string; answers: AnswerResult[]; totalQuestions: number; }) || {};

  const session = allSessions.find((s: QuizSession) => s.id === sessionId);

  useEffect(() => {
    if (sessionId && answers) {
      const correctCount = answers.filter(a => a.isCorrect).length;
      const score = Math.round((correctCount / totalQuestions) * 100);
      
      completeSession({
        sessionId,
        score,
        completedAt: new Date(),
        totalQuestions,
        timeSpent: 0, // 時間計測は未実装のため0
        answers: answers.map(a => ({ ...a, timeSpent: 0 })),
      });
    }
  }, [sessionId, answers, totalQuestions, completeSession]);

  if (!session || !answers) {
    return <div>結果が見つかりません</div>;
  }

  const correctCount = answers.filter(a => a.isCorrect).length;
  const score = Math.round((correctCount / totalQuestions) * 100);

  const categoryInfo = CATEGORIES.find(c => c.id === session.category);
  const backgroundUrl = categoryInfo?.backgroundQuiz || '/images/backgrounds/stage-coding-quiz.png';

  const getNextSessionId = () => {
    const currentIndex = allSessions.findIndex((s: QuizSession) => s.id === sessionId);
    if (currentIndex !== -1 && currentIndex < allSessions.length - 1) {
      // 同じカテゴリの次のセッションを探す
      const nextSession = allSessions.find((s: QuizSession, index: number) => index > currentIndex && s.category === session.category);
      return nextSession?.id;
    }
    return null;
  };
  const nextSessionId = getNextSessionId();

  const getMessage = () => {
    if (score === 100) return '完璧です！🏆';
    if (score >= 80) return '素晴らしい！✨';
    if (score >= 60) return 'よくできました！👍';
    return 'もう一度挑戦しよう！💪';
  };

  return (
    <div 
      className="min-h-screen py-12 flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-2xl w-full mx-auto px-4">
        <div className="bg-white/95 border-8 border-minecraft-dark rounded-2xl p-8 shadow-2xl text-center">
          <h1 className="text-4xl font-bold text-minecraft-dark mb-6 pixel-font">
            {getMessage()}
          </h1>

          <div className="mb-8">
            <div className="text-7xl font-bold mb-4" style={{ color: score >= 80 ? '#16a34a' : score >= 60 ? '#f59e0b' : '#dc2626' }}>
              {score}%
            </div>
            <p className="text-2xl text-gray-700 font-bold">
              {correctCount} / {totalQuestions} 問正解
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {answers.map((answer, index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-lg ${
                  answer.isCorrect ? 'bg-green-600' : 'bg-red-600'
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>

          {score < 100 && (
            <div className="bg-yellow-50 border-4 border-yellow-400 rounded-xl p-4 mb-6">
              <p className="text-gray-800 font-bold">
                💡 間違えた問題を復習して、完璧を目指しましょう！
              </p>
            </div>
          )}

          <div className="space-y-3">
            <button
              onClick={() => navigate(`/quiz/${sessionId}`)}
              className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-4 px-6 rounded-xl border-4 border-yellow-800 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <RotateCcw className="w-5 h-5" />
              もう一度挑戦
            </button>

            {nextSessionId && (
              <button
                onClick={() => navigate(`/quiz/${nextSessionId}`)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl border-4 border-blue-800 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <ArrowRight className="w-5 h-5" />
                次のセッションへ
              </button>
            )}

            <button
              onClick={() => navigate('/')}
              className="w-full bg-minecraft-dirt hover:bg-minecraft-stone text-white font-bold py-4 px-6 rounded-xl border-4 border-minecraft-dark flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Home className="w-5 h-5" />
              ホームに戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};