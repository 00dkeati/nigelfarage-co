import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

type Props = {
  params: { year: string }
}

const yearData: Record<string, { title: string; events: string[]; summary: string }> = {
  '2010': {
    title: 'Nigel Farage in 2010',
    summary: 'A dramatic year that saw Farage survive a plane crash on election day and continue building UKIP.',
    events: [
      'January: Continued as UKIP leader after returning to the role in 2009',
      'May 6: Survived a plane crash on General Election day when UKIP banner got tangled in aircraft',
      'Suffered cracked vertebrae, broken ribs, and punctured lung in the crash',
      'UKIP gained 3.1% of the national vote in the General Election',
      'November: Delivered famous "Who are you?" speech to EU President Van Rompuy',
      'Continued campaigning against the Lisbon Treaty and EU expansion'
    ]
  },
  '2011': {
    title: 'Nigel Farage in 2011',
    summary: 'Farage capitalized on the Eurozone crisis to attack the EU from within the European Parliament.',
    events: [
      'Delivered multiple speeches attacking the Euro and EU economic policy',
      'Famous "Euro Titanic has hit the iceberg" speech in EU Parliament',
      'Criticized EU bailouts of Greece, Ireland, and Portugal',
      'UKIP membership continued to grow',
      'Appeared on Question Time multiple times',
      'Campaigned against further EU integration'
    ]
  },
  '2012': {
    title: 'Nigel Farage in 2012',
    summary: 'UKIP gained momentum as Farage positioned the party as the anti-establishment alternative.',
    events: [
      'UKIP achieved record poll ratings',
      'Criticized EU winning the Nobel Peace Prize',
      'Continued attacks on the Euro and EU governance',
      'Built relationships with Eurosceptic movements across Europe',
      'Increased media presence on British television',
      'Laid groundwork for the 2014 European elections'
    ]
  },
  '2013': {
    title: 'Nigel Farage in 2013',
    summary: 'A breakthrough year as UKIP established itself as a major force in British politics.',
    events: [
      'UKIP won nearly 150 council seats in local elections',
      'Party achieved 23% in one national opinion poll',
      'David Cameron dismissed UKIP as "fruitcakes, loonies and closet racists"',
      'Farage demanded an EU referendum',
      'Increased pressure on Cameron to address EU membership',
      'UKIP became the third party in UK politics by some measures'
    ]
  },
  '2014': {
    title: 'Nigel Farage in 2014',
    summary: 'Historic victory as UKIP won the European elections - first non-Lab/Con national win in over 100 years.',
    events: [
      'May: UKIP won European elections with 27.5% of the vote',
      'First time a party other than Labour or Conservatives won a national election since 1906',
      'UKIP won 24 MEP seats',
      'Two Conservative MPs defected to UKIP (Douglas Carswell and Mark Reckless)',
      'Carswell won Clacton by-election for UKIP',
      'Farage named "Briton of the Year" by The Times'
    ]
  },
  '2015': {
    title: 'Nigel Farage in 2015',
    summary: 'UKIP won 4 million votes but only one seat, exposing the unfairness of the electoral system.',
    events: [
      'UKIP won 12.6% of the vote nationally - nearly 4 million votes',
      'But won only one seat (Douglas Carswell in Clacton)',
      'Farage lost in South Thanet to Conservative Craig Mackinlay',
      'Resigned as UKIP leader after the election',
      'Resignation rejected by UKIP NEC',
      'Returned as leader and continued EU referendum campaign'
    ]
  },
  '2016': {
    title: 'Nigel Farage in 2016',
    summary: 'The year Farage achieved his lifes ambition as Britain voted to leave the European Union.',
    events: [
      'Led the Leave.EU campaign alongside Arron Banks',
      'Unveiled controversial "Breaking Point" immigration poster',
      'June 23: Britain voted 52-48 to leave the EU',
      'Declared "Independence Day" for Britain',
      'Delivered victory speech: "This will be a victory for ordinary people"',
      'Resigned as UKIP leader saying his "political ambition has been achieved"',
      'Met Donald Trump after US election - first foreign politician to do so',
      'Named in Time magazine\'s 100 most influential people'
    ]
  },
  '2017': {
    title: 'Nigel Farage in 2017',
    summary: 'Farage watched from the sidelines as Theresa May triggered Article 50 and called a snap election.',
    events: [
      'March: Article 50 triggered, beginning Brexit process',
      'Did not stand in the June General Election',
      'Criticized May\'s handling of Brexit negotiations',
      'Launched radio show on LBC',
      'Continued appearing on US media including Fox News',
      'Warned that Brexit could be betrayed by the establishment'
    ]
  },
  '2018': {
    title: 'Nigel Farage in 2018',
    summary: 'Growing frustrated with Brexit delays, Farage distanced himself from UKIP and planned his return.',
    events: [
      'Resigned UKIP membership citing party\'s direction under Gerard Batten',
      'Criticized UKIP\'s association with Tommy Robinson',
      'Warned May\'s Chequers deal would betray Brexit',
      'Continued LBC radio show',
      'Began planning new political vehicle',
      'Spoke at events across the UK warning Brexit was being betrayed'
    ]
  },
  '2019': {
    title: 'Nigel Farage in 2019',
    summary: 'Farage launched the Brexit Party and won the European elections just weeks later.',
    events: [
      'January: Announced formation of the Brexit Party',
      'April: Brexit Party officially launched',
      'May: Won European elections with 31.6% of the vote just 6 weeks after launch',
      'Brexit Party won 29 MEP seats',
      'September: Had milkshake thrown over him by protester',
      'December: Stood Brexit Party down in Conservative seats to help deliver Brexit',
      'Boris Johnson won General Election with pledge to "Get Brexit Done"'
    ]
  },
  '2020': {
    title: 'Nigel Farage in 2020',
    summary: 'Brexit finally completed as Farage gave his farewell speech to the European Parliament.',
    events: [
      'January 29: Gave final speech in European Parliament',
      'Had microphone cut off for waving Union Jack',
      'January 31: Brexit completed - UK left the EU',
      'Celebrated Brexit completion at Parliament Square',
      'Brexit Party began transition to Reform UK',
      'Criticized government handling of COVID-19 pandemic',
      'Highlighted migrant Channel crossings'
    ]
  },
  '2021': {
    title: 'Nigel Farage in 2021',
    summary: 'The Brexit Party rebranded as Reform UK with Farage stepping back from leadership.',
    events: [
      'Brexit Party officially rebranded as Reform UK',
      'Richard Tice became leader, Farage became honorary president',
      'Criticized lockdowns and COVID restrictions',
      'Launched show on GB News',
      'Continued documenting migrant Channel crossings',
      'Focused on media career while remaining politically active'
    ]
  },
  '2022': {
    title: 'Nigel Farage in 2022',
    summary: 'Farage built his GB News platform while Reform UK developed under Tice\'s leadership.',
    events: [
      'Hosted nightly show on GB News',
      'Criticized Boris Johnson and Partygate scandal',
      'Welcomed Johnson\'s resignation',
      'Critical of Liz Truss mini-budget',
      'Opposed Rishi Sunak becoming PM without election',
      'Called for general election',
      'Reform UK began climbing in polls'
    ]
  },
  '2023': {
    title: 'Nigel Farage in 2023',
    summary: 'The Coutts debanking scandal made Farage front-page news and boosted his profile.',
    events: [
      'June: Revealed Coutts bank had closed his account',
      'Obtained leaked documents showing political motivation',
      'NatWest CEO Alison Rose resigned over the scandal',
      'Received apology from NatWest',
      'Appeared on I\'m A Celebrity... Get Me Out of Here!',
      'Finished third in the jungle competition',
      'Earned reported £1.5 million for I\'m A Celebrity',
      'Speculation grew about return to frontline politics'
    ]
  },
  '2024': {
    title: 'Nigel Farage in 2024',
    summary: 'Farage became Reform UK leader and finally won a seat in Parliament after 8 attempts.',
    events: [
      'June: Announced return as Reform UK leader',
      'Stood as candidate in Clacton, Essex',
      'July 4: Won Clacton with 46% of the vote',
      'Finally elected to Parliament after 7 previous failed attempts',
      'Reform UK won 5 seats and over 4 million votes',
      'Became Leader of the Opposition in practical terms',
      'Reform UK began leading national polls',
      'Spoke at Trump rally in United States'
    ]
  },
  '2025': {
    title: 'Nigel Farage in 2025',
    summary: 'Reform UK established itself as the leading opposition party, consistently topping polls.',
    events: [
      'Reform UK maintained poll lead throughout the year',
      'Party membership exceeded 100,000',
      'Rupert Lowe suspended and later left to form Restore Britain',
      'Suella Braverman defected from Conservatives to Reform',
      'Reform announced shadow cabinet',
      'Continued to dominate political news agenda',
      'Called for early general election'
    ]
  },
  '2026': {
    title: 'Nigel Farage in 2026',
    summary: 'The current year sees Reform UK positioned as potential next government.',
    events: [
      'Reform UK continues leading polls at 23-25%',
      'Shadow cabinet fully operational',
      'Party preparing for next general election',
      'Farage positioned as potential Prime Minister',
      'Continued attacks on Labour government',
      'Building constituency organization nationwide'
    ]
  }
}

const years = Object.keys(yearData)

export async function generateStaticParams() {
  return years.map((year) => ({ year }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = yearData[params.year]
  if (!data) return { title: 'Year Not Found' }
  
  return {
    title: data.title,
    description: data.summary,
  }
}

export default function YearPage({ params }: Props) {
  const data = yearData[params.year]
  
  if (!data) {
    notFound()
  }

  const yearNum = parseInt(params.year)
  const prevYear = years.includes((yearNum - 1).toString()) ? yearNum - 1 : null
  const nextYear = years.includes((yearNum + 1).toString()) ? yearNum + 1 : null

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/timeline" className="text-blue-600 hover:underline text-sm">← Full Timeline</Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{data.summary}</p>

      <div className="bg-white border rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Key Events</h2>
        <ul className="space-y-4">
          {data.events.map((event, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-blue-600 font-bold">•</span>
              <span>{event}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        {prevYear ? (
          <Link href={`/year/${prevYear}`} className="text-blue-600 hover:underline">
            ← {prevYear}
          </Link>
        ) : <span />}
        {nextYear ? (
          <Link href={`/year/${nextYear}`} className="text-blue-600 hover:underline">
            {nextYear} →
          </Link>
        ) : <span />}
      </div>
    </div>
  )
}
