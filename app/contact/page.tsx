import type { Metadata } from 'next';
import { Container, SectionTitle } from '@/components/site';
import { ContactForm } from '@/app/contact/contact-form';
import { contactChannels } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Structured contact intake for websites, growth systems, infrastructure, and AI-assisted execution scope.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <section className="section">
      <Container>
        <SectionTitle eyebrow="Contact" title="Use the structured intake flow to route your project into the correct execution path" text="This form collects service cluster, project type, budget, timeline, outcomes, and scope so operations can respond with a focused next step." />
        <div className="contactLayout">
          <article className="panel contactPanel">
            <p className="eyebrow">Before you submit</p>
            <h2>What this form is designed to do</h2>
            <ul className="plainList">
              {contactChannels.map((item) => <li key={item.title}><strong>{item.title}:</strong> {item.text}</li>)}
            </ul>
            <div className="card subtleCard topGap">
              <h3>Operational note</h3>
              <p>The route validates input server-side, rejects spam via honeypot, accepts JSON only, and can forward payloads to CRM or Zapier webhook endpoints.</p>
            </div>
          </article>
          <article className="card">
            <h2>Project intake</h2>
            <p className="compactLead">The more precise the scope and outcomes are, the faster the recommendation quality will be.</p>
            <ContactForm />
          </article>
        </div>
      </Container>
    </section>
  );
}
