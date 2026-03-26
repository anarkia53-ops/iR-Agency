import type { Metadata } from 'next';
import { Container, SectionTitle } from '@/components/site';
import { contactChannels } from '@/lib/site-data';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a project intake with IR Agency and share your scope, priorities, timeline, and desired business outcomes.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <section className="section">
      <Container>
        <div className="contactLayout">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Start project intake and share the context we need to recommend the right scope."
              text="Share your project type, current priorities, timeline, and desired outcomes. Our intake flow is built to reduce friction while preserving strong validation and routing patterns."
            />

            <div className="grid three">
              {contactChannels.map((channel) => (
                <article className="card" key={channel.title}>
                  <h3>{channel.title}</h3>
                  <p>{channel.text}</p>
                </article>
              ))}
            </div>

            <div className="card topGap">
              <h3>How we respond</h3>
              <p>
                All new requests are handled through the intake form so submissions can be validated, logged, and routed without loss.
              </p>
            </div>
          </div>

          <aside className="panel contactPanel">
            <p className="eyebrow">Project intake</p>
            <h2>Tell us what you are trying to achieve.</h2>
            <p className="lead compactLead">
              We will use your brief to understand scope, urgency, and the outcomes that matter most before we recommend next steps.
            </p>
            <ContactForm />
          </aside>
        </div>
      </Container>
    </section>
  );
}
