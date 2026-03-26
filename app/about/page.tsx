import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, SectionTitle, StatCard } from '@/components/site';
import { aboutPillars, dashboardMetrics, differentiationPoints, marketInsights } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About',
  description: 'Vision, mission, market logic, and differentiation for iR Agency as an executive digital growth partner.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <section className="section">
      <Container>
        <SectionTitle eyebrow="About iR Agency" title="A marketing technology company built to operate as a disciplined growth partner" text="iR Agency uses identity, content, growth operations, websites, infrastructure, and AI-supported workflows as integrated business tools rather than disconnected outputs." />
        <div className="statsStrip">{dashboardMetrics.map((metric) => <StatCard key={metric.label} value={metric.value} label={metric.label} />)}</div>
        <div className="grid three topGap">{aboutPillars.map((item) => <article className="card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <div className="grid two topGap">
          <article className="panel highlight"><p className="eyebrow">Market problem</p><h2>Execution is where most digital ambition breaks down.</h2><ul className="plainList">{marketInsights.map((item) => <li key={item.title}><strong>{item.title}:</strong> {item.text}</li>)}</ul></article>
          <article className="card"><p className="eyebrow">Model advantage</p><h2>How iR operates differently</h2><ul className="plainList">{differentiationPoints.map((item) => <li key={item.title}><strong>{item.title}:</strong> {item.text}</li>)}</ul></article>
        </div>
        <div className="ctaBanner topGap">
          <div><p className="eyebrow">Internal systems</p><h2>The broader operating layer includes AI agents, dashboard logic, pricing structure, and workflow integrations.</h2><p>These routes are implemented as hidden previews in this runtime so the public navigation remains focused.</p></div>
          <div className="actions stackOnMobile"><Link href="/agents" className="button secondary">View agents</Link><Link href="/dashboard" className="button primary">View dashboard</Link></div>
        </div>
      </Container>
    </section>
  );
}
