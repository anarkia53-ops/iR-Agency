import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/site';
import { aiAgents } from '@/lib/site-data';

export function generateStaticParams() { return aiAgents.map((agent) => ({ slug: agent.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const agent = aiAgents.find((item) => item.slug === slug);
  if (!agent) return { title: 'Agent not found' };
  return { title: `${agent.title} Agent`, description: agent.role, robots: { index: false, follow: false }, alternates: { canonical: `/agents/${agent.slug}` } };
}

export default async function AgentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = aiAgents.find((item) => item.slug === slug);
  if (!agent) notFound();

  return (
    <section className="section">
      <Container>
        <div className="sectionTitle"><span>AI agent role</span><h1>{agent.title}</h1><p>{agent.role}</p></div>
        <div className="grid two">
          <article className="card"><h2>Role file</h2><p>{agent.file}</p><h3>Core prompt families</h3><ul className="plainList">{agent.prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul></article>
          <article className="panel highlight"><h2>Usage in the system</h2><p>This role belongs to the hidden operating layer used for orchestration, qualification, design, development, QA, reporting, and optimization. It is intentionally not part of the public navigation.</p><Link href="/agents" className="button primary inlineButton">Back to agents index</Link></article>
        </div>
      </Container>
    </section>
  );
}
