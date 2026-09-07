import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        accent: 'var(--accent)',
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
    },
  },
  plugins: [],
}

export default config
