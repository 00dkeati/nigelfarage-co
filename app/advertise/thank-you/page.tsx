import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Thank You! - NigelFarage.co Advertising',
  description: 'Your ad purchase is complete. We\'ll have you live within 24 hours.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center px-4">
      {/* Meta Pixel Purchase Event */}
      <Script id="fb-purchase" strategy="afterInteractive">
        {`
          if (typeof fbq !== 'undefined') {
            fbq('track', 'Purchase', {currency: 'GBP', value: 3.00});
          }
        `}
      </Script>
      <div className="max-w-lg mx-auto text-center text-white">
        <div className="text-8xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold mb-4">You're In!</h1>
        <p className="text-xl text-green-100 mb-6">
          Payment received. Your ad will be live within 24 hours.
        </p>
        
        <div className="bg-white/20 backdrop-blur rounded-xl p-6 mb-8 text-left">
          <h2 className="font-bold text-lg mb-3">What happens next?</h2>
          <ul className="space-y-2 text-green-50">
            <li className="flex items-start gap-2">
              <span>1.</span>
              <span>We review your ad content (usually within a few hours)</span>
            </li>
            <li className="flex items-start gap-2">
              <span>2.</span>
              <span>Your ad goes live on the site</span>
            </li>
            <li className="flex items-start gap-2">
              <span>3.</span>
              <span>You'll get an email confirmation when it's up</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-green-200 text-sm">
            Questions? Email <a href="mailto:ads@nigelfarage.co" className="underline">ads@nigelfarage.co</a>
          </p>
          <a 
            href="/"
            className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors"
          >
            ← Back to NigelFarage.co
          </a>
        </div>
      </div>
    </div>
  )
}
