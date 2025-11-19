import React from 'react';

interface MinecraftImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export const MinecraftImage: React.FC<MinecraftImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText = '🎮',
}) => {
  const [imageError, setImageError] = React.useState(false);

  return imageError ? (
    // 画像がない場合のプレースホルダー
    <div 
      className={`flex items-center justify-center bg-minecraft-stone border-4 border-minecraft-obsidian ${className}`}
      style={{ minHeight: '64px', minWidth: '64px' }}
    >
      <span className="text-2xl">{fallbackText}</span>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
      style={{ imageRendering: 'pixelated' }}
    />
  );
};