import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import faq from '@/data/faq.json'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return faq.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = faq.find((q) => q.slug === params.slug)
  if (!item) return { title: 'Question Not Found' }
  
  return {
    title: `${item.question} | Nigel Farage FAQ`,
    description: item.answer.substring(0, 160),
  }
}

export default function FAQItemPage({ params }: Props) {
  const item = faq.find((q) => q.slug === params.slug)
  
  if (!item) {
    notFound()
  }

  const related = faq
    .filter(q => q.category === item.category && q.id !== item.id)
    .slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <a href="/faq" className="text-blue-600 hover:underline text-sm">← All FAQs</a>
      </div>

      <article className="bg-white border rounded-lg p-8">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm capitalize mb-4 inline-block">
          {item.category}
        </span>
        
        <h1 className="text-3xl font-bold mb-6">{item.question}</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">Related Questions</h2>
          <div className="space-y-3">
            {related.map((q) => (
              <a 
                key={q.id}
                href={`/faq/${q.slug}`}
                className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium">{q.question}</span>
              </a>
            ))}
          </div>
        </section>
      )}

      <div className="mt-8 pt-8 border-t text-center text-gray-500">
        <p>Have a question we haven't answered? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a></p>
      </div>
    </div>
  )
}
