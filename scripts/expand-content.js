// Content expansion script for nigelfarage.co
// Run with: node scripts/expand-content.js

const fs = require('fs');
const path = require('path');

// === NEW FAQ QUESTIONS (targeting Google "People Also Ask") ===
const newFAQs = [
  // Personal
  { id: "nigel-farage-height", question: "How tall is Nigel Farage?", answer: "Nigel Farage is approximately 5 feet 9 inches (175 cm) tall.", category: "personal" },
  { id: "nigel-farage-children", question: "How many children does Nigel Farage have?", answer: "Nigel Farage has four children - two from his first marriage to Gráinne Hayes and two from his second marriage to Kirsten Mehr.", category: "personal" },
  { id: "nigel-farage-education", question: "Where did Nigel Farage go to school?", answer: "Nigel Farage was educated at Dulwich College, an independent school in south London. He left in 1982 and chose not to attend university.", category: "personal" },
  { id: "nigel-farage-first-wife", question: "Who was Nigel Farage's first wife?", answer: "Nigel Farage's first wife was Gráinne Hayes, an Irish nurse. They married in 1988 and divorced in 1997. They have two sons together.", category: "personal" },
  { id: "nigel-farage-german-wife", question: "Is Nigel Farage's wife German?", answer: "Yes, Nigel Farage's second wife Kirsten Mehr is German. They married in 1999 and have two daughters together. They separated in 2017.", category: "personal" },
  { id: "nigel-farage-girlfriend", question: "Who is Nigel Farage's girlfriend?", answer: "Nigel Farage has been in a relationship with French politician Laure Ferrari since around 2017.", category: "personal" },
  { id: "where-does-nigel-farage-live", question: "Where does Nigel Farage live?", answer: "Nigel Farage has lived in various locations including Kent and London. He also spent time in the United States and maintains properties in the UK.", category: "personal" },
  { id: "nigel-farage-house", question: "What is Nigel Farage's house like?", answer: "Nigel Farage has owned several properties including a Georgian townhouse in Westminster and a family home in Kent.", category: "personal" },
  { id: "nigel-farage-salary-mp", question: "What is Nigel Farage's salary as an MP?", answer: "As an MP, Nigel Farage earns the standard parliamentary salary of £91,346 per year (as of 2024), plus expenses.", category: "career" },
  { id: "nigel-farage-gb-news-salary", question: "How much did Nigel Farage earn at GB News?", answer: "Nigel Farage reportedly earned around £1.5 million per year for his GB News show before becoming an MP.", category: "career" },
  
  // Career
  { id: "nigel-farage-city-career", question: "What did Nigel Farage do in the City?", answer: "Nigel Farage worked as a commodities trader in the City of London from 1982 to the mid-1990s, trading metals on the London Metal Exchange.", category: "career" },
  { id: "how-many-times-mp-farage", question: "How many times did Nigel Farage try to become an MP?", answer: "Nigel Farage stood for Parliament 8 times before finally winning Clacton in 2024. He previously contested seats including Salisbury, Eastleigh, and South Thanet.", category: "career" },
  { id: "nigel-farage-mep-years", question: "How long was Nigel Farage an MEP?", answer: "Nigel Farage served as a Member of the European Parliament for 21 years, from 1999 to 2020.", category: "career" },
  { id: "nigel-farage-ukip-leader", question: "How long was Nigel Farage UKIP leader?", answer: "Nigel Farage led UKIP twice: from 2006-2009 and 2010-2016, totaling approximately 9 years as leader.", category: "career" },
  { id: "why-did-farage-quit-ukip", question: "Why did Nigel Farage leave UKIP?", answer: "Farage left UKIP in 2018 after the party moved in a more extreme direction under Gerard Batten, who he felt was associating with far-right figures.", category: "career" },
  { id: "nigel-farage-brexit-party", question: "What happened to the Brexit Party?", answer: "The Brexit Party was founded by Nigel Farage in 2019 and rebranded as Reform UK in 2021 after Brexit was completed.", category: "career" },
  { id: "nigel-farage-cameo", question: "Does Nigel Farage do Cameo videos?", answer: "Yes, Nigel Farage has been active on Cameo, charging for personalized video messages. He reportedly earned significant sums from the platform.", category: "career" },
  { id: "nigel-farage-im-a-celebrity", question: "Was Nigel Farage on I'm A Celebrity?", answer: "Yes, Nigel Farage appeared on I'm A Celebrity... Get Me Out of Here! in 2023, finishing in third place.", category: "media" },
  
  // Politics
  { id: "is-nigel-farage-right-wing", question: "Is Nigel Farage right-wing?", answer: "Nigel Farage describes himself as a libertarian and classical liberal. He is generally considered right-wing on immigration and the EU, but more libertarian on economic issues.", category: "politics" },
  { id: "is-reform-uk-far-right", question: "Is Reform UK far-right?", answer: "Reform UK rejects the 'far-right' label. The party describes itself as common sense populism, though critics sometimes apply the far-right label.", category: "politics" },
  { id: "nigel-farage-conservative", question: "Was Nigel Farage ever a Conservative?", answer: "Yes, Nigel Farage was a member of the Conservative Party from 1978 (age 14) until 1992, when he left in protest over the Maastricht Treaty.", category: "politics" },
  { id: "reform-uk-membership", question: "How many members does Reform UK have?", answer: "Reform UK has grown rapidly and claims over 100,000 registered supporters as of 2025.", category: "politics" },
  { id: "reform-uk-mps", question: "How many MPs does Reform UK have?", answer: "Reform UK has 5 MPs elected in 2024: Nigel Farage (Clacton), Richard Tice (Boston & Skegness), Lee Anderson (Ashfield), Rupert Lowe (Great Yarmouth), and James McMurdock (South Basildon).", category: "politics" },
  { id: "nigel-farage-trump", question: "Are Nigel Farage and Donald Trump friends?", answer: "Yes, Nigel Farage and Donald Trump have a close relationship. Farage was the first foreign politician to meet Trump after his 2016 election and has visited Mar-a-Lago multiple times.", category: "politics" },
  { id: "nigel-farage-russia", question: "What are Nigel Farage's views on Russia?", answer: "Farage has been criticized for comments seen as sympathetic to Russia. He has said the West provoked the Ukraine conflict, though he condemns the invasion.", category: "politics" },
  { id: "nigel-farage-israel", question: "What are Nigel Farage's views on Israel?", answer: "Nigel Farage is strongly pro-Israel and has criticized pro-Palestinian protests in the UK.", category: "politics" },
  { id: "nigel-farage-nhs", question: "Does Nigel Farage want to privatise the NHS?", answer: "Farage has previously expressed support for insurance-based healthcare but now says Reform UK is committed to a free-at-point-of-use NHS.", category: "policy" },
  { id: "nigel-farage-climate-change", question: "Does Nigel Farage believe in climate change?", answer: "Farage has expressed skepticism about climate change policies and Net Zero targets, calling them economically damaging.", category: "policy" },
  
  // Events
  { id: "nigel-farage-plane-crash-details", question: "What happened in Nigel Farage's plane crash?", answer: "On election day 2010, Farage was in a light aircraft towing a UKIP banner when it crashed. He suffered serious injuries including a cracked vertebra and punctured lung.", category: "events" },
  { id: "nigel-farage-milkshake", question: "Who threw a milkshake at Nigel Farage?", answer: "Paul Crowther threw a milkshake over Farage in Newcastle in 2019. He was fined £350 for the assault.", category: "events" },
  { id: "nigel-farage-coutts", question: "What happened with Nigel Farage and Coutts bank?", answer: "In 2023, Coutts bank closed Farage's account citing reputational concerns. The scandal led to the resignation of NatWest CEO Alison Rose.", category: "events" },
  { id: "breaking-point-poster", question: "What was the Breaking Point poster?", answer: "The 'Breaking Point' poster showed refugees queuing and was unveiled by Farage during the 2016 referendum. It was widely criticized as inflammatory.", category: "events" },
  
  // Comparisons
  { id: "farage-vs-tice", question: "What is the difference between Nigel Farage and Richard Tice?", answer: "Farage is the party leader and public face of Reform UK, while Tice is deputy leader and handles more of the organizational side. Tice is a businessman worth ~£40m.", category: "comparison" },
  { id: "ukip-vs-reform", question: "What is the difference between UKIP and Reform UK?", answer: "UKIP was founded in 1993 to leave the EU. Reform UK (originally Brexit Party) was founded in 2019 and focuses on broader populist policies beyond Brexit.", category: "comparison" },
  { id: "farage-vs-starmer", question: "What does Nigel Farage think of Keir Starmer?", answer: "Farage has criticized Starmer as a metropolitan elite out of touch with ordinary people and accused Labour of failing on immigration.", category: "comparison" },
  
  // Quick facts
  { id: "nigel-farage-full-name", question: "What is Nigel Farage's full name?", answer: "His full name is Nigel Paul Farage.", category: "personal" },
  { id: "nigel-farage-birthday", question: "When is Nigel Farage's birthday?", answer: "Nigel Farage was born on 3 April 1964.", category: "personal" },
  { id: "nigel-farage-star-sign", question: "What is Nigel Farage's star sign?", answer: "Nigel Farage is an Aries (born 3 April).", category: "personal" },
  { id: "nigel-farage-religion", question: "What religion is Nigel Farage?", answer: "Nigel Farage was raised Church of England and has described himself as an Anglican, though he rarely discusses religion publicly.", category: "personal" },
  { id: "nigel-farage-smoking", question: "Does Nigel Farage smoke?", answer: "Yes, Nigel Farage is a smoker and has been vocal about opposing smoking bans.", category: "personal" },
  { id: "nigel-farage-drinking", question: "Does Nigel Farage drink?", answer: "Yes, Farage is known for enjoying a pint and has been photographed in pubs throughout his career. It's part of his 'man of the people' image.", category: "personal" },
];

