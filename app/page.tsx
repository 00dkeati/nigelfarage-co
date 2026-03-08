import { Metadata } from 'next'
import quotes from '@/data/quotes.json'
import timeline from '@/data/timeline.json'
import news from '@/data/news.json'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  const latestEvents = timeline.slice(-3).reverse()
  const featuredQuotes = quotes.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/nigel_farage_stage_june_2024_cropped.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="/images/official-portrait-mp.jpg" 
                alt="Nigel Farage - Official Parliamentary Portrait"
                className="w-48 h-60 object-cover rounded-lg shadow-2xl border-4 border-white/20"
              />
            </div>
            <div>
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

      {/* Photo Gallery */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/images/nigel_farage_in_parliament.jpg" alt="Nigel Farage in Parliament" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/images/reform_mps_in_parliament.jpg" alt="Reform UK MPs" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/images/donald_trump_and_nigel_farage_behind_the_scene_of_2018_cpac_cropped.jpg" alt="Farage with Donald Trump" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/images/nigel_farage_addressing_reform_uk_rally_at_trago_mills_devon.jpg" alt="Reform UK Rally" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/images/european_elections_2019_-_vote_nigel_farage_efdd_uk_efdd_group_leader_in_the_uk_01.jpg" alt="EU Elections 2019" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/images/gallois_and_farage_31_janvier_2020.jpg" alt="Brexit Day Celebration" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/images/nigel_farage_mep_1_strasbourg_-_diliff.jpg" alt="Farage at European Parliament" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/images/prime_ministers_questions_11_september_2024_22.jpg" alt="Prime Minister's Questions" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Images from Wikimedia Commons • CC BY-SA</p>
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
