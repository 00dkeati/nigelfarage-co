import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import people from '@/data/people.json'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return people.map((person) => ({
    slug: person.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const person = people.find((p) => p.slug === params.slug)
  if (!person) return { title: 'Person Not Found' }
  
  return {
    title: `${person.name} - ${person.role}`,
    description: person.description,
  }
}

export default function PersonPage({ params }: Props) {
  const person = people.find((p) => p.slug === params.slug)
  
  if (!person) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <a href="/people" className="text-blue-600 hover:underline text-sm">← All People</a>
      </div>

      <div className="bg-white border rounded-lg p-8">
        <div className="flex items-start gap-6">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-gray-400">
            Photo
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{person.name}</h1>
            <p className="text-xl text-blue-600 mb-2">{person.role}</p>
            {person.constituency && (
              <p className="text-gray-600 mb-2">MP for {person.constituency}</p>
            )}
            <p className="text-gray-600 mb-4">{person.party}</p>
          </div>
        </div>

        <div className="mt-8 prose prose-lg max-w-none">
          <p>{person.description}</p>
          
          {person.previousParty && (
            <p className="text-gray-600">
              Previously a member of the <strong>{person.previousParty}</strong> party.
            </p>
          )}

          {person.born && (
            <p className="text-gray-500 text-sm mt-4">
              Born: {new Date(person.born).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          )}

          {(person as any).website && (
            <a 
              href={(person as any).website}
              target="_blank"
              rel="noopener"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Visit Official Website →
            </a>
          )}

          {(person as any).leftReform && (
            <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> This person left Reform UK in {(person as any).leftReform} and is no longer affiliated with the party.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
