import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Arya Arjuna Habibullah — Security Researcher',
    template: '%s — Muhammad Arya Arjuna Habibullah',
  },
  description: 'Independent security researcher from Jakarta working across open-source software, public infrastructure, and web applications.',
  openGraph: {
    title: 'Muhammad Arya Arjuna Habibullah — Security Researcher',
    description: 'Independent security researcher working across open-source software, public infrastructure, and web applications.',
    type: 'website',
  },
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
            (function() {
              let saved = null;
              try { saved = localStorage.getItem('theme'); } catch (_) {}
              const t = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.classList.toggle('dark', t === 'dark');
              document.documentElement.style.colorScheme = t;
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
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
