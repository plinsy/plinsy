import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'

import { cn } from '@/lib/utils'
import { StaticProvider } from '../providers/static.providers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'AN TSIMANARSON Princy | Portfolio and resume',
  description:
    "This is the portfolio & resume page of AN TSIMANARSON Princy. Here you will find out more about interesting software development projects that I've been working on.",
  authors: [
    {
      name: 'AN TSIMANARSON Princy'
    }
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StaticProvider>
      <html lang="en">
        <body className={cn(fontSans.variable)}>{children}</body>
      </html>
    </StaticProvider>
  )
}
