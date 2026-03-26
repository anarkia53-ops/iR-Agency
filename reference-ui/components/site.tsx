import Link from 'next/link';
import { ReactNode } from 'react';
import { contactLocation, primaryNavigation, siteName } from '@/lib/site-data';

export function Container({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}

export function Header() {
  return (
    <header className="siteHeader">
      <Container>
        <div className="headerRow">
          <Link href="/" className="brand" aria-label={`${siteName} home page`}>
            <span className="brandMark">IR</span>
            <span>
              {siteName}
              <small>Executive Digital Growth Partner</small>
            </span>
          </Link>
          <nav className="nav" aria-label="Primary navigation">
            {primaryNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="navLink">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="button small primary navButton">
              Start Intake
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="siteFooter">
      <Container>
        <div className="footerGrid">
          <div>
            <p className="eyebrow">{siteName}</p>
            <h3>Connected brand, growth, and technology services for businesses that need commercial clarity.</h3>
            <p>
              We act as an executive digital growth partner across positioning, campaign execution, and controlled technical delivery.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul className="footerList">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="footerList">
              <li>Use the intake form on the contact page for all new project requests.</li>
              <li>{contactLocation}</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="sectionTitle">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <article className="statCard">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}
