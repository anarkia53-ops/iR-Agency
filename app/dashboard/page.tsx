import type { Metadata } from 'next';
import { Container, SectionTitle, StatCard } from '@/components/site';
import { dashboardMetrics, dashboardSignals } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Dashboard Preview',
  description: 'Hidden executive dashboard preview for reporting, operations, and infrastructure visibility.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/dashboard' },
};

export default function DashboardPage() {
  return (
    <section className="section">
      <Container>
        <SectionTitle eyebrow="Dashboard preview" title="Executive reporting, operating visibility, and technical posture in one layer" text="This page functions as a non-public preview for the reporting direction requested in the broader iR Agency operating model." />
        <div className="statsStrip">{dashboardMetrics.map((metric) => <StatCard key={metric.label} value={metric.value} label={metric.label} />)}</div>
        <div className="grid three topGap">{dashboardSignals.map((signal) => <article className="card" key={signal.title}><h3>{signal.title}</h3><p>{signal.text}</p></article>)}</div>
        <div className="grid two topGap">
          <article className="panel highlight"><p className="eyebrow">Preview blocks</p><h2>What the final dashboard can surface</h2><ul className="plainList"><li>Lead pipeline quality and first-response pace</li><li>Launch readiness by package, client, and workstream</li><li>Infrastructure uptime, backups, and deployment alerts</li><li>Campaign anomalies and optimization recommendations</li></ul></article>
          <article className="card"><p className="eyebrow">Reporting rule</p><h2>Executive intelligence over vanity metrics</h2><p>The reporting direction in this runtime favors outcome-based narration: what worked, what failed, where the anomalies are, and what should happen next.</p></article>
        </div>
      </Container>
    </section>
  );
}
