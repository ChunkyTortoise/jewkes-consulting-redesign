import type { Metadata, Viewport } from 'next'
import { Lato, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });
const _merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'AI Integration Strategy | The Jewkes Firm',
  description: 'AI Integration Strategy prepared by OpenClaw Consulting for The Jewkes Firm, LLC — Plaintiff Personal Injury & Medical Malpractice. 42 AI use cases, 11 integrated tools, 10 knowledge databases.',
  generator: 'OpenClaw Consulting',
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
