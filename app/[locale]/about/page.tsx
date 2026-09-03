import openGraphImg from '@/assets/images/open-graph-image.png';
import aboutHeroBg from '@/assets/images/aboutHeroBg.jpg';
import aboutImg1 from '@/assets/images/aboutImg1.jpg';
import card1Image from '@/assets/images/target.png';
import card2Image from '@/assets/images/lightbulb.png';
import card3Image from '@/assets/images/high-quality.png';
import card4Image from '@/assets/images/partner-icon.png';
import p3Img from '@/assets/images/p3img.jpg';
import { FaCheck } from 'react-icons/fa';
import PageHero from '@/components/PageHero';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Styles from './page.module.css';
import { Link } from '@/i18n/navigation';
import Container from '@/components/Container';
import Image from 'next/image';
import Title from '@/components/Title';
import MiniTitle from './_components/MiniTitle';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title:
      locale === 'ar'
        ? 'من نحن | ألما للاستشارات الهندسية والمعمارية'
        : 'About Us | Alma Engineering & Architectural Consulting',

    description:
      locale === 'ar'
        ? 'تعرّف على ألما للاستشارات الهندسية والمعمارية، ورسالتنا، ونهجنا، وخبراتنا.'
        : 'Learn about Alma Engineering & Architectural Consulting, our mission, our approach, and our expertise.',

    openGraph: {
      title:
        locale === 'ar'
          ? 'من نحن | ألما للاستشارات الهندسية والمعمارية'
          : 'About Us | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'تعرّف على ألما للاستشارات الهندسية والمعمارية، ورسالتنا، ونهجنا، وخبراتنا.'
          : 'Learn about Alma Engineering & Architectural Consulting, our mission, our approach, and our expertise.',

      type: 'website',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      url: `/${locale}/about`,
      images: [
        {
          url: openGraphImg.src,
          width: openGraphImg.width,
          height: openGraphImg.height,
          alt:
            locale === 'ar'
              ? 'ألما للاستشارات الهندسية والمعمارية'
              : 'Alma Engineering & Architectural Consulting',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',

      title:
        locale === 'ar'
          ? 'من نحن | ألما للاستشارات الهندسية والمعمارية'
          : 'About Us | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'تعرّف على ألما للاستشارات الهندسية والمعمارية، ورسالتنا، ونهجنا، وخبراتنا.'
          : 'Learn about Alma Engineering & Architectural Consulting, our mission, our approach, and our expertise.',

      images: [
        {
          url: openGraphImg.src,
          alt:
            locale === 'ar'
              ? 'ألما للاستشارات الهندسية والمعمارية'
              : 'Alma Engineering & Architectural Consulting',
        },
      ],
    },
  };
}
export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('aboutPage');
  return (
    <main>
      <PageHero
        title={t('title')}
        homeLinkText={t('homeLinkText')}
        pageText={t('aboutText')}
        backgroundUrl={aboutHeroBg.src}
      />
      <Container>
        <div className={Styles.pOne}>
          <div className={Styles.pOneImgContainer}>
            <Image
              src={aboutImg1.src}
              fill
              alt="building"
              className={Styles.pOneImg}
              priority
            />
          </div>
          <div className={Styles.pOneInfo}>
            <MiniTitle>{t('title')}</MiniTitle>
            <h3>{t('partOneTitle')}</h3>
            <p>{t('partOneText')}</p>
            <Link href="/contact">{t('partOneBtn')}</Link>
          </div>
        </div>
        <div className={Styles.pTwo}>
          <Title>{t('partTwoTitle')}</Title>
          <div className={Styles.cardsContainer}>
            <div className={Styles.pTwoCard}>
              <div className={Styles.pTwoCardImgContainer}>
                <Image src={card1Image} alt="commitment" />
              </div>
              <h3>{t('partTwoCardOneTitle')}</h3>
              <p>{t('partTwoCardOneText')}</p>
            </div>
            <div className={Styles.pTwoCard}>
              <div className={Styles.pTwoCardImgContainer}>
                <Image src={card2Image} alt="idea" />
              </div>
              <h3>{t('partTwoCardOneTitle')}</h3>
              <p>{t('partTwoCardOneText')}</p>
            </div>
            <div className={Styles.pTwoCard}>
              <div className={Styles.pTwoCardImgContainer}>
                <Image src={card3Image} alt="quality" />
              </div>
              <h3>{t('partTwoCardOneTitle')}</h3>
              <p>{t('partTwoCardOneText')}</p>
            </div>
            <div className={Styles.pTwoCard}>
              <div className={Styles.pTwoCardImgContainer}>
                <Image src={card4Image} alt="partner" />
              </div>
              <h3>{t('partTwoCardOneTitle')}</h3>
              <p>{t('partTwoCardOneText')}</p>
            </div>
          </div>
        </div>
      </Container>
      <div className={Styles.pThree}>
        <div className={Styles.pThreeImgContainer}>
          <Image src={p3Img.src} fill alt="building" />
        </div>
        <div className={Styles.pThreeInfo}>
          <MiniTitle>{t('partThreeTitle')}</MiniTitle>
          <p>{t('partThreeIntro')}</p>
          <p>{t('partThreeDescription')}</p>
          <ul>
            <li>
              <FaCheck className={Styles.pThreeIcons} />
              <span>{t('partThreePointOne')}</span>
            </li>
            <li>
              <FaCheck className={Styles.pThreeIcons} />
              <span>{t('partThreePointTwo')}</span>
            </li>
            <li>
              <FaCheck className={Styles.pThreeIcons} />
              <span>{t('partThreePointThree')}</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
