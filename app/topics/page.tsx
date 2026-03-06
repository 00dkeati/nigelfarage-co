import { Metadata } from 'next'
import topics from '@/data/topics.json'

export const metadata: Metadata = {
  title: 'Topics - Nigel Farage\'s Positions & Policies',
  description: 'Explore Nigel Farage\'s positions on Brexit, immigration, the EU, economy, and more.',
}

export default function TopicsPage() {
  const major = topics.filter(t => t.category === 'major')
  const policy = topics.filter(t => t.category === 'policy')
  const other = topics.filter(t => t.category === 'international')

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Topics & Issues</h1>
      <p className="text-gray-600 mb-8">
        Explore Nigel Farage's positions on the key political issues of our time.
      </p>

      {/* Major Topics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Major Topics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {major.map((topic) => (
            <a 
              key={topic.id}
              href={`/topics/${topic.slug}`}
              className="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow block"
            >
              <h3 className="text-xl font-bold mb-1">{topic.title}</h3>
              <p className="text-blue-600 text-sm mb-2">{topic.subtitle}</p>
              <p className="text-gray-600 text-sm line-clamp-3">{topic.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Policy Topics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Policy Areas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {policy.map((topic) => (
            <a 
              key={topic.id}
              href={`/topics/${topic.slug}`}
              className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow block"
            >
              <h3 className="text-xl font-bold mb-1">{topic.title}</h3>
              <p className="text-blue-600 text-sm mb-2">{topic.subtitle}</p>
              <p className="text-gray-600 text-sm line-clamp-3">{topic.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* International */}
      {other.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">International</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {other.map((topic) => (
              <a 
                key={topic.id}
                href={`/topics/${topic.slug}`}
                className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow block"
              >
                <h3 className="text-xl font-bold mb-1">{topic.title}</h3>
                <p className="text-blue-600 text-sm mb-2">{topic.subtitle}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{topic.description}</p>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
