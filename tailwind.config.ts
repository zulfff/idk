import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
          muted: '#6ee7b7',
          dim: '#00cc6a',
        },
        surface: {
          DEFAULT: 'var(--bg)',
          card: 'var(--bg-card)',
          elevated: 'var(--bg-elevated)',
          border: 'var(--border)',
          strong: 'var(--border-strong)',
        },
        contrast: 'var(--accent-contrast)',
        primary: 'var(--text)',
        muted: 'var(--text-muted)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
