import type { Metadata } from 'next'
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
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-black-ops-one: ${blackOpsOne.variable};
}
        `}</style>
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${blackOpsOne.variable}`}>
  <Navbar />
        {children}
      </body>
    </html>
  )
}
