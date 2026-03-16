import { Metadata } from 'next'
import policies from '@/data/policies.json'

export const metadata: Metadata = {
  title: 'Nigel Farage Policies - Reform UK Policy Positions 2024',
  description: 'Complete guide to Nigel Farage\'s policies: immigration, economy, NHS, energy, and electoral reform. What does Farage stand for? All Reform UK positions explained.',
  alternates: {
    canonical: '/policies',
  },
  openGraph: {
    title: 'Nigel Farage Policies - Reform UK Policy Positions 2024',
    description: 'Complete guide to Nigel Farage\'s policies on immigration, economy, NHS, energy, and more.',
    url: '/policies',
  },
}

const policyDetails: Record<string, { icon: string; description: string; details: string[] }> = {
  'Immigration': {
    icon: '🛂',
    description: 'Farage has made immigration control a central pillar of his political career, from his UKIP days through to leading Reform UK.',
    details: [
      'Advocates for a complete freeze on non-essential immigration until infrastructure catches up',
      'Wants the UK to leave the European Convention on Human Rights (ECHR) to enable deportations',
      'Supports a strict Australian-style points-based immigration system',
      'Calls for immediate deportation of illegal immigrants and asylum seekers who arrive via small boats',
      'Proposes ending the use of hotels to house asylum seekers'
    ]
  },
  'Economy': {
    icon: '💷',
    description: 'Farage champions low-tax, small-government economics, drawing on his background as a City commodities trader.',
    details: [
      'Proposes raising the income tax threshold to £20,000, taking millions out of income tax',
      'Wants to abolish inheritance tax entirely, calling it a "death tax"',
      'Advocates scrapping net zero policies which he argues cost British families thousands',
      'Supports significant cuts to government spending and bureaucracy',
      'Opposes the Bank of England\'s monetary policy approach'
    ]
  },
  'Electoral Reform': {
    icon: '🗳️',
    description: 'Farage has raised concerns about electoral integrity and advocates for reforms to the voting system.',
    details: [
      'Wants strict voter ID requirements for all elections',
      'Proposes significant restrictions on postal voting, limiting it to those who genuinely cannot attend polls',
      'Argues only British citizens should vote in national elections (not Commonwealth citizens)',
      'Calls for reform of the House of Lords',
      'Supports investigation into electoral fraud'
    ]
  },
  'Energy': {
    icon: '⚡',
    description: 'Farage is a vocal critic of net zero policies, advocating for energy independence through domestic fossil fuel production.',
    details: [
      'Wants to scrap the net zero 2050 target entirely',
      'Supports fast-tracking North Sea oil and gas exploration and extraction',
      'Opposes new wind farm developments, particularly onshore',
      'Advocates for fracking to access shale gas reserves',
      'Argues current green policies make energy unaffordable for ordinary families'
    ]
  },
  'NHS & Health': {
    icon: '🏥',
    description: 'While committed to free healthcare at point of use, Farage has suggested reforms to how the NHS operates.',
    details: [
      'Proposes bringing back hospital matrons to improve ward management',
      'Wants significant cuts to NHS management and bureaucracy',
      'Supports training more British doctors rather than relying on overseas recruitment',
      'Has discussed insurance-based healthcare models as potential considerations',
      'Advocates for reducing waiting times through private sector involvement'
    ]
  },
  'Foreign Policy': {
    icon: '🌍',
    description: 'Farage advocates for a sovereign Britain with strong transatlantic ties and reduced EU involvement.',
    details: [
      'Champions a strong UK-US "special relationship"',
      'Opposes any realignment with EU regulations or institutions post-Brexit',
      'Supports Israel and has been critical of the UN and international bodies',
      'Wants to review and reduce foreign aid spending',
      'Advocates for stronger British military presence and NATO commitment'
    ]
  }
}

export default function PoliciesPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Nigel Farage Policies - Complete Guide to Reform UK Positions',
    description: 'Comprehensive overview of Nigel Farage\'s policy positions on immigration, economy, NHS, energy, and electoral reform.',
    author: {
      '@type': 'Organization',
      name: 'NigelFarage.co'
    },
    dateModified: policies.lastUpdated
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Nigel Farage Policies</h1>
        <p className="text-xl text-gray-600 mb-2">
          A comprehensive guide to where Farage stands on the key issues facing Britain.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: {new Date(policies.lastUpdated).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-blue-800">
            <strong>Quick Summary:</strong> Farage advocates for controlled immigration, lower taxes, 
            scrapping net zero, NHS reform, and electoral integrity measures. As Leader of Reform UK 
            and MP for Clacton, these policies form the party's core platform.
          </p>
        </div>

        {policies.policies.map((policy) => {
          const details = policyDetails[policy.category]
          return (
            <section key={policy.category} className="mb-12" id={policy.category.toLowerCase().replace(/[^a-z]/g, '-')}>
              <h2 className="text-2xl font-bold mb-4 text-blue-800 flex items-center gap-3">
                <span className="text-3xl">{details?.icon}</span>
                {policy.category}
              </h2>
              
              {details && (
                <p className="text-gray-600 mb-4">{details.description}</p>
              )}

              <div className="bg-white border rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-3 text-gray-800">Key Positions:</h3>
                <ul className="space-y-2">
                  {policy.positions.map((position, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>{position}</span>
                    </li>
                  ))}
                </ul>

                {details?.details && (
                  <>
                    <h3 className="font-semibold mt-6 mb-3 text-gray-800">In Detail:</h3>
                    <ul className="space-y-2 text-gray-700">
                      {details.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </section>
          )
        })}

        <section className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Farage's Political Evolution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              Nigel Farage's policy positions have remained remarkably consistent since he left 
              the Conservative Party in 1992 over the Maastricht Treaty. His core beliefs — 
              Euroscepticism, controlled immigration, and small-government economics — have 
              formed the backbone of every political movement he has led.
            </p>
            <p className="mb-4">
              From founding UKIP in 1993, to leading the Brexit campaign, to now heading 
              Reform UK as its leader and an elected MP, Farage has maintained that Britain 
              should be a sovereign nation with control over its borders, laws, and economy.
            </p>
            <p>
              Whether you agree with his positions or not, Farage's influence on British 
              politics — particularly on the issues of EU membership and immigration — has 
              been undeniable. The 2016 Brexit referendum result stands as the most significant 
              policy victory attributed to his decades of campaigning.
            </p>
          </div>
        </section>

        <section className="mt-8 bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold mb-2">Related Pages</h3>
          <div className="flex flex-wrap gap-4">
            <a href="/quotes" className="text-blue-600 hover:underline">Farage Quotes →</a>
            <a href="/biography" className="text-blue-600 hover:underline">Biography →</a>
            <a href="/faq" className="text-blue-600 hover:underline">FAQ →</a>
          </div>
        </section>
      </div>
    </>
  )
}
