# IR Agency Website

Production-oriented Next.js (App Router) website for IR Agency. This repository includes a public marketing site and a structured contact intake flow.

## Stack
- Next.js 15 (App Router)
- React 19
- TypeScript

## Local development
```bash
npm install
npm run dev
```

## Validation commands
```bash
npm run typecheck
npm run test
npm run build
```

## Contact intake architecture
1. Client form posts JSON to `POST /api/contact`.
2. Server validates + normalizes payload (`lib/contact.ts`).
3. Optional webhook forwarding to CRM/Zapier (`CRM_WEBHOOK_URL` fallback: `ZAPIER_WEBHOOK_URL`).
4. Explicit error responses are returned for validation failures, webhook failures, timeout, and rate limiting.

## Environment variables
| Variable | Required | Description |
| --- | --- | --- |
| `SITE_URL` | Yes (production) | Canonical public base URL used for metadata, sitemap, and robots host. |
| `CRM_WEBHOOK_URL` | Recommended | Production CRM/webhook endpoint for validated lead forwarding. |
| `ZAPIER_WEBHOOK_URL` | Optional fallback | Legacy fallback webhook if `CRM_WEBHOOK_URL` is not set. |
| `NEXT_PUBLIC_SITE_URL` | Optional fallback | Legacy site URL fallback if `SITE_URL` is not set. |

## Deployment notes
- Set `SITE_URL` in both Preview and Production environments.
- Set `CRM_WEBHOOK_URL` in Production; use a non-live endpoint in Preview.
- `/case-studies` remains intentionally noindex until approved client stories are available.

## Staging and launch guidance
- Use a staging environment with a non-production webhook URL.
- Verify these paths manually before each release: `/`, `/services`, `/about`, `/contact`, `/api/contact`.
- Confirm that contact submissions appear in the downstream system before promoting to production.

## Operational hardening checklist
- Enable log forwarding for server runtime errors and warnings.
- Add uptime checks for `/` and `/contact`.
- Add alerting for repeated 5xx or 429 responses on `/api/contact`.

## Repository governance recommendations
If you cannot enforce these in hosting settings yet, apply them as team policy immediately:
- Require pull request review before merging to main.
- Require passing CI checks (`npm run typecheck`, `npm run test`, and `npm run build`).
- Restrict force-pushes on protected branches.
