import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SidebarContact from './sidebarcontact'
import Head from 'next/head';
import { Navbar } from '@/Components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aman Portfolio',
  description: "This is Aman portfolio — Passionate about Full Stack Development, innovative technologies, and building scalable applications" ,
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
