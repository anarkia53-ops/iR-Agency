import Link from 'next/link';
import { Container } from '@/components/site';

export default function NotFound() {
  return (
    <main className="section">
      <Container>
        <div className="sectionTitle">
          <span>Not found</span>
          <h1>That page does not exist.</h1>
          <p>The requested route could not be found.</p>
        </div>
        <div className="actions">
          <Link href="/" className="button primary">Return home</Link>
          <Link href="/contact" className="button secondary">Start project intake</Link>
        </div>
      </Container>
    </main>
  );
}
