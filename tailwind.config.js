/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#0a0a0c',
          900: '#0c0c0f',
          850: '#0f1012',
          800: '#131316',
          700: '#1a1a1f',
          600: '#222228',
          500: '#2e2e36',
          400: '#3a3a44',
        },
        accent: {
          DEFAULT: '#4ade80',
          dim: '#22c55e',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
        'fade-up': 'fadeUp 0.5s ease both',
        'scale-in': 'scaleIn 0.4s ease both',
        'spin-fast': 'spin 0.6s linear infinite',
        'pulse-soft': 'pulseSoft 2s ease infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
