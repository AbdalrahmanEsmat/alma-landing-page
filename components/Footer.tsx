import { getTranslations } from 'next-intl/server';
import styles from './Footer.module.css';
import Branding from '@/components/Branding';
import { Link } from '@/i18n/navigation';

import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

type Props = {
  locale: string;
};

export default async function Footer({ locale }: Props) {
  const t = await getTranslations('Footer');
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brandSection}>
          <Branding place="footer" />

          <p className={styles.description}>{t('description')}</p>
        </div>

        <div className={styles.linksSection}>
          <h3 className={styles.heading}>{t('quick-links')}</h3>

          <nav className={styles.links}>
            <Link href="/">{t('home')}</Link>
            <Link href="/about">{t('about-us')}</Link>
            <Link href="/services">{t('serveces')}</Link>
            <Link href="/projects">{t('projects')}</Link>
            <Link href="/contact">{t('contact-us')}</Link>
          </nav>
        </div>

        <div className={styles.contactSection}>
          <h3 className={styles.heading}>{t('contact-us')}</h3>

          <ul className={styles.contactList}>
            <li>
              <FaLocationDot className={styles.icon} />
              <a
                href="https://www.google.com/maps?q=%D8%A7%D9%84%D9%85%D9%89+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+Alma+Engineering+Consulting,+%D8%AD%D9%8A%D8%8C+%D8%B7%D8%B1%D9%8A%D9%82+%D8%B9%D8%AB%D9%85%D8%A7%D9%86+%D8%A8%D9%86+%D8%B9%D9%81%D8%A7%D9%86+%D8%B1%D8%B6%D9%8A+%D8%A7%D9%84%D9%84%D9%87+%D8%B9%D9%86%D9%87%D8%8C+%D8%A7%D9%84%D9%86%D8%B1%D8%AC%D8%B3%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+13324&ftid=0x3e2efbf9b8c2bb7b:0x2c912124145320d8&entry=gps&lucs=,94275411,94275303,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304&g_ep=CAISEjI1LjIyLjAuNzYzNTE5NzAyMBgAINeCAypjLDk0Mjc1NDExLDk0Mjc1MzAzLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=2e58fd25-247f-4b29-9825-bac2d9b14fcd&g_st=com.google.maps.preview.copy"
                target="blank"
              >
                {t('address')}
              </a>
            </li>
            <li>
              <FaPhone className={styles.icon} />
              <a href="tel:+966559536609" target="blank">
                <span dir="ltr">+966 55 953 6609</span>
              </a>
            </li>
            <li>
              <FaEnvelope className={styles.icon} />
              <a href="mailto:info@alma-consulting.com" target="blank">
                {t('email')}
              </a>
            </li>
            <li>
              <FaInstagram className={styles.icon} />
              <a href="https://www.instagram.com/almac_sa/" target="blank">
                {t('insatgram')}
              </a>
            </li>
            <li>
              <FaWhatsapp className={styles.icon} />
              <a
                href="https://api.whatsapp.com/send/?phone=966559536609&text&type=phone_number&app_absent=0"
                target="blank"
              >
                {t('whatsapp')}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        {locale === 'ar'
          ? `جميع الحقوق محفوظة © ${year} - ألمى للاستشارات الهندسية`
          : `All Rights Reserved © ${year} - Alma Engineering Consulting`}
      </div>
    </footer>
  );
}
