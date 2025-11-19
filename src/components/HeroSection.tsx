import { useState, useEffect } from 'react';
import { ASSETS } from '../assets';
import { NewsCarousel } from './NewsCarousel';

interface HeroSectionProps {
  onScrollDown: () => void;
}

export const HeroSection = ({ onScrollDown }: HeroSectionProps) => {
  const [currentBg, setCurrentBg] = useState(0);
  const [villagerFrame, setVillagerFrame] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const backgrounds = [
    ASSETS.backgrounds.stages.codingList,
    ASSETS.backgrounds.stages.designList,
    ASSETS.backgrounds.stages.figmaList,
  ];

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);

    return () => clearInterval(bgInterval);
  }, [backgrounds.length]);

  useEffect(() => {
    const spriteInterval = setInterval(() => {
      setVillagerFrame((prev) => (prev + 1) % 4);
    }, 100);

    return () => clearInterval(spriteInterval);
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {backgrounds.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBg ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center ${
                  index === currentBg ? 'animate-zoom' : ''
                }`}
                style={{ 
                  backgroundImage: `url(${bg})`
                }}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={ASSETS.hero.titleLogo}
              alt="Web Designer Training Quest"
              className="w-full max-w-3xl px-8 animate-float"
            />
          </div>

          <div className="pb-24 px-4">
            <NewsCarousel />
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="absolute bottom-64 left-0 animate-run-across cursor-pointer hover:scale-110 transition-transform z-20"
          >
            <img
              src={ASSETS.hero.villagerRun[villagerFrame]}
              alt="村人"
              className="w-32 h-32 pixelated"
            />
          </button>

          <button
            onClick={onScrollDown}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          >
            <svg
              className="w-12 h-12 text-white drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </section>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-minecraft-dirt border-8 border-minecraft-dark rounded-2xl max-w-2xl w-full p-8 relative animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-yellow-400 text-2xl font-bold"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold text-center mb-4 text-white pixel-font">
              🏠 ようこそ Web Designer Training Quest へ
            </h2>

            <div className="text-white space-y-4 text-base leading-relaxed">
              <p className="text-center text-yellow-300 font-bold">
                このクエストシステムは、実務で活躍できる
                <br />
                Webデザイナーを育成するための学習プラットフォームです。
              </p>

              <div className="space-y-4 mt-6">
                <div className="bg-black/40 p-4 rounded-lg border-2 border-green-600">
                  <h3 className="text-xl font-bold mb-2 text-green-400 flex items-center gap-2">
                    🌱 コーディングの道（草原）
                  </h3>
                  <p className="text-gray-200 text-sm">
                    HTML、CSS、JavaScriptの基礎から応用まで。
                    実際にWebサイトを作れるスキルを習得します。
                  </p>
                </div>

                <div className="bg-black/40 p-4 rounded-lg border-2 border-gray-500">
                  <h3 className="text-xl font-bold mb-2 text-gray-300 flex items-center gap-2">
                    ⛏️ デザイン理論の道（洞窟）
                  </h3>
                  <p className="text-gray-200 text-sm">
                    色彩理論、タイポグラフィ、UI/UXデザインの原則。
                    美しく使いやすいデザインの基礎を学びます。
                  </p>
                </div>

                <div className="bg-black/40 p-4 rounded-lg border-2 border-red-600">
                  <h3 className="text-xl font-bold mb-2 text-red-400 flex items-center gap-2">
                    🔥 Figmaの道（ネザー）
                  </h3>
                  <p className="text-gray-200 text-sm">
                    最新デザインツールFigmaの基本操作から実践的な活用法。
                    プロのワークフローを体験します。
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-6 bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-xl text-lg pixel-font border-4 border-yellow-800 shadow-lg transition-all hover:scale-105"
              >
                クエストを開始する
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;