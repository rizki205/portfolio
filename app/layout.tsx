import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'M. Rizki Alfarabi | Web Developer & SEO Specialist',
  description:
    'Information Systems graduate with a 3.81 GPA, blending 2.5 years of technical web development with high-impact SEO strategies. Specializing in Laravel, WordPress, PHP, JavaScript, and SEO.',
  keywords: [
    'M. Rizki Alfarabi',
    'Web Developer',
    'SEO Specialist',
    'Laravel Developer',
    'WordPress Developer',
    'Full Stack Developer',
    'Information Systems',
    'Bengkulu',
  ],
  authors: [{ name: 'M. Rizki Alfarabi' }],
  openGraph: {
    title: 'M. Rizki Alfarabi | Web Developer & SEO Specialist',
    description:
      'Building scalable web solutions that rank. Information Systems specialist blending web development with SEO-driven growth.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2332',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
