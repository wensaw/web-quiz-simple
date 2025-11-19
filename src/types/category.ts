import { ASSETS } from '../assets';

export interface CategoryInfo {
  id: string;
  name: string;
  stage: string;
  stageEn: string;
  description: string;
  color: string;
  icon: string;
  totalSessions: number;
  backgroundList: string;
  backgroundQuiz: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'coding',
    name: 'コーディングの道',
    stage: '草原ステージ',
    stageEn: 'Plains Stage',
    description: 'HTML/CSS/JavaScriptを学ぶ',
    color: '#7CBB5F',
    icon: ASSETS.icons.coding,
    totalSessions: 28,
    backgroundList: ASSETS.backgrounds.stages.codingList,
    backgroundQuiz: ASSETS.backgrounds.stages.codingQuiz,
  },
  {
    id: 'design',
    name: 'デザイン理論の道',
    stage: '洞窟ステージ',
    stageEn: 'Cave Stage',
    description: '色彩・タイポグラフィ・UI/UXを学ぶ',
    color: '#7C7C7C',
    icon: ASSETS.icons.design,
    totalSessions: 26,
    backgroundList: ASSETS.backgrounds.stages.designList,
    backgroundQuiz: ASSETS.backgrounds.stages.designQuiz,
  },
  {
    id: 'figma',
    name: 'Figmaの道',
    stage: 'ネザーステージ',
    stageEn: 'Nether Stage',
    description: 'Figmaツールを使いこなす',
    color: '#D4634D',
    icon: ASSETS.icons.figma,
    totalSessions: 24,
    backgroundList: ASSETS.backgrounds.stages.figmaList,
    backgroundQuiz: ASSETS.backgrounds.stages.figmaQuiz,
  },
];