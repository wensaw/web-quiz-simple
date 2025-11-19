import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';
import { CATEGORIES } from '../types/category';
import { allSessions, type QuizSession } from '../data/index';
import { HeroSection } from './HeroSection';
import { CompactStats } from './CompactStats';
import { CategoryCard } from './CategoryCard';

export const Home = () => {
  const navigate = useNavigate();
  const { completedSessions, badges } = useQuizStore();
  const contentRef = useRef<HTMLDivElement>(null);

  const getCompletedSessionsByCategory = (categoryId: string) => {
    return completedSessions.filter(completedId => {
      const session = allSessions.find((s: QuizSession) => s.id === completedId);
      return session?.category === categoryId;
    }).length;
  };

  const totalSessions = allSessions.length;
  const totalCompleted = completedSessions.length;

  const handleScrollDown = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryId: string) => {
  navigate(`/sessions/${categoryId}`);
};

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 z-0">
        <HeroSection onScrollDown={handleScrollDown} />
      </div>

      <div className="relative z-10" style={{ marginTop: '100vh' }}>
        <div 
          ref={contentRef} 
          className="py-12 space-y-12"
          style={{
            backgroundImage: 'url(/images/backgrounds/bg-map.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <CompactStats
            totalSessions={totalSessions}
            completedSessions={totalCompleted}
            badges={badges}
          />

          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="inline-block bg-minecraft-dirt/95 border-4 border-minecraft-dark rounded-xl px-8 py-4 mb-6 shadow-lg">
              <h2 className="text-3xl font-bold text-white pixel-font flex items-center gap-2">
                🗺️ ステージを選ぶ
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {CATEGORIES.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  completedSessions={getCompletedSessionsByCategory(category.id)}
                  onClick={() => handleCategoryClick(category.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <footer className="bg-minecraft-dark/90 border-t-4 border-minecraft-darker py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-300 text-sm pixel-font">
              © 2024 Web Designer Training Quest. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Powered by React + TypeScript + Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;