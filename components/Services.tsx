import { getServices } from '@/utils/data-service';
import ServiceCard from './ServiceCard';
import Styles from './Services.module.css';

type Props = {
  numberOfCards?: number;
};

export default async function Services({ numberOfCards }: Props) {
  const services = await getServices(numberOfCards);
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
