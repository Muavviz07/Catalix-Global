import { notFound } from 'next/navigation';
import BusinessSystemDetailClient from '@/components/BusinessSystemDetailClient';
import { businessSystemsData } from '@/data/siteData';

interface SystemPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return businessSystemsData.map((s) => ({
    slug: s.slug,
  }));
}

export default function BusinessSystemDetailPage({ params }: SystemPageProps) {
  const system = businessSystemsData.find((s) => s.slug === params.slug);

  if (!system) {
    notFound();
  }

  return <BusinessSystemDetailClient system={system} />;
}
