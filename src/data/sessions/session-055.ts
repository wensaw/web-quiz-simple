import type { QuizSession } from '../types';

export const session055: QuizSession = {
  id: 'session-055',
  week: 5,
  day: 1,
  month: 2,
  category: 'figma',
  title: 'Figma入門 - インターフェースと基本操作',
  duration: 10,
  difficulty: 'beginner',
  prerequisites: [],
  tags: ['Figma', '基本操作', 'インターフェース'],
  learningGoals: [
    'Figmaのインターフェースを理解する',
    '基本的な図形とテキストを作成できる',
    'ショートカットキーを活用できる'
  ],
  questions: [
    {
      id: 'q055-1',
      question: 'Figmaで新しいフレームを作成するショートカットキーは？',
      options: [
        'Command/Ctrl + N',
        'Command/Ctrl + F',
        'F（キーボードのF）',
        'Command/Ctrl + Shift + F'
      ],
      correctIndex: 2,
      explanation: 'Figmaでフレームを作成するには、キーボードの「F」キーを押すだけです。その後、キャンバスをドラッグするか、右側のプロパティパネルからプリセットサイズ（iPhone、Desktop など）を選択できます。フレームはデザインの基本単位で、アートボードのような役割を果たします。',
    },
    {
      id: 'q055-2',
      question: 'Figmaの「レイヤー」パネルの役割として正しいものは？',
      options: [
        '色を選択する',
        'オブジェクトの階層構造を管理する',
        'フォントを変更する',
        'プラグインを管理する'
      ],
      correctIndex: 1,
      explanation: 'レイヤーパネル（左側）は、フレーム、グループ、シェイプ、テキストなどのオブジェクトの階層構造を表示・管理します。ドラッグ&ドロップで順序を変更でき、上にあるレイヤーほど前面に表示されます。レイヤーの表示/非表示、ロック/アンロックもここで管理します。',
    },
    {
      id: 'q055-3',
      question: 'Figmaでオブジェクトを複製する最も早い方法は？',
      options: [
        'Command/Ctrl + C → Command/Ctrl + V',
        'Option/Alt + ドラッグ',
        '右クリック → 複製',
        'Command/Ctrl + D',
      ],
      correctIndex: 3,
      explanation: 'Command/Ctrl + D（Duplicate）は、選択したオブジェクトを即座に複製します。複製された要素は、前回の複製時の移動距離を記憶するため、等間隔に配置したい場合に特に便利です。Option/Alt + ドラッグも効果的ですが、キーボードのみで素早く複製できるCmd+Dがより効率的です。',
    },
    {
      id: 'q055-4',
      question: 'Figmaの「Constraints（制約）」の役割は？',
      options: [
        'フレームのサイズを固定する',
        'フレームがリサイズされた時のオブジェクトの挙動を制御する',
        'オブジェクトの色を制限する',
        'テキストの文字数を制限する'
      ],
      correctIndex: 1,
      explanation: 'Constraints（制約）は、親フレームがリサイズされた時に、子要素がどのように振る舞うかを定義します。「Left & Right」を選択すると要素が伸縮し、「Center」を選択すると中央に固定されます。レスポンシブデザインを作成する際に不可欠な機能です。',
    },
    {
      id: 'q055-5',
      question: 'Figmaで全てのオブジェクトを選択するショートカットは？',
      options: [
        'Command/Ctrl + A',
        'Command/Ctrl + Shift + A',
        'Command/Ctrl + E',
        'Shift + クリック'
      ],
      correctIndex: 0,
      explanation: 'Command/Ctrl + A は、現在のフレーム内またはキャンバス上の全てのオブジェクトを選択します。選択を解除するには Escape キーまたはキャンバスの空白部分をクリックします。複数選択には Shift + クリック、または Command/Ctrl + クリックを使用します。',
    }
  ]
};