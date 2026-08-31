import { Service } from '@/types';
import ServiceCard from './ServiceCard';
import Styles from './Services.module.css';

type Props = {
  services: Service[];
};

export default async function Services({ services }: Props) {
  return (
    <div className={Styles.container}>
      <div className={Styles.servicesContainer}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
