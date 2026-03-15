import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advertise on NigelFarage.co - From Just £3/month',
  description: 'Get your message seen on NigelFarage.co. Ticker ads from £3/month, image ads from £10/month, premium banners from £50/month.',
  alternates: {
    canonical: '/advertise',
  },
}

// Demo ticker messages
const demoMessages = [
  "🍺 Visit the Brexit Pub - Real Ale for Real Patriots",
  "📚 Buy my ebook: 'How I Left the EU (Emotionally)'",
  "🐸 PEPE LIVES MATTER",
  "🇬🇧 Dave's Chippy - Best Fish & Chips in Clacton",
  "⚡ FARAGE 2028 - Make Britain Banter Again",
  "🍻 Wetherspoons: 15% off with code BREXIT",
  "🎸 Learn guitar in 30 days - NigelFarage.co readers get 50% off",
  "🚗 Barry's Used Cars - Deals so good they should be illegal (but aren't)",
  "🦷 NHS Dentist Available - No, seriously, we found one",
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

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            🎪 Advertise on NigelFarage.co
          </h1>
          <p className="text-2xl text-purple-100 mb-6">
            Say whatever you want.* We don't care. Neither does he (probably).
          </p>
          <p className="text-sm text-purple-200">
            *Terms apply. No illegal stuff. We reserve the right to laugh at your ad.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400">10,000+</div>
              <div className="text-gray-400 text-sm">Monthly Visitors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">£3</div>
              <div className="text-gray-400 text-sm">Starting Price</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">100%</div>
              <div className="text-gray-400 text-sm">Chaos Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Choose Your Chaos Level</h2>
          <p className="text-center text-gray-600 mb-12">All ads run for 1 month. Cancel anytime.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1: Ticker */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-yellow-400 transform hover:scale-105 transition-transform">
              <div className="bg-yellow-400 text-black py-4 px-6">
                <div className="text-sm font-bold uppercase tracking-wide">The Ticker</div>
                <div className="text-4xl font-bold">£3<span className="text-lg">/month</span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Text message in scrolling ticker</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Up to 100 characters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Emojis allowed 🎉</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Visible on every page</span>
                  </li>
                </ul>
                <div className="bg-yellow-100 p-3 rounded-lg mb-6">
                  <div className="text-xs text-gray-500 mb-1">PREVIEW:</div>
                  <div className="font-mono text-sm truncate">
                    🔥 Your message scrolls like this! 🔥
                  </div>
                </div>
                <a 
                  href="mailto:ads@nigelfarage.co?subject=Ticker Ad (£3/month)&body=I want to advertise on NigelFarage.co!%0A%0AMy ticker message (max 100 chars):%0A%0A"
                  className="block w-full bg-yellow-400 text-black text-center py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
                >
                  Get Started →
                </a>
              </div>
            </div>

            {/* Tier 2: Image Ad */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-blue-500 transform hover:scale-105 transition-transform">
              <div className="bg-blue-500 text-white py-4 px-6">
                <div className="text-sm font-bold uppercase tracking-wide">Image Ad</div>
                <div className="text-4xl font-bold">£10<span className="text-lg">/month</span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>150x150px image tile</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Short text caption</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Clickable link</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Sidebar placement</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-3 rounded-lg mb-6">
                  <div className="text-xs text-gray-500 mb-1">PREVIEW:</div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                      AD
                    </div>
                    <div className="text-sm">Your Business Here</div>
                  </div>
                </div>
                <a 
                  href="mailto:ads@nigelfarage.co?subject=Image Ad (£10/month)&body=I want an image ad on NigelFarage.co!%0A%0ABusiness name:%0AWebsite URL:%0A%0A(Attach your 150x150 image)"
                  className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
                >
                  Get Started →
                </a>
              </div>
            </div>

            {/* Tier 3: Banner */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-purple-600 transform hover:scale-105 transition-transform relative">
              <div className="absolute -top-3 right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                PREMIUM
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-6">
                <div className="text-sm font-bold uppercase tracking-wide">Banner Ad</div>
                <div className="text-4xl font-bold">£50<span className="text-lg">/month</span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>728x90px banner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Prime homepage placement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Clickable link</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Maximum visibility</span>
                  </li>
                </ul>
                <div className="bg-purple-50 p-3 rounded-lg mb-6">
                  <div className="text-xs text-gray-500 mb-1">PREVIEW:</div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded h-8 flex items-center justify-center text-white text-xs font-bold">
                    YOUR BANNER AD HERE - 728x90
                  </div>
                </div>
                <a 
                  href="mailto:ads@nigelfarage.co?subject=Banner Ad (£50/month)&body=I want a premium banner on NigelFarage.co!%0A%0ABusiness name:%0AWebsite URL:%0A%0A(Attach your 728x90 banner)"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  Get Started →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Zone Visualization */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Where Your Ad Appears</h2>
          
          <div className="border-4 border-dashed border-gray-300 rounded-xl p-4 bg-gray-50">
            {/* Mock ticker */}
            <div className="bg-yellow-400 rounded-lg p-2 mb-4 text-center text-sm font-mono">
              ← TICKER ADS SCROLL HERE (£3/month) →
            </div>
            
            {/* Mock layout */}
            <div className="flex gap-4">
              {/* Main content area */}
              <div className="flex-1 space-y-4">
                {/* Banner zone */}
                <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg p-4 text-center border-2 border-purple-400">
                  PREMIUM BANNER ZONE (£50/month)
                </div>
                
                {/* Content placeholder */}
                <div className="bg-gray-200 rounded-lg p-8 text-center text-gray-500">
                  [Site Content]
                </div>
                <div className="bg-gray-200 rounded-lg p-8 text-center text-gray-500">
                  [More Content]
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="w-48 space-y-2">
                <div className="text-xs text-center text-gray-500 mb-2">IMAGE ADS</div>
                {[1,2,3,4].map((n) => (
                  <div key={n} className="bg-blue-100 border-2 border-blue-400 rounded-lg aspect-square flex items-center justify-center text-blue-600 font-bold text-xs">
                    £10/mo
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Can I say anything?</h3>
              <p className="text-gray-600">
                Almost. No illegal content, no doxxing, no explicit material. Political satire, hot takes, 
                and promotional chaos? Absolutely. We'll reject anything truly awful but our bar is... low.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Is this actually real?</h3>
              <p className="text-gray-600">
                Yes. Real money, real ads, real website about a real politician. 
                We're not affiliated with Nigel Farage. This is just capitalism, baby.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">How do I pay?</h3>
              <p className="text-gray-600">
                Email us your ad content. We'll send you a payment link. Once paid, your ad goes live within 24 hours.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Can I get a refund?</h3>
              <p className="text-gray-600">
                It's £3. But yes, if we haven't published your ad yet, we'll refund you. Once it's live, no refunds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join the Chaos?</h2>
          <p className="text-xl text-purple-200 mb-8">
            £3/month. Your message. On a website about Nigel Farage. What could go wrong?
          </p>
          <a 
            href="mailto:ads@nigelfarage.co?subject=I Want to Advertise!&body=Tell us what tier you want and what your ad should say!"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-300 transition-colors"
          >
            📧 Email Us: ads@nigelfarage.co
          </a>
        </div>
      </section>

    </div>
  )
}
