'use client'

export default function Ticker() {
  const marketData = [
    { symbol: 'BTC/USD', price: '$91,240.50', change: '+2.4%', isPositive: true },
    { symbol: 'ETH/USD', price: '$3,420.10', change: '+1.8%', isPositive: true },
    { symbol: 'NVDA', price: '$128.50', change: '+3.1%', isPositive: true },
    { symbol: 'S&P 500', price: '$5,460.20', change: '-0.4%', isPositive: false },
    { symbol: 'NASDAQ', price: '$17,680.90', change: '+0.9%', isPositive: true },
    { symbol: 'SOL/USD', price: '$148.30', change: '-1.2%', isPositive: false },
  ]

  const duplicatedData = [...marketData, ...marketData]

  return (
    <div className="w-full bg-slate-950/90 border-b border-slate-800/80 overflow-hidden backdrop-blur-md py-2.5 text-xs font-mono select-none">
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {duplicatedData.map((item, index) => (
          <div key={index} className="flex items-center gap-2 px-6 border-r border-slate-800/50">
            <span className="font-bold text-slate-300">{item.symbol}</span>
            <span className="text-slate-100">{item.price}</span>
            <span
              className={`font-semibold ${
                item.isPositive ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}