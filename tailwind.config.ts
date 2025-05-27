import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Noto Sans KR"', 'Arial', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        primary: '#1e40af', // 예: 진한 파랑
        secondary: '#64748b', // 예: 회청색
        accent: '#f97316', // 예: 주황
      },
    },
  },
  plugins: [
    typography,
  ],
}

export default config
