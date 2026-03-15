import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nigelfarage.co'),
  title: {
    default: 'Nigel Farage - Biography, Quotes, News & Reform UK',
    template: '%s | NigelFarage.co'
  },
  description: 'The definitive resource on Nigel Farage. Biography, quotes, Reform UK policies, news, and political timeline.',
  keywords: ['Nigel Farage', 'Reform UK', 'Brexit', 'British Politics', 'UKIP', 'Clacton MP'],
  authors: [{ name: 'NigelFarage.co' }],
  creator: 'NigelFarage.co',
  publisher: 'NigelFarage.co',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Nigel Farage - Biography, Quotes, News & Reform UK',
    description: 'The definitive resource on Nigel Farage. Biography, quotes, Reform UK policies, news, and political timeline.',
    url: 'https://www.nigelfarage.co',
    siteName: 'NigelFarage.co',
    type: 'website',
    locale: 'en_GB',
    images: [{
      url: '/images/official-portrait-mp.jpg',
      width: 800,
      height: 1000,
      alt: 'Nigel Farage - Official Parliamentary Portrait',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nigel Farage - Biography, Quotes, News & Reform UK',
    description: 'The definitive resource on Nigel Farage. Biography, quotes, Reform UK policies, news, and political timeline.',
    images: ['/images/official-portrait-mp.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'pending', // Add Google Search Console verification code here
  },
}

// JSON-LD Schema for Nigel Farage (Person)
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nigel Farage',
  givenName: 'Nigel',
  familyName: 'Farage',
  jobTitle: 'Leader of Reform UK',
  description: 'British politician, Leader of Reform UK, MP for Clacton, and former UKIP leader who led the Brexit campaign.',
  birthDate: '1964-04-03',
  birthPlace: {
    '@type': 'Place',
    name: 'Farnborough, Kent, England'
  },
  nationality: 'British',
  memberOf: {
    '@type': 'PoliticalParty',
    name: 'Reform UK'
  },
  image: 'https://www.nigelfarage.co/images/official-portrait-mp.jpg',
  sameAs: [
    'https://en.wikipedia.org/wiki/Nigel_Farage',
    'https://twitter.com/Nigel_Farage',
  ],
  url: 'https://www.nigelfarage.co'
}

// JSON-LD Schema for the Website
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NigelFarage.co',
  description: 'The definitive resource on Nigel Farage - biography, quotes, news, and Reform UK information.',
  url: 'https://www.nigelfarage.co',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.nigelfarage.co/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2221683304920924');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2221683304920924&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {/* For Sale Banner */}
        <a 
          href="https://flippa.com/12585348-premium-nigel-farage-authority-site-200-seo-optimized-pages-ranking-for-policy-keywords-daily-google-crawls-reform-uk-niche-with-massive-growth-potential"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-2 px-4 text-sm font-medium hover:from-green-700 hover:to-emerald-700 transition-all"
        >
          🏷️ This website is for sale — 200+ pages, ranking on Google, huge growth potential → <span className="underline">View on Flippa</span>
        </a>
        <nav className="bg-[#1e3a5f] text-white">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold">NigelFarage.co</a>
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                <a href="/biography" className="hover:text-blue-200">Biography</a>
                <a href="/quotes" className="hover:text-blue-200">Quotes</a>
                <a href="/speeches" className="hover:text-blue-200">Speeches</a>
                <a href="/topics" className="hover:text-blue-200">Topics</a>
                <a href="/people" className="hover:text-blue-200">People</a>
                <a href="/news" className="hover:text-blue-200">News</a>
                <a href="/advertise" className="hover:text-yellow-300 text-yellow-400 font-bold">Advertise</a>
              </div>
              {/* Mobile Menu */}
              <div className="md:hidden">
                <details className="relative">
                  <summary className="list-none cursor-pointer p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </summary>
                  <div className="absolute right-0 mt-2 w-48 bg-[#1e3a5f] rounded-lg shadow-lg py-2 z-50">
                    <a href="/biography" className="block px-4 py-2 hover:bg-blue-800">Biography</a>
                    <a href="/quotes" className="block px-4 py-2 hover:bg-blue-800">Quotes</a>
                    <a href="/speeches" className="block px-4 py-2 hover:bg-blue-800">Speeches</a>
                    <a href="/topics" className="block px-4 py-2 hover:bg-blue-800">Topics</a>
                    <a href="/people" className="block px-4 py-2 hover:bg-blue-800">People</a>
                    <a href="/news" className="block px-4 py-2 hover:bg-blue-800">News</a>
                    <a href="/faq" className="block px-4 py-2 hover:bg-blue-800">FAQ</a>
                    <a href="/timeline" className="block px-4 py-2 hover:bg-blue-800">Timeline</a>
                    <a href="/reform-uk" className="block px-4 py-2 hover:bg-blue-800">Reform UK</a>
                    <a href="/advertise" className="block px-4 py-2 hover:bg-blue-800 text-yellow-400 font-bold">Advertise</a>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-100 border-t mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-3">About</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/biography" className="hover:text-blue-600">Biography</a></li>
                  <li><a href="/timeline" className="hover:text-blue-600">Timeline</a></li>
                  <li><a href="/quotes" className="hover:text-blue-600">Quotes</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Politics</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/reform-uk" className="hover:text-blue-600">Reform UK</a></li>
                  <li><a href="/topics" className="hover:text-blue-600">Policy Topics</a></li>
                  <li><a href="/speeches" className="hover:text-blue-600">Speeches</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">More</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/news" className="hover:text-blue-600">Latest News</a></li>
                  <li><a href="/people" className="hover:text-blue-600">Key People</a></li>
                  <li><a href="/faq" className="hover:text-blue-600">FAQ</a></li>
                  <li><a href="/advertise" className="hover:text-yellow-500 text-yellow-600 font-bold">Advertise</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Related Sites</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="https://www.richardtice.co" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Richard Tice →</a></li>
                  <li><a href="https://www.rupertlowe.co" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Rupert Lowe →</a></li>
                </ul>
              </div>
            </div>
            <div className="text-center text-gray-600 border-t pt-6">
              <p>NigelFarage.co is an independent informational resource.</p>
              <p className="text-sm mt-2">Not affiliated with Nigel Farage or Reform UK.</p>
              <p className="text-sm mt-4 text-gray-500">
                Built by <a href="https://deankeating.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Dean Keating</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
