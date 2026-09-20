import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/60 backdrop-blur-md py-12 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div className="space-y-3 md:col-span-2">
          <Link href="/" className="text-xl font-black text-white tracking-wider flex items-center gap-1">
            <span className="text-teal-400">FinTech</span>
            <span>Pulse</span>
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Delivering next-generation insights on AI financial analysis, algorithmic trading strategies, and modern market trends.
          </p>
          <p className="text-xs text-slate-500 pt-2">
            © {new Date().getFullYear()} FinTechPulse Research. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
            <li><a href="#featured" className="hover:text-teal-400 transition-colors">Featured Insights</a></li>
            <li><a href="#latest" className="hover:text-teal-400 transition-colors">Latest Stories</a></li>
          </ul>
        </div>

        {/* Legal & Disclaimer */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Disclaimer</h4>
          <p className="text-[11px] text-slate-500 leading-normal">
            Content on FinTechPulse is for educational & informational purposes only and should not be taken as financial advice.
          </p>
        </div>

      </div>
    </footer>
  )
}