'use client'

import React, { useState } from 'react'

export default function CompoundCalculator() {
  const [principal, setPrincipal] = useState<number>(10000)
  const [rate, setRate] = useState<number>(8)
  const [years, setYears] = useState<number>(5)
  const [contribution, setContribution] = useState<number>(500)

  // Compound Interest Calculation Logic
  const calculateCompoundInterest = () => {
    let p = principal
    const r = rate / 100
    const t = years
    const c = contribution * 12 // Annual addition

    // A = P(1 + r/n)^nt + c * ...
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
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl max-w-xl mx-auto my-8 text-slate-100">
      <h3 className="text-2xl font-bold mb-2 text-teal-400">Compound Interest Calculator</h3>
      <p className="text-slate-400 text-sm mb-6">
        Calculate how your investments and long-term savings can grow over time with compound interest.
      </p>

      <div className="space-y-4">
        {/* Initial Principal */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Initial Investment ($)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-teal-500"
          />
        </div>

        {/* Annual Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Estimated Interest Rate (% per year)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-teal-500"
          />
        </div>

        {/* Investment Timeframe */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Timeframe (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-teal-500"
          />
        </div>

        {/* Monthly Contribution */}
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

      {/* Results Box */}
      <div className="mt-8 bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
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