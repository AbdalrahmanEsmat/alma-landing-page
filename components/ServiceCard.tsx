import Image from 'next/image';
import Styles from './ServiceCard.module.css';
import { getLocale } from 'next-intl/server';

type Service = {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image_url: string;
};

type Props = {
  service: Service;
};

export default async function ServiceCard({ service }: Props) {
  const locale = await getLocale();

  return (
    <div className={Styles.serviceCard}>
      <Image
        src={service.image_url}
        width={80}
        height={80}
        alt={service.title_ar}
        loading="lazy"
      />
      <p className={Styles.title}>
        {locale === 'ar' ? service.title_ar : service.title_en}
      </p>
      <p className={Styles.descriprion}>
        {locale === 'ar' ? service.description_ar : service.description_en}
      </p>
    </div>
  );
}
