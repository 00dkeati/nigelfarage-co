import quotes from '@/data/quotes.json'
import timeline from '@/data/timeline.json'
import news from '@/data/news.json'

export default function Home() {
  const latestEvents = timeline.slice(-3).reverse()
  const featuredQuotes = quotes.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Nigel Farage</h1>
          <p className="text-xl text-blue-100 mb-6">
            Leader of Reform UK • Former UKIP Leader • Brexit Architect • MP for Clacton
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">🗳️ Reform UK: ~23% in polls</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🏛️ 5 Reform UK MPs</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">📅 Born: 3 April 1964</span>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <a href="/biography" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <span className="text-3xl mb-2 block">📖</span>
              <h3 className="font-bold">Biography</h3>
              <p className="text-gray-600 text-sm">Full life story & career</p>
            </a>
            <a href="/quotes" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <span className="text-3xl mb-2 block">💬</span>
              <h3 className="font-bold">Quotes</h3>
              <p className="text-gray-600 text-sm">Famous statements</p>
            </a>
            <a href="/reform-uk" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <span className="text-3xl mb-2 block">🗳️</span>
              <h3 className="font-bold">Reform UK</h3>
              <p className="text-gray-600 text-sm">Policies & positions</p>
            </a>
            <a href="/timeline" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <span className="text-3xl mb-2 block">📅</span>
              <h3 className="font-bold">Timeline</h3>
              <p className="text-gray-600 text-sm">Key moments</p>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Quotes */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Notable Quotes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredQuotes.map((q) => (
              <div key={q.id} className="quote-card">
                <blockquote className="text-lg italic mb-4">"{q.quote}"</blockquote>
                <p className="text-gray-600 text-sm">{q.context} • {q.date}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/quotes" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              View All Quotes →
            </a>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {news.slice(0, 4).map((item) => (
              <a 
                key={item.id} 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow block"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs capitalize">
                    {item.category}
                  </span>
                  <span>•</span>
                  <span>{item.source}</span>
                </div>
                <h3 className="font-bold mb-2 hover:text-blue-600">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.summary}</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/news" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              All News →
            </a>
          </div>
        </div>
      </section>

      {/* Recent Timeline */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Recent Events</h2>
          <div className="space-y-4">
            {latestEvents.map((event, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-4 rounded-lg">
                <span className="bg-blue-600 text-white px-3 py-1 rounded font-bold">{event.year}</span>
                <p>{event.event}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/timeline" className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
              Full Timeline →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
