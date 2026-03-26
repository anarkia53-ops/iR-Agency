import Link from 'next/link';
import { Container } from '@/components/site';

export default function NotFoundPage() {
  return (
    <section className="section">
      <Container>
        <div className="panel highlight">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>The route you requested is not available in this runtime.</p>
          <div className="actions">
            <Link href="/" className="button primary">Back home</Link>
            <Link href="/contact" className="button secondary">Start intake</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
