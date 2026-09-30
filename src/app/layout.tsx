import Ticker from './MarketTicker' // Ticker එක තියෙන path එකට අනුව මෙය වෙනස් කරගන්න 
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar' // නැතහොත් Navbar file එක තියෙන path එක
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FinTechPulse | Next-Gen AI & Financial Insights Platform',
  description: 'Discover comprehensive, next-gen insights on artificial intelligence, advanced financial analysis, and the latest evolving fintech market trends.',
  // alternatives වල canonical එක
  alternates: {
    canonical: 'https://ai-finance-blog.vercel.app',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'FinTechPulse | Next-Gen AI & Financial Insights Platform',
    description: 'Discover comprehensive, next-gen insights on artificial intelligence, advanced financial analysis, and the latest evolving fintech market trends.',
    url: 'https://ai-finance-blog.vercel.app',
    siteName: 'FinTechPulse',
    images: [
      {
        url: 'https://ai-finance-blog.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'FinTechPulse Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinTechPulse | Next-Gen AI & Financial Insights Platform',
    description: 'Discover comprehensive, next-gen insights on artificial intelligence, advanced financial analysis, and the latest evolving fintech market trends.',
    images: ['https://ai-finance-blog.vercel.app/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "FinTechPulse",
              "url": "https://ai-finance-blog.vercel.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ai-finance-blog.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-teal-500 selection:text-slate-950`}>
        <Ticker />
        <Navbar />
        <main className="max-w-6xl mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}