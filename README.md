# NigelFarage.co

The definitive Nigel Farage resource hub. Neutral, comprehensive, SEO-optimized.

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project Structure

```
nigelfarage.co/
├── app/
│   ├── layout.tsx          # Main layout with nav/footer
│   ├── page.tsx             # Homepage
│   ├── biography/page.tsx   # Full biography
│   ├── quotes/page.tsx      # Quotes database
│   ├── reform-uk/page.tsx   # Reform UK policies
│   └── timeline/page.tsx    # Career timeline
├── data/
│   ├── quotes.json          # Quote entries
│   ├── timeline.json        # Timeline events
│   └── policies.json        # Reform UK policies
└── public/
    └── images/              # Add images here
```

## Content To Add

### Priority 1 (Launch)
- [ ] More quotes (aim for 50+)
- [ ] Add images (Farage photos, Reform UK logo)
- [ ] Expand timeline entries
- [ ] Add news section (RSS or manual)

### Priority 2 (Growth)
- [ ] Controversies/fact-check page
- [ ] Polling tracker with charts
- [ ] Search functionality
- [ ] Share buttons on quotes

### Priority 3 (Monetization)
- [ ] Ad placements (Google AdSense)
- [ ] Book affiliate links
- [ ] Newsletter signup

## Data Files

**quotes.json** - Add quotes like:
```json
{
  "id": 6,
  "quote": "Your quote here",
  "context": "Where/when it was said",
  "date": "2024-01-01",
  "source": "Source name",
  "category": ["brexit", "immigration"]
}
```

**timeline.json** - Add events like:
```json
{
  "year": 2024,
  "event": "What happened",
  "category": "politics"  // or "personal", "career"
}
```

## Deployment

Recommend Vercel for easy Next.js deployment:
1. Push to GitHub
2. Connect to Vercel
3. Point nigelfarage.co DNS to Vercel

## SEO Checklist

- [x] Meta titles and descriptions
- [x] Open Graph tags
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics

## Notes

This is a neutral informational resource - not a fan site or hit piece.
Maximizes traffic from both supporters and critics.
