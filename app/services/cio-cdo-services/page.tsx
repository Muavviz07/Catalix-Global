import ServiceDetailClient from '@/components/ServiceDetailClient';
import { servicesData, sectorsData } from '@/data/siteData';
import { notFound } from 'next/navigation';

export default function CioCdoServicesPage() {
  const service = servicesData.find((s) => s.slug === 'cio-cdo-services');
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
