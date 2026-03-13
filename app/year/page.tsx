import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nigel Farage Year by Year - Complete Timeline',
  description: 'Explore Nigel Farage\'s political journey year by year from 2010 to 2026. Key events, speeches, and milestones.',
}

const years = [
  { year: 2010, highlight: 'Survives plane crash on election day' },
  { year: 2011, highlight: 'Euro Titanic speech' },
  { year: 2012, highlight: 'Attacks EU Nobel Peace Prize' },
  { year: 2013, highlight: 'UKIP breakthrough in local elections' },
  { year: 2014, highlight: 'Wins European elections' },
  { year: 2015, highlight: '4 million votes, 1 seat' },
  { year: 2016, highlight: 'BREXIT VICTORY' },
  { year: 2017, highlight: 'Article 50 triggered' },
  { year: 2018, highlight: 'Leaves UKIP' },
  { year: 2019, highlight: 'Brexit Party wins EU elections' },
  { year: 2020, highlight: 'Brexit completed' },
  { year: 2021, highlight: 'Reform UK launched' },
  { year: 2022, highlight: 'GB News show' },
  { year: 2023, highlight: 'Coutts scandal & I\'m A Celebrity' },
  { year: 2024, highlight: 'ELECTED TO PARLIAMENT' },
  { year: 2025, highlight: 'Reform leads polls' },
  { year: 2026, highlight: 'Preparing for government?' },
]

export default function YearsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Nigel Farage: Year by Year</h1>
      <p className="text-xl text-gray-600 mb-8">
        Explore the key events of Farage's political career from 2010 to present.
      </p>

      <div className="grid gap-4">
        {years.map(({ year, highlight }) => (
          <Link 
            key={year}
            href={`/year/${year}`}
            className="flex items-center justify-between bg-white border rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-blue-600">{year}</span>
              <span className="text-gray-700">{highlight}</span>
            </div>
            <span className="text-gray-400">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
