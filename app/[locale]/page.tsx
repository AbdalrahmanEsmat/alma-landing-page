import HomeHero from '@/components/HomeHero';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('Home');
  return (
    <main>
      <HomeHero locale={locale} />
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('title')}</h1>
    </main>
  );
}
