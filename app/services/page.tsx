import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, SectionTitle } from '@/components/site';
import { serviceClusters } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore IR Agency services across Creative & Content, Marketing & Growth, and Tech & Development.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Connected services for brands that want growth with structure."
          text="IR Agency organizes delivery into three clear service clusters so clients can understand what is included, why it matters, and how it connects to commercial outcomes."
        />

        <div className="grid three">
          {serviceClusters.map((cluster) => (
            <article className="card serviceCard" key={cluster.slug}>
              <div>
                <p className="tag">{cluster.name}</p>
                <h3>{cluster.summary}</h3>
              </div>
              <ul className="plainList">
                {cluster.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div>
                <h4>What this supports</h4>
                <ul className="plainList">
                  {cluster.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>
              <Link href={`/services/${cluster.slug}-1`} className="textLink">
                View service details
              </Link>
            </article>
          ))}
        </div>

        <div className="ctaBanner topGap">
          <div>
            <p className="eyebrow">Need a tailored scope?</p>
            <h2>We can recommend a phased roadmap based on your brand maturity, growth priorities, and technical needs.</h2>
          </div>
          <Link href="/contact" className="button primary">
            Start Intake
          </Link>
        </div>
      </Container>
    </section>
  );
}
