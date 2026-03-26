import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge, Container, SectionTitle, StatCard } from '@/components/site';
import { comparisonRows, differentiationPoints, heroMetrics, marketInsights, processSteps, serviceClusters, siteUrl, solutionPackages } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Launch, position, and scale with one connected digital growth partner spanning identity, growth, technology, and AI-enabled operations.',
  alternates: { canonical: '/' },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'iR Agency',
    url: siteUrl,
    areaServed: 'Worldwide',
    description: 'Executive digital growth partner for integrated creative direction, growth marketing, technical delivery, and AI-supported operations.',
    serviceType: ['Creative & Content', 'Marketing & Growth', 'Tech & Development'],
  };

  return (
    <>
      <section className="hero">
        <Container>
          <div className="heroGrid">
            <div className="stack-lg">
              <Badge>Final Web Runtime</Badge>
              <p className="eyebrow">Executive Digital Growth Partner</p>
              <h1>Build brand, growth, tech, and AI operations as one commercial engine.</h1>
              <p className="lead">iR Agency turns fragmented digital execution into one governed growth system covering identity, websites, campaigns, infrastructure, dashboards, and AI-assisted delivery workflows.</p>
              <div className="actions">
                <Link href="/contact" className="button primary">Start Intake</Link>
                <Link href="/services" className="button secondary">Explore Services</Link>
              </div>
              <div className="heroHighlights">{heroMetrics.map((metric) => <StatCard key={metric.label} value={metric.value} label={metric.label} />)}</div>
            </div>
            <aside className="panel highlight heroPanel">
              <p className="eyebrow">What this version includes</p>
              <h2>Premium public site plus hidden operating previews.</h2>
              <ul className="checkList">
                <li>Home, Services, About, and Contact public runtime</li>
                <li>Explicit 4-tier package system mapped to business maturity</li>
                <li>Hidden /agents and /dashboard previews kept out of public navigation</li>
                <li>Structured contact intake with validation, rate limiting, and webhook handoff</li>
                <li>Case-study gating preserved until approved client proof exists</li>
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle eyebrow="Differentiation" title="Why this agency model is stronger than standard outsourced execution" text="The offer is framed as a governed commercial engine with integrated strategy, execution, technical control, and reporting instead of isolated service handoffs." />
          <div className="grid three">{differentiationPoints.map((item) => <article className="card featureCard" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </Container>
      </section>

      <section className="section muted">
        <Container>
          <SectionTitle eyebrow="Service architecture" title="Three connected clusters built around brand, growth, and technical control" text="The public offer is intentionally structured so every client can understand what is included, why it matters, and how each workstream supports measurable business outcomes." />
          <div className="grid three">{serviceClusters.map((cluster) => <article className="card serviceClusterCard" key={cluster.slug}><p className="tag">{cluster.name}</p><h3>{cluster.summary}</h3><ul className="plainList">{cluster.outcomes.map((item) => <li key={item}>{item}</li>)}</ul><Link href="/services" className="textLink">View full service matrix</Link></article>)}</div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle eyebrow="Growth tiers" title="Four engineered package structures for launch, scale, and custom technical work" text="Packages are designed to fit the stage a company is in now while preserving a clear path toward more advanced delivery and managed operations." />
          <div className="grid four">{solutionPackages.map((pack) => <article className="card packageCard" key={pack.slug}><p className="tag">{pack.title}</p><h3>{pack.subtitle}</h3><p>{pack.summary}</p><p className="mutedCopy"><strong>Fit:</strong> {pack.audience}</p><ul className="plainList compactList">{pack.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </Container>
      </section>

      <section className="section muted">
        <Container>
          <SectionTitle eyebrow="Execution model" title="A seven-stage journey that protects quality and reduces execution drift" text="This operating sequence keeps qualification, scoping, launch readiness, execution control, and reporting inside one disciplined workflow." />
          <div className="grid four compact">{processSteps.map((step) => <article className="miniCard processCard" key={step.index}><span className="processIndex">{step.index}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle eyebrow="Market logic" title="The site now explains the market pain, the agency edge, and the operating difference clearly" text="This prevents generic positioning and makes the value proposition commercially clear to founders, operators, and management teams." />
          <div className="grid three">{marketInsights.map((item) => <article className="card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          <div className="tableCard topGap">
            <div className="comparisonHeader"><h3>Standard vendor vs iR Agency model</h3><p>Positioning language aligned to executive commercial value.</p></div>
            <div className="comparisonTable" role="table">
              <div className="comparisonRow comparisonHead" role="row"><div>Dimension</div><div>Standard vendor</div><div>iR Agency</div></div>
              {comparisonRows.map((row) => <div className="comparisonRow" role="row" key={row.label}><div>{row.label}</div><div>{row.vendor}</div><div>{row.partner}</div></div>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="ctaBanner conversionBanner">
            <div>
              <p className="eyebrow">Next action</p>
              <h2>Use the final intake flow to scope your website, package, campaign, infrastructure, or AI-operating layer.</h2>
              <p>The runtime is designed for direct deployment on Vercel with no mandatory external dependency beyond optional webhook forwarding.</p>
            </div>
            <div className="actions stackOnMobile">
              <Link href="/contact" className="button primary">Start a Project</Link>
              <Link href="/agents" className="button secondary">Open AI Layer</Link>
            </div>
          </div>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
