'use client'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

type layoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: layoutProps) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
