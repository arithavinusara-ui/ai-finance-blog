'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Dashboard Header & Tools Navigation Button */}
        <div className="flex justify-between items-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">FinTechPulse Dashboard</h1>
            <p className="text-slate-400 text-xs md:text-sm mt-1">Live market overview and quick tools access.</p>
          </div>
          <Link 
            href="/tools" 
            className="bg-teal-500/10 border border-teal-500/30 text-teal-400 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold hover:bg-teal-500/20 transition shadow-lg shadow-teal-500/5"
          >
            Open Tools & Calculators →
          </Link>
        </div>

        {/* Live Currency / Market Ticker Section */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></span>
            <h2 className="text-white font-bold tracking-wider text-sm md:text-base uppercase">
              Live Crypto Market Ticker
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl">
              <span className="text-xs text-slate-400 block mb-1">Bitcoin (BTC)</span>
              <span className="text-xl font-bold text-white">$84,224.00 USD</span>
            </div>
            <div className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl">
              <span className="text-xs text-slate-400 block mb-1">Ethereum (ETH)</span>
              <span className="text-xl font-bold text-white">Live Feed Active</span>
            </div>
            <div className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl">
              <span className="text-xs text-slate-400 block mb-1">Market Sentiment</span>
              <span className="text-xl font-bold text-teal-400">Bullish / Greed</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}