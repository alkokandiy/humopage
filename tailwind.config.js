/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A017',
          deep: '#B8860B',
          soft: '#F0D27A',
        },
        navy: {
          DEFAULT: '#0B3D91',
          deep: '#072A63',
          light: '#1B5AD0',
        },
        ink: {
          DEFAULT: '#0A0E14',
          soft: '#0E1420',
          90: 'rgba(255, 255, 255, 0.9)',
          60: 'rgba(255, 255, 255, 0.6)',
          30: 'rgba(255, 255, 255, 0.3)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '0.03em',
        tightest: '-0.02em',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};