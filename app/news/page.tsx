import { Metadata } from 'next'
import news from '@/data/news.json'

export const metadata: Metadata = {
  title: 'Nigel Farage News - Latest Updates & Headlines',
  description: 'Latest news about Nigel Farage and Reform UK. Breaking stories, political updates, and analysis.',
}

export default function NewsPage() {
  const categories = Array.from(new Set(news.map(n => n.category)))
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Latest News</h1>
      <p className="text-gray-600 mb-8">
        The latest headlines and updates on Nigel Farage and Reform UK.
      </p>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm cursor-pointer">
          All
        </span>
        {categories.map(cat => (
          <span key={cat} className="bg-gray-200 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-gray-300 capitalize">
            {cat}
          </span>
        ))}
      </div>

      {/* News list */}
      <div className="space-y-6">
        {news.map((item) => (
          <article key={item.id} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs capitalize">
                {item.category}
              </span>
              <span>•</span>
              <span>{item.source}</span>
              <span>•</span>
              <time>{new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            </div>
            <h2 className="text-xl font-bold mb-2 hover:text-blue-600">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h2>
            <p className="text-gray-600 mb-4">{item.summary}</p>
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Read full article →
            </a>
          </article>
        ))}
      </div>

      {/* RSS note */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg text-center">
        <p className="text-gray-600">
          News is updated regularly. Check back for the latest stories.
        </p>
      </div>
    </div>
  )
}
