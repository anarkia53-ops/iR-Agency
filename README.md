# IR Agency - Public Website Runtime

This repository contains the active public website runtime for IR Agency.

## Stack
- Next.js App Router
- React
- TypeScript

## Public Routes
The active public routing surface consists of:
- `/`
- `/services`
- `/services/[slug]`
- `/about`
- `/contact`

The runtime also contains proof-layer placeholder routes that remain intentionally non-publishable:
- `/case-studies` (placeholder page, noindex)
- `/case-studies/[slug]` (always `notFound()`)

## Content Model
The current content model implemented in the data layer includes:
- 4-package public model
- Explicit 18-service detail surface

## Contact Intake Architecture
The contact intake flow relies on the following architecture:
- `/api/contact` endpoint
- Validation and normalization of incoming payloads
- Webhook forwarding to external systems

## Case Studies Status
The portfolio and proof layer is currently:
- Approval-gated / blocked
- `caseStudies` data is intentionally empty
- Not current public proof content

## Source-of-Truth Boundary
To maintain code governance and architectural integrity:
- `app/`, `components/`, `lib/`, `tests/` = active runtime/support structure
- `reference-ui/` = non-runtime duplicated material pending archive/remove after verification
