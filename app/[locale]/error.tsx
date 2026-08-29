'use client';

import Image from 'next/image';
import warningImage from '@/assets/images/warning.png';
import Styles from './error.module.css';

export default function Error({ error }: { error: Error }) {
  return (
    <main className={Styles.errorContainer}>
      <Image src={warningImage} width={90} height={90} alt="error" />
      <h1>An error occured!</h1>
      <p className={Styles.errorDescription}>{error.message}</p>
    </main>
  );
}
