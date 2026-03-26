import { NextResponse } from 'next/server';
import { normalizeContactForm, validateContactForm, type ContactFormData } from '@/lib/contact';
import { isRateLimited } from '@/lib/rate-limit';

// Rate limiting and timeout configuration
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60_000;
const WEBHOOK_TIMEOUT_MS = 8_000;

/**
 * Extract the client IP from common reverse proxy headers.
 *
 * `x-forwarded-for` may contain a comma-separated list of addresses. We
 * return the first entry, which represents the originating client. If
 * unavailable, fall back to `x-real-ip` or return "unknown".
 */
function getClientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown';
  return request.headers.get('x-real-ip') || 'unknown';
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS)) {
      return NextResponse.json(
        { error: 'Too many submissions in a short period. Please wait one minute and try again.' },
        { status: 429 },
      );
    }

    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Please submit the form as JSON.' }, { status: 415 });
    }

    let body: Partial<ContactFormData>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
    }

    // Ensure the parsed body is an object. An empty string or array is invalid for our schema.
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid payload structure.' }, { status: 400 });
    }

    const validationError = validateContactForm(body);
    if (validationError) {
      return NextResponse.json(validationError.body, { status: validationError.status });
    }

    const payload = normalizeContactForm(body as ContactFormData);
    const webhookUrl = process.env.CRM_WEBHOOK_URL || process.env.ZAPIER_WEBHOOK_URL;

    if (webhookUrl) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          cache: 'no-store',
          signal: controller.signal,
        });

        if (!webhookResponse.ok) {
          return NextResponse.json(
            { error: 'Your request was received but delivery to operations failed. Please retry shortly.' },
            { status: 502 },
          );
        }
      } catch (error) {
        const isTimeout = error instanceof Error && error.name === 'AbortError';
        return NextResponse.json(
          {
            error: isTimeout
              ? 'Your request timed out during delivery. Please retry.'
              : 'Your request could not be delivered. Please retry.',
          },
          { status: 502 },
        );
      } finally {
        clearTimeout(timeoutId);
      }
    }

    return NextResponse.json(
      {
        message: 'Thanks — your project brief has been received. We will follow up with recommended next steps shortly.',
      },
      { status: 200 },
    );
  } catch {
    // Unexpected errors
    return NextResponse.json(
      { error: 'Something went wrong while processing your request. Please try again shortly.' },
      { status: 500 },
    );
  }
}