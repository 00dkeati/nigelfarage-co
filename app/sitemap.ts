import { MetadataRoute } from 'next'
import quotes from '@/data/quotes.json'
import news from '@/data/news.json'
import faq from '@/data/faq.json'
import people from '@/data/people.json'
import speeches from '@/data/speeches.json'
import topics from '@/data/topics.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nigelfarage.co'
  
  // Static pages
  const staticPages = [
    '',
    '/biography',
    '/reform-uk',
    '/timeline',
    '/quotes',
    '/news',
    '/faq',
    '/people',
    '/speeches',
    '/topics',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Quote pages
  const quotePages = quotes.map((q: any) => ({
    url: `${baseUrl}/quotes/${q.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // News pages
  const newsPages = news.map((n: any) => ({
    url: `${baseUrl}/news/${n.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // FAQ pages
  const faqPages = faq.map((f: any) => ({
    url: `${baseUrl}/faq/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // People pages
  const peoplePages = people.map((p: any) => ({
    url: `${baseUrl}/people/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Speech pages
  const speechPages = speeches.map((s: any) => ({
    url: `${baseUrl}/speeches/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Topic pages
  const topicPages = topics.map((t: any) => ({
    url: `${baseUrl}/topics/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    ...staticPages,
    ...quotePages,
    ...newsPages,
    ...faqPages,
    ...peoplePages,
    ...speechPages,
    ...topicPages,
  ]
}
