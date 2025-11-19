import { ASSETS } from '../assets';

const BADGE_TYPES = ['firstStep', 'explorer', 'master', 'perfectionist', 'speedRunner', 'allRounder'] as const;
type BadgeType = typeof BADGE_TYPES[number];

export const isBadgeType = (type: string): type is BadgeType => {
  return BADGE_TYPES.includes(type as BadgeType);
};

interface BadgeProps {
  type: BadgeType;
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = ({ type, size = 'md' }: BadgeProps) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  // バッジタイプからアセットパスを取得
  const badgeImage = ASSETS.badges[type];

  return (
    <img
      src={badgeImage}
      alt={`${type} badge`}
      className={`pixelated ${sizeClasses[size]}`}
      title={type}
    />
  );
};