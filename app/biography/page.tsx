import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nigel Farage Biography - Life, Career & Political Journey',
  description: 'Complete biography of Nigel Farage from his early life in Kent to becoming Leader of Reform UK and MP for Clacton. Birth, education, UKIP, Brexit, and beyond.',
  alternates: {
    canonical: '/biography',
  },
  openGraph: {
    title: 'Nigel Farage Biography - Life, Career & Political Journey',
    description: 'Complete biography of Nigel Farage from his early life in Kent to becoming Leader of Reform UK and MP for Clacton.',
    url: '/biography',
    images: [{
      url: '/images/official-portrait-mp.jpg',
      width: 800,
      height: 1000,
      alt: 'Nigel Farage Official Portrait',
    }],
  },
}

export default function BiographyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <img 
            src="/images/official-portrait-mp.jpg" 
            alt="Nigel Farage Official Portrait" 
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Official UK Parliament Portrait, 2024</p>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">Nigel Farage: A Biography</h1>
          <p className="text-xl text-gray-600">
            From City trader to Brexit architect to Reform UK leader — the political journey 
            of Britain's most consequential populist politician.
          </p>
        </div>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Early Life</h2>
          <p className="mb-4">
            Nigel Paul Farage was born on 3 April 1964 in Farnborough, Kent, England. 
            The son of a stockbroker, he was educated at Dulwich College, a prestigious 
            independent school in south London.
          </p>
          <p className="mb-4">
            After leaving school in 1982, Farage chose not to attend university and instead 
            followed his father into the City of London, becoming a commodities trader. He 
            worked in the metals exchange, trading gold, silver, and other precious metals.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Early Political Career</h2>
          <p className="mb-4">
            Farage joined the Conservative Party in 1978 at age 14, but left in 1992 in 
            protest at the signing of the Maastricht Treaty, which he viewed as a fundamental 
            surrender of British sovereignty to the European Union.
          </p>
          <p className="mb-4">
            In 1993, Farage became a founding member of the UK Independence Party (UKIP), 
            a Eurosceptic political party dedicated to withdrawing Britain from the EU.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">European Parliament Years</h2>
          <div className="float-right ml-6 mb-4 w-64">
            <img 
              src="/images/nigel_farage_mep_1_strasbourg_-_diliff.jpg" 
              alt="Farage at European Parliament in Strasbourg" 
              className="rounded-lg shadow-lg"
            />
            <p className="text-xs text-gray-500 mt-1">MEP Farage at the European Parliament, Strasbourg</p>
          </div>
          <p className="mb-4">
            Farage was elected to the European Parliament in 1999 as an MEP for South East 
            England, a position he would hold until Brexit was completed. Known for his 
            fiery speeches criticising the EU and its leadership, he became one of the 
            most recognisable faces of British Euroscepticism.
          </p>
          <p className="mb-4">
            His confrontational style in Brussels made headlines worldwide, particularly 
            his clashes with EU Presidents and his characterisation of the European Parliament 
            as undemocratic.
          </p>
          <div className="clear-both"></div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">UKIP Leadership</h2>
          <p className="mb-4">
            Farage served as UKIP leader from 2006-2009 and again from 2010-2016. Under 
            his leadership, the party grew from a fringe movement to a major political 
            force, winning the European elections in 2014 with 27.5% of the vote—the 
            first time a party other than Labour or Conservative had won a national 
            election in over a century.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Brexit Campaign</h2>
          <div className="float-left mr-6 mb-4 w-64">
            <img 
              src="/images/nigel_farage_and_passport_26437065840.jpg" 
              alt="Farage during Brexit campaign with British passport" 
              className="rounded-lg shadow-lg"
            />
            <p className="text-xs text-gray-500 mt-1">Farage campaigning for Brexit, 2016</p>
          </div>
          <p className="mb-4">
            Farage was a central figure in the 2016 EU referendum campaign, leading the 
            Leave.EU campaign alongside Arron Banks. His "Breaking Point" poster showing 
            refugees became one of the most controversial images of the campaign.
          </p>
          <p className="mb-4">
            When the referendum resulted in a 52-48% vote to leave the EU, Farage declared 
            it "Independence Day" for Britain. He resigned as UKIP leader shortly after, 
            stating his political ambition had been achieved.
          </p>
          <div className="clear-both"></div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Brexit Party & Reform UK</h2>
          <p className="mb-4">
            When the Brexit process stalled under Theresa May's government, Farage returned 
            to politics in 2019, founding the Brexit Party. The new party won the European 
            elections just six weeks after its formation.
          </p>
          <p className="mb-4">
            After Brexit was completed in 2020, the Brexit Party rebranded as Reform UK in 
            2021, pivoting to a broader anti-establishment, populist platform.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">MP for Clacton</h2>
          <div className="float-right ml-6 mb-4 w-64">
            <img 
              src="/images/nigel_farage_in_parliament.jpg" 
              alt="Farage in the House of Commons" 
              className="rounded-lg shadow-lg"
            />
            <p className="text-xs text-gray-500 mt-1">In the House of Commons, 2024</p>
          </div>
          <p className="mb-4">
            After seven failed attempts to win a Westminster seat, Farage was finally 
            elected as MP for Clacton in the 2024 general election. Reform UK won five 
            seats and over 4 million votes nationally.
          </p>
          <p className="mb-4">
            Farage became Leader of Reform UK and stated his intention to make the party 
            a serious contender for government. By 2025, Reform UK was consistently 
            leading national opinion polls.
          </p>
          <div className="my-6 p-4 bg-gray-100 rounded-lg">
            <img 
              src="/images/reform_mps_in_parliament.jpg" 
              alt="Reform UK MPs in Parliament" 
              className="rounded-lg shadow-lg w-full"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">Reform UK MPs in the House of Commons</p>
          </div>
          <div className="clear-both"></div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Personal Life</h2>
          <p className="mb-4">
            Farage has been married twice and has four children. He survived a plane 
            crash on election day 2010 when the light aircraft he was in got caught in 
            a UKIP banner and crashed, leaving him with spinal injuries.
          </p>
          <p className="mb-4">
            Known for his love of pubs, pints, and cigarettes, Farage has cultivated an 
            image as a "man of the people" in contrast to what he characterises as 
            establishment politicians.
          </p>
        </section>
      </div>
    </div>
  )
}
