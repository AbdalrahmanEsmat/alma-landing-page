import Link from 'next/link';
import styles from './HomeHero.module.css';
import Statistics from './Statistics';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function HomeHero() {
  const locale = await getLocale();

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
          <Link href="/contact">{t('contactBtn')}</Link>
          <Link href="/projects">{t('projectsBtn')}</Link>
        </div>
      </div>

      <Statistics />
    </section>
  );
}
