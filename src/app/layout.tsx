import Ticker from './Ticker'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar' // නැතහොත් Navbar file එක තියෙන path එක
import Footer from './Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FinTechPulse | AI & Financial Insights',
  description: 'Next-Gen Insights on AI, Financial Analysis & Fintech Trends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-teal-500 selection:text-slate-950`}>
        <Ticker/>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  )
}