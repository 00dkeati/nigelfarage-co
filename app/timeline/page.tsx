import { Metadata } from 'next'
import timeline from '@/data/timeline.json'

export const metadata: Metadata = {
  title: 'Nigel Farage Timeline - Key Events & Milestones',
  description: 'Complete timeline of Nigel Farage\'s life and political career from 1964 to present. Birth, UKIP, Brexit, Reform UK.',
  alternates: {
    canonical: '/timeline',
  },
  openGraph: {
    title: 'Nigel Farage Timeline - Key Events & Milestones',
    description: 'Complete timeline of Nigel Farage\'s life and political career from 1964 to present.',
    url: '/timeline',
  },
}

export default function TimelinePage() {
  const sortedTimeline = [...timeline].sort((a, b) => b.year - a.year)
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Nigel Farage Timeline</h1>
      <p className="text-gray-600 mb-12">
        Key events and milestones in the life and career of Nigel Farage.
      </p>

      <div className="relative">
        {sortedTimeline.map((event, i) => (
          <div key={i} className="timeline-item">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-sm w-fit">
                {event.year}
              </span>
              <span className={`text-xs px-2 py-1 rounded capitalize ${
                event.category === 'politics' ? 'bg-red-100 text-red-800' :
                event.category === 'personal' ? 'bg-green-100 text-green-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {event.category}
              </span>
            </div>
            <p className="mt-2 text-lg">{event.event}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
