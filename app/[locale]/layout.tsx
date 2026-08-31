import Header from '@/components/Header';
import '../globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import openGraphImg from '@/assets/images/open-graph-image.png';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title:
      locale === 'ar'
        ? 'ألما للاستشارات الهندسية والمعمارية'
        : 'Alma Engineering & Architectural Consulting',
    description:
      locale === 'ar'
        ? 'ألما للاستشارات الهندسية والمعمارية تقدم حلولاً هندسية متكاملة تشمل التصميم المعماري، والإشراف الهندسي، وإدارة المشاريع، مع الالتزام بأعلى معايير الجودة والابتكار.'
        : 'Alma for Engineering and Architectural Consulting offers integrated engineering solutions including architectural design, engineering supervision, and project management.',
    openGraph: {
      title:
        locale === 'ar'
          ? 'ألما للاستشارات الهندسية والمعمارية'
          : 'Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'ألما للاستشارات الهندسية والمعمارية تقدم حلولاً هندسية متكاملة تشمل التصميم المعماري، والإشراف الهندسي، وإدارة المشاريع، مع الالتزام بأعلى معايير الجودة والابتكار.'
          : 'Alma for Engineering and Architectural Consulting offers integrated engineering solutions including architectural design, engineering supervision, and project management.',
      type: 'website',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
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
      url: `/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title:
        locale === 'ar'
          ? 'ألما للاستشارات الهندسية والمعمارية'
          : 'Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'ألما للاستشارات الهندسية والمعمارية تقدم حلولاً هندسية متكاملة تشمل التصميم المعماري، والإشراف الهندسي، وإدارة المشاريع، مع الالتزام بأعلى معايير الجودة والابتكار.'
          : 'Alma for Engineering and Architectural Consulting offers integrated engineering solutions including architectural design, engineering supervision, and project management.',

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
    //change later
    metadataBase: new URL('https://alma.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        ar: '/ar',
      },
    },
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider>
          <Suspense fallback={null}>
            <Header />
          </Suspense>

          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
