import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hasnain Ahmed Santo | Laravel Backend Engineer',
  description: 'Professional portfolio of Hasnain Ahmed Santo, a Laravel Backend Engineer with 3+ years of experience building scalable SaaS and enterprise applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
