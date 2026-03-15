import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advertise on NigelFarage.co - From Just £3/month',
  description: 'Get your message on NigelFarage.co from £3/month. Say whatever you want. Limited spots available.',
  alternates: {
    canonical: '/advertise',
  },
  openGraph: {
    title: '🎪 Advertise on NigelFarage.co - £3/month',
    description: 'Say whatever you want on a website about Nigel Farage. Ticker ads from £3. Image ads from £10. Banners from £50.',
    images: ['/images/official-portrait-mp.jpg'],
  },
}

// Demo ticker messages
const demoMessages = [
  "🍺 Visit the Brexit Pub - Real Ale for Real Patriots",
  "📚 Buy my ebook: 'How I Left the EU (Emotionally)'",
  "🇬🇧 Dave's Chippy - Best Fish & Chips in Clacton",
  "🎸 Learn guitar in 30 days - 50% off for readers",
  "🚗 Barry's Used Cars - Deals so good they should be illegal",
  "☕ Greggs: Now serving sovereignty with every sausage roll",
]

export default function AdvertisePage() {
  return (
    <div className="min-h-screen">
      {/* LIVE DEMO TICKER */}
      <div className="bg-yellow-400 text-black py-2 overflow-hidden border-b-4 border-yellow-600">
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {[...demoMessages, ...demoMessages].map((msg, i) => (
              <span key={i} className="ticker-item">
                {msg}
                <span className="ticker-separator">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero - Punchy & Mobile First */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 text-white py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full mb-4 animate-pulse">
            🚀 LAUNCH SPECIAL - LIMITED SPOTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Ad on Nigel Farage's Website
          </h1>
          <p className="text-xl text-purple-100 mb-2">
            From just <span className="text-yellow-400 font-bold text-3xl">£3/month</span>
          </p>
          <p className="text-purple-200 mb-8">
            Say whatever you want.* 10,000+ monthly visitors.
          </p>
          <a 
            href="#pricing"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
          >
            See Pricing ↓
          </a>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-gray-900 text-white py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-center text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">✓</span>
              <span>10,000+ monthly visitors</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">✓</span>
              <span>Live in 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Choose Your Spot</h2>
          <p className="text-center text-gray-600 mb-8">One-time setup. Cancel anytime.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tier 1: Ticker - MOST POPULAR */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-yellow-400 transform hover:scale-105 transition-transform relative">
              <div className="absolute -top-0 left-0 right-0 bg-green-500 text-white text-center text-xs font-bold py-1">
                ⚡ MOST POPULAR
              </div>
              <div className="bg-yellow-400 text-black py-6 px-6 mt-5">
                <div className="text-sm font-bold uppercase tracking-wide">Ticker Message</div>
                <div className="text-5xl font-bold">£3<span className="text-lg font-normal">/mo</span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Your message scrolls across <strong>every page</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Up to 100 characters + emojis 🎉</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Live within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Perfect for jokes, promos, hot takes</span>
                  </li>
                </ul>
                <div className="bg-yellow-50 p-3 rounded-lg mb-4 border border-yellow-200">
                  <div className="text-xs text-gray-500 mb-1">YOUR MESSAGE LOOKS LIKE:</div>
                  <div className="font-semibold text-sm">
                    🔥 Your text scrolls here forever! 🔥
                  </div>
                </div>
                <a 
                  href="mailto:ads@nigelfarage.co?subject=TICKER AD - £3/month&body=Hi! I want a ticker ad on NigelFarage.co%0A%0AMy message (max 100 chars):%0A%0A%0APayment: I understand you'll send me a £3/month payment link"
                  className="block w-full bg-yellow-400 text-black text-center py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-colors shadow-md"
                >
                  Get This →
                </a>
                <p className="text-xs text-gray-500 text-center mt-2">76 spots remaining</p>
              </div>
            </div>

            {/* Tier 2: Image Ad */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-blue-500 transform hover:scale-105 transition-transform">
              <div className="bg-blue-500 text-white py-6 px-6">
                <div className="text-sm font-bold uppercase tracking-wide">Image Tile</div>
                <div className="text-5xl font-bold">£10<span className="text-lg font-normal">/mo</span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span><strong>Your logo/image</strong> displayed on sidebar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Clickable link to your site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>150x150px tile + short caption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Great for businesses & creators</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-3 rounded-lg mb-4 border border-blue-200">
                  <div className="text-xs text-gray-500 mb-2">YOUR AD LOOKS LIKE:</div>
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                      LOGO
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Your Business</div>
                      <div className="text-xs text-blue-600">yoursite.com →</div>
                    </div>
                  </div>
                </div>
                <a 
                  href="mailto:ads@nigelfarage.co?subject=IMAGE AD - £10/month&body=Hi! I want an image ad on NigelFarage.co%0A%0ABusiness/Brand:%0AWebsite URL:%0ACaption text:%0A%0AI'll attach my 150x150 image to this email.%0A%0APayment: I understand you'll send me a £10/month payment link"
                  className="block w-full bg-blue-500 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-md"
                >
                  Get This →
                </a>
                <p className="text-xs text-gray-500 text-center mt-2">32 spots remaining</p>
              </div>
            </div>

            {/* Tier 3: Banner - PREMIUM */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-purple-600 transform hover:scale-105 transition-transform relative">
              <div className="absolute -top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center text-xs font-bold py-1">
                👑 PREMIUM
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-6 px-6 mt-5">
                <div className="text-sm font-bold uppercase tracking-wide">Banner Ad</div>
                <div className="text-5xl font-bold">£50<span className="text-lg font-normal">/mo</span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span><strong>Prime homepage placement</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Large 728x90 banner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Maximum visibility & clicks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Best for serious promotions</span>
                  </li>
                </ul>
                <div className="bg-purple-50 p-3 rounded-lg mb-4 border border-purple-200">
                  <div className="text-xs text-gray-500 mb-2">YOUR BANNER LOOKS LIKE:</div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded h-10 flex items-center justify-center text-white text-xs font-bold">
                    YOUR BANNER AD - PRIME SPOT
                  </div>
                </div>
                <a 
                  href="mailto:ads@nigelfarage.co?subject=BANNER AD - £50/month&body=Hi! I want a premium banner on NigelFarage.co%0A%0ABusiness/Brand:%0AWebsite URL:%0A%0AI'll attach my 728x90 banner to this email.%0A%0APayment: I understand you'll send me a £50/month payment link"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-md"
                >
                  Get This →
                </a>
                <p className="text-xs text-gray-500 text-center mt-2">Only 4 spots</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Simple */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">1</div>
              <h3 className="font-bold mb-1">Pick Your Tier</h3>
              <p className="text-gray-600 text-sm">£3 ticker, £10 image, or £50 banner</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">2</div>
              <h3 className="font-bold mb-1">Send Your Ad</h3>
              <p className="text-gray-600 text-sm">Email us your message or image</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">3</div>
              <h3 className="font-bold mb-1">Go Live</h3>
              <p className="text-gray-600 text-sm">Pay & you're live within 24hrs</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Collapsed */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Quick Questions</h2>
          
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-lg shadow-sm">
              <summary className="font-bold cursor-pointer">Can I really say anything?</summary>
              <p className="text-gray-600 mt-2 text-sm">
                Almost! No illegal stuff, no doxxing, nothing explicit. Political jokes, hot takes, business promos, weird flex? All good.
              </p>
            </details>
            
            <details className="bg-white p-4 rounded-lg shadow-sm">
              <summary className="font-bold cursor-pointer">Is this site actually real?</summary>
              <p className="text-gray-600 mt-2 text-sm">
                100% real. Real visitors, real ads, real website. We're not affiliated with Nigel Farage - just capitalizing on the domain.
              </p>
            </details>
            
            <details className="bg-white p-4 rounded-lg shadow-sm">
              <summary className="font-bold cursor-pointer">How do I pay?</summary>
              <p className="text-gray-600 mt-2 text-sm">
                Email us your ad → we send a Stripe payment link → you pay → ad goes live within 24 hours. Simple.
              </p>
            </details>
            
            <details className="bg-white p-4 rounded-lg shadow-sm">
              <summary className="font-bold cursor-pointer">Can I cancel?</summary>
              <p className="text-gray-600 mt-2 text-sm">
                Yes, cancel anytime. Your ad runs until the end of your paid period.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready?</h2>
          <p className="text-xl text-purple-200 mb-6">
            £3/month. Your message. On Nigel Farage's website.
          </p>
          <a 
            href="#pricing"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Your Spot Now ↑
          </a>
          <p className="text-purple-300 text-sm mt-4">
            Questions? Email <a href="mailto:ads@nigelfarage.co" className="underline">ads@nigelfarage.co</a>
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-gray-100 py-4 px-4 text-center text-xs text-gray-500">
        *All ads subject to approval. We reserve the right to reject anything truly awful. This site is not affiliated with Nigel Farage or Reform UK.
      </div>
    </div>
  )
}
