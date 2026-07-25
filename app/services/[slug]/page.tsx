import { notFound } from 'next/navigation';
import ServiceDetailClient from '@/components/ServiceDetailClient';
import { servicesData, sectorsData } from '@/data/siteData';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedSectorsList = sectorsData.filter((sec) =>
    service.relatedSectors.includes(sec.slug)
  );

  return (
    <ServiceDetailClient
      service={service}
      relatedSectorsList={relatedSectorsList}
    />
  );
}
