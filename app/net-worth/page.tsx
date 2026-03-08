import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nigel Farage Net Worth 2025 - Salary, Income & Wealth',
  description: 'Nigel Farage net worth in 2025 is estimated at £4-5 million. Learn about his MP salary, media earnings, speaking fees, and business interests.',
  alternates: {
    canonical: '/net-worth',
  },
  openGraph: {
    title: 'Nigel Farage Net Worth 2025 - Salary, Income & Wealth',
    description: 'Nigel Farage net worth in 2025 is estimated at £4-5 million. Learn about his MP salary, media earnings, speaking fees, and business interests.',
    url: '/net-worth',
  },
}

export default function NetWorthPage() {
  const incomeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Nigel Farage Net Worth 2025',
    description: 'Comprehensive breakdown of Nigel Farage\'s wealth, income sources, and financial history.',
    author: {
      '@type': 'Organization',
      name: 'NigelFarage.co'
    },
    datePublished: '2025-01-01',
    dateModified: new Date().toISOString().split('T')[0]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(incomeSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Nigel Farage Net Worth 2025</h1>
        <p className="text-xl text-gray-600 mb-8">
          How much is Nigel Farage worth? A comprehensive breakdown of his wealth, income sources, and financial history.
        </p>

        {/* Quick Answer Box */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Quick Answer</h2>
          <p className="text-3xl font-bold text-blue-800">£4-5 Million</p>
          <p className="text-gray-600 mt-2">Estimated net worth as of 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Income Sources</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">🏛️ MP Salary</h3>
              <p className="text-2xl font-bold text-green-600">£91,346/year</p>
              <p className="text-gray-600 text-sm">Base salary for Member of Parliament (2024-25)</p>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">📺 Media Work</h3>
              <p className="text-2xl font-bold text-green-600">£400,000+/year</p>
              <p className="text-gray-600 text-sm">GB News presenting, guest appearances</p>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">🎤 Speaking Fees</h3>
              <p className="text-2xl font-bold text-green-600">£20,000-50,000</p>
              <p className="text-gray-600 text-sm">Per speaking engagement (US events pay more)</p>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">🇪🇺 MEP Pension</h3>
              <p className="text-2xl font-bold text-green-600">~£70,000/year</p>
              <p className="text-gray-600 text-sm">European Parliament pension (20 years service)</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-blue-800">Career Earnings History</h2>
          
          <section className="mb-8">
            <h3 className="text-xl font-bold mb-3">City of London (1982-1999)</h3>
            <p className="mb-4">
              Before entering politics full-time, Farage worked as a commodities trader in the City of London 
              for 17 years. During the 1980s and 1990s boom years, successful traders could earn substantial 
              incomes. Farage specialized in metals trading, dealing in gold, silver, and other commodities.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-3">MEP Salary (1999-2020)</h3>
            <p className="mb-4">
              As a Member of the European Parliament for 21 years, Farage earned approximately:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Basic salary: €8,757/month (final years)</li>
              <li>General expenditure allowance: €4,513/month</li>
              <li>Daily subsistence allowance: €320/day when attending</li>
              <li>Travel expenses reimbursed</li>
            </ul>
            <p className="mt-4">
              Over 21 years, his total MEP earnings are estimated at over £4 million in salary alone.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-3">Media Career</h3>
            <p className="mb-4">
              Farage has built a substantial media presence:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>GB News:</strong> Regular presenter since 2021, reported salary £400,000+</li>
              <li><strong>LBC Radio:</strong> Former presenter (2017-2020)</li>
              <li><strong>Fox News:</strong> Frequent contributor and commentator</li>
              <li><strong>I'm A Celebrity 2023:</strong> Reported fee of £1.5 million</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-3">Speaking Engagements</h3>
            <p className="mb-4">
              Farage commands high fees for speaking engagements, particularly in the United States:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>CPAC appearances: $25,000-50,000</li>
              <li>Corporate events: £20,000-30,000</li>
              <li>Republican fundraisers: Varies significantly</li>
            </ul>
          </section>

          <h2 className="text-2xl font-bold mb-4 text-blue-800">Assets & Lifestyle</h2>
          
          <p className="mb-4">
            Farage has been relatively private about his personal assets. Known information includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Primary residence in Kent</li>
            <li>Previously owned property in Chelsea, London</li>
            <li>Known for frequenting pubs - often photographed with a pint</li>
            <li>No known significant property portfolio or business investments</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-blue-800">Comparison to Other Politicians</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Politician</th>
                  <th className="text-right py-2">Estimated Net Worth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Rishi Sunak</td>
                  <td className="text-right font-bold">£730 million</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Boris Johnson</td>
                  <td className="text-right font-bold">£10+ million</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Nigel Farage</td>
                  <td className="text-right font-bold">£4-5 million</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Keir Starmer</td>
                  <td className="text-right font-bold">£2-3 million</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-blue-800">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-bold">How much does Nigel Farage earn as an MP?</h3>
              <p className="text-gray-600 mt-2">As MP for Clacton, Farage earns the standard MP salary of £91,346 per year (2024-25 rate).</p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-bold">What is Nigel Farage's GB News salary?</h3>
              <p className="text-gray-600 mt-2">Farage's GB News salary is reported to be over £400,000 per year for his presenting role.</p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-bold">How much did Farage make from I'm A Celebrity?</h3>
              <p className="text-gray-600 mt-2">Reports suggest Farage was paid approximately £1.5 million for his appearance on I'm A Celebrity in 2023.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-gray-500">
            Last updated: March 2025. Net worth estimates are based on publicly available information 
            including parliamentary records, media reports, and financial disclosures.
          </p>
        </div>
      </div>
    </>
  )
}
