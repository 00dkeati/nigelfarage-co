import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Political Comparisons - Nigel Farage vs Other Politicians',
  description: 'Compare Nigel Farage and Reform UK with other politicians and parties. Farage vs Starmer, Reform vs Conservatives, and more.',
}

const comparisons = [
  { 
    slug: 'farage-vs-starmer', 
    title: 'Farage vs Starmer', 
    description: 'Reform UK leader vs Labour PM',
    icon: '⚔️'
  },
  { 
    slug: 'farage-vs-sunak', 
    title: 'Farage vs Sunak', 
    description: 'Reform UK vs former Conservative PM',
    icon: '🥊'
  },
  { 
    slug: 'farage-vs-boris', 
    title: 'Farage vs Boris Johnson', 
    description: 'Two Brexit champions compared',
    icon: '🤝'
  },
  { 
    slug: 'reform-vs-conservatives', 
    title: 'Reform UK vs Conservatives', 
    description: 'Policy comparison of right-wing parties',
    icon: '📊'
  },
  { 
    slug: 'reform-vs-labour', 
    title: 'Reform UK vs Labour', 
    description: 'Populist right vs progressive left',
    icon: '🔴'
  },
  { 
    slug: 'farage-vs-tice', 
    title: 'Farage vs Tice', 
    description: 'Reform UK\'s two leaders compared',
    icon: '👥'
  },
  { 
    slug: 'ukip-vs-reform', 
    title: 'UKIP vs Reform UK', 
    description: 'Farage\'s two parties - what changed?',
    icon: '🔄'
  },
]

export default function ComparisonsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Political Comparisons</h1>
      <p className="text-xl text-gray-600 mb-8">
        How does Nigel Farage compare to other politicians? How does Reform UK differ from other parties?
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {comparisons.map((comp) => (
          <Link 
            key={comp.slug}
            href={`/compare/${comp.slug}`}
            className="bg-white border rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition"
          >
            <div className="text-3xl mb-2">{comp.icon}</div>
            <h2 className="text-xl font-bold mb-1">{comp.title}</h2>
            <p className="text-gray-600 text-sm">{comp.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
