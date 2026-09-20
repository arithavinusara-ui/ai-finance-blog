'use client'

import { useState } from 'react'

const categories = ['All', 'AI Insights', 'Crypto Analysis', 'FinTech Trends', 'Markets']

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <div className="flex flex-wrap items-center gap-2 my-6 pb-2 border-b border-slate-800/60">
      <span className="text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wider font-mono">
        Filter By:
      </span>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
            activeCategory === category
              ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20 font-semibold'
              : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}