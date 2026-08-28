import HomeHero from '@/components/HomeHero';
import Services from '@/components/Services';
import Styles from './page.module.css';
import { getTranslations } from 'next-intl/server';
import Container from '@/components/Container';
import { Link } from '@/i18n/navigation';

export default async function Page() {
  const t = await getTranslations('homePage');
  return (
    <main>
      <HomeHero />
      <Container>
        <div className={Styles.servicesPart}>
          <p className={Styles.title}>{t('servicesTitle')}</p>
          <Services numberOfCards={4} />
          <Link href="/services" className={Styles.showAllButton}>
            {t('allServicesBtn')}
          </Link>
        </div>
      </Container>
    </main>
  );
}
