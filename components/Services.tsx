import { getServices } from '@/utils/data-service';
import ServiceCard from './ServiceCard';
import Styles from './Services.module.css';
import { getTranslations } from 'next-intl/server';

type Props = {
  numberOfCards?: number;
};

export default async function Services({ numberOfCards }: Props) {
  const services = await getServices(numberOfCards);
  const t = await getTranslations('servicesComp');
  return (
    <div className={Styles.container}>
      <p className={Styles.description}>{t('description')}</p>
      <div className={Styles.servicesContainer}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
