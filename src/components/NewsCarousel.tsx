import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
}

const newsItems: NewsItem[] = [
  { id: 1, title: '色彩理論やタイポグラフィを学べます（近日公開）', date: '近日公開' },
  { id: 2, title: 'HTML/CSS/JavaScriptの基礎から学習できます', date: '公開中' },
  { id: 3, title: 'Figmaの実践的な使い方をマスターしましょう', date: '準備中' },
];

export const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border-4 border-minecraft-dark overflow-hidden">
        <div className="relative px-16 py-6">
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 hover:bg-black/10 rounded-full transition-colors z-10"
            aria-label="前へ"
          >
            <ChevronLeft className="w-8 h-8 text-minecraft-dark" />
          </button>

          <div className="text-center px-4">
            <h3 className="text-xl font-bold text-minecraft-dark mb-2">
              {newsItems[currentIndex].title}
            </h3>
            <p className="text-sm text-gray-600">{newsItems[currentIndex].date}</p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-black/10 rounded-full transition-colors z-10"
            aria-label="次へ"
          >
            <ChevronRight className="w-8 h-8 text-minecraft-dark" />
          </button>
        </div>

        <div className="flex justify-center gap-2 pb-4">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-minecraft-dark w-8'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`お知らせ ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};