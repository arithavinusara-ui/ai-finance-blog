'use client'

import { useState } from 'react'

export default function ProfitCalculator() {
  const [buyPrice, setBuyPrice] = useState<number>(80000)
  const [sellPrice, setSellPrice] = useState<number>(84224)
  const [amount, setAmount] = useState<number>(0.5)

  const investment = buyPrice * amount
  const currentTotal = sellPrice * amount
  const profitLoss = currentTotal - investment
  const percentage = investment > 0 ? (profitLoss / investment) * 100 : 0

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md my-8">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></span>
        <h2 className="text-white font-bold tracking-wider text-sm md:text-base uppercase">
          Crypto Profit & Loss Calculator
        </h2>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Buy Price */}
        <div>
          <label className="block text-xs text-slate-400 mb-2">Buy Price (USD)</label>
          <input 
            type="number" 
            value={buyPrice} 
            onChange={(e) => setBuyPrice(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Target / Current Price */}
        <div>
          <label className="block text-xs text-slate-400 mb-2">Current / Sell Price (USD)</label>
          <input 
            type="number" 
            value={sellPrice} 
            onChange={(e) => setSellPrice(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Holdings Amount */}
        <div>
          <label className="block text-xs text-slate-400 mb-2">Amount / Quantity</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* Result Display Box */}
      <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-xs text-slate-400 block">Total Investment</span>
          <span className="text-white font-semibold text-lg">${investment.toLocaleString()}</span>
        </div>
        
        <div>
          <span className="text-xs text-slate-400 block">Estimated Value</span>
          <span className="text-white font-semibold text-lg">${currentTotal.toLocaleString()}</span>
        </div>

        <div className="text-right">
          <span className="text-xs text-slate-400 block">Net Profit / Loss</span>
          <span className={`font-bold text-lg ${profitLoss >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {profitLoss >= 0 ? '+' : ''}${profitLoss.toLocaleString()} ({percentage.toFixed(2)}%)
          </span>
        </div>
      </div>
    </div>
  )
}