// === NEW TOPICS (Policy deep dives) ===
const newTopics = [
  { id: "small-boats", slug: "small-boats", title: "Nigel Farage on Small Boats & Channel Crossings", description: "Farage's position on illegal Channel crossings and small boat arrivals." },
  { id: "free-speech", slug: "free-speech", title: "Nigel Farage on Free Speech", description: "Farage's views on free expression, cancel culture, and censorship." },
  { id: "net-zero", slug: "net-zero", title: "Nigel Farage on Net Zero & Climate Policy", description: "Farage's opposition to Net Zero targets and green policies." },
  { id: "banking", slug: "banking-debanking", title: "Nigel Farage on Banking & Debanking", description: "The Coutts scandal and Farage's views on financial censorship." },
  { id: "fishing", slug: "fishing-industry", title: "Nigel Farage on the Fishing Industry", description: "Farage's stance on fishing rights and post-Brexit fishing policy." },
  { id: "echr", slug: "echr-human-rights", title: "Nigel Farage on the ECHR", description: "Farage's call to leave the European Court of Human Rights." },
  { id: "media", slug: "media-bbc", title: "Nigel Farage on the Media & BBC", description: "Farage's criticism of BBC bias and mainstream media." },
  { id: "grooming-gangs", slug: "grooming-gangs", title: "Nigel Farage on Grooming Gangs", description: "Farage's statements on grooming gang scandals and justice." },
  { id: "housing", slug: "housing-crisis", title: "Nigel Farage on the Housing Crisis", description: "Reform UK's policies on housing and planning." },
  { id: "crime", slug: "crime-policing", title: "Nigel Farage on Crime & Policing", description: "Farage's views on law and order, prison policy, and policing." },
  { id: "education", slug: "education-universities", title: "Nigel Farage on Education", description: "Farage's criticism of universities and woke culture in education." },
  { id: "monarchy", slug: "monarchy-royal-family", title: "Nigel Farage on the Monarchy", description: "Farage's views on the Royal Family and constitutional issues." },
];

