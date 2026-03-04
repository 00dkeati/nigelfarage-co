import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nigel Farage - Biography, Quotes, News & Reform UK',
  description: 'The definitive resource on Nigel Farage. Biography, quotes, Reform UK policies, news, and political timeline.',
  keywords: ['Nigel Farage', 'Reform UK', 'Brexit', 'British Politics', 'UKIP'],
  openGraph: {
    title: 'NigelFarage.co - The Definitive Resource',
    description: 'Biography, quotes, news and everything about Nigel Farage and Reform UK',
    url: 'https://nigelfarage.co',
    siteName: 'NigelFarage.co',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <nav className="bg-[#1e3a5f] text-white">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold">NigelFarage.co</a>
              <div className="hidden md:flex space-x-6">
                <a href="/biography" className="hover:text-blue-200">Biography</a>
                <a href="/quotes" className="hover:text-blue-200">Quotes</a>
                <a href="/reform-uk" className="hover:text-blue-200">Reform UK</a>
                <a href="/news" className="hover:text-blue-200">News</a>
                <a href="/timeline" className="hover:text-blue-200">Timeline</a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-100 border-t mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
            <p>NigelFarage.co is an independent informational resource.</p>
            <p className="text-sm mt-2">Not affiliated with Nigel Farage or Reform UK.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
