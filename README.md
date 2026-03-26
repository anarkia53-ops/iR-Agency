# iR Agency Final Web Runtime

Final deployable Next.js App Router runtime for iR Agency.

## Includes
- Public routes: `/`, `/services`, `/services/[slug]`, `/about`, `/contact`
- Hidden routes: `/agents`, `/agents/[slug]`, `/dashboard`, `/case-studies`
- Structured contact intake via `POST /api/contact`
- Four package tiers: START, GROWTH, BUSINESS PRO, CUSTOM
- Premium dark visual system

## Run
```bash
npm install
npm run dev
```

## Validate
```bash
npm run typecheck
npm test
npm run build
```
