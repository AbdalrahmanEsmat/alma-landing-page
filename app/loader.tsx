import styles from '@/app/[locale]/loader.module.css';
import Image from 'next/image';
import logo from '@/assets/images/logo-blue.png';

export default function loader() {
  return (
    <div className={styles.loader}>
      <Image src={logo} alt="loading" />
    </div>
  );
}
