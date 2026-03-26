import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, SectionTitle } from '@/components/site';
import { aiAgents } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'AI Agents',
  description: 'Hidden preview of the iR Agency AI operating layer and specialized conversation roles.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/agents' },
};

export default function AgentsPage() {
  return (
    <section className="section">
      <Container>
        <SectionTitle eyebrow="AI operating layer" title="Specialized AI conversations mapped to execution roles" text="These routes are intentionally hidden from the public navigation but included in the runtime to support the broader multi-agent operating model requested for iR Agency." />
        <div className="grid four">
          {aiAgents.map((agent) => (
            <article className="card agentCard" key={agent.slug}>
              <p className="tag">{agent.file}</p>
              <h3>{agent.title}</h3>
              <p>{agent.role}</p>
              <ul className="plainList compactList">{agent.prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul>
              <Link href={`/agents/${agent.slug}`} className="textLink">Open role detail</Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
