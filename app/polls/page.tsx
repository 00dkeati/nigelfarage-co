import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reform UK Polls 2025 - Latest Polling & Approval Ratings',
  description: 'Latest Reform UK polling data and Nigel Farage approval ratings. Track Reform\'s rise in the polls from 2024 to 2025.',
  alternates: {
    canonical: '/polls',
  },
  openGraph: {
    title: 'Reform UK Polls 2025 - Latest Polling & Approval Ratings',
    description: 'Latest Reform UK polling data and Nigel Farage approval ratings. Track Reform\'s rise in the polls.',
    url: '/polls',
  },
}

export default function PollsPage() {
  const pollData = [
    { pollster: 'YouGov', date: 'March 2026', reform: 28, labour: 25, conservative: 21 },
    { pollster: 'Techne', date: 'March 2026', reform: 27, labour: 26, conservative: 22 },
    { pollster: 'More in Common', date: 'Feb 2026', reform: 26, labour: 27, conservative: 23 },
    { pollster: 'Opinium', date: 'Feb 2026', reform: 25, labour: 28, conservative: 22 },
    { pollster: 'Savanta', date: 'Feb 2026', reform: 26, labour: 27, conservative: 21 },
    { pollster: 'Redfield & Wilton', date: 'Feb 2026', reform: 27, labour: 26, conservative: 22 },
  ]

  const pollSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Reform UK Polls 2025-2026 - Latest Polling Data',
    description: 'Comprehensive polling tracker for Reform UK, Labour, and Conservative parties.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pollSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Reform UK Polls 2025-2026</h1>
        <p className="text-xl text-gray-600 mb-8">
          Track Reform UK's polling performance and Nigel Farage's approval ratings.
        </p>

        {/* Current Standing */}
        <div className="bg-[#1e3a5f] text-white p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Current Poll Average (March 2026)</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-4xl font-bold">27%</p>
              <p className="text-blue-200">Reform UK</p>
            </div>
            <div>
              <p className="text-4xl font-bold">26%</p>
              <p className="text-blue-200">Labour</p>
            </div>
            <div>
              <p className="text-4xl font-bold">22%</p>
              <p className="text-blue-200">Conservative</p>
            </div>
          </div>
        </div>

        {/* Poll Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest Polls</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left">Pollster</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-center">Reform UK</th>
                  <th className="px-4 py-3 text-center">Labour</th>
                  <th className="px-4 py-3 text-center">Conservative</th>
                </tr>
              </thead>
              <tbody>
                {pollData.map((poll, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-3 font-medium">{poll.pollster}</td>
                    <td className="px-4 py-3 text-gray-600">{poll.date}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-[#1e3a5f] text-white px-2 py-1 rounded font-bold">{poll.reform}%</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-red-600 text-white px-2 py-1 rounded font-bold">{poll.labour}%</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded font-bold">{poll.conservative}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Polling Milestones</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
              <span className="bg-green-600 text-white px-3 py-1 rounded font-bold">Mar 2026</span>
              <div>
                <p className="font-bold">Reform UK leads national polls</p>
                <p className="text-gray-600">First sustained lead over Labour and Conservatives</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <span className="bg-blue-600 text-white px-3 py-1 rounded font-bold">Feb 2026</span>
              <div>
                <p className="font-bold">Runcorn by-election win</p>
                <p className="text-gray-600">First by-election victory for Reform UK</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 border-l-4 border-gray-600 p-4 rounded-r-lg">
              <span className="bg-gray-600 text-white px-3 py-1 rounded font-bold">Jul 2024</span>
              <div>
                <p className="font-bold">5 MPs elected</p>
                <p className="text-gray-600">Reform UK wins 5 seats with 14.3% of vote (4+ million votes)</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 border-l-4 border-gray-600 p-4 rounded-r-lg">
              <span className="bg-gray-600 text-white px-3 py-1 rounded font-bold">Jun 2024</span>
              <div>
                <p className="font-bold">Farage becomes leader</p>
                <p className="text-gray-600">Nigel Farage announces candidacy and Reform leadership</p>
              </div>
            </div>
          </div>
        </div>

        {/* Farage Approval */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nigel Farage Approval Rating</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg p-6 text-center">
              <p className="text-5xl font-bold text-green-600">42%</p>
              <p className="text-gray-600 mt-2">Favourable Opinion</p>
              <p className="text-sm text-gray-500">March 2026</p>
            </div>
            <div className="bg-white border rounded-lg p-6 text-center">
              <p className="text-5xl font-bold text-red-600">38%</p>
              <p className="text-gray-600 mt-2">Unfavourable Opinion</p>
              <p className="text-sm text-gray-500">March 2026</p>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            Farage consistently polls as one of the most recognisable politicians in Britain, 
            with higher name recognition than most frontbench MPs.
          </p>
        </div>

        {/* Best PM */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">"Best Prime Minister" Polling</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-32 font-medium">Nigel Farage</span>
                <div className="flex-1 bg-gray-200 rounded-full h-6">
                  <div className="bg-[#1e3a5f] h-6 rounded-full" style={{ width: '28%' }}></div>
                </div>
                <span className="w-12 text-right font-bold">28%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-32 font-medium">Keir Starmer</span>
                <div className="flex-1 bg-gray-200 rounded-full h-6">
                  <div className="bg-red-600 h-6 rounded-full" style={{ width: '22%' }}></div>
                </div>
                <span className="w-12 text-right font-bold">22%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-32 font-medium">Kemi Badenoch</span>
                <div className="flex-1 bg-gray-200 rounded-full h-6">
                  <div className="bg-blue-600 h-6 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <span className="w-12 text-right font-bold">15%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-32 font-medium">Don't Know</span>
                <div className="flex-1 bg-gray-200 rounded-full h-6">
                  <div className="bg-gray-400 h-6 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <span className="w-12 text-right font-bold">35%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">About This Data</h3>
          <p className="text-gray-600">
            Polling data is aggregated from major UK pollsters including YouGov, Savanta, Opinium, 
            Techne UK, and More in Common. Individual polls have margins of error of ±2-3%.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t text-sm text-gray-500">
          <p>Last updated: March 2026. Data sources: Britain Elects, Wikipedia UK Polling, individual pollster releases.</p>
        </div>
      </div>
    </>
  )
}
