import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const translation = await getTranslations('Home');

  return (
    <main>
      <h1>{translation('title')}</h1>
    </main>
  );
}
