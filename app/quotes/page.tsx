import { Metadata } from 'next'
import quotes from '@/data/quotes.json'

export const metadata: Metadata = {
  title: 'Nigel Farage Quotes - Famous Statements & Speeches',
  description: 'Collection of Nigel Farage\'s most famous quotes on Brexit, immigration, the EU, and British politics.',
}

export default function QuotesPage() {
  const categories = Array.from(new Set(quotes.flatMap(q => q.category)))
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Nigel Farage Quotes</h1>
      <p className="text-gray-600 mb-8">
        A collection of notable quotes from Nigel Farage throughout his political career.
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

      {/* Quotes grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {quotes.map((q) => (
          <div key={q.id} className="quote-card bg-white">
            <blockquote className="text-xl italic mb-4">
              "{q.quote}"
            </blockquote>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span>{q.context}</span>
              <span>•</span>
              <span>{q.date}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {q.category.map(cat => (
                <span key={cat} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs capitalize">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* More quotes CTA */}
      <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Know a quote we're missing?</h3>
        <p className="text-gray-600">
          We're building the most comprehensive collection of Nigel Farage quotes.
        </p>
      </div>
    </div>
  )
}
