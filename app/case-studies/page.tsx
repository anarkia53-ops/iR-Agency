import type { Metadata } from 'next';
import { Container, SectionTitle } from '@/components/site';

export const metadata: Metadata = {
  title: 'Case Studies Status',
  description: 'Approval-gated proof layer placeholder pending approved client stories.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/case-studies' },
};

export default function CaseStudiesPage() {
  return (
    <section className="section">
      <Container>
        <SectionTitle eyebrow="Proof layer status" title="Case studies remain intentionally unpublished until approved stories exist" text="This protects credibility, respects approval workflow, and avoids publishing placeholder proof that does not meet the quality standard." />
        <article className="panel highlight">
          <h2>Current state</h2>
          <ul className="plainList">
            <li>No approved public case-study content is bundled in this runtime.</li>
            <li>The case-studies index is intentionally noindex.</li>
            <li>Dynamic detail routes remain blocked until real proof is ready.</li>
          </ul>
        </article>
      </Container>
    </section>
  );
}
