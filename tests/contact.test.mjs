import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeContactForm, validateContactForm } from '../.next-test-build/contact.js';

test('validateContactForm rejects missing required fields', () => {
  const result = validateContactForm({
    name: 'Ismail',
    email: 'ismail@example.com',
    service: '',
    projectType: 'Website / digital presence',
    budget: '$5k - $15k',
    outcomes: 'More leads',
    details: 'This is enough detail for the project scope and priorities.',
  });
  assert.equal(result?.status, 400);
});

test('validateContactForm rejects honeypot spam', () => {
  const result = validateContactForm({
    name: 'Ismail Ramadan',
    email: 'ismail@example.com',
    service: 'Integrated Engagement',
    projectType: 'Website / digital presence',
    budget: '$5k - $15k',
    outcomes: 'More leads and better clarity',
    details: 'This is enough detail for the project scope and priorities.',
    website: 'spam',
  });
  assert.equal(result?.status, 400);
});

test('normalizeContactForm trims fields and lowercases email', () => {
  const normalized = normalizeContactForm({
    name: '  Ismail Ramadan  ',
    email: '  ISMAIL@EXAMPLE.COM  ',
    company: '  iR Agency  ',
    service: '  Integrated Engagement  ',
    projectType: '  Website / digital presence  ',
    budget: '  $15k - $35k  ',
    timeline: '  1-2 months  ',
    outcomes: '  Better market clarity  ',
    details: '  This is enough detail for the project scope and priorities.  ',
    website: 'hidden data',
  });
  assert.equal(normalized.email, 'ismail@example.com');
  assert.equal(normalized.website, '');
});
