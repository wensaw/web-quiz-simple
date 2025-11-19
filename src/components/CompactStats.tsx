import { Badge, isBadgeType } from './Badge';

interface CompactStatsProps {
  totalSessions: number;
  completedSessions: number;
  badges: string[];
}

export const CompactStats = ({ 
  totalSessions, 
  completedSessions, 
  badges 
}: CompactStatsProps) => {
  const progress = Math.round((completedSessions / totalSessions) * 100);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* 冒険の進捗 */}
        <div className="bg-minecraft-dirt border-4 border-minecraft-dark rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 pixel-font flex items-center gap-2">
            🗺️ 冒険の進捗
          </h3>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>全体進捗</span>
                <span className="font-bold text-yellow-400">{progress}%</span>
              </div>
              <div className="h-4 bg-black/50 rounded-full overflow-hidden border-2 border-minecraft-dark">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-yellow-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center text-white">
              <span className="text-gray-300">完了セッション</span>
              <span className="text-2xl font-bold pixel-font">
                {completedSessions} / {totalSessions}
              </span>
            </div>
          </div>
        </div>

        {/* 獲得バッジ */}
        <div className="bg-minecraft-dirt border-4 border-minecraft-dark rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 pixel-font flex items-center gap-2">
            🏆 獲得バッジ
          </h3>
          
          {badges.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {badges.filter(isBadgeType).map((badgeType) => (
                <Badge 
                  key={badgeType} 
                  type={badgeType} 
                  size="sm" 
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-4">
              まだバッジを獲得していません
              <br />
              <span className="text-sm">クエストをクリアしてバッジを集めよう！</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};