import ServiceDetailClient from '@/components/ServiceDetailClient';
import { servicesData, sectorsData } from '@/data/siteData';
import { notFound } from 'next/navigation';

export default function IpoReadinessPage() {
  const service = servicesData.find((s) => s.slug === 'ipo-readiness');
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
