import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import speeches from '@/data/speeches.json'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return speeches.map((speech) => ({
    slug: speech.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const speech = speeches.find((s) => s.slug === params.slug)
  if (!speech) return { title: 'Speech Not Found' }
  
  return {
    title: `${speech.title} - Nigel Farage Speech`,
    description: speech.description,
  }
}

export default function SpeechPage({ params }: Props) {
  const speech = speeches.find((s) => s.slug === params.slug)
  
  if (!speech) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <a href="/speeches" className="text-blue-600 hover:underline">← All Speeches</a>
          <span>•</span>
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs capitalize">
            {speech.category.replace('-', ' ')}
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{speech.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          <span>{speech.venue}</span>
          <span>•</span>
          <time>{new Date(speech.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
          {speech.views && (
            <>
              <span>•</span>
              <span>{parseInt(speech.views).toLocaleString()} views</span>
            </>
          )}
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mb-8">
        <p className="text-lg text-gray-700">{speech.description}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mb-4">Transcript</h2>
        <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700">
          "{speech.transcript}"
        </blockquote>
      </div>

      {speech.videoUrl && (
        <div className="mt-8">
          <a 
            href={speech.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            Watch on YouTube →
          </a>
        </div>
      )}
    </div>
  )
}
