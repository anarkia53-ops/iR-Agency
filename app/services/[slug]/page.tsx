import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/site';
import { services } from '@/lib/site-data';

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: 'Service not found' };
  return { title: `${service.name} Services`, description: service.summary, alternates: { canonical: `/services/${service.slug}` } };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <section className="section">
      <Container>
        <div className="sectionTitle"><span>{service.cluster}</span><h1>{service.name}</h1><p>{service.summary}</p></div>
        <div className="grid two">
          <article className="card"><h2>Typical delivery scope</h2><p>Final execution is refined during discovery, but this service generally includes the components below.</p><ul className="plainList">{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className="panel highlight"><h2>When this is the right fit</h2><p>Choose this service when leadership needs clearer execution standards, stronger cross-functional alignment, and measurable delivery rather than one-off output.</p><h3>Recommended next step</h3><p>Submit an intake brief and we will confirm whether this should stand alone or be bundled into a phased package.</p><Link href="/contact" className="button primary inlineButton">Start project intake</Link></article>
        </div>
      </Container>
    </section>
  );
}
