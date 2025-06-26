/* eslint-disable camelcase */
import { AppFooter } from '@/components/AppFooter'
import { AppHeaderDesktop, AppHeaderMobile } from '@/components/AppHeader'
import { AppSettings } from '@/components/AppSettings'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SudoPlayer Dashboard',
  description: 'Painel de controle do bot SudoPlayer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppHeaderDesktop />
        <AppHeaderMobile />
        {children}
        <AppSettings />
        <AppFooter />
      </body>
    </html>
  )
}
