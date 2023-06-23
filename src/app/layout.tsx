'use client'
import Navbar from '@/components/navbar/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

type layoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: layoutProps) {
  const [theme, setTheme] = useState('light')
  console.log(theme)
  return (
    <html lang='en'>
      <body className={`${inter.className} ${theme === 'light' ? 'lightTheme' : 'darkTheme'}`}>
        <Navbar theme={theme} changeTheme={setTheme} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
