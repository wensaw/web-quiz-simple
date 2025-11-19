import type { QuizSession } from '../types';

export const session002: QuizSession = {
  id: 'session-002',
  week: 8,
  day: 2,
  month: 2,
  category: 'coding',
  title: 'CSSセレクタとプロパティ',
  duration: 10,
  difficulty: 'beginner',
  tags: ['CSS', 'セレクタ', 'ボックスモデル'],
  learningGoals: [
    'CSSの基本的なセレクタを使える',
    'ボックスモデルを理解する',
    '色とタイポグラフィを制御できる'
  ],
  questions: [
    {
      id: 'q002-1',
      question: 'すべての<p>タグのテキスト色を赤にするCSSは？',
      options: [
        'p { color: red; }',
        '.p { color: red; }',
        '#p { color: red; }',
        '<p color="red">'
      ],
      correctIndex: 0,
      explanation: '要素セレクタ（タグ名）を使用して、そのタグすべてにスタイルを適用します。.はクラスセレクタ、#はIDセレクタです。HTML属性でのスタイル指定（D）は非推奨で、CSSファイルで管理するのがベストプラクティスです。',
      codeExample: {
        language: 'css',
        code: `p {
  color: red;
  font-size: 16px;
}`
      }
    },
    {
      id: 'q002-2',
      question: 'CSSのボックスモデルで、コンテンツと境界線の間のスペースは？',
      options: [
        'margin',
        'padding',
        'border',
        'spacing'
      ],
      correctIndex: 1,
      explanation: 'CSSボックスモデルは、内側から順に：content（コンテンツ）→ padding（内側の余白）→ border（境界線）→ margin（外側の余白）で構成されます。paddingは背景色の範囲内、marginは要素間の距離です。'
    },
    {
      id: 'q002-3',
      question: 'クラス名が"button"の要素にスタイルを適用するセレクタは？',
      options: [
        'button { }',
        '.button { }',
        '#button { }',
        '<button> { }'
      ],
      correctIndex: 1,
      explanation: 'クラスセレクタは.（ドット）を使用します。クラスは複数の要素に同じスタイルを適用する際に使用し、再利用性が高いのが特徴です。IDセレクタ（#）はページ内で一意の要素に使用します。',
      codeExample: {
        language: 'css',
        code: `.button {
  background-color: #6750A4;
  color: white;
  padding: 12px 24px;
  border-radius: 20px;
}`
      }
    },
    {
      id: 'q002-4',
      question: '要素の幅を200pxに設定するプロパティは？',
      options: [
        'size: 200px;',
        'width: 200px;',
        'length: 200px;',
        'dimension: 200px;'
      ],
      correctIndex: 1,
      explanation: 'widthプロパティで要素の幅を指定します。単位にはpx（ピクセル）、%（パーセント）、em、rem、vw（ビューポート幅）などが使用できます。レスポンシブデザインでは相対単位（%、vw）の使用が推奨されます。'
    },
    {
      id: 'q002-5',
      question: '複数のクラスを持つ要素に対して、より具体的なスタイルを適用する方法は？',
      options: [
        '.class1 .class2 { } （子孫セレクタ）',
        '.class1.class2 { } （複数クラス）',
        '.class1, .class2 { } （グループセレクタ）',
        '.class1 + .class2 { } （隣接セレクタ）'
      ],
      correctIndex: 1,
      explanation: '.class1.class2（スペースなし）は、両方のクラスを持つ要素を選択します。.class1 .class2（スペースあり）はclass1の子孫にあるclass2要素を選択します。用途に応じて使い分けが重要です。',
      codeExample: {
        language: 'css',
        code: `/* 両方のクラスを持つ要素 */
.button.primary {
  background-color: #6750A4;
}

/* button内のicon */
.button .icon {
  margin-right: 8px;
}`
      }
    }
  ]
};
