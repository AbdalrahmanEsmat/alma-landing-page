import Image from 'next/image';
import { Link } from '@/i18n/navigation';

import headerLogoBlue from '@/assets/images/logo-blue.png';
import headerLogoWhite from '@/assets/images/logo-white.webp';
import styles from './Branding.module.css';

type Props = {
  place: 'header' | 'footer';
};

export default function Branding({ place }: Props) {
  return (
    <Link href="/" className={styles.branding}>
      <div
        className={`${place === 'header' ? styles.whiteBg : styles.blueBg} ${styles.logoContainer}`}
      >
        {place === 'header' ? (
          <Image
            className={styles.logo}
            src={headerLogoBlue}
            alt="logo"
            priority
          />
        ) : (
          <Image className={styles.logo} src={headerLogoWhite} alt="logo" />
        )}
      </div>

      <div
        className={`${place === 'header' ? styles.whiteText : styles.blueText} ${styles.brandingTextContainer}`}
      >
        <p className={styles.logoText}>للاستشارات الهندسية</p>
        <p className={styles.logoText}>Engineering Consulting</p>
      </div>
    </Link>
  );
}
