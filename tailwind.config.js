/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--bg-app) / <alpha-value>)',
        surface: {
          50: 'rgb(var(--surface-50) / <alpha-value>)',
          100: 'rgb(var(--surface-100) / <alpha-value>)',
          200: 'rgb(var(--surface-200) / <alpha-value>)',
          300: 'rgb(var(--surface-300) / <alpha-value>)',
        },
        slate: {
          950: 'rgb(var(--slate-950) / <alpha-value>)',
          900: 'rgb(var(--slate-900) / <alpha-value>)',
          800: 'rgb(var(--slate-800) / <alpha-value>)',
          700: 'rgb(var(--slate-700) / <alpha-value>)',
          600: 'rgb(var(--slate-600) / <alpha-value>)',
          500: 'rgb(var(--slate-500) / <alpha-value>)',
          400: 'rgb(var(--slate-400) / <alpha-value>)',
          300: 'rgb(var(--slate-300) / <alpha-value>)',
          200: 'rgb(var(--slate-200) / <alpha-value>)',
          100: 'rgb(var(--slate-100) / <alpha-value>)',
          50: 'rgb(var(--slate-50) / <alpha-value>)',
        },
        brand: {
          teal: '#14b8a6',
          emerald: '#10b981',
          cyan: '#06b6d4',
          indigo: '#6366f1',
          accent: '#2dd4bf',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 25px -5px rgba(20, 184, 166, 0.3)',
        'glow-indigo': '0 0 25px -5px rgba(99, 102, 241, 0.3)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'card-light': '0 10px 30px -10px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(20, 184, 166, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-subtle': 'bounceSubtle 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'gradient-x': 'gradientX 6s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        }
      }
    },
  },
  plugins: [],
}
