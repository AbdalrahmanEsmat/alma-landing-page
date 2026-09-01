import openGraphImg from '@/assets/images/open-graph-image.png';
import aboutHeroBg from '@/assets/images/aboutHeroBg.jpg';
import aboutImg1 from '@/assets/images/aboutImg1.jpg';
import PageHero from '@/components/PageHero';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Styles from './page.module.css';
import { Link } from '@/i18n/navigation';
import Container from '@/components/Container';
import Image from 'next/image';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title:
      locale === 'ar'
        ? 'من نحن | ألما للاستشارات الهندسية والمعمارية'
        : 'About Us | Alma Engineering & Architectural Consulting',

    description:
      locale === 'ar'
        ? 'تعرّف على ألما للاستشارات الهندسية والمعمارية، ورسالتنا، ونهجنا، وخبراتنا.'
        : 'Learn about Alma Engineering & Architectural Consulting, our mission, our approach, and our expertise.',

    openGraph: {
      title:
        locale === 'ar'
          ? 'من نحن | ألما للاستشارات الهندسية والمعمارية'
          : 'About Us | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'تعرّف على ألما للاستشارات الهندسية والمعمارية، ورسالتنا، ونهجنا، وخبراتنا.'
          : 'Learn about Alma Engineering & Architectural Consulting, our mission, our approach, and our expertise.',

      type: 'website',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      url: `/${locale}/about`,
      images: [
        {
          url: openGraphImg.src,
          width: openGraphImg.width,
          height: openGraphImg.height,
          alt:
            locale === 'ar'
              ? 'ألما للاستشارات الهندسية والمعمارية'
              : 'Alma Engineering & Architectural Consulting',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',

      title:
        locale === 'ar'
          ? 'من نحن | ألما للاستشارات الهندسية والمعمارية'
          : 'About Us | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'تعرّف على ألما للاستشارات الهندسية والمعمارية، ورسالتنا، ونهجنا، وخبراتنا.'
          : 'Learn about Alma Engineering & Architectural Consulting, our mission, our approach, and our expertise.',

      images: [
        {
          url: openGraphImg.src,
          alt:
            locale === 'ar'
              ? 'ألما للاستشارات الهندسية والمعمارية'
              : 'Alma Engineering & Architectural Consulting',
        },
      ],
    },
  };
}
export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('aboutPage');
  return (
    <main>
      <PageHero
        title={t('title')}
        homeLinkText={t('homeLinkText')}
        pageText={t('aboutText')}
        backgroundUrl={aboutHeroBg.src}
      />
      <Container>
        <div className={Styles.pOne}>
          <div className={Styles.pOneImgContainer}>
            <Image
              src={aboutImg1.src}
              fill
              alt="building"
              className={Styles.pOneImg}
            />
          </div>
          <div className={Styles.pOneInfo}>
            <h2>{t('title')}</h2>
            <h3>{t('partOneTitle')}</h3>
            <p>{t('partOneText')}</p>
            <Link href="/contact">{t('partOneBtn')}</Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
