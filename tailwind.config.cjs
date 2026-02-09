/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index.tsx',
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        offblack: '#0a0a0a',
        white: '#ffffff',
        glass: 'rgba(255, 255, 255, 0.03)',
        background: '#000000',
        foreground: '#ffffff',
        primary: 'var(--primary)',
        muted: '#171717',
        'muted-foreground': '#a3a3a3',
        border: '#262626',
        accent: '#262626',
        'accent-foreground': '#ffffff',
        input: '#262626',
        ring: '#525252',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scroll: 'scroll 40s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-out': 'fadeInOut 2s ease-in-out forwards',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeInOut: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to: { height: '0', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
