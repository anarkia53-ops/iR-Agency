import type { Metadata } from 'next';
import { Container, SectionTitle, StatCard } from '@/components/site';
import { aboutPillars } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn how IR Agency combines strategy, creative direction, marketing execution, and technology delivery into one integrated growth partnership.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="About IR Agency"
          title="An integrated digital and technology agency built to create measurable value."
          text="IR Agency works as an executive and operational growth partner, using design, content, development, and marketing as business tools rather than disconnected deliverables."
        />

        <div className="statsStrip">
          <StatCard value="Integrated" label="brand, growth, and technology services" />
          <StatCard value="Structured" label="scope, governance, and quality control" />
          <StatCard value="Measured" label="commercial outcomes and optimization focus" />
        </div>

        <div className="grid three topGap">
          {aboutPillars.map((value) => (
            <article className="card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
