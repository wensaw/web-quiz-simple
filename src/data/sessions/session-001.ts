import type { QuizSession } from '../types';

export const session001: QuizSession = {
  id: 'session-001',
  week: 8,
  day: 1,
  month: 2,
  category: 'coding',
  title: 'HTML基礎 - 構造とセマンティクス',
  duration: 10,
  difficulty: 'beginner',
  tags: ['HTML', 'セマンティック', '基礎'],
  learningGoals: [
    'HTMLの基本構造を理解する',
    'セマンティックタグの重要性を知る',
    '文書構造を適切に設計できる'
  ],
  questions: [
    {
      id: 'q001-1',
      question: 'HTMLの基本構造で、ページのメタデータを記述するセクションは？',
      options: [
        '<body>',
        '<head>',
        '<html>',
        '<meta>'
      ],
      correctIndex: 1,
      explanation: '<head>セクションには、ページタイトル、文字エンコーディング、CSSリンク、メタディスクリプションなどのメタデータを記述します。<body>は実際に表示されるコンテンツ、<html>は文書全体のルート要素です。SEOやアクセシビリティのために、適切なメタデータ設定が重要です。',
      codeExample: {
        language: 'html',
        code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ページタイトル</title>
</head>
<body>
  <!-- コンテンツ -->
</body>
</html>`
      }
    },
    {
      id: 'q001-2',
      question: '記事のヘッダー部分をマークアップする最も適切なセマンティックタグは？',
      options: [
        '<div class="header">',
        '<header>',
        '<top>',
        '<heading>'
      ],
      correctIndex: 1,
      explanation: '<header>はセクションやページの導入部分を示すセマンティックタグです。ロゴ、ナビゲーション、見出しなどを含めます。<div>よりもHTMLの意味が明確で、スクリーンリーダーやSEOに有利です。HTML5のセマンティックタグを使用することで、文書構造が機械的に理解しやすくなります。'
    },
    {
      id: 'q001-3',
      question: 'ナビゲーションメニューに最適なタグの組み合わせは？',
      options: [
        '<div> + <a>',
        '<nav> + <ul> + <li> + <a>',
        '<menu> + <item>',
        '<navigation> + <link>'
      ],
      correctIndex: 1,
      explanation: '<nav>でナビゲーション領域を定義し、<ul>（順序なしリスト）でメニュー項目を構造化、各<li>にリンク<a>を配置します。この構造はアクセシビリティが高く、スタイリングもしやすいベストプラクティスです。',
      codeExample: {
        language: 'html',
        code: `<nav>
  <ul>
    <li><a href="#home">ホーム</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>`
      }
    },
    {
      id: 'q001-4',
      question: 'ブログ記事の本文をマークアップする際、最も適切なセマンティックタグは？',
      options: [
        '<div>',
        '<section>',
        '<article>',
        '<content>'
      ],
      correctIndex: 2,
      explanation: '<article>は独立した自己完結型のコンテンツ（記事、ブログポスト、ニュース記事など）に使用します。RSSフィードとして配信できるようなコンテンツに最適です。<section>は文書の一般的なセクションを示しますが、<article>ほど明確な独立性はありません。'
    },
    {
      id: 'q001-5',
      question: 'フッター情報（著作権、連絡先など）に使用するタグは？',
      options: [
        '<bottom>',
        '<footer>',
        '<end>',
        '<copyright>'
      ],
      correctIndex: 1,
      explanation: '<footer>はページやセクションのフッター情報を示します。通常、著作権表示、連絡先、関連リンク、サイトマップなどを含めます。ページ全体のフッターだけでなく、<article>や<section>内のフッターとしても使用できます。'
    }
  ]
};
