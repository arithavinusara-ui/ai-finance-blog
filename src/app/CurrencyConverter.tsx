'use client'

import { useState, useEffect } from 'react'

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<number>(1)
  const [fromCurrency, setFromCurrency] = useState<string>('bitcoin')
  const [prices, setPrices] = useState<{ [key: string]: number }>({
    bitcoin: 84224,
    ethereum: 0,
    solana: 0
  })

  // CoinGecko API එකෙන් සජීවී මිල ගණන් ලබා ගැනීම
  useEffect(() => {
    async function fetchPrices() {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd'
        )
        const data = await res.json()
        setPrices({
          bitcoin: data.bitcoin?.usd || 84224,
          ethereum: data.ethereum?.usd || 0,
          solana: data.solana?.usd || 0
        })
      } catch (error) {
        console.error('Error fetching conversion rates:', error)
      }
    }
    fetchPrices()
  }, [])

  const currentRate = prices[fromCurrency] || 0

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md my-8">
      <div className="flex items-center space-x-3 mb-6">
        <span className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></span>
        <h2 className="text-white font-bold tracking-wider text-sm md:text-base uppercase">
          Quick Crypto Converter (Live)
        </h2>
      </div>

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
            <option value="bitcoin">Bitcoin (BTC)</option>
            <option value="ethereum">Ethereum (ETH)</option>
            <option value="solana">Solana (SOL)</option>
          </select>
        </div>

        {/* Output Result */}
        <div>
          <label className="block text-xs text-slate-400 mb-2">Estimated Value (USD)</label>
          <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-teal-400 font-bold">
            ${(amount * currentRate).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}