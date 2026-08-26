import Link from 'next/link';
import styles from './HomeHero.module.css';
import Statistics from './Statistics';
import { getTranslations } from 'next-intl/server';

type Props = {
  locale: string;
};

export default async function HomeHero({ locale }: Props) {
  const t = await getTranslations('HomePageHero');
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {locale === 'ar' ? (
          <h1 className={styles.title}>
            استشارات هندسية ومعمارية
            <br />
            <span>متكاملة</span> بخبرة تتجاوز 25 عاماً
          </h1>
        ) : (
          <h1 className={styles.title}>
            Engineering and Architectural Consulting
            <br />
            <span>Integrated</span>, with Over 25 Years of Experience
          </h1>
        )}

        <p className={styles.description}>{t('description')}</p>

        <div className={styles.actions}>
          <Link href="/contact">تواصل معنا</Link>
          <Link href="/projects">مشاريعنا</Link>
        </div>
      </div>

      <Statistics />
    </section>
  );
}
