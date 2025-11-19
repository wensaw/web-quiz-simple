import type { CategoryInfo } from '../types/category';
import { CategoryIcon, isCategoryIconType } from './CategoryIcon';
import { ASSETS } from '../assets';

interface CategoryCardProps {
  category: CategoryInfo;
  completedSessions: number;
  onClick: () => void;
}

export const CategoryCard = ({ 
  category, 
  completedSessions, 
  onClick 
}: CategoryCardProps) => {
  const progress = Math.round((completedSessions / category.totalSessions) * 100);

  return (
    <button
      onClick={onClick}
      className="group relative border-8 border-minecraft-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl w-full overflow-hidden"
      style={{
        borderColor: category.color,
        backgroundImage: `url(${ASSETS.backgrounds.card})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 半透明オーバーレイ */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{ backgroundColor: category.color }}
      />
      
      {/* テクスチャオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      
      {/* コンテンツ */}
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
         {isCategoryIconType(category.id) && (
           <CategoryIcon category={category.id} size="lg" />
         )}
        </div>

        <h3 className="text-2xl font-bold text-white mb-1 pixel-font">
          {category.name}
        </h3>

        <p className="text-sm text-gray-300 mb-3">
          {category.stage}（{category.stageEn}）
        </p>

        <div className="mb-2">
          <div className="flex justify-between text-sm text-gray-300 mb-1">
            <span>進捗</span>
            <span className="font-bold">{progress}%</span>
          </div>
          <div className="h-3 bg-black/50 rounded-full overflow-hidden border-2 border-minecraft-dark">
            <div
              className="h-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                backgroundColor: category.color,
              }}
            />
          </div>
        </div>

        <p className="text-white font-bold">
          {completedSessions} / {category.totalSessions} セッション
        </p>
      </div>

      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
        style={{ backgroundColor: category.color }}
      />
    </button>
  );
};