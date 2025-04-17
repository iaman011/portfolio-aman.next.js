import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SidebarContact from './sidebarcontact'
import Head from 'next/head';
import { Navbar } from '@/Components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Huzaif Ahmed portfolio',
  description: "This is Mohammed Huzaif Ahmed's portfolio. Computer Science Engineering student pursuing B.Tech (2021-2025). Passionate about technology and innovation." ,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <SidebarContact/> */}
      
      <body className={inter.className} >
      <Navbar />
        {children}
        </body>
    </html>
  )
}
