import ServiceDetailClient from '@/components/ServiceDetailClient';
import { servicesData, sectorsData } from '@/data/siteData';
import { notFound } from 'next/navigation';

export default function OperationalExcellencePage() {
  const service = servicesData.find((s) => s.slug === 'operational-excellence');
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
