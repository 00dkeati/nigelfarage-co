import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import news from '@/data/news.json'

type Props = {
  params: { id: string }
}

export async function generateStaticParams() {
  return news.map((item) => ({
    id: item.id.toString(),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = news.find((n) => n.id.toString() === params.id)
  if (!item) return { title: 'Article Not Found' }
  
  return {
    title: `${item.title} | Nigel Farage News`,
    description: item.summary,
  }
}

export default function NewsArticlePage({ params }: Props) {
  const item = news.find((n) => n.id.toString() === params.id)
  
  if (!item) {
    notFound()
  }

  const related = news
    .filter(n => n.category === item.category && n.id !== item.id)
    .slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <a href="/news" className="text-blue-600 hover:underline text-sm">← All News</a>
      </div>

      <article>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs capitalize">
            {item.category}
          </span>
          <span>•</span>
          <span>{item.source}</span>
          <span>•</span>
          <time>{new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
        </div>

        <h1 className="text-3xl font-bold mb-6">{item.title}</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">{item.summary}</p>
          
          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <p className="text-gray-600">
              This article is from <strong>{item.source}</strong>. 
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-2"
              >
                Read the full article →
              </a>
            </p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-12 pt-8 border-t">
          <h2 className="text-xl font-bold mb-4">Related Stories</h2>
          <div className="space-y-4">
            {related.map((n) => (
              <a 
                key={n.id}
                href={`/news/${n.id}`}
                className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
              >
                <h3 className="font-medium">{n.title}</h3>
                <p className="text-gray-500 text-sm">{n.source} • {n.date}</p>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
