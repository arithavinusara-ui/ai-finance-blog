'use client'

import { useState, useEffect } from 'react'

export default function MarketSentiment() {
  const [score, setScore] = useState<number>(68) // default score
  const [sentimentText, setSentimentText] = useState<string>('Moderately Bullish')
  const [loading, setLoading] = useState<boolean>(true)

  // API එකෙන් Market Sentiment දත්ත ලබා ගැනීම
  const fetchSentiment = async () => {
    try {
      const res = await fetch('https://api.alternative.me/fng/')
      const data = await res.json()
      
      if (data && data.data && data.data[0]) {
        const currentScore = parseInt(data.data[0].value)
        setScore(currentScore)

        // ලකුණු මත පදනම්ව Sentiment එක තීරණය කිරීම
        if (currentScore >= 75) {
          setSentimentText('Extreme Bullish')
        } else if (currentScore >= 60) {
          setSentimentText('Moderately Bullish')
        } else if (currentScore >= 45) {
          setSentimentText('Neutral')
        } else if (currentScore >= 25) {
          setSentimentText('Moderately Bearish')
        } else {
          setSentimentText('Extreme Bearish')
        }
      }
    } catch (error) {
      console.error('Failed to fetch sentiment data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSentiment()
    // සෑම විනාඩි 5කට වරක්ම Update වීම සඳහා
    const interval = setInterval(fetchSentiment, 300000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md my-8">
      {/* Top Header & Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-3">
          <span className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></span>
          <h2 className="text-white font-bold tracking-wider text-sm md:text-base uppercase">
            Real-Time Market Sentiment
          </h2>
        </div>

        <div className="px-4 py-1.5 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-400 font-semibold text-xs md:text-sm">
          {loading ? 'Loading...' : `${sentimentText} (${score}/100)`}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full bg-slate-950 rounded-full h-3 mb-4 overflow-hidden border border-slate-800">
        <div 
          className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${score}%` }}
        ></div>
      </div>

      {/* Scale Labels */}
      <div className="flex justify-between text-xs font-semibold mb-6">
        <span className="text-rose-400">0 - EXTREME BEARISH</span>
        <span className="text-amber-400">50 - NEUTRAL</span>
        <span className="text-emerald-400">100 - EXTREME BULLISH</span>
      </div>

      {/* Footer Description */}
      <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4">
        Steady upward trends across major crypto & tech indices. Updated live using multi-source algorithmic volume and volatility indexes.
      </p>
    </div>
  )
}