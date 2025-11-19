import React from 'react';
import { MinecraftImage } from './MinecraftImage';
import { ASSETS } from '../assets';

interface StatusIconProps {
  status: 'correct' | 'wrong' | 'unanswered' | 'completed';
  size?: 'sm' | 'md';
}

const FALLBACK_EMOJIS = {
  correct: '💎',
  wrong: '💥',
  unanswered: '📦',
  completed: '✨',
} as const;

const SIZE_CLASSES = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
} as const;

export const StatusIcon: React.FC<StatusIconProps> = ({
  status,
  size = 'md',
}) => {
  return (
    <MinecraftImage
      src={ASSETS.statusIcons[status]}
      alt={status}
      className={SIZE_CLASSES[size]}
      fallbackText={FALLBACK_EMOJIS[status]}
    />
  );
};