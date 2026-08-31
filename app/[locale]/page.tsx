import HomeHero from '@/components/HomeHero';
import Services from '@/components/Services';
import Styles from './page.module.css';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Container from '@/components/Container';
import { Link } from '@/i18n/navigation';
import Projects from '@/components/Projects';
import { getHomePageData } from '@/utils/data-service';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('homePage');

  const { services, projects } = await getHomePageData(4, 8);
  // console.log(servcies, projects);

  return (
    <main>
      <HomeHero />
      <Container>
        <div className={Styles.container}>
          <div className={Styles.part}>
            <p className={Styles.title}>{t('servicesTitle')}</p>
            <p className={Styles.description}>{t('servicesDescription')}</p>
            <Services services={services} />
            <Link href="/services" className={Styles.showAllButton}>
              {t('allServicesBtn')}
            </Link>
          </div>
          <div className={Styles.part}>
            <p className={Styles.title}>{t('projectsTitle')}</p>
            <p className={Styles.description}>{t('projectsDescription')}</p>
            <Projects projects={projects} />
            <Link href="/projects" className={Styles.showAllButton}>
              {t('allProjectsBtn')}
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
