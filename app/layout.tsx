import type { Metadata } from 'next'
import { JetBrains_Mono, Geist } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Muhammad Arya Arjuna Habibullah — Security Researcher',
  description: '15-year-old security researcher from Jakarta, Indonesia. CVE contributor and Hall of Famer.',
  openGraph: {
    title: 'Muhammad Arya Arjuna Habibullah — Security Researcher',
    description: '15-year-old security researcher specializing in vulnerability discovery.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script id="theme-loader" strategy="beforeInteractive">
          {`
            (function() {
              const t = localStorage.getItem('theme') || 'dark';
              document.documentElement.classList.toggle('dark', t === 'dark');
            })();
          `}
        </Script>
      </head>
      <body className={`${geist.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ScrollProgress />
        <Navbar />
        <main className="max-w-4xl mx-auto px-6 sm:px-10">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
