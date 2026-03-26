import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, SectionTitle } from '@/components/site';
import { serviceClusters, services, solutionPackages } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Structured services across Creative & Content, Marketing & Growth, and Tech & Development with package mapping.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <section className="section">
      <Container>
        <SectionTitle eyebrow="Services" title="Connected services for brands that need growth with structure, clarity, and technical control" text="The public service surface is grouped into three clusters and mapped to four package levels so buyers can understand scope quickly." />
        <div className="grid three">
          {serviceClusters.map((cluster) => {
            const clusterServices = services.filter((service) => service.cluster === cluster.name);
            return (
              <article className="card serviceCard" key={cluster.slug}>
                <p className="tag">{cluster.name}</p>
                <h3>{cluster.summary}</h3>
                <ul className="plainList compactList">{clusterServices.map((service) => <li key={service.slug}><Link href={`/services/${service.slug}`} className="textLink">{service.name}</Link></li>)}</ul>
                <div className="supportList"><strong>Supports</strong><ul className="plainList compactList">{cluster.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div>
              </article>
            );
          })}
        </div>
        <div className="sectionTitle compactTitle"><span>Package mapping</span><h2>How services ladder into commercial package structures</h2><p>Start and Growth support launch readiness. Business Pro drives acquisition and optimization. Custom covers systems, apps, portals, and advanced infrastructure.</p></div>
        <div className="grid four">{solutionPackages.map((pack) => <article className="card packageCard" key={pack.slug}><p className="tag">{pack.title}</p><h3>{pack.subtitle}</h3><p>{pack.audience}</p><ul className="plainList compactList">{pack.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        <div className="ctaBanner topGap"><div><p className="eyebrow">Need a tailored scope?</p><h2>Use the intake flow and we will map your need to the correct service cluster, package, and execution sequence.</h2></div><Link href="/contact" className="button primary">Start Intake</Link></div>
      </Container>
    </section>
  );
}
