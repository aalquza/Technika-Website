import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Black_Ops_One } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const blackOpsOne = Black_Ops_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-black-ops-one',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Technika Design',
  description: 'Professional structural engineering and design services in Charleston, SC. Expert engineering consulting for residential and commercial projects.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} ${blackOpsOne.variable}`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
