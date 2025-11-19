import { useNavigate, useParams } from 'react-router-dom';
import { CATEGORIES } from '../types/category';
import { allSessions, type QuizSession } from '../data/index';
import { useQuizStore } from '../store/quizStore';
import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react';

export const SessionList = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams<{ categoryId: string }>();
  const { completedSessions } = useQuizStore();

  const category = CATEGORIES.find(cat => cat.id === categoryId);
  
  if (!category) {
    return <div>カテゴリーが見つかりません</div>;
  }

  const categorySessions = allSessions.filter((session: QuizSession) => session.category === categoryId);
  const completedCategorySessions = categorySessions.filter((session: QuizSession) =>
    completedSessions.includes(session.id)
  );
  const progress = categorySessions.length > 0 ? (completedCategorySessions.length / categorySessions.length) * 100 : 0;


  const handleSessionClick = (sessionId: string) => {
    navigate(`/quiz/${sessionId}`);
  };

  return (
    <div 
      className="min-h-screen py-12"
      style={{
        backgroundImage: `url(${category.backgroundList})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 bg-minecraft-dirt/90 border-4 border-minecraft-dark rounded-xl px-6 py-3 text-white font-bold hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
          ホームに戻る
        </button>

        <div className="bg-minecraft-dirt/95 border-8 border-minecraft-dark rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={category.icon}
              alt={category.name}
              className="w-16 h-16 pixelated"
            />
            <div>
              <h1 className="text-4xl font-bold text-white pixel-font">
                {category.name}
              </h1>
              <p className="text-xl text-gray-300">
                {category.stage}（{category.stageEn}）
              </p>
            </div>
          </div>
          
          <div className="bg-black/40 rounded-xl p-4 border-2 border-white/20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-bold">進捗状況</span>
              <span className="text-white font-bold">
                {completedCategorySessions.length} / {categorySessions.length}
              </span>
            </div>
            <div className="h-4 bg-black/50 rounded-full overflow-hidden border-2 border-minecraft-dark">
              <div
                className="h-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  backgroundColor: category.color,
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorySessions.map((session: QuizSession) => {
            const isCompleted = completedSessions.includes(session.id);
            
            return (
              <button
                key={session.id}
                onClick={() => handleSessionClick(session.id)}
                className="bg-white/90 border-4 border-minecraft-dark rounded-xl p-6 hover:scale-105 transition-all text-left relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  {isCompleted ? (
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  ) : (
                    <Circle className="w-8 h-8 text-gray-400" />
                  )}
                </div>

                <div className="mb-3">
                  <span className="text-sm font-bold text-gray-600 pixel-font">
                    Week {session.week} - Day {session.day}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-minecraft-dark mb-2 pr-12">
                  {session.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>📝 {session.questions.length}問</span>
                  <span>⏱️ {session.duration}分</span>
                </div>

                {isCompleted && (
                  <div className="mt-3 text-sm font-bold text-green-600">
                    ✓ クリア済み
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};