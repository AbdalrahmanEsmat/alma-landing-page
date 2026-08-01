'use client';

import headerLogo from '@/assets/images/header-logo.png';
import Image from 'next/image';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Nav');

  return (
    <header>
      <div>
        <button onClick={() => router.replace(pathname, { locale: 'en' })}>
          En
        </button>
        <button onClick={() => router.replace(pathname, { locale: 'ar' })}>
          العربية
        </button>
      </div>
      <nav>
        <ul>
          <li>{t('home')}</li>
          <li>{t('about-us')}</li>
          <li>{t('serveces')}</li>
          <li>{t('projetcs')}</li>
          <li>{t('contact-us')}</li>
        </ul>
      </nav>
      <Image src={headerLogo} alt="logo" />
    </header>
  );
}
