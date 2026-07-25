import { notFound } from 'next/navigation';
import SectorDetailClient from '@/components/SectorDetailClient';
import { sectorsData, servicesData } from '@/data/siteData';

interface SectorPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return sectorsData.map((s) => ({
    slug: s.slug,
  }));
}

export default function SectorDetailPage({ params }: SectorPageProps) {
  const sector = sectorsData.find((s) => s.slug === params.slug);

  if (!sector) {
    notFound();
  }

  const relevantServicesList = servicesData.filter((s) =>
    sector.relevantServices.includes(s.slug)
  );

  return (
    <SectorDetailClient
      sector={sector}
      relevantServicesList={relevantServicesList}
    />
  );
}
