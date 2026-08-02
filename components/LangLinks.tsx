'use client';

import { Link, usePathname } from '@/i18n/navigation';
import styles from './LangLinks.module.css';

export default function LangLinks() {
  const pathName = usePathname();

  return (
    <li className={styles.langLinks}>
      <Link href={`/${pathName}`} locale="en" className={styles.langLink}>
        En
      </Link>
      <Link
        href={`/${pathName}`}
        locale="ar"
        className={`${styles.langLink} ${styles.activeLang}`}
      >
        العربية
      </Link>
    </li>
  );
}
