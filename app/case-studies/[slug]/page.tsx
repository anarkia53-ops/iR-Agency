import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Case study not available',
    robots: { index: false, follow: false },
  };
}

export default async function CaseStudyDetailPage() {
  notFound();
}
