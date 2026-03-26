import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeContactForm, validateContactForm } from '../.next-test-build/contact.js';

test('validateContactForm rejects missing required fields', () => {
  const result = validateContactForm({
    name: 'Jane',
    email: 'jane@example.com',
    service: 'Tech & Development',
    projectType: 'Website / digital presence',
    budget: '',
    outcomes: 'Increase lead quality',
    details: 'Need a redesign with improved conversion paths.',
  });

  assert.equal(result?.status, 400);
  assert.match(result?.body.error ?? '', /budget/i);
});

test('validateContactForm rejects invalid email addresses', () => {
  const result = validateContactForm({
    name: 'Jane',
    email: 'jane-at-example.com',
    service: 'Tech & Development',
    projectType: 'Website / digital presence',
    budget: '$15k - $35k',
    outcomes: 'Increase lead quality',
    details: 'Need a redesign with improved conversion paths.',
  });

  assert.equal(result?.status, 400);
  assert.match(result?.body.error ?? '', /email/i);
});

test('normalizeContactForm trims and normalizes values', () => {
  const result = normalizeContactForm({
    name: ' Jane ',
    email: ' JANE@EXAMPLE.COM ',
    company: ' IR Agency ',
    service: ' Tech & Development ',
    projectType: ' Website / digital presence ',
    budget: ' $15k - $35k ',
    timeline: ' 2-4 weeks ',
    outcomes: ' Launch with more clarity ',
    details: ' Launch a premium website with clear service positioning and intake flow. ',
  });

  assert.deepEqual(result, {
    name: 'Jane',
    email: 'jane@example.com',
    company: 'IR Agency',
    service: 'Tech & Development',
    projectType: 'Website / digital presence',
    budget: '$15k - $35k',
    timeline: '2-4 weeks',
    outcomes: 'Launch with more clarity',
    details: 'Launch a premium website with clear service positioning and intake flow.',
    website: '',
  });
});
