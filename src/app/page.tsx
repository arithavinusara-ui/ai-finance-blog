import Link from 'next/link'

export default function HomePage() {
  const articles = [
    {
      slug: 'how-to-use-ai-tools-for-stock-analysis-2026',
      title: 'How to Use AI Tools to Automate Stock & Crypto Market Analysis in 2026',
      excerpt: 'Discover how modern AI algorithms and natural language processing can analyze market trends in real-time.',
      category: 'AI Tools',
      date: 'Sept 21, 2026',
      readTime: '5 min read',
      featured: true,
    }
  ]

  const featuredPost = articles.find((art) => art.featured) || articles[0]
  const regularPosts = articles.filter((art) => !art.featured)

  return (
    <div className="space-y-16 py-6 transition-all duration-500">
      {/* Modern Hero Section */}
      <section className="text-center space-y-6 py-12 px-4 relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/80 via-slate-900/30 to-transparent border border-slate-800/50 backdrop-blur-sm">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <span className="inline-block px-4 py-1.5 bg-teal-500/10 text-teal-400 text-xs font-semibold rounded-full border border-teal-500/20 tracking-wide uppercase">
          Welcome to FinTechPulse
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Next-Gen Insights on <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">AI & Finance</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-normal leading-relaxed">
          Stay ahead of the financial curve with algorithmic market strategies, fintech trends, and modern wealth-building workflows.
        </p>
      </section>

      {/* Featured Main Article Section */}
      {featuredPost && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Featured Insight</h2>
          </div>
          
          <Link
            href={`/posts/${featuredPost.slug}`}
            className="group relative block p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-teal-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 space-y-4">
              <span className="inline-block text-xs font-semibold px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20">
                {featuredPost.category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                {featuredPost.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-800/60">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Regular Articles Grid */}
      {regularPosts.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Latest Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regularPosts.map((art) => (
              <Link
                key={art.slug}
                href={`/posts/${art.slug}`}
                className="group block p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl hover:border-teal-500/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5"
              >
                <article className="space-y-3">
                  <span className="inline-block text-xs font-semibold px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20">
                    {art.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                    {art.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {art.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-3">
                    <span>{art.date}</span>
                    <span>{art.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}