import { ASSETS } from '../assets';

const CATEGORY_ICON_TYPES = ['coding', 'design', 'figma'] as const;
type CategoryIconType = typeof CATEGORY_ICON_TYPES[number];

export const isCategoryIconType = (type: string): type is CategoryIconType => {
  return CATEGORY_ICON_TYPES.includes(type as CategoryIconType);
};

interface CategoryIconProps {
  category: CategoryIconType;
  size?: 'sm' | 'md' | 'lg';
}

export const CategoryIcon = ({ category, size = 'md' }: CategoryIconProps) => {
  const iconSrc = ASSETS.icons[category];
  // サイズクラスを定義
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <img
      src={iconSrc}
      alt={category}
      className={`pixelated ${sizeClasses[size]}`}
    />
  );
};