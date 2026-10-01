'use client'

import React, { useState } from 'react'

export default function CompoundCalculator() {
  const [principal, setPrincipal] = useState<number>(10000)
  const [rate, setRate] = useState<number>(8)
  const [years, setYears] = useState<number>(5)
  const [contribution, setContribution] = useState<number>(500)

  const calculateCompoundInterest = () => {
    let p = principal
    const r = rate / 100
    const t = years
    const c = contribution * 12

    let total = p
    for (let i = 0; i < t; i++) {
      total = (total + c) * (1 + r)
    }

    const totalDeposited = p + c * t
    const totalInterest = total - totalDeposited

    return {
      finalAmount: total.toFixed(2),
      totalDeposited: totalDeposited.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    }
  }

  const result = calculateCompoundInterest()

  return (
    /* max-w-xl ඉවත් කර, සයිට් එකේ අනෙකුත් කොටස්වලට සමාන පළලකට (w-full සහ max-w-none) හැදුවා */
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl w-full my-8 text-slate-100">
      <h3 className="text-2xl font-bold mb-2 text-teal-400">Compound Interest Calculator</h3>
      <p className="text-slate-400 text-sm mb-6">
        Calculate how your investments and long-term savings can grow over time with compound interest.
      </p>

      {/* Input Fields Grid එකක් ලෙස සැකසීම මඟින් පළල සමතුලිත වේ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Initial Investment ($)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Estimated Interest Rate (% per year)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Timeframe (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Monthly Contribution ($)</label>
          <input
            type="number"
            value={contribution}
            onChange={(e) => setContribution(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>

      {/* Results Box එක මුළු පළලටම විහිදෙන සේ සකසා ඇත */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Total Deposited:</span>
          <span className="font-semibold text-slate-200">${result.totalDeposited}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Interest Earned:</span>
          <span className="font-semibold text-teal-400">${result.totalInterest}</span>
        </div>
        <div className="border-t border-slate-800 pt-3 flex justify-between text-lg font-bold">
          <span className="text-slate-100">Final Balance:</span>
          <span className="text-teal-400">${result.finalAmount}</span>
        </div>
      </div>
    </div>
  )
}