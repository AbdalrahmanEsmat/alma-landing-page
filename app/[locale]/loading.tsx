import styles from '@/app/[locale]/loading.module.css';

export default function loading() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} />
    </div>
  );
}
