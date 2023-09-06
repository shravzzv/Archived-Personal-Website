'use client'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/navbar/navbar'
import './globals.css'
import Footer from '@/components/footer/footer'
import { useState } from 'react'

type layoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: layoutProps) {
  const [theme, setTheme] = useState('light')
  return (
    <html lang='en'>
      <body>
        <Navbar theme={theme} changeTheme={setTheme} />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
