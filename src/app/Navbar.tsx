'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Home page එකේම ඉන්නවනම් top එකට smooth scroll කරනවා
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Animated Brand Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="group flex items-center gap-2 text-2xl font-black tracking-wider transition-transform duration-300 hover:scale-[1.02]"
        >
          <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent group-hover:from-teal-300 group-hover:to-blue-400 transition-all duration-500">
            FinTech
          </span>
          <span className="text-white group-hover:text-teal-200 transition-colors duration-300">
            Pulse
          </span>
        </Link>

        {/* Navigation Actions */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
          >
            Home
          </Link>
          <a
            href="#featured"
            className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
          >
            Insights
          </a>
        </nav>
      </div>
    </header>
  )
}