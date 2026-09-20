import Link from 'next/link'

export default function HomePage() {
  const articles = [
    {
      slug: 'how-to-use-ai-tools-for-stock-analysis-2026',
      title: 'How to Use AI Tools to Automate Stock & Crypto Market Analysis in 2026',
      excerpt: 'Discover how modern AI algorithms and natural language processing can analyze market trends in real-time.',
      category: 'AI Tools',
      date: 'Sept 21, 2026',
      readTime: '5 min read'
    }
  ]

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          The Future of <span className="text-teal-400">AI</span> & <span className="text-indigo-400">Wealth</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Master the latest AI tools, financial technologies, and digital strategies to build lasting wealth.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {articles.map((art) => (
          <article key={art.slug} className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-teal-500/50 transition group">
            <span className="text-xs font-semibold px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20">
              {art.category}
            </span>
            <h2 className="text-2xl font-bold mt-4 text-white group-hover:text-teal-300 transition">
              <Link href={`/posts/${art.slug}`}>{art.title}</Link>
            </h2>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
              {art.excerpt}
            </p>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
              <span>{art.date}</span>
              <span>{art.readTime}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}