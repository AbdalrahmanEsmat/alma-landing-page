import headerLogo from '@/assets/images/logo-blue.png';
import Image from 'next/image';
import styles from './Header.module.css';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import LangLinks from './LangLinks';

export default async function Header() {
  const t = await getTranslations('Nav');

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <nav>
          <ul className={styles.ul}>
            <li>
              <Link className={styles.link} href="/">
                {t('home')}
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/about">
                {t('about-us')}
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/serveces">
                {t('serveces')}
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/projects">
                {t('projetcs')}
              </Link>
            </li>
            <li>
              <Link className={styles.contactUs} href="/contact">
                {t('contact-us')}
              </Link>
            </li>
            <LangLinks />
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
