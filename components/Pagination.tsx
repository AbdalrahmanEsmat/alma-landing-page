'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './Pagination.module.css';
import { useLocale, useTranslations } from 'next-intl';

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  page: number;
  perPage: number;
  totalPage: number;
  pageName: string;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  page,
  perPage,
  totalPage,
  pageName,
}) => {
  const router = useRouter();
  const t = useTranslations('paginationComp');
  const locale = useLocale();

  // function

  return (
    <div className={Styles.paginationContainer}>
      <button
        className={Styles.button}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `/${locale}/${pageName}?page=${page - 1}&perPage=${perPage}`,
          );
        }}
      >
        {t('prev')}
      </button>

      <p className={Styles.currentPage}>{`${page} / ${totalPage}`}</p>

      <button
        className={Styles.button}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `/${locale}/${pageName}?page=${page + 1}&perPage=${perPage}`,
          );
        }}
      >
        {t('next')}
      </button>
    </div>
  );
};

export default PaginationControls;
