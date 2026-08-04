import Header from '@/components/Header';
import '../globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { title } from 'process';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata = {
  title: 'ألما للاستشارات الهندسية والمعمارية',
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'ltr' : 'rtl'}>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
