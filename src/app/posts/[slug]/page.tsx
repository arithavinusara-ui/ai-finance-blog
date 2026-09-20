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
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  })

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 space-y-6">
      <header className="space-y-2 border-b border-slate-800 pb-6">
        <span className="text-xs font-semibold px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20">
          {frontmatter.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4">
          {frontmatter.title}
        </h1>
        <p className="text-slate-500 text-sm">{frontmatter.date}</p>
      </header>

      <div className="prose prose-invert max-w-none text-slate-300">
        {content}
      </div>
    </article>
  )
}