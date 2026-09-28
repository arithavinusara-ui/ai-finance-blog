'use client'

import { useState } from 'react'

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<number>(1)
  const [fromCurrency, setFromCurrency] = useState<string>('BTC')
  const [toCurrency, setToCurrency] = useState<string>('USD')
  const [convertedValue, setConvertedValue] = useState<number>(65400) // සාමාන්‍ය අගයක් ලෙස

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md my-8">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></span>
        <h2 className="text-white font-bold tracking-wider text-sm md:text-base uppercase">
          Quick Crypto Converter
        </h2>
      </div>

      {/* Converter Inputs & Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Amount Input */}
        <div>
          <label className="block text-xs text-slate-400 mb-2">Amount</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-teal-500"
          />
        </div>

        {/* Currency Selector */}
        <div>
          <label className="block text-xs text-slate-400 mb-2">From</label>
          <select 
            value={fromCurrency} 
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-teal-500"
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="SOL">Solana (SOL)</option>
          </select>
        </div>

        {/* Output Result */}
        <div>
          <label className="block text-xs text-slate-400 mb-2">Estimated Value ({toCurrency})</label>
          <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-teal-400 font-bold">
            ${(amount * convertedValue).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}