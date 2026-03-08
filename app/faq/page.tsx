import { Metadata } from 'next'
import faq from '@/data/faq.json'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions About Nigel Farage',
  description: 'Common questions about Nigel Farage answered: his age, net worth, political career, Reform UK, Brexit, and more.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ - Frequently Asked Questions About Nigel Farage',
    description: 'Common questions about Nigel Farage answered: his age, net worth, political career, Reform UK, Brexit, and more.',
    url: '/faq',
  },
}

export default function FAQPage() {
  const general = faq.filter(q => q.category === 'general')
  const politics = faq.filter(q => q.category === 'politics')
  const personal = faq.filter(q => q.category === 'personal')
  const policy = faq.filter(q => q.category === 'policy')
  const other = faq.filter(q => !['general', 'politics', 'personal', 'policy'].includes(q.category))

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-8">
        Common questions about Nigel Farage, Reform UK, and his political career.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">General</h2>
        <div className="space-y-4">
          {general.map((item) => (
            <a 
              key={item.id}
              href={`/faq/${item.slug}`}
              className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg">{item.question}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.answer}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Politics</h2>
        <div className="space-y-4">
          {politics.map((item) => (
            <a 
              key={item.id}
              href={`/faq/${item.slug}`}
              className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg">{item.question}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.answer}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Personal</h2>
        <div className="space-y-4">
          {personal.map((item) => (
            <a 
              key={item.id}
              href={`/faq/${item.slug}`}
              className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg">{item.question}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.answer}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Policy Positions</h2>
        <div className="space-y-4">
          {policy.map((item) => (
            <a 
              key={item.id}
              href={`/faq/${item.slug}`}
              className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg">{item.question}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.answer}</p>
            </a>
          ))}
        </div>
      </section>

      {other.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Other</h2>
          <div className="space-y-4">
            {other.map((item) => (
              <a 
                key={item.id}
                href={`/faq/${item.slug}`}
                className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg">{item.question}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.answer}</p>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
