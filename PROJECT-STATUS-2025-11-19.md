# Webデザイナー育成クエスト - 現在の状況（2025/11/19）

## 🎯 最新の改修計画

### 完了済み
✅ 基本クイズシステム（6セッション実装済み）
✅ マインクラフト風デザイン全画面
✅ カテゴリー別データ構造設計完了
✅ 画像フォルダ構造準備完了

### 今実装中
🔄 ホーム画面の大改修
- メインビジュアル（全画面）
- 村人走行アニメーション
- 背景スライドショー
- カテゴリー選択画面

---

## 📁 プロジェクト構造
```
web-quiz-simple/
├── src/
│   ├── types/
│   │   └── category.ts          ← ✅ 新規作成済み
│   ├── components/
│   │   ├── Home.tsx             ← 🔄 改修予定
│   │   ├── Quiz.tsx             ← ✅ 完成
│   │   ├── Result.tsx           ← ✅ 完成
│   │   ├── MinecraftImage.tsx   ← ✅ 完成
│   │   ├── CategoryIcon.tsx     ← ✅ 完成
│   │   ├── StatusIcon.tsx       ← ✅ 完成
│   │   └── Badge.tsx            ← ✅ 完成
│   ├── store/
│   │   └── quizStore.ts         ← ✅ 完成
│   ├── data/
│   │   ├── types.ts
│   │   ├── index.ts
│   │   └── sessions/
│   │       ├── session-001.ts   ← ✅ 実装済み
│   │       ├── session-002.ts   ← ✅ 実装済み
│   │       └── session-003.ts   ← ✅ 実装済み
│   ├── assets.ts                ← ✅ 完成
│   ├── App.tsx                  ← ✅ 完成
│   └── main.tsx
└── public/
    └── images/
        ├── hero/                ← ✅ フォルダ作成済み
        │   ├── title-logo.png   ← 配置待ち
        │   └── villager-run-*.png (1-4) ← 作成待ち
        ├── backgrounds/         ← ✅ フォルダ作成済み
        │   ├── bg-main.png      ← ✅ 配置済み
        │   └── stage-*.png (6枚) ← 作成待ち
        ├── icons/               ← ✅ 完成
        └── badges/              ← ✅ 完成
```

---

## 🎨 必要な画像リスト

### 作成必要（nano banana）

**村人走行（4枚）**
```
villager-run-1.png (128×128px)
villager-run-2.png (128×128px)
villager-run-3.png (128×128px)
villager-run-4.png (128×128px)

プロンプト：
マインクラフト風村人キャラクター走行アニメーション、4フレーム、
メガネと茶色のローブを着た先生キャラ、右向きに走る横顔、
ピクセルアートスタイル、ブロック状3D、等角投影図、
フレーム1: 右足前、フレーム2: 両足中央、
フレーム3: 左足前、フレーム4: 両足中央（逆）、
シームレスループアニメ、透明背景、各128×128px
```

**ステージ背景（6枚）**
```
stage-coding-list.png  (1920×1080px) - 草原・セッション一覧
stage-coding-quiz.png  (1920×1080px) - 草原・クイズ画面
stage-design-list.png  (1920×1080px) - 洞窟・セッション一覧
stage-design-quiz.png  (1920×1080px) - 洞窟・クイズ画面
stage-figma-list.png   (1920×1080px) - ネザー・セッション一覧
stage-figma-quiz.png   (1920×1080px) - ネザー・クイズ画面

詳細プロンプトは前のチャット参照
```

---

## 🎯 ホーム画面改修の詳細仕様

### メインビジュアル（全画面）
- タイトルロゴ：上部中央配置
- 村人走行アニメーション：
  - 4枚PNG切り替え + CSS移動
  - 画面を左→右へ10秒で横断
  - 0.4秒で1ループ（4フレーム）
  - クリックでモーダル表示
- 下矢印：バウンドアニメーション（CSSのみ）
- キラキラ：なし（削除）

### モーダル内容
```
🏠 ようこそ Web Designer Training Quest へ

このクエストシステムは、実務で活躍できる
Webデザイナーを育成するための学習プラットフォームです。

【3つの修行の道】

🌱 コーディングの道（草原）
   HTML、CSS、JavaScriptの基礎から応用まで...

⛏️ デザイン理論の道（洞窟）
   色彩理論、タイポグラフィ、UI/UX...

🔥 Figmaの道（ネザー）
   最新デザインツールFigmaの基本操作から...

[クエストを開始する]
```

### 背景スライドショー
- 3枚の背景（草原、洞窟、ネザー）
- 6秒ごとに切り替え
- ゆっくりズームイン（scale: 1.0 → 1.1）
- フェード切り替え

### ステータスエリア（縮小版）
- 冒険の進捗：コンパクト表示
- 獲得バッジ：小さく表示

### お知らせエリア（新規）
- 横スクロールカルーセル
- 4件のお知らせ
- 固定コンテンツ

### カテゴリー選択
```
┌────────┬────────┬────────┐
│ 🌱     │ ⛏️     │ 🔥     │
│コーディ │デザイン│ Figma  │
│ング    │理論    │        │
│草原    │洞窟    │ネザー  │
│6/28    │0/26    │0/24    │
└────────┴────────┴────────┘
```

---

## 📊 データ構造

### src/types/category.ts
```typescript
export interface CategoryInfo {
  id: 'coding' | 'design' | 'figma';
  name: string;
  nameEn: string;
  stage: string;
  stageEn: string;
  description: string;
  color: string;
  icon: string;
  backgroundList: string;
  backgroundQuiz: string;
  totalSessions: number;
  order: number;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'coding',
    name: 'コーディング',
    stage: '草原',
    color: '#7CB342',
    totalSessions: 28,
    ...
  },
  {
    id: 'design',
    name: 'デザイン理論',
    stage: '洞窟',
    color: '#7E7E7E',
    totalSessions: 26,
    ...
  },
  {
    id: 'figma',
    name: 'Figma',
    stage: 'ネザー',
    color: '#DC143C',
    totalSessions: 24,
    ...
  },
];
```

---

## 🎯 次のタスク

### 優先度：高
1. **画像作成・配置**
   - 村人走行4枚
   - ステージ背景6枚
   - タイトルロゴ配置

2. **ホーム画面実装**
   - メインビジュアルコンポーネント
   - 村人走行アニメーション
   - 背景スライドショー
   - モーダル実装
   - カテゴリー選択カード

3. **カテゴリー別画面**
   - セッション一覧画面（新規）
   - ステージ背景適用

### 優先度：中
4. お知らせカルーセル実装
5. ステータスエリア縮小

---

## 🚀 実装メモ

### 村人アニメーション実装
```css
.villager {
  animation: 
    run-across 10s linear infinite,
    sprite-animation 0.4s steps(4) infinite;
}
```

### 背景スライドショー
```css
@keyframes zoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}
```

---

## 📝 重要な決定事項

- ✅ 初期リリースは3カテゴリー（コーディング、デザイン、Figma）
- ✅ 将来9個以上に拡張可能な設計
- ✅ 未解放カテゴリーは非表示
- ✅ セッション一覧に週・日表示なし
- ✅ カテゴリークリック→セッション一覧→クイズの流れ

---

## 💬 次のチャットで聞くべきこと

「前回のチャットでホーム画面改修の途中でした。
画像配置とメインビジュアル実装から再開したいです。」