import type { Metadata } from 'next'
import { Geist, Geist_Mono, El_Messiri } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Nav from '@/components/nav'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const elMessiri = El_Messiri({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'WedFlix - Make your wedding unforgettable',
  description: 'Show your love on a billboard. WedFlix makes it easy. Premium billboard sites all over Metro Manila.',
  generator: 'v0.app',
  icons: {
    icon: '/images/icon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
