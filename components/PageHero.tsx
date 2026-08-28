import { Link } from '@/i18n/navigation';
import Styles from './PageHero.module.css';

type Props = {
  title: string;
  backgroundUrl: string;
  homeLinkText: string;
  servicesLinkText: string;
};

export default function PageHero({
  title,
  backgroundUrl,
  homeLinkText,
  servicesLinkText,
}: Props) {
  return (
    <section
      className={Styles.hero}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className={Styles.content}>
        <h1 className={Styles.title}>{title}</h1>
        <div className={Styles.breadcrumb}>
          <Link href={'/'} className={Styles.link}>
            {homeLinkText}
          </Link>
          <span>/</span>
          <p className={Styles.link}>{servicesLinkText}</p>
        </div>
      </div>
    </section>
  );
}
