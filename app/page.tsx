import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, SectionTitle, StatCard } from '@/components/site';
import { heroMetrics, processSteps, serviceClusters, siteUrl, solutionPackages, whyIR } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'IR Agency is an executive digital growth partner for brands that need connected creative direction, growth marketing, and technical execution.',
  alternates: { canonical: '/' },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'IR Agency',
    url: siteUrl,
    description:
      'Executive digital growth partner providing connected brand, growth, and technology services for measurable business outcomes.',
    areaServed: 'Worldwide',
    serviceType: ['Creative & Content', 'Marketing & Growth', 'Tech & Development'],
  };

  return (
    <>
      <section className="hero">
        <Container>
          <div className="heroGrid">
            <div className="stack-lg">
              <p className="eyebrow">Executive Digital Growth Partner</p>
              <h1>Launch, position, and scale with one connected digital growth partner.</h1>
              <p className="lead">
                IR Agency aligns strategic brand direction, performance-focused marketing, and controlled technical execution so ambitious businesses can grow with more clarity and less friction.
              </p>
              <div className="actions">
                <Link href="/contact" className="button primary">
                  Start Intake
                </Link>
                <Link href="/services" className="button secondary">
                  Explore Services
                </Link>
              </div>
              <div className="heroHighlights">
                {heroMetrics.map((metric) => (
                  <StatCard key={metric.label} value={metric.value} label={metric.label} />
                ))}
              </div>
            </div>

            <aside className="panel highlight heroPanel" aria-label="IR Agency value proposition">
              <p className="eyebrow">What clients gain</p>
              <h2>Commercial clarity across brand, growth, and technology.</h2>
              <ul className="checkList">
                <li>Executive-level guidance from discovery through optimization</li>
                <li>Premium dark-mode presentation built for credibility and conversion</li>
                <li>Integrated services that keep strategy and execution aligned</li>
                <li>Measurable delivery focused on business outcomes, not jargon</li>
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle
            eyebrow="Why IR Agency"
            title="A strategic operating partner for digital growth, not just another execution vendor."
            text="We connect creative direction, marketing performance, and technical delivery so leadership teams can move with confidence from idea to market impact."
          />
          <div className="grid three">
            {whyIR.map((item) => (
              <article className="card featureCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section muted">
        <Container>
          <SectionTitle
            eyebrow="Service architecture"
            title="Three connected service clusters built to support premium growth."
            text="Our public offering is structured around the brand systems, growth execution, and technical foundations required to launch and scale responsibly."
          />
          <div className="grid three">
            {serviceClusters.map((cluster) => (
              <article className="card serviceClusterCard" key={cluster.slug}>
                <p className="tag">{cluster.name}</p>
                <h3>{cluster.summary}</h3>
                <ul className="plainList">
                  {cluster.items.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={`/services/${cluster.slug}-1`} className="textLink">
                  View service details
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle
            eyebrow="Process"
            title="A disciplined path from discovery to optimization."
            text="Every engagement is built to reduce ambiguity, control execution, and create a stronger basis for ongoing performance decisions."
          />
          <div className="grid four compact">
            {processSteps.map((step, index) => (
              <article className="miniCard processCard" key={step.title}>
                <span className="processIndex">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section muted">
        <Container>
          <SectionTitle
            eyebrow="Solutions"
            title="Engagement structures designed around the stage your business is in."
            text="Whether you need a refined market launch, a stronger growth program, or deeper technical enablement, we package work around clear priorities and accountable execution."
          />
          <div className="grid three">
            {solutionPackages.map((pack) => (
              <article className="card" key={pack.title}>
                <h3>{pack.title}</h3>
                <p>{pack.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="ctaBanner conversionBanner">
            <div>
              <p className="eyebrow">Ready to move?</p>
              <h2>Bring your next launch, repositioning effort, or growth roadmap into one premium execution partner.</h2>
              <p>
                Start with a focused conversation around your priorities, timeline, and the outcomes your business needs next.
              </p>
            </div>
            <div className="actions">
              <Link href="/contact" className="button primary">
                Start a Project
              </Link>
              <Link href="/services" className="button secondary">
                View Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
