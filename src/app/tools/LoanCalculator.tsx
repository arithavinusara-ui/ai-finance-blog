'use client'

import React, { useState } from 'react'

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(50000)
  const [interestRate, setInterestRate] = useState<number>(6.5)
  const [loanTerm, setLoanTerm] = useState<number>(15) // Years

  const calculateLoan = () => {
    const principal = loanAmount
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    if (monthlyRate === 0) {
      const monthlyPayment = principal / numberOfPayments
      return {
        monthlyPayment: monthlyPayment.toFixed(2),
        totalPayment: principal.toFixed(2),
        totalInterest: '0.00',
      }
    }

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const totalPayment = monthlyPayment * numberOfPayments
    const totalInterest = totalPayment - principal

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    }
  }

  const result = calculateLoan()

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl w-full my-8 text-slate-100">
      <h3 className="text-2xl font-bold mb-2 text-teal-400">Loan & Mortgage Calculator</h3>
      <p className="text-slate-400 text-sm mb-6">
        Calculate your monthly loan payments, interest rates, and total payment amounts easily.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Loan Amount ($)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Interest Rate (% per year)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Loan Term (Years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Monthly Payment:</span>
          <span className="font-semibold text-teal-400">${result.monthlyPayment}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Total Interest:</span>
          <span className="font-semibold text-slate-200">${result.totalInterest}</span>
        </div>
        <div className="border-t border-slate-800 pt-3 flex justify-between text-lg font-bold">
          <span className="text-slate-100">Total Payment:</span>
          <span className="text-teal-400">${result.totalPayment}</span>
        </div>
      </div>
    </div>
  )
}