import type { QuizSession } from '../types';

export const session056: QuizSession = {
  id: 'session-056',
  week: 5,
  day: 2,
  month: 2,
  category: 'figma',
  title: 'プロパティとスタイル',
  duration: 10,
  difficulty: 'beginner',
  prerequisites: ['session-055'],
  tags: ['Figma', 'プロパティ', 'スタイル', 'Auto Layout'],
  learningGoals: [
    'Fill、Stroke、Effectsを使いこなせる',
    'Auto Layoutの基礎を理解する',
    'カラースタイルとテキストスタイルを作成できる'
  ],
  questions: [
    {
      id: 'q056-1',
      question: 'Figmaで塗り（Fill）を追加する方法として正しいものは？',
      options: [
        'プロパティパネルの Fill セクションで + をクリック',
        'Command/Ctrl + F',
        'ツールバーのペイントアイコンをクリック',
        '自動的に追加される'
      ],
      correctIndex: 0,
      explanation: 'Fillは、右側のプロパティパネルの Fill セクションで追加・編集します。複数のFillを重ねることができ、グラデーション、画像、単色から選択できます。Fillの順序を変更することで、重なり方を調整できます。',
      references: []
    },
    {
      id: 'q056-2',
      question: 'Auto Layoutの主な利点は？',
      options: [
        '要素を自動的に色付けする',
        '要素を追加・削除した時に自動的にレイアウトを調整する',
        'テキストを自動翻訳する',
        '画像を自動的に最適化する'
      ],
      correctIndex: 1,
      explanation: 'Auto Layout（Shift + A）は、要素の追加・削除・サイズ変更に応じて、自動的にレイアウトを調整する強力な機能です。ボタン、ナビゲーション、カードなどのレスポンシブなコンポーネント作成に不可欠です。Direction（方向）、Spacing（間隔）、Padding（内側余白）を設定できます。',
      references: []
    },
    {
      id: 'q056-3',
      question: 'カラースタイルを作成する理由として最も適切なものは？',
      options: [
        '色を保存してプロジェクト全体で再利用できる',
        'ファイルサイズを小さくする',
        'アニメーションを追加できる',
        '自動的に配色を提案してくれる'
      ],
      correctIndex: 0,
      explanation: 'カラースタイルを作成すると、ブランドカラーをプロジェクト全体で一貫して使用でき、後から一括変更も可能です。プロパティパネルのFillの横にある4つの点のアイコンから作成できます。デザインシステムの基本となる重要な機能です。',
      references: []
    },
    {
      id: 'q056-4',
      question: 'Effectsで追加できるものとして正しくないものは？',
      options: [
        'ドロップシャドウ',
        'インナーシャドウ',
        'ブラー（ぼかし）',
        'グラデーション'
      ],
      correctIndex: 3,
      explanation: 'Effectsでは、ドロップシャドウ、インナーシャドウ、レイヤーブラー、背景ブラーの4種類を追加できます。グラデーションはFillまたはStrokeで設定します。Effectsは複数追加でき、それぞれの不透明度や位置を細かく調整できます。',
      references: []
    },
    {
      id: 'q056-5',
      question: 'Auto Layoutで要素を中央揃えにする方法は？',
      options: [
        'Direction を Center に設定',
        'Alignment を Center に設定',
        'Command/Ctrl + Option/Alt + C',
        'Padding を均等にする'
      ],
      correctIndex: 1,
      explanation: 'Auto Layoutの Alignment（配置）設定で、Main Axis（主軸）と Cross Axis（交差軸）の両方を Center に設定すると、要素を完全に中央揃えできます。Top/Bottom、Left/Right なども選択でき、Flexboxと似た概念です。',
      references: []
    }
  ]
};