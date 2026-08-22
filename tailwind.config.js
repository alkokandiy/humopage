/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#03040A',
          deep: '#000000',
          50: '#060810',
          100: '#0A0E18',
          200: '#0E1422',
        },
        aether: {
          DEFAULT: '#007BFF',
          light: '#00CCFF',
          dim: 'rgba(0, 123, 255, 0.15)',
          glow: 'rgba(0, 204, 255, 0.25)',
          trace: 'rgba(0, 204, 255, 0.08)',
        },
        gold: {
          DEFAULT: '#FFC107',
          deep: '#D4A017',
          bright: '#FFD54F',
          dim: 'rgba(255, 193, 7, 0.12)',
          glow: 'rgba(255, 193, 7, 0.2)',
        },
        ink: {
          DEFAULT: '#0A0E14',
          soft: '#0E1420',
          deep: '#03040A',
          95: 'rgba(255, 255, 255, 0.95)',
          90: 'rgba(255, 255, 255, 0.9)',
          70: 'rgba(255, 255, 255, 0.7)',
          60: 'rgba(255, 255, 255, 0.6)',
          40: 'rgba(255, 255, 255, 0.4)',
          30: 'rgba(255, 255, 255, 0.3)',
          20: 'rgba(255, 255, 255, 0.2)',
          10: 'rgba(255, 255, 255, 0.1)',
          '05': 'rgba(255, 255, 255, 0.05)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '0.06em',
        hud: '0.12em',
        tightest: '-0.02em',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'holographic-trace': 'holographicTrace 3s ease-in-out infinite',
        'particle-float': 'particleFloat 6s ease-in-out infinite',
        'grid-pulse': 'gridPulse 4s ease-in-out infinite',
        'glow-breathe': 'glowBreathe 3s ease-in-out infinite',
        'scan-line': 'scanLine 8s linear infinite',
        'data-stream': 'dataStream 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'glow-pulse-aether': 'glowPulseAether 3s ease-in-out infinite',
        'glow-pulse-gold': 'glowPulseGold 3s ease-in-out infinite',
        'fade-in-nav': 'fadeInNav 0.8s cubic-bezier(0.680, -0.550, 0.270, 1.550) both',
        'char-forge': 'charForge 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'tech-trace': 'techTrace 1.5s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        holographicTrace: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleX(0.95)' },
          '50%': { opacity: '1', transform: 'scaleX(1)' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px) scale(1.2)', opacity: '1' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.08' },
        },
        glowBreathe: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        dataStream: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulseAether: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,123,255,0.25), 0 0 40px rgba(0,123,255,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(0,204,255,0.4), 0 0 60px rgba(0,123,255,0.2)' },
        },
        glowPulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,193,7,0.2), 0 4px 12px rgba(0,0,0,0.3)' },
          '50%': { boxShadow: '0 0 35px rgba(255,193,7,0.4), 0 0 60px rgba(212,160,23,0.15)' },
        },
        fadeInNav: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '60%': { transform: 'translateY(3px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        charForge: {
          '0%': { opacity: '0', transform: 'translateY(12px) rotateX(30deg)', filter: 'blur(4px)' },
          '50%': { filter: 'blur(1px)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotateX(0deg)', filter: 'blur(0)' },
        },
        techTrace: {
          '0%': { width: '0', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { width: '100%', opacity: '1' },
        },
      },
      boxShadow: {
        'aether-glow': '0 0 30px rgba(0, 123, 255, 0.3), 0 0 60px rgba(0, 123, 255, 0.1)',
        'gold-glow': '0 0 30px rgba(255, 193, 7, 0.3), 0 0 60px rgba(255, 193, 7, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-aether': '0 8px 32px rgba(0, 123, 255, 0.15), inset 0 1px 0 rgba(0, 204, 255, 0.08)',
        'hud': '0 0 20px rgba(0, 123, 255, 0.2), inset 0 0 20px rgba(0, 123, 255, 0.05)',
      },
    },
  },
  plugins: [],
};