// === YEAR PAGES (for timeline SEO) ===
const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];

// === ADDITIONAL QUOTES (expand to 200) ===
const additionalQuotes = [
  { id: 91, quote: "The EU is a German racket designed to take over the whole of Europe.", context: "On EU structure", date: "2012", source: "Interview", category: ["eu"] },
  { id: 92, quote: "I have to say that a lot of people don't quite get what I mean.", context: "On being misunderstood", date: "2014", source: "Interview", category: ["politics"] },
  { id: 93, quote: "The EU has no intention of respecting this democratic vote.", context: "On Brexit delay", date: "2018", source: "Speech", category: ["brexit"] },
  { id: 94, quote: "Merkel's open door policy was the worst decision by a European leader since 1945.", context: "On migrant crisis", date: "2016", source: "EU Parliament", category: ["eu", "immigration"] },
  { id: 95, quote: "We in UKIP have doubled our vote in every election for 15 years.", context: "On party growth", date: "2014", source: "Interview", category: ["politics"] },
  { id: 96, quote: "The Tories have betrayed everyone who voted for Brexit.", context: "On Conservative Party", date: "2019", source: "Rally", category: ["brexit", "politics"] },
  { id: 97, quote: "The British bulldog spirit can never be crushed.", context: "On national character", date: "2016", source: "Campaign", category: ["politics"] },
  { id: 98, quote: "Europe needs us more than we need them.", context: "On Brexit negotiations", date: "2016", source: "Debate", category: ["brexit", "eu"] },
  { id: 99, quote: "I would vote for Tony Blair's Labour over what the Tories have become.", context: "On modern Conservatives", date: "2025", source: "Interview", category: ["politics"] },
  { id: 100, quote: "We've gone from four MPs to holding the government to account.", context: "On Reform UK progress", date: "2025", source: "GB News", category: ["reform"] },
  // ... more quotes would be added here
];

