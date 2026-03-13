import { Metadata } from 'next'
import policies from '@/data/policies.json'

export const metadata: Metadata = {
  title: 'Reform UK Policies - What Does Reform UK Stand For?',
  description: 'Complete breakdown of Reform UK policies on immigration, economy, NHS, energy and more. Led by Nigel Farage.',
  alternates: {
    canonical: '/reform-uk',
  },
  openGraph: {
    title: 'Reform UK Policies - What Does Reform UK Stand For?',
    description: 'Complete breakdown of Reform UK policies on immigration, economy, NHS, energy and more. Led by Nigel Farage.',
    url: '/reform-uk',
  },
}

export default function ReformUKPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Reform UK</h1>
      <p className="text-gray-600 mb-8">
        Reform UK is a populist political party founded in 2021 (as a rebrand of the Brexit Party). 
        Led by Nigel Farage, the party has been leading national polls since 2025.
      </p>

      {/* Party stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        <div className="bg-[#1e3a5f] text-white p-6 rounded-lg text-center">
          <div className="text-3xl font-bold">~23%</div>
          <div className="text-blue-200">Current Polling</div>
        </div>
        <div className="bg-[#1e3a5f] text-white p-6 rounded-lg text-center">
          <div className="text-3xl font-bold">5</div>
          <div className="text-blue-200">MPs in Parliament</div>
        </div>
        <div className="bg-[#1e3a5f] text-white p-6 rounded-lg text-center">
          <div className="text-3xl font-bold">4M+</div>
          <div className="text-blue-200">Votes (2024)</div>
        </div>
        <div className="bg-[#1e3a5f] text-white p-6 rounded-lg text-center">
          <div className="text-3xl font-bold">2021</div>
          <div className="text-blue-200">Founded</div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Key Policies</h2>
      <p className="text-sm text-gray-500 mb-6">Last updated: {policies.lastUpdated}</p>

      <div className="grid md:grid-cols-2 gap-6">
        {policies.policies.map((policy, i) => (
          <div key={i} className="policy-card">
            <h3 className="text-xl font-bold mb-4 text-blue-800">{policy.category}</h3>
            <ul className="space-y-2">
              {policy.positions.map((position, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{position}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Restore Britain Split */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">The Restore Britain Split</h2>
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">
            In March 2025, <strong>Rupert Lowe</strong> (MP for Great Yarmouth) was suspended from Reform UK 
            following a dispute with party chairman Zia Yusuf. Lowe subsequently founded 
            <strong> Restore Britain</strong>, which launched as a registered political party in February 2026.
          </p>
          <p className="text-gray-700 mb-4">
            Restore Britain positions itself to the right of Reform UK, with Lowe receiving a high-profile 
            endorsement from <strong>Elon Musk</strong>, who called him "the only one who will actually do it."
          </p>
          <p className="text-gray-700">
            The split has created a rivalry for voters on the right of British politics, with both parties 
            competing for similar demographics ahead of the next general election.
          </p>
          <a 
            href="https://rupertlowe.co" 
            target="_blank" 
            rel="noopener"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
          >
            Learn more about Rupert Lowe and Restore Britain →
          </a>
        </div>
      </section>

      {/* Leadership section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Leadership</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-bold">Nigel Farage</h3>
              <p className="text-blue-600">Party Leader & MP for Clacton</p>
              <p className="mt-2 text-gray-600">
                Farage took over as leader of Reform UK in 2024, bringing his decades of 
                political experience from UKIP and the Brexit campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mt-12 bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm">
        <strong>Note:</strong> This page provides information about Reform UK policies for 
        educational purposes. NigelFarage.co is not affiliated with Reform UK.
      </div>
    </div>
  )
}
