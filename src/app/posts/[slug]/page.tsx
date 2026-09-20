import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')

  const { content, frontmatter } = await compileMDX<{
    title: string
    date: string
    category: string
    author?: string
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: {
      h2: (props) => <h2 className="text-2xl md:text-3xl font-bold text-teal-400 mt-10 mb-4 border-b border-slate-800 pb-2" {...props} />,
      h3: (props) => <h3 className="text-xl font-semibold text-indigo-300 mt-6 mb-3" {...props} />,
      p: (props) => <p className="text-slate-300 leading-relaxed mb-4 text-base md:text-lg" {...props} />,
      ul: (props) => <ul className="list-disc list-inside space-y-3 text-slate-300 my-4 pl-2" {...props} />,
      ol: (props) => <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4 pl-2" {...props} />,
      li: (props) => <li className="leading-relaxed" {...props} />,
      strong: (props) => <strong className="font-semibold text-white" {...props} />,
      blockquote: (props) => <blockquote className="border-l-4 border-teal-500 bg-slate-900/80 p-4 rounded-r-lg my-6 text-slate-200 italic" {...props} />,
      hr: () => <hr className="border-slate-800 my-8" />,
    }
  })

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 space-y-6">
      <header className="space-y-4 border-b border-slate-800 pb-8">
        <span className="text-xs font-semibold px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20">
          {frontmatter.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mt-2">
          {frontmatter.title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
          {frontmatter.author && <span>By {frontmatter.author}</span>}
          <span>•</span>
          <span>{frontmatter.date}</span>
        </div>
      </header>

      <div className="pt-4">
        {content}
      </div>
    </article>
  )
}