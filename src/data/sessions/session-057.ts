import type { QuizSession } from '../types';

export const session057: QuizSession = {
  id: 'session-057',
  week: 6,
  day: 1,
  month: 2,
  category: 'figma',
  title: 'コンポーネントとバリアント',
  duration: 10,
  difficulty: 'intermediate',
  prerequisites: ['session-056'],
  tags: ['Figma', 'コンポーネント', 'バリアント', '再利用'],
  learningGoals: [
    'コンポーネントの作成と管理ができる',
    'バリアントを使った効率的なデザインができる',
    'コンポーネントライブラリの基礎を理解する'
  ],
  questions: [
    {
      id: 'q057-1',
      question: 'Figmaでコンポーネントを作成するショートカットは？',
      options: [
        'Command/Ctrl + K',
        'Command/Ctrl + Option/Alt + K',
        'Command/Ctrl + Shift + K',
        'C'
      ],
      correctIndex: 1,
      explanation: 'Command/Ctrl + Option/Alt + K でコンポーネントを作成できます。選択した要素がマスターコンポーネント（紫のアイコン）になり、再利用可能になります。Option/Alt + ドラッグでインスタンスを複製でき、マスターを変更すると全てのインスタンスに反映されます。',
      references: []
    },
    {
      id: 'q057-2',
      question: 'コンポーネントの「インスタンス」とは何か？',
      options: [
        'マスターコンポーネントのコピー',
        'マスターコンポーネントへのリンク',
        '独立した別のコンポーネント',
        '削除されたコンポーネント'
      ],
      correctIndex: 1,
      explanation: 'インスタンスは、マスターコンポーネントへのリンクです。マスターを変更すると全てのインスタンスに反映されますが、個別のインスタンスで一部のプロパティ（色、テキストなど）をオーバーライド（上書き）することもできます。右クリック→「Detach instance」でリンクを解除できます。',
      references: []
    },
    {
      id: 'q057-3',
      question: 'バリアント（Variants）の主な用途は？',
      options: [
        '異なる状態やサイズのコンポーネントを一つにまとめる',
        'コンポーネントを複製する',
        'コンポーネントを削除する',
        'コンポーネントをロックする'
      ],
      correctIndex: 0,
      explanation: 'バリアントは、ボタンの状態（Default、Hover、Active、Disabled）やサイズ（Small、Medium、Large）など、関連するコンポーネントのバリエーションを一つのコンポーネントセットにまとめる機能です。インスタンスのプロパティパネルから簡単に切り替えられ、デザインシステムに不可欠です。',
      references: []
    },
    {
      id: 'q057-4',
      question: 'コンポーネントをネストする利点は？',
      options: [
        'ファイルサイズが小さくなる',
        'より複雑で再利用可能なコンポーネントを作成できる',
        'アニメーションが追加される',
        '自動的にバリアントが作成される'
      ],
      correctIndex: 1,
      explanation: 'コンポーネントのネスト（入れ子）により、アイコン+テキストのボタン、アバター+名前のユーザーカードなど、複雑なUIコンポーネントを作成できます。内部のコンポーネントを変更すると、それを使用している全ての親コンポーネントに反映されます。Atomic Designの考え方に基づいています。',
      references: []
    },
    {
      id: 'q057-5',
      question: 'コンポーネントライブラリの説明として正しいものは？',
      options: [
        'Figmaの公式テンプレート集',
        '再利用可能なコンポーネントをまとめたファイル',
        'プラグインのコレクション',
        '画像素材の保存場所'
      ],
      correctIndex: 1,
      explanation: 'コンポーネントライブラリは、ボタン、フォーム、カード、ナビゲーションなど、再利用可能なUIコンポーネントをまとめたFigmaファイルです。チーム全体で共有し、一貫したデザインシステムを構築できます。Material Design、iOS、Ant Designなどの公式ライブラリも利用可能です。',
      references: [
        {
          title: 'Figma Community - Design Systems',
          url: 'https://www.figma.com/community/design_systems'
        }
      ]
    }
  ]
};