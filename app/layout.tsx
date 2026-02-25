import type { Metadata, Viewport } from 'next'
import { Lato, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-merriweather" });

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'AI Integration Strategy | The Jewkes Firm',
  description: 'AI Integration Strategy prepared by Cayman Roden for The Jewkes Firm, LLC — Plaintiff Personal Injury & Medical Malpractice. 42 AI use cases, 11 integrated tools, 10 knowledge databases.',
  generator: 'Cayman Roden',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${merriweather.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
