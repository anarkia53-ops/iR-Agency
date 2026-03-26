import Link from 'next/link';
import type { ReactNode } from 'react';
import { primaryNavigation, siteName, siteTagline, supportPromise } from '@/lib/site-data';

export function Container({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}

export function Header() {
  return (
    <header className="siteHeader">
      <Container>
        <div className="headerRow">
          <Link href="/" className="brand" aria-label={`${siteName} home`}>
            <span className="brandMark">iR</span>
            <span>{siteName}<small>{siteTagline}</small></span>
          </Link>
          <nav className="nav" aria-label="Primary navigation">
            {primaryNavigation.map((item) => <Link key={item.href} href={item.href} className="navLink">{item.label}</Link>)}
            <Link href="/contact" className="button primary small navButton">Start Intake</Link>
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
            <h3>{siteTagline}</h3>
            <p>{supportPromise}</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul className="footerList">{primaryNavigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Hidden system routes</h4>
            <ul className="footerList">
              <li><Link href="/agents">AI Agents</Link></li>
              <li><Link href="/dashboard">Dashboard Preview</Link></li>
              <li><Link href="/case-studies">Case Studies Status</Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="sectionTitle"><span>{eyebrow}</span><h2>{title}</h2><p>{text}</p></div>;
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return <article className="statCard"><strong>{value}</strong><span>{label}</span></article>;
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="inlineBadge">{children}</span>;
}
