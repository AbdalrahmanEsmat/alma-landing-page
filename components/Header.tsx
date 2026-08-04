'use client';

import headerLogo from '@/assets/images/logo-blue.png';
import Image from 'next/image';
import styles from './Header.module.css';
import { Link, usePathname } from '@/i18n/navigation';
import { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'use-intl';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Nav');
  const pathName = usePathname();
  const locale = useLocale();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      console.log('Cleaning...');
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.branding}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={headerLogo} alt="logo" priority />
        </div>
        <div className={styles.brandingTextContainer}>
          <p className={styles.logoText}>للاستشارات الهندسية</p>
          <p className={styles.logoText}>Engineering Consulting</p>
        </div>
      </Link>

      <div ref={menuRef}>
        <button
          className={styles.toggle}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>
        <nav
          className={`${styles.nav} ${isOpen ? styles.navOpen : styles.navClose}`}
        >
          <ul className={styles.ul}>
            <li className={styles.langLinks}>
              <Link
                href={pathName}
                locale="en"
                className={`${styles.langLink} ${locale === 'en' ? styles.activeLang : ''}`}
              >
                En
              </Link>
              <Link
                href={pathName}
                locale="ar"
                className={`${styles.langLink} ${locale === 'ar' ? styles.activeLang : ''}`}
              >
                العربية
              </Link>
            </li>
            <li onClick={() => setIsOpen((prev) => !prev)}>
              <Link
                className={`${styles.contactUs} ${pathName === '/contact' ? styles.contactUsActive : ''}`}
                href="/contact"
              >
                {t('contact-us')}
              </Link>
            </li>
            <li onClick={() => setIsOpen((prev) => !prev)}>
              <Link
                className={`${styles.link} ${pathName === '/projects' ? styles.active : ''}`}
                href="/projects"
              >
                {t('projetcs')}
              </Link>
            </li>
            <li onClick={() => setIsOpen((prev) => !prev)}>
              <Link
                className={`${styles.link} ${pathName === '/serveces' ? styles.active : ''}`}
                href="/serveces"
              >
                {t('serveces')}
              </Link>
            </li>
            <li onClick={() => setIsOpen((prev) => !prev)}>
              <Link
                className={`${styles.link} ${pathName === '/about' ? styles.active : ''}`}
                href="/about"
              >
                {t('about-us')}
              </Link>
            </li>
            <li onClick={() => setIsOpen((prev) => !prev)}>
              <Link
                className={`${styles.link} ${pathName === '/' ? styles.active : ''}`}
                href="/"
              >
                {t('home')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
