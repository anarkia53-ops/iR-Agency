'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import type { ContactFormData } from '@/lib/contact';
import { contactServices } from '@/lib/site-data';

const initialState: ContactFormData = {
  name: '',
  email: '',
  company: '',
  service: 'Integrated Engagement',
  budget: '$5k - $15k',
  timeline: '2-4 weeks',
  projectType: 'Website / digital presence',
  outcomes: '',
  details: '',
  website: '',
};

const REQUEST_TIMEOUT_MS = 10_000;

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });

  function updateField<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setFormData((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formData.name.trim().length < 2 || formData.outcomes.trim().length < 8 || formData.details.trim().length < 20) {
      setStatus({ type: 'error', message: 'Please include your full name plus enough detail in outcomes and scope before submitting.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });
      const data = (await response.json()) as { error?: string; message?: string };
      if (!response.ok) {
        setStatus({ type: 'error', message: data.error || 'We could not submit your request. Please try again.' });
        return;
      }
      setStatus({ type: 'success', message: data.message || 'Your request has been submitted.' });
      setFormData(initialState);
    } catch (error) {
      const isTimeout = error instanceof Error && error.name === 'AbortError';
      setStatus({ type: 'error', message: isTimeout ? 'Submission timed out before confirmation. Please retry in a moment.' : 'A network error prevented submission. Please try again shortly.' });
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit} noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={(event) => updateField('website', event.target.value)} aria-hidden="true" className="hpField" />
      <div className="formGrid twoCols">
        <label htmlFor="name"><span>Name</span><input id="name" name="name" autoComplete="name" value={formData.name} onChange={(event) => updateField('name', event.target.value)} required /></label>
        <label htmlFor="email"><span>Email</span><input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} required /></label>
        <label htmlFor="company"><span>Company</span><input id="company" name="company" autoComplete="organization" value={formData.company} onChange={(event) => updateField('company', event.target.value)} /></label>
        <label htmlFor="service"><span>Service cluster</span><select id="service" name="service" value={formData.service} onChange={(event) => updateField('service', event.target.value)} required>{contactServices.map((service) => <option key={service}>{service}</option>)}</select></label>
        <label htmlFor="projectType"><span>Project type</span><select id="projectType" name="projectType" value={formData.projectType} onChange={(event) => updateField('projectType', event.target.value)} required><option>Website / digital presence</option><option>Brand identity and content</option><option>Campaign launch and growth</option><option>App, portal, or internal system</option></select></label>
        <label htmlFor="budget"><span>Budget</span><select id="budget" name="budget" value={formData.budget} onChange={(event) => updateField('budget', event.target.value)} required><option>$5k - $15k</option><option>$15k - $35k</option><option>$35k+</option><option>Not sure yet</option></select></label>
        <label htmlFor="timeline"><span>Timeline</span><select id="timeline" name="timeline" value={formData.timeline} onChange={(event) => updateField('timeline', event.target.value)}><option>2-4 weeks</option><option>1-2 months</option><option>Quarterly roadmap</option></select></label>
        <label htmlFor="outcomes"><span>Desired outcomes</span><input id="outcomes" name="outcomes" value={formData.outcomes} onChange={(event) => updateField('outcomes', event.target.value)} minLength={8} placeholder="Examples: clearer positioning, better lead quality, launch readiness" required /></label>
      </div>
      <label htmlFor="details"><span>Scope and priorities</span><textarea id="details" name="details" rows={6} value={formData.details} onChange={(event) => updateField('details', event.target.value)} minLength={20} placeholder="Describe the current situation, the problem, the priority, and the constraints we should understand." required /></label>
      <div className="formActions"><button className="button primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting…' : 'Send project brief'}</button><p className="formHint">Typical follow-up target: within one business day.</p></div>
      {status.type !== 'idle' && <p className={status.type === 'success' ? 'formMessage success' : 'formMessage error'} role="status" aria-live="polite">{status.message}</p>}
    </form>
  );
}
