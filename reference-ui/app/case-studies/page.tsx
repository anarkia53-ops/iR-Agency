import type { Metadata } from 'next';
import { Container, SectionTitle } from '@/components/site';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Case studies are not currently published. New proof-backed case studies will be released after client approval.',
  alternates: { canonical: '/case-studies' },
  robots: { index: false, follow: false },
};

export default function CaseStudiesPage() {
  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Case Studies"
          title="Client case studies are temporarily offline."
          text="We only publish case studies with explicit client approval and verifiable outcomes."
        />
        <article className="card">
          <h2>Current status</h2>
          <p>
            This section is intentionally hidden from search indexing until approved stories are ready for publication.
          </p>
        </article>
      </Container>
    </section>
  );
}
