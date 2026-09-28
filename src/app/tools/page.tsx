import CurrencyConverter from './CurrencyConverter'
import ProfitCalculator from './ProfitCalculator'

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 md:px-12 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Financial Tools & Calculators</h1>
          <p className="text-slate-400 text-sm">
            Quickly convert cryptocurrency values and calculate your potential trading profits or losses in real-time.
          </p>
        </div>

        {/* Tools Components */}
        <CurrencyConverter />
        <ProfitCalculator />
      </div>
    </main>
  )
}