'use client'

import { useState, useEffect } from 'react'

interface MarketItem {
  symbol: string
  price: string
  change: string
  isPositive: boolean
}

export default function MarketTicker() {
  const [marketData, setMarketData] = useState<MarketItem[]>([
    { symbol: 'BTC/USD', price: '$91,240.50', change: '+2.4%', isPositive: true },
    { symbol: 'ETH/USD', price: '$3,420.10', change: '+1.8%', isPositive: true },
    { symbol: 'SOL/USD', price: '$148.30', change: '-1.2%', isPositive: false },
    { symbol: 'NVDA', price: '$128.50', change: '+3.1%', isPositive: true },
    { symbol: 'NASDAQ', price: '$17,680.90', change: '+0.9%', isPositive: true },
    { symbol: 'S&P 500', price: '$5,460.20', change: '-0.4%', isPositive: false },
  ])

  // Real-time API Call function
  const fetchMarketPrices = async () => {
    try {
      // මෙහිදී CoinGecko වැනි නොමිලේ ලබාදෙන API එකකින් සජීවී දත්ත ලබාගත හැක
      const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true')
      const data = await res.json()

      if (data && data.bitcoin) {
        setMarketData([
          { 
            symbol: 'BTC/USD', 
            price: `$${data.bitcoin.usd.toLocaleString()}`, 
            change: `${data.bitcoin.usd_24h_change >= 0? '+' : ''}${data.bitcoin.usd_24h_change.toFixed(1)}%`, 
            isPositive: data.bitcoin.usd_24h_change >= 0 
          },
          { 
            symbol: 'ETH/USD', 
            price: `$${data.ethereum.usd.toLocaleString()}`, 
            change: `${data.ethereum.usd_24h_change >= 0 ? '+' : ''}${data.ethereum.usd_24h_change.toFixed(1)}%`, 
            isPositive: data.ethereum.usd_24h_change >= 0 
          },
          { 
            symbol: 'SOL/USD', 
            price: `$${data.solana.usd.toLocaleString()}`, 
            change: `${data.solana.usd_24h_change >= 0 ? '+' : ''}${data.solana.usd_24h_change.toFixed(1)}%`, 
            isPositive: data.solana.usd_24h_change >= 0 
          },
          // Stocks සඳහා වෙනත් API එකක් හෝ static ලෙස පවත්වාගත හැක
          { symbol: 'NVDA', price: '$128.50', change: '+3.1%', isPositive: true },
          { symbol: 'NASDAQ', price: '$17,680.90', change: '+0.9%', isPositive: true },
          { symbol: 'S&P 500', price: '$5,460.20', change: '-0.4%', isPositive: false },
        ])
      }
    } catch (error) {
      console.error('Failed to fetch market data:', error)
    }
  }

  useEffect(() => {
    // මුල් වතාවට Data ලබා ගැනීම
    fetchMarketPrices()

    // සෑම විනාඩියකට වරක් (milliseconds 60000) API එක Call කිරීම
    const interval = setInterval(() => {
      fetchMarketPrices()
    }, 60000)

    // Component එක ඉවත් වන විට interval එක clear කිරීම
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate-950 border-b border-slate-800 text-xs py-2 px-4 overflow-x-auto whitespace-nowrap scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between space-x-8">
        {marketData.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="font-semibold text-slate-300">{item.symbol}</span>
            <span className="text-white font-medium">{item.price}</span>
            <span className={item.isPositive ? 'text-emerald-400' : 'text-rose-400'}>
              {item.change}
            </span>
            {index < marketData.length - 1 && (
              <span className="text-slate-800 ml-4">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}