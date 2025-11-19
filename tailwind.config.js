/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        minecraft: {
          grass: '#7CB342',      // 草ブロック
          stone: '#7E7E7E',      // 石
          diamond: '#00D9FF',    // ダイヤモンド
          gold: '#FFAA00',       // 金ブロック
          redstone: '#DC143C',   // レッドストーン
          emerald: '#00FF00',    // エメラルド
          wood: '#8B4513',       // 木
          iron: '#D3D3D3',       // 鉄
          obsidian: '#1A1A2E',   // 黒曜石
          sky: '#87CEEB',        // 空
          dirt: '#8B4513',       // 土
          dark: '#5C3317',       // ダーク
          darker: '#3E2111',     // より暗い
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      boxShadow: {
        'minecraft': '4px 4px 0px 0px rgba(0, 0, 0, 0.4)',
        'minecraft-hover': '6px 6px 0px 0px rgba(0, 0, 0, 0.4)',
        'minecraft-inset': 'inset 2px 2px 0px 0px rgba(0, 0, 0, 0.3)',
      },
      // ← ここから追加
      animation: {
        'zoom': 'zoom 6s ease-out forwards',
        'run-across': 'run-across 10s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'modal-in': 'modal-in 0.3s ease-out',
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'run-across': {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'modal-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      // ← ここまで追加
    },
  },
  plugins: [],
}