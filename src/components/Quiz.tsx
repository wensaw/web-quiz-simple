import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';
import { allSessions, type QuizSession } from '../data/index';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../types/category';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Quiz = () => {
  const navigate = useNavigate();
  const { sessionId } = useParams<{ sessionId: string }>();
  const { setCurrentSession } = useQuizStore();

  const session = allSessions.find((s: QuizSession) => s.id === sessionId);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<{ questionId: string; selectedIndex: number; isCorrect: boolean }[]>([]);

  useEffect(() => {
    if (session) {
      setCurrentSession(session.id);
    }
  }, [session, sessionId, setCurrentSession]);

  if (!session) {
    return <div>セッションが見つかりません</div>;
  }

  const currentQuestion = session.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === session.questions.length - 1;

  const categoryInfo = CATEGORIES.find(c => c.id === session.category);
  const backgroundUrl = session.backgroundQuiz || categoryInfo?.backgroundQuiz || '/images/backgrounds/stage-coding-quiz.png';

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    const isCorrect = index === currentQuestion.correctIndex;
    setAnswers([...answers, {
      questionId: currentQuestion.id,
      selectedIndex: index,
      isCorrect
    }]);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      navigate('/result', { 
        state: { 
          sessionId: session.id,
          answers,
          totalQuestions: session.questions.length 
        } 
      });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  return (
    <div 
      className="min-h-screen py-12"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate(`/sessions/${session.category}`)}
          className="mb-6 flex items-center gap-2 bg-minecraft-dirt/90 border-4 border-minecraft-dark rounded-xl px-6 py-3 text-white font-bold hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
          戻る
        </button>

        <div className="bg-white/95 border-8 border-minecraft-dark rounded-2xl p-8 shadow-2xl">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-minecraft-dark pixel-font">
                {session.title}
              </h2>
              <span className="text-lg font-bold text-gray-600">
                問題 {currentQuestionIndex + 1} / {session.questions.length}
              </span>
            </div>

            <div className="h-3 bg-gray-200 rounded-full overflow-hidden border-2 border-minecraft-dark">
              <div
                className="h-full bg-green-600 transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / session.questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xl font-bold text-minecraft-dark mb-6 leading-relaxed">
              {currentQuestion.question}
            </p>

            <div className="space-y-3">
              {currentQuestion.options.map((option: string, index: number) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctIndex;
                const showResult = showExplanation;

                let bgColor = 'bg-gray-100';
                let borderColor = 'border-gray-400';
                let textColor = 'text-minecraft-dark';

                if (showResult && isCorrect) {
                  bgColor = 'bg-green-100';
                  borderColor = 'border-green-600';
                }
                if (showResult && isSelected && !isCorrect) {
                  bgColor = 'bg-red-100';
                  borderColor = 'border-red-600';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full p-4 rounded-xl border-4 ${bgColor} ${borderColor} ${textColor} font-bold text-left transition-all hover:scale-102 disabled:cursor-not-allowed`}
                  >
                    <span className="mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {showExplanation && (
            <div className="bg-blue-50 border-4 border-blue-400 rounded-xl p-6 mb-6 animate-modal-in">
              <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                💡 解説
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                {currentQuestion.explanation}
              </p>

              {currentQuestion.codeExample && (
                <div className="mt-4">
                  <p className="text-sm font-bold text-gray-700 mb-2">
                    {currentQuestion.codeExample.description}
                  </p>
                  <SyntaxHighlighter
                    language={currentQuestion.codeExample.language}
                    style={vscDarkPlus}
                    className="rounded-lg text-sm"
                  >
                    {currentQuestion.codeExample.code}
                  </SyntaxHighlighter>
                </div>
              )}

              <button
                onClick={handleNext}
                className="mt-6 w-full bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-4 px-6 rounded-xl border-4 border-yellow-800 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                {isLastQuestion ? '結果を見る' : '次の問題へ'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;