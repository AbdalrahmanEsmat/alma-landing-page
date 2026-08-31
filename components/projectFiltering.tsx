'use client';

import { useLocale, useTranslations } from 'next-intl';
import Styles from './ProjectFiltering.module.css';
import { useRouter } from 'next/navigation';

type Props = {
  category: string;
};

export default function ProjectFiltering({ category }: Props) {
  const t = useTranslations('projectFilteringComp');
  const locale = useLocale();
  const router = useRouter();

  function handleFilter(category: string) {
    router.push(`/${locale}/projects?category=${category}&page=1&perPage=8`);
  }

  return (
    <div className={Styles.filtersContainer}>
      <button
        type="button"
        className={`${Styles.filter} ${category === 'all' ? Styles.selected : ''}`}
        onClick={() => handleFilter('all')}
      >
        {t('all')}
      </button>

      <button
        type="button"
        className={`${Styles.filter} ${category === 'residential' ? Styles.selected : ''}`}
        onClick={() => handleFilter('residential')}
      >
        {t('residential')}
      </button>

      <button
        type="button"
        className={`${Styles.filter} ${category === 'industrial' ? Styles.selected : ''}`}
        onClick={() => handleFilter('industrial')}
      >
        {t('industrial')}
      </button>

      <button
        type="button"
        className={`${Styles.filter} ${category === 'commercial' ? Styles.selected : ''}`}
        onClick={() => handleFilter('commercial')}
      >
        {t('commercial')}
      </button>

      <button
        type="button"
        className={`${Styles.filter} ${category === 'educational' ? Styles.selected : ''}`}
        onClick={() => handleFilter('educational')}
      >
        {t('educational')}
      </button>

      <button
        type="button"
        className={`${Styles.filter} ${category === 'administrative' ? Styles.selected : ''}`}
        onClick={() => handleFilter('administrative')}
      >
        {t('administrative')}
      </button>

      <button
        type="button"
        className={`${Styles.filter} ${category === 'hotel' ? Styles.selected : ''}`}
        onClick={() => handleFilter('hotel')}
      >
        {t('hotel')}
      </button>
    </div>
  );
}
