'use client'

import { useState } from 'react'

const categories = ['All', 'AI Insights', 'Crypto Analysis', 'FinTech Trends', 'Markets']

interface CategoryFilterProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function CategoryFilter({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 my-6 pb-4 border-b border-slate-800/60">
      {/* කාණ්ඩ අනුව පෙරහන් ටැබ් (Category Filter Tabs) */}
      <div className="flex flex-wrap items-center gap-2">
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

      {/* සෙවුම් තීරුව (Search Bar) - මෙතැනින් ලිපි සෙවිය හැක */}
      <div className="relative w-full md:w-72">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full px-4 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
        />
      </div>
    </div>
  )
}