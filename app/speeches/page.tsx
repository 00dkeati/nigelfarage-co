import { Metadata } from 'next'
import speeches from '@/data/speeches.json'

export const metadata: Metadata = {
  title: 'Nigel Farage Speeches - Famous Addresses & Parliamentary Moments',
  description: 'Watch and read Nigel Farage\'s most famous speeches from the European Parliament to Brexit victory.',
}

export default function SpeechesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Famous Speeches</h1>
      <p className="text-gray-600 mb-8">
        Nigel Farage's most memorable speeches and parliamentary moments.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {speeches.map((speech) => (
          <a 
            key={speech.id}
            href={`/speeches/${speech.slug}`}
            className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs capitalize">
                {speech.category.replace('-', ' ')}
              </span>
              <span>•</span>
              <time>{new Date(speech.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            </div>
            <h2 className="text-xl font-bold mb-2">{speech.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{speech.venue}</p>
            <p className="text-gray-500 text-sm">{speech.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
