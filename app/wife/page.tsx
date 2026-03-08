import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nigel Farage Wife - Kirsten Mehr & Family Life',
  description: 'Learn about Nigel Farage\'s wife Kirsten Mehr, his previous marriage to Grainne Hayes, his four children, and his personal life.',
  alternates: {
    canonical: '/wife',
  },
  openGraph: {
    title: 'Nigel Farage Wife - Kirsten Mehr & Family Life',
    description: 'Learn about Nigel Farage\'s wife Kirsten Mehr, his previous marriage, and his four children.',
    url: '/wife',
  },
}

export default function WifePage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Nigel Farage Wife - Kirsten Mehr & Family Life',
    description: 'Comprehensive guide to Nigel Farage\'s marriages, wife, and family.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Nigel Farage's Wife & Family</h1>
        <p className="text-xl text-gray-600 mb-8">
          Everything you need to know about Nigel Farage's marriages, wife Kirsten Mehr, and his four children.
        </p>

        {/* Quick Facts */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Quick Facts</h2>
          <ul className="space-y-2">
            <li><strong>Current Wife:</strong> Kirsten Mehr (German, married 1999)</li>
            <li><strong>Previous Wife:</strong> Grainne Hayes (Irish nurse, married 1988, divorced 1997)</li>
            <li><strong>Children:</strong> 4 (2 from each marriage)</li>
            <li><strong>Current Status:</strong> Separated from Kirsten Mehr (announced 2017)</li>
          </ul>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Kirsten Mehr (Second Wife)</h2>
          
          <p className="mb-4">
            Nigel Farage married Kirsten Mehr, a German national, in 1999. Kirsten worked as a 
            government bond broker when she met Farage in the City of London. They have two 
            daughters together.
          </p>

          <div className="bg-white border rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-3">Key Facts About Kirsten Mehr</h3>
            <ul className="space-y-2">
              <li>🇩🇪 German national, born and raised in Germany</li>
              <li>💼 Former government bond broker</li>
              <li>💒 Married Nigel Farage in 1999</li>
              <li>👨‍👩‍👧‍👧 Two daughters: Victoria and Isabelle</li>
              <li>📍 Family home in Kent</li>
            </ul>
          </div>

          <p className="mb-4">
            In March 2017, Farage announced that he and Kirsten had separated. He told reporters: 
            "It's a personal matter and I won't be commenting further." Despite the separation, 
            they have not formally divorced as of 2025.
          </p>

          <p className="mb-8">
            Ironically, given Farage's anti-EU stance and role in Brexit, his wife Kirsten 
            retains her German citizenship. The couple's daughters hold dual British-German nationality.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-800">Grainne Hayes (First Wife)</h2>
          
          <p className="mb-4">
            Farage's first marriage was to Grainne Hayes, an Irish nurse. They married in 1988 
            when Farage was 24 years old. The couple had two sons together before divorcing in 1997.
          </p>

          <div className="bg-white border rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-3">Key Facts About Grainne Hayes</h3>
            <ul className="space-y-2">
              <li>🇮🇪 Irish national</li>
              <li>👩‍⚕️ Worked as a nurse</li>
              <li>💒 Married Nigel Farage in 1988</li>
              <li>💔 Divorced in 1997</li>
              <li>👨‍👩‍👦‍👦 Two sons: Samuel and Thomas</li>
            </ul>
          </div>

          <p className="mb-8">
            Grainne has largely stayed out of the public eye since the divorce. Farage 
            rarely speaks publicly about his first marriage.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-800">Nigel Farage's Children</h2>
          
          <p className="mb-4">
            Nigel Farage has four children from his two marriages:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">From First Marriage</h3>
              <ul className="space-y-2">
                <li><strong>Samuel Farage</strong> - eldest son</li>
                <li><strong>Thomas Farage</strong> - second son</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Both sons keep relatively low profiles</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">From Second Marriage</h3>
              <ul className="space-y-2">
                <li><strong>Victoria Farage</strong> - daughter</li>
                <li><strong>Isabelle Farage</strong> - daughter</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Hold dual British-German citizenship</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-blue-800">Personal Life</h2>
          
          <p className="mb-4">
            Farage is famously private about his personal life, though certain aspects 
            have become public knowledge:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Known for enjoying a pint at the pub - often photographed with a pint and cigarette</li>
            <li>Survived a serious plane crash on election day in May 2010</li>
            <li>The crash left him with spinal injuries requiring ongoing treatment</li>
            <li>Has spoken about the strain political life puts on family relationships</li>
            <li>Primary residence is in Kent, southeast England</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-blue-800">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-bold">Is Nigel Farage still married?</h3>
              <p className="text-gray-600 mt-2">
                Technically yes. Farage separated from his second wife Kirsten Mehr in 2017, 
                but they have not formally divorced.
              </p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-bold">How many times has Nigel Farage been married?</h3>
              <p className="text-gray-600 mt-2">
                Twice. First to Grainne Hayes (1988-1997), then to Kirsten Mehr (1999-present, separated 2017).
              </p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-bold">Does Nigel Farage have children?</h3>
              <p className="text-gray-600 mt-2">
                Yes, four children: two sons (Samuel and Thomas) from his first marriage, 
                and two daughters (Victoria and Isabelle) from his second marriage.
              </p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-bold">Is Nigel Farage's wife German?</h3>
              <p className="text-gray-600 mt-2">
                Yes. Kirsten Mehr is German and retains her German citizenship. 
                This has been noted as ironic given Farage's role in Brexit.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-gray-500">
            Last updated: March 2025. Information based on public records, interviews, and verified media reports.
          </p>
        </div>
      </div>
    </>
  )
}
