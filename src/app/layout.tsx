import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FinTech Pulse | AI Tools & Digital Wealth Insights',
  description: 'Explore cutting-edge AI tools, personal finance strategies, and digital wealth hacks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col`}>
        <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-teal-300 to-indigo-500 bg-clip-text text-transparent">
              FinTech<span className="text-white">Pulse</span>
            </a>
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
              <a href="#" className="hover:text-teal-400 transition">AI Tools</a>
              <a href="#" className="hover:text-teal-400 transition">Personal Finance</a>
              <a href="#" className="hover:text-teal-400 transition">Digital Wealth</a>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-6xl mx-auto px-6 py-10 w-full">
          {children}
        </main>

        <footer className="border-t border-slate-800 bg-slate-900/30 py-8 mt-12 text-center text-slate-500 text-sm">
          © 2026 FinTechPulse. All rights reserved. Built for Next-Gen Finance & AI.
        </footer>
        <SpeedInsights />
      </body>
    </html>
  )
}