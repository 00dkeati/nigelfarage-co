import { Metadata } from 'next'
import people from '@/data/people.json'

export const metadata: Metadata = {
  title: 'Reform UK People - MPs, Leadership & Key Figures',
  description: 'Meet the key figures in Reform UK including Nigel Farage, Richard Tice, and the party\'s MPs and frontbench team.',
}

export default function PeoplePage() {
  const leadership = people.filter(p => p.category === 'leader' || p.category === 'leadership')
  const frontbench = people.filter(p => p.category === 'frontbench')
  const mps = people.filter(p => p.category === 'mp')
  const others = people.filter(p => p.category === 'former' || p.category === 'ally')

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Key People</h1>
      <p className="text-gray-600 mb-8">
        The leadership, MPs, and key figures in Reform UK and the Brexit movement.
      </p>

      {/* Leadership */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Leadership</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((person) => (
            <a 
              key={person.id}
              href={`/people/${person.slug}`}
              className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow block"
            >
              <h3 className="text-xl font-bold mb-1">{person.name}</h3>
              <p className="text-blue-600 mb-2">{person.role}</p>
              {person.constituency && (
                <p className="text-gray-500 text-sm mb-2">MP for {person.constituency}</p>
              )}
              <p className="text-gray-600 text-sm">{person.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Frontbench */}
      {frontbench.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Frontbench</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {frontbench.map((person) => (
              <a 
                key={person.id}
                href={`/people/${person.slug}`}
                className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow block"
              >
                <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                <p className="text-blue-600 mb-2">{person.role}</p>
                <p className="text-gray-600 text-sm">{person.description}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* MPs */}
      {mps.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Members of Parliament</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mps.map((person) => (
              <a 
                key={person.id}
                href={`/people/${person.slug}`}
                className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow block"
              >
                <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                <p className="text-blue-600 mb-2">{person.role}</p>
                {person.constituency && (
                  <p className="text-gray-500 text-sm mb-2">MP for {person.constituency}</p>
                )}
                <p className="text-gray-600 text-sm">{person.description}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Others */}
      {others.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Key Allies & Former Members</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((person) => (
              <a 
                key={person.id}
                href={`/people/${person.slug}`}
                className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow block"
              >
                <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                <p className="text-blue-600 mb-2">{person.role}</p>
                <p className="text-gray-600 text-sm">{person.description}</p>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
