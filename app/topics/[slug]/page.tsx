import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import topics from '@/data/topics.json'
import quotes from '@/data/quotes.json'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return topics.map((topic) => ({
    slug: topic.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = topics.find((t) => t.slug === params.slug)
  if (!topic) return { title: 'Topic Not Found' }
  
  return {
    title: `${topic.title} - Nigel Farage's Position`,
    description: topic.description,
  }
}

export default function TopicPage({ params }: Props) {
  const topic = topics.find((t) => t.slug === params.slug)
  
  if (!topic) {
    notFound()
  }

  const relatedQuotes = topic.relatedQuotes 
    ? quotes.filter(q => topic.relatedQuotes?.includes(q.id))
    : []

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <a href="/topics" className="text-blue-600 hover:underline text-sm">← All Topics</a>
      </div>

      <h1 className="text-4xl font-bold mb-2">{topic.title}</h1>
      <p className="text-xl text-blue-600 mb-8">{topic.subtitle}</p>

      <div className="prose prose-lg max-w-none mb-12">
        <p>{topic.description}</p>
      </div>

      {/* Key Dates */}
      {topic.keyDates && topic.keyDates.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Dates</h2>
          <div className="space-y-4">
            {topic.keyDates.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                <span className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-sm">
                  {item.date}
                </span>
                <p>{item.event}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Key Positions */}
      {topic.keyPositions && topic.keyPositions.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Positions</h2>
          <ul className="space-y-3">
            {topic.keyPositions.map((position, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>{position}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Related Quotes */}
      {relatedQuotes.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Quotes</h2>
          <div className="space-y-4">
            {relatedQuotes.map((quote) => (
              <div key={quote.id} className="border-l-4 border-blue-600 pl-6 py-2">
                <blockquote className="text-lg italic mb-2">"{quote.quote}"</blockquote>
                <p className="text-gray-600 text-sm">{quote.context} • {quote.date}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
