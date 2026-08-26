'use client';

import { useEffect, useState } from 'react';
import styles from './Statistics.module.css';
import { useTranslations } from 'use-intl';

export default function Statistics() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const t = useTranslations('Statistics');

  useEffect(() => {
    const id = setTimeout(() => {
      if (years < 25) {
        setYears((prev) => prev + 1);
      }

      if (projects < 250) {
        setProjects((prev) => prev + 1);
      }
    }, 20);

    return () => clearTimeout(id);
  }, [years, projects]);

  return (
    <div className={styles.statistics}>
      <div className={styles.statCard}>
        <span className={styles.number}>{years}+</span>
        <span>{t('years')}</span>
      </div>

      <div className={styles.statCard}>
        <span className={styles.number}>{projects}+</span>
        <span>{t('projects')}</span>
      </div>
    </div>
  );
}
