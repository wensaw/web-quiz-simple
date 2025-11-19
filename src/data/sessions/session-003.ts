import type { QuizSession } from '../types';

export const session003: QuizSession = {
  id: 'session-003',
  week: 8,
  day: 3,
  month: 2,
  category: 'coding',
  title: 'CSSレイアウト基礎',
  duration: 10,
  difficulty: 'beginner',
  tags: ['CSS', 'レイアウト', 'display', 'position'],
  learningGoals: [
    'displayプロパティの種類を理解する',
    'positionでの配置方法を習得する',
    '基本的なレイアウトを組める'
  ],
  questions: [
    {
      id: 'q003-1',
      question: '要素を横並びにするdisplayプロパティの値は？',
      options: [
        'display: block;',
        'display: inline;',
        'display: flex;',
        'display: vertical;'
      ],
      correctIndex: 2,
      explanation: 'display: flex;を使用すると、子要素が横並び（デフォルト）になるFlexboxレイアウトが有効になります。blockは縦積み、inlineは横並びですが幅・高さが指定できません。Flexboxは現代的なレイアウト手法で、柔軟な配置が可能です。',
      codeExample: {
        language: 'css',
        code: `.container {
  display: flex;
  gap: 16px; /* 要素間の間隔 */
}`
      }
    },
    {
      id: 'q003-2',
      question: '要素をページの右上に固定配置する際に使用するpositionの値は？',
      options: [
        'position: static;',
        'position: relative;',
        'position: absolute;',
        'position: fixed;'
      ],
      correctIndex: 3,
      explanation: 'position: fixed;は、スクロールしても位置が固定される配置方法です。ヘッダーや「トップへ戻る」ボタンなどに使用します。absoluteは親要素を基準とした絶対配置、relativeは元の位置を基準とした相対配置です。',
      codeExample: {
        language: 'css',
        code: `.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* スクロールしても右下に固定 */
}`
      }
    },
    {
      id: 'q003-3',
      question: '要素を中央寄せにする古典的な方法は？',
      options: [
        'text-align: center;',
        'margin: 0 auto;',
        'center: true;',
        'align: center;'
      ],
      correctIndex: 1,
      explanation: 'margin: 0 auto;は、左右のマージンを自動調整してブロック要素を水平中央配置します（要素に幅の指定が必要）。text-align: center;はインライン要素やテキストの中央揃えに使用します。現代ではFlexboxやGridを使う方が簡単です。',
      codeExample: {
        language: 'css',
        code: `.container {
  width: 800px;
  margin: 0 auto; /* 左右中央 */
}`
      }
    },
    {
      id: 'q003-4',
      question: 'z-indexプロパティの説明として正しいものは？',
      options: [
        '要素の横幅を設定する',
        '要素の重なり順序を制御する',
        '要素のズーム率を設定する',
        '要素のアニメーション速度を設定する'
      ],
      correctIndex: 1,
      explanation: 'z-indexは要素の重なり順序（奥行き）を制御します。値が大きいほど手前に表示されます。positionがstatic以外（relative、absolute、fixedなど）の要素にのみ有効です。モーダルやドロップダウンメニューで重要です。',
      codeExample: {
        language: 'css',
        code: `.modal {
  position: fixed;
  z-index: 1000; /* 最前面に表示 */
}

.overlay {
  position: fixed;
  z-index: 999; /* モーダルの背後 */
}`
      }
    },
    {
      id: 'q003-5',
      question: '要素を親要素の右下隅に配置するには？',
      options: [
        'position: absolute; bottom: 0; right: 0;',
        'position: fixed; bottom: 0; right: 0;',
        'float: right; bottom: 0;',
        'align: bottom-right;'
      ],
      correctIndex: 0,
      explanation: '親要素にposition: relative;を指定し、子要素にposition: absolute;とbottom: 0; right: 0;を指定します。absoluteは最も近い位置指定された祖先要素を基準に配置されます。fixedはビューポート基準なので、親要素の右下ではなく画面の右下になります。',
      codeExample: {
        language: 'css',
        code: `.parent {
  position: relative; /* 基準点 */
}

.badge {
  position: absolute;
  bottom: 0;
  right: 0;
  /* 親要素の右下 */
}`
      }
    }
  ]
};
