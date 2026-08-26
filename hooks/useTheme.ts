'use client'

import { useSyncExternalStore } from 'react'

export type Theme = 'dark' | 'light'

const THEME_EVENT = 'themechange'

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function readStoredTheme(): Theme | null {
  try {
    const saved = localStorage.getItem('theme')
    return saved === 'dark' || saved === 'light' ? saved : null
  } catch {
    return null
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
}

function subscribe(callback: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const handleSystemTheme = () => {
    if (readStoredTheme()) return
    applyTheme(media.matches ? 'dark' : 'light')
    callback()
  }
  const handleStorage = (event: StorageEvent) => {
    if (event.key !== 'theme') return
    const nextTheme = event.newValue === 'dark' || event.newValue === 'light'
      ? event.newValue
      : media.matches ? 'dark' : 'light'
    applyTheme(nextTheme)
    callback()
  }

  window.addEventListener(THEME_EVENT, callback)
  window.addEventListener('storage', handleStorage)
  media.addEventListener('change', handleSystemTheme)

  return () => {
    window.removeEventListener(THEME_EVENT, callback)
    window.removeEventListener('storage', handleStorage)
    media.removeEventListener('change', handleSystemTheme)
  }
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => 'light')

  const toggleTheme = () => {
    const newTheme: Theme = readTheme() === 'dark' ? 'light' : 'dark'
    applyTheme(newTheme)
    try { localStorage.setItem('theme', newTheme) } catch {}
    window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: newTheme }))
  }

  return { theme, toggleTheme }
}
