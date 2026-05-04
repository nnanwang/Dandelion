export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F5F2',
        creamDark: '#EFE8DC',
        ink: '#1A1714',
        inkLight: '#4A443D',
        inkFaint: '#7B7064',
        gold: '#C8A96A',
        goldLight: '#E8D4A0',
        goldPale: '#F5EDD8',
        border: '#D8D0C4',
        paper: '#FFFFFF',
        sage: '#2F5D3A',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Noto Serif SC"', '"Songti SC"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Noto Serif SC"', '"Songti SC"', 'Georgia', 'serif'],
        sans: ['Inter', '"Noto Sans SC"', '"PingFang SC"', 'Arial', 'sans-serif'],
        mono: ['"DM Mono"', 'Inter', '"Noto Sans SC"', '"PingFang SC"', 'monospace'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(26, 23, 20, 0.10)',
      },
    },
  },
  plugins: [],
};
