# Current QA and Governance Summary

## Active Runtime
The active runtime in this repository is the public website only.

## Verified Routes
The only implemented and verified routes are:
- `/`
- `/about`
- `/services`
- `/services/[slug]`
- `/contact`

Proof-layer placeholders also exist but are intentionally blocked from publication:
- `/case-studies` (placeholder and noindex)
- `/case-studies/[slug]` (returns `notFound()`)

## Proof Layer (Blocked)
The proof layer is intentionally blocked from production use:
- `caseStudies` array is empty
- `/case-studies` is a placeholder
- `/case-studies/[slug]` returns `notFound()`
- `robots.ts` is disallowing `/case-studies`
- `sitemap.ts` omits all `/case-studies` paths

## Operational API
- `/api/contact` is the only verified operational API surface.

## Test Scope
- The current test scope is narrow and centered entirely on the contact flow.

## Structural Governance
- `reference-ui/` is classified strictly as non-runtime duplicated material.
