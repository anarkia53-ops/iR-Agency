/**
 * Production-ready rate limiter abstraction.
 *
 * This helper can be cleanly swapped with a distributed store such as
 * Redis or Upstash without refactoring your API route logic. When
 * running in a single-node development environment, it falls back to
 * using a Map stored on globalThis so that rate limiting persists
 * across requests without leaking into the module scope.
 */

interface RateLimitStore {
  get(key: string): number[] | undefined;
  set(key: string, value: number[]): void;
}

// Attach a store to the global object to persist rate limiting state
// across function calls in serverless environments. If another
// implementation is injected (e.g. Redis), it should satisfy the
// RateLimitStore interface.
const globalStore: RateLimitStore = globalThis as unknown as RateLimitStore;
if (!globalStore.get) {
  const map = new Map<string, number[]>();
  globalStore.get = (key) => map.get(key);
  globalStore.set = (key, val) => map.set(key, val);
}

/**
 * Determines whether a given IP is rate limited.
 *
 * @param ip - The client IP address.
 * @param maxRequests - Maximum allowed requests within the window.
 * @param windowMs - Time window in milliseconds.
 * @returns True if the client has exceeded the limit; false otherwise.
 */
export function isRateLimited(ip: string, maxRequests: number = 10, windowMs: number = 60_000): boolean {
  const now = Date.now();
  const existing = globalStore.get(ip) || [];
  const fresh = existing.filter((timestamp) => now - timestamp < windowMs);

  if (fresh.length >= maxRequests) {
    globalStore.set(ip, fresh);
    return true;
  }

  fresh.push(now);
  globalStore.set(ip, fresh);
  return false;
}