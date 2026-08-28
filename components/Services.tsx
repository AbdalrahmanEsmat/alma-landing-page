import { getServices } from '@/utils/data-service';
import ServiceCard from './ServiceCard';
import Styles from './Services.module.css';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = {
  numberOfCards: number;
};

export default async function Services({ numberOfCards }: Props) {
  const services = await getServices(4);
  const t = await getTranslations('middlePart');
  console.log(Styles.showAllButton);
  return (
    <div className={Styles.servicesPart}>
      <p className={Styles.title}>{t('serveces')}</p>
      <p className={Styles.description}>{t('servecesDescription')}</p>
      <div className={Styles.servicesContainer}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <Link href="/serveces" className={Styles.showAllButton}>
        {t('all')}
      </Link>
    </div>
  );
}
