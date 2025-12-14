import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react';
import GoButton from './components/GoButton';

export const metadata: Metadata = {
  title: 'Next.js Fundamentals',
  description: 'Learning routing, data fetching, and rendering',
};

export default function RootLayout({children}: {children: React.ReactNode}){
  return(
    <html lang='en'>
      <body>
        <nav style={{display: 'flex', gap: '1rem', background:'#f0f0f0'}}>
          <Link href="/">Home</Link>    
          <GoButton route='/about' label={''}/>
          <Link href="/projects">Projects</Link>
        </nav>
        <main style={{padding: '2rem'}}>{children}</main>
      </body>
    </html>
  )
}