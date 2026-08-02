'use client';

import headerLogo from '@/assets/images/logo-blue.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('Nav');

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <nav>
          <ul className={styles.ul}>
            <li>
              <Link className={styles.link} href="#">
                {t('home')}
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="#">
                {t('about-us')}
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="#">
                {t('serveces')}
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="#">
                {t('projetcs')}
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="#">
                {t('contact-us')}
              </Link>
            </li>
            <li>
              <button>En</button>
              <button>العربية</button>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.branding}>
        <div className={styles.brandingTextContainer}>
          <p className={styles.logoText}>للاستشارات الهندسية</p>
          <p className={styles.logoText}>Engineering Consulting</p>
        </div>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={headerLogo} alt="logo" />
        </div>
      </div>
    </header>
  );
}
