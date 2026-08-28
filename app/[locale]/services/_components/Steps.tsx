import Image from 'next/image';
import Styles from './Steps.module.css';
import { getTranslations } from 'next-intl/server';
import step1 from '@/assets/images/step1.png';
import step2 from '@/assets/images/step2.png';
import step3 from '@/assets/images/step3.png';
import step4 from '@/assets/images/step4.png';
import step5 from '@/assets/images/step5.png';

export default async function Steps() {
  const t = await getTranslations('stepsComp');

  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>{t('stepsTitle')}</h2>
      <p className={Styles.description}>{t('stepsDescription')}</p>

      <div className={Styles.stepsContainer}>
        <div className={Styles.stepContainer}>
          <p>01</p>
          <div>
            <Image src={step1} alt="step1" width={60} height={60} />
            <h4>{t('stepOneTitle')}</h4>
            <p>{t('stepOneDescription')}</p>
          </div>
        </div>

        <div className={Styles.stepContainer}>
          <p>02</p>
          <div>
            <Image src={step2} alt="step2" width={60} height={60} />
            <h4>{t('stepTwoTitle')}</h4>
            <p>{t('stepTwoDescription')}</p>
          </div>
        </div>

        <div className={Styles.stepContainer}>
          <p>03</p>
          <div>
            <Image src={step3} alt="step3" width={60} height={60} />
            <h4>{t('stepThreeTitle')}</h4>
            <p>{t('stepThreeDescription')}</p>
          </div>
        </div>

        <div className={Styles.stepContainer}>
          <p>04</p>
          <div>
            <Image src={step4} alt="step4" width={60} height={60} />
            <h4>{t('stepFourTitle')}</h4>
            <p>{t('stepFourDescription')}</p>
          </div>
        </div>

        <div className={Styles.stepContainer}>
          <p>05</p>
          <div>
            <Image src={step5} alt="step5" width={60} height={60} />
            <h4>{t('stepFiveTitle')}</h4>
            <p>{t('stepFiveDescription')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
