import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

type Props = {
  params: { slug: string }
}

const comparisons: Record<string, {
  title: string
  description: string
  person1: { name: string; points: string[] }
  person2: { name: string; points: string[] }
  keyDifferences: string[]
  summary: string
}> = {
  'farage-vs-starmer': {
    title: 'Nigel Farage vs Keir Starmer',
    description: 'Comparing the Reform UK leader with the Labour Prime Minister on key issues.',
    person1: {
      name: 'Nigel Farage',
      points: [
        'Leader of Reform UK',
        'MP for Clacton since 2024',
        'Former commodities trader',
        'Brexit architect',
        'Right-wing populist',
        'Anti-establishment positioning'
      ]
    },
    person2: {
      name: 'Keir Starmer',
      points: [
        'Labour Prime Minister',
        'MP for Holborn & St Pancras',
        'Former Director of Public Prosecutions',
        'Remained in EU referendum',
        'Centre-left positioning',
        'Establishment background'
      ]
    },
    keyDifferences: [
      'Immigration: Farage wants to freeze immigration and leave ECHR; Starmer supports managed migration',
      'Brexit: Farage led the Leave campaign; Starmer campaigned to Remain and later for second referendum',
      'Economy: Farage favors tax cuts and deregulation; Starmer supports higher public spending',
      'Climate: Farage opposes Net Zero; Starmer committed to green energy transition',
      'Style: Farage is confrontational populist; Starmer is technocratic and cautious'
    ],
    summary: 'Farage and Starmer represent opposite ends of British politics. Farage appeals to voters who feel left behind by globalization and immigration, while Starmer represents metropolitan, progressive values. Their clash will likely define the next election.'
  },
  'farage-vs-sunak': {
    title: 'Nigel Farage vs Rishi Sunak',
    description: 'Comparing the Reform UK leader with the former Conservative Prime Minister.',
    person1: {
      name: 'Nigel Farage',
      points: [
        'Leader of Reform UK',
        'Never held government office',
        'City trader background',
        'Positioned as outsider',
        'Brexit hardliner',
        'Opposes Net Zero'
      ]
    },
    person2: {
      name: 'Rishi Sunak',
      points: [
        'Former Prime Minister (2022-2024)',
        'Former Chancellor',
        'Goldman Sachs background',
        'Stanford MBA',
        'Supported Brexit (Leave voter)',
        'Committed to Net Zero by 2050'
      ]
    },
    keyDifferences: [
      'Immigration: Both talk tough, but Farage says Sunak failed to deliver',
      'Tax: Farage wants bigger cuts; Sunak raised taxes as Chancellor',
      'Net Zero: Farage wants to scrap it; Sunak delayed some targets but kept commitment',
      'Rwanda: Both supported it, but Farage says it was too little too late',
      'Style: Farage attacks establishment; Sunak is quintessential establishment'
    ],
    summary: 'Sunak and Farage competed for similar voters in 2024, with Farage successfully arguing that the Conservatives had failed to deliver on Brexit promises. Many Tory voters switched to Reform, contributing to the Conservative collapse.'
  },
  'farage-vs-boris': {
    title: 'Nigel Farage vs Boris Johnson',
    description: 'Two of Brexits biggest figures - allies or rivals?',
    person1: {
      name: 'Nigel Farage',
      points: [
        'UKIP/Brexit Party/Reform UK leader',
        'Campaigned for Brexit for 25 years',
        'Never held Cabinet office',
        'Outsider positioning',
        'Led Leave.EU campaign',
        'Critical of Boris\'s Brexit deal'
      ]
    },
    person2: {
      name: 'Boris Johnson',
      points: [
        'Prime Minister 2019-2022',
        'Led Vote Leave campaign',
        'Delivered Brexit (formally)',
        'Former Mayor of London',
        'Former Foreign Secretary',
        'Resigned over Partygate'
      ]
    },
    keyDifferences: [
      'Brexit: Both supported Leave, but led rival campaigns',
      'Deal: Boris signed withdrawal agreement; Farage said it was a betrayal',
      'Establishment: Boris is establishment; Farage claims outsider status',
      'Electability: Boris won landslide 2019; Farage never won Westminster seat until 2024',
      'Style: Both charismatic populists, but Boris more mainstream-acceptable'
    ],
    summary: 'Farage and Boris were both central to Brexit but maintained a complex relationship. Farage stood down Brexit Party candidates in 2019 to help Boris win, but later criticized the Brexit deal Boris negotiated.'
  },
  'reform-vs-conservatives': {
    title: 'Reform UK vs Conservative Party',
    description: 'How do the two right-of-centre parties compare on policy?',
    person1: {
      name: 'Reform UK',
      points: [
        'Founded 2018 (as Brexit Party)',
        '5 MPs (as of 2024)',
        'Leader: Nigel Farage',
        'Populist right positioning',
        'Anti-establishment',
        'Polling at 23-25%'
      ]
    },
    person2: {
      name: 'Conservative Party',
      points: [
        'Founded 1834',
        '121 MPs (after 2024)',
        'Leader: Kemi Badenoch',
        'Centre-right (historically)',
        'Establishment party',
        'Polling at 20-24%'
      ]
    },
    keyDifferences: [
      'Immigration: Reform wants to leave ECHR and freeze immigration; Tories talk tough but failed to deliver',
      'Net Zero: Reform wants to scrap it; Tories committed to 2050 target',
      'Tax: Reform wants major cuts; Tories raised taxes in government',
      'NHS: Reform open to reform/insurance elements; Tories officially committed to current model',
      'Electoral Reform: Reform supports proportional representation; Tories benefit from FPTP'
    ],
    summary: 'Reform UK positions itself as what the Conservative Party should be but isn\'t. Many Reform voters are former Conservatives who feel betrayed on immigration, tax, and Brexit implementation.'
  },
  'reform-vs-labour': {
    title: 'Reform UK vs Labour Party',
    description: 'Opposite ends of British politics - how do they compare?',
    person1: {
      name: 'Reform UK',
      points: [
        'Right-wing populist',
        '5 MPs',
        'Anti-immigration focus',
        'Tax-cutting agenda',
        'Climate skeptic',
        'Leave ECHR'
      ]
    },
    person2: {
      name: 'Labour Party',
      points: [
        'Centre-left',
        'Governing party (2024-)',
        'Managed migration approach',
        'Higher public spending',
        'Green energy investment',
        'Human rights commitment'
      ]
    },
    keyDifferences: [
      'Immigration: Fundamental disagreement - Reform wants radical reduction; Labour supports controlled migration',
      'Economy: Reform wants tax cuts and deregulation; Labour wants investment and workers\' rights',
      'Climate: Reform opposes Net Zero; Labour committed to green transition',
      'Public Services: Reform skeptical of state; Labour believes in public investment',
      'Voter Base: Reform appeals to working-class Leave voters; Labour\'s base is urban progressives'
    ],
    summary: 'Reform UK and Labour represent the key divide in modern British politics: nationalist populism vs progressive globalism. Many traditional Labour voters in Leave-voting areas have switched to Reform.'
  },
  'farage-vs-tice': {
    title: 'Nigel Farage vs Richard Tice',
    description: 'The two leaders of Reform UK - what are the differences?',
    person1: {
      name: 'Nigel Farage',
      points: [
        'Party Leader',
        'MP for Clacton',
        'Former commodities trader',
        'Media personality',
        'Face of Brexit',
        'Confrontational style'
      ]
    },
    person2: {
      name: 'Richard Tice',
      points: [
        'Deputy Leader',
        'MP for Boston & Skegness',
        'Property developer',
        'Net worth ~£40m',
        'Co-founded Leave.EU',
        'More business-focused'
      ]
    },
    keyDifferences: [
      'Profile: Farage is the star; Tice is the organizer',
      'Wealth: Tice is significantly wealthier',
      'Style: Farage is more provocative; Tice more businesslike',
      'Background: Farage from trading; Tice from property',
      'Role: Farage is the face; Tice builds the party infrastructure'
    ],
    summary: 'Farage and Tice complement each other - Farage brings the profile and media attention, while Tice brings business acumen and organizational skills. Tice led the party from 2021-2024 before Farage returned.'
  },
  'ukip-vs-reform': {
    title: 'UKIP vs Reform UK',
    description: 'Farage\'s two parties - what changed?',
    person1: {
      name: 'UKIP',
      points: [
        'Founded 1993',
        'Single-issue: Leave EU',
        'Won 2014 European elections',
        'Farage led 2006-2009, 2010-2016',
        'Declined after Brexit',
        'Now a fringe party'
      ]
    },
    person2: {
      name: 'Reform UK',
      points: [
        'Founded 2018 (as Brexit Party)',
        'Broader populist platform',
        'Won 2019 European elections',
        'Farage returned as leader 2024',
        'Currently leading polls',
        'Potential governing party'
      ]
    },
    keyDifferences: [
      'Focus: UKIP was single-issue (EU); Reform has broader platform',
      'Leadership: UKIP had internal conflicts; Reform more controlled',
      'Success: UKIP achieved Brexit; Reform aiming for government',
      'Brand: UKIP became toxic; Reform has cleaner image',
      'Farage: Left UKIP over Tommy Robinson associations'
    ],
    summary: 'Reform UK is essentially Farage\'s third party (after UKIP and Brexit Party), but with lessons learned. It has a broader platform, cleaner brand, and more professional organization.'
  }
}

const slugs = Object.keys(comparisons)

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = comparisons[params.slug]
  if (!data) return { title: 'Comparison Not Found' }
  
  return {
    title: data.title,
    description: data.description,
  }
}

export default function ComparePage({ params }: Props) {
  const data = comparisons[params.slug]
  
  if (!data) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/compare" className="text-blue-600 hover:underline text-sm">← All Comparisons</Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{data.description}</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">{data.person1.name}</h2>
          <ul className="space-y-2">
            {data.person1.points.map((point, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-4">{data.person2.name}</h2>
          <ul className="space-y-2">
            {data.person2.points.map((point, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-red-600">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 border rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Differences</h2>
        <ul className="space-y-3">
          {data.keyDifferences.map((diff, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-gray-400 font-bold">{i + 1}.</span>
              <span>{diff}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-gray-700">{data.summary}</p>
      </div>
    </div>
  )
}
