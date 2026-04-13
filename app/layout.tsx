import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Full Stack Developer | Laravel & React Expert',
  description: 'Professional portfolio of a Full Stack Developer specializing in Laravel, React, and modern web technologies.',
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
