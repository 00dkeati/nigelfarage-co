import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import quotes from '@/data/quotes.json'

type Props = {
  params: { id: string }
}

export async function generateStaticParams() {
  return quotes.map((quote) => ({
    id: quote.id.toString(),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const quote = quotes.find((q) => q.id.toString() === params.id)
  if (!quote) return { title: 'Quote Not Found' }
  
  const shortQuote = quote.quote.length > 60 ? quote.quote.substring(0, 60) + '...' : quote.quote
  
  return {
    title: `"${shortQuote}" - Nigel Farage Quote`,
    description: `Nigel Farage: "${quote.quote}" - ${quote.context}, ${quote.date}`,
  }
}

export default function QuotePage({ params }: Props) {
  const quote = quotes.find((q) => q.id.toString() === params.id)
  
  if (!quote) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <a href="/quotes" className="text-blue-600 hover:underline text-sm">← All Quotes</a>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-lg p-8 md:p-12">
        <blockquote className="text-2xl md:text-3xl font-serif italic mb-6 leading-relaxed">
          "{quote.quote}"
        </blockquote>
        
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            NF
          </div>
          <div>
            <p className="font-bold text-lg">Nigel Farage</p>
            <p className="text-gray-600">{quote.context}</p>
            <p className="text-gray-500 text-sm">{quote.date}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {quote.category.map(cat => (
          <span key={cat} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm capitalize">
            {cat}
          </span>
        ))}
      </div>

      <div className="mt-8 text-sm text-gray-500">
        Source: {quote.source}
      </div>

      {/* Share buttons placeholder */}
      <div className="mt-8 pt-8 border-t">
        <p className="text-gray-600 mb-4">Share this quote:</p>
        <div className="flex gap-4">
          <a 
            href={`https://twitter.com/intent/tweet?text="${encodeURIComponent(quote.quote)}" - Nigel Farage&url=${encodeURIComponent('https://nigelfarage.co/quotes/' + quote.id)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Share on X
          </a>
        </div>
      </div>
    </div>
  )
}
