'use client'

import React, { useState } from 'react'

export default function MarketSentiment() {
  // Score 0 (Extreme Bearish) සිට 100 (Extreme Bullish) දක්වා
  // උදාහරණයකට 68 - Moderately Bullish
  const [sentimentScore, setSentimentScore] = useState<number>(68)

  // Sentiment Status තීරණය කිරීම
  const getSentimentDetails = (score: number) => {
    if (score >= 75) {
      return {
        label: 'Extreme Bullish',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
        barColor: 'from-emerald-500 to-teal-400',
        desc: 'Market is showing high optimism and buying momentum.'
      }
    } else if (score >= 55) {
      return {
        label: 'Moderately Bullish',
        color: 'text-teal-400',
        bg: 'bg-teal-500/10',
        border: 'border-teal-500/30',
        barColor: 'from-teal-500 to-cyan-400',
        desc: 'Steady upward trends across major crypto & tech indices.'
      }
    } else if (score >= 45) {
      return {
        label: 'Neutral / Sideways',
        color: 'text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        barColor: 'from-amber-500 to-yellow-400',
        desc: 'Market is consolidation phase with balanced buy/sell pressure.'
      }
    } else if (score >= 25) {
      return {
        label: 'Moderately Bearish',
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30',
        barColor: 'from-orange-500 to-amber-500',
        desc: 'Increased selling activity and cautious investor behavior.'
      }
    } else {
      return {
        label: 'Extreme Bearish',
        color: 'text-rose-500',
        bg: 'bg-rose-500/10',
        border: 'border-rose-500/30',
        barColor: 'from-rose-600 to-red-500',
        desc: 'High market fear and downside risk across assets.'
      }
    }
  }

  const currentStatus = getSentimentDetails(sentimentScore)

  return (
    <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm space-y-4">
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
          </span>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
            Real-Time Market Sentiment
          </h3>
        </div>

        {/* Status Badge */}
        <div className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold border ${currentStatus.bg} ${currentStatus.color} ${currentStatus.border}`}>
          {currentStatus.label} ({sentimentScore}/100)
        </div>
      </div>

      {/* Visual Meter Bar */}
      <div className="space-y-2">
        <div className="relative w-full h-4 bg-slate-950/80 rounded-full overflow-hidden border border-slate-800 p-0.5">
          {/* Gradient Progress Fill */}
          <div
            className={`h-full rounded-full bg-gradient-to-r ${currentStatus.barColor} transition-all duration-1000 ease-out`}
            style={{ width: `${sentimentScore}%` }}
          />
        </div>

        {/* Meter Markers */}
        <div className="flex justify-between text-[10px] font-bold tracking-wider text-slate-500 uppercase px-1">
          <span className="text-rose-500">0 - Extreme Bearish</span>
          <span className="text-amber-400">50 - Neutral</span>
          <span className="text-emerald-400">100 - Extreme Bullish</span>
        </div>
      </div>

      {/* Description Note */}
      <p className="text-xs text-slate-400 leading-relaxed">
        {currentStatus.desc} Updated live using multi-source algorithmic volume and volatility indexes.
      </p>
    </div>
  )
}