// === COMPARISON PAGES ===
const comparisons = [
  { id: "farage-vs-johnson", slug: "farage-vs-boris-johnson", person1: "Nigel Farage", person2: "Boris Johnson" },
  { id: "farage-vs-sunak", slug: "farage-vs-rishi-sunak", person1: "Nigel Farage", person2: "Rishi Sunak" },
  { id: "farage-vs-starmer", slug: "farage-vs-keir-starmer", person1: "Nigel Farage", person2: "Keir Starmer" },
  { id: "farage-vs-corbyn", slug: "farage-vs-jeremy-corbyn", person1: "Nigel Farage", person2: "Jeremy Corbyn" },
  { id: "farage-vs-may", slug: "farage-vs-theresa-may", person1: "Nigel Farage", person2: "Theresa May" },
  { id: "reform-vs-tories", slug: "reform-uk-vs-conservatives", person1: "Reform UK", person2: "Conservative Party" },
  { id: "reform-vs-labour", slug: "reform-uk-vs-labour", person1: "Reform UK", person2: "Labour Party" },
];

// === MORE PEOPLE PROFILES ===
const additionalPeople = [
  { id: "elon-musk", slug: "elon-musk", name: "Elon Musk", role: "Tech Billionaire & Farage Ally", description: "Owner of X (Twitter) who has amplified Reform UK and supported Farage.", category: "ally" },
  { id: "donald-trump", slug: "donald-trump", name: "Donald Trump", role: "US President", description: "Close ally of Farage since Brexit. First foreign politician Farage met after Trump's 2016 win.", category: "ally" },
  { id: "boris-johnson", slug: "boris-johnson", name: "Boris Johnson", role: "Former Prime Minister", description: "Fellow Brexiteer with complicated relationship with Farage.", category: "other" },
  { id: "zia-yusuf", slug: "zia-yusuf", name: "Zia Yusuf", role: "Reform UK Chairman", description: "Tech entrepreneur and Reform UK chairman.", category: "leadership" },
  { id: "david-frost", slug: "david-frost", name: "David Frost", role: "Brexit Negotiator", description: "Lord Frost, former Brexit negotiator, now Reform UK ally.", category: "ally" },
  { id: "isabel-oakeshott", slug: "isabel-oakeshott", name: "Isabel Oakeshott", role: "Journalist", description: "Political journalist, Farage ally, and partner of Richard Tice.", category: "media" },
  { id: "matthew-goodwin", slug: "matthew-goodwin", name: "Matthew Goodwin", role: "Political Analyst", description: "Academic and commentator who analyzes populist movements.", category: "media" },
  { id: "peter-bone", slug: "peter-bone", name: "Peter Bone", role: "Former Tory MP", description: "Long-time Eurosceptic who has worked with Farage.", category: "ally" },
  { id: "mark-francois", slug: "mark-francois", name: "Mark Francois", role: "Tory MP", description: "Prominent Brexiteer in the Conservative Party.", category: "ally" },
  { id: "steve-bannon", slug: "steve-bannon", name: "Steve Bannon", role: "US Political Strategist", description: "Trump ally who has supported European populist movements.", category: "international" },
];

console.log('📊 Content Expansion Plan:');
console.log(`   New FAQs: ${newFAQs.length}`);
console.log(`   New Topics: ${newTopics.length}`);
console.log(`   Year Pages: ${years.length}`);
console.log(`   Additional Quotes: ${additionalQuotes.length}`);
console.log(`   Comparison Pages: ${comparisons.length}`);
console.log(`   Additional People: ${additionalPeople.length}`);
console.log(`   ---`);
console.log(`   TOTAL NEW PAGES: ${newFAQs.length + newTopics.length + years.length + additionalQuotes.length + comparisons.length + additionalPeople.length}`);

// Export for use
module.exports = { newFAQs, newTopics, years, additionalQuotes, comparisons, additionalPeople };
