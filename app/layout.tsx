import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/layout/ScrollProgress'
import PageTransition from '@/components/layout/PageTransition'
import { PROFILE_FULL_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: {
    default: `${PROFILE_FULL_NAME} — Security Researcher`,
    template: `%s — ${PROFILE_FULL_NAME}`,
  },
  description: 'Independent security researcher from Jakarta working across open-source software, public infrastructure, and web applications.',
  openGraph: {
    title: `${PROFILE_FULL_NAME} — Security Researcher`,
    description: 'Independent security researcher working across open-source software, public infrastructure, and web applications.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f2ed' },
    { media: '(prefers-color-scheme: dark)', color: '#11110f' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-loader" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var params = new URLSearchParams(location.search);
                var forced = params.get('theme');
                var stored = localStorage.getItem('theme');
                var theme = forced === 'dark' || forced === 'light'
                  ? forced
                  : stored === 'dark' || stored === 'light'
                    ? stored
                    : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                document.documentElement.classList.toggle('dark', theme === 'dark');
                document.documentElement.style.colorScheme = theme;
              } catch (_) {}
            })();
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-primary focus:px-4 focus:py-3 focus:text-sm focus:text-surface">
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content"><PageTransition>{children}</PageTransition></main>
        <Footer />
      </body>
    </html>
  )
}
