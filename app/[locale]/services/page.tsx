// export const revalidate = 60; // 60 seconds

import openGraphImg from '@/assets/images/open-graph-image.png';
import serviceHeroBg from '@/assets/images/serviceHeroBg.jpg';
import Container from '@/components/Container';
import PageHero from '@/components/PageHero';
import Services from '@/components/Services';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Steps from './_components/Steps';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title:
      locale === 'ar'
        ? 'خدماتنا | ألما للاستشارات الهندسية والمعمارية'
        : 'Our Services | Alma Engineering & Architectural Consulting',

    description:
      locale === 'ar'
        ? 'تعرّف على الخدمات التي تقدمها ألما للاستشارات الهندسية والمعمارية، والموجهه لتلبية احتياجات المشاريع بمختلف أنواعها وفق أعلى معايير الجودة والاحترافية.'
        : 'Explore the professional services offered by Alma Engineering & Architectural Consulting, tailored to meet the needs of projects of all sizes with quality, innovation, and excellence.',

    openGraph: {
      title:
        locale === 'ar'
          ? 'خدماتنا | ألما للاستشارات الهندسية والمعمارية'
          : 'Our Services | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'تعرّف على الخدمات التي تقدمها ألما للاستشارات الهندسية والمعمارية، والموجهه لتلبية احتياجات المشاريع بمختلف أنواعها وفق أعلى معايير الجودة والاحترافية.'
          : 'Explore the professional services offered by Alma Engineering & Architectural Consulting, tailored to meet the needs of projects of all sizes with quality, innovation, and excellence.',

      type: 'website',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      url: `/${locale}/services`,
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
          ? 'خدماتنا | ألما للاستشارات الهندسية والمعمارية'
          : 'Our Services | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'تعرّف على الخدمات التي تقدمها ألما للاستشارات الهندسية والمعمارية، والموجهه لتلبية احتياجات المشاريع بمختلف أنواعها وفق أعلى معايير الجودة والاحترافية.'
          : 'Explore the professional services offered by Alma Engineering & Architectural Consulting, tailored to meet the needs of projects of all sizes with quality, innovation, and excellence.',

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

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations('servicesPage');
  setRequestLocale(locale);

  return (
    <main>
      <PageHero
        title={t('title')}
        backgroundUrl={serviceHeroBg.src}
        homeLinkText={t('homeLinkText')}
        servicesLinkText={t('servicesLinkText')}
      />
      <Container>
        <Services />
      </Container>
      <Steps />
    </main>
  );
}
