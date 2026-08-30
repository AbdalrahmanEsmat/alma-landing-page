import { getLocale } from 'next-intl/server';
import { FaLocationDot } from 'react-icons/fa6';
import Styles from './ProjectCard.module.css';
import Image from 'next/image';

type ProjectImage = {
  id: number;
  image_url: string;
  sort_order: number;
  is_main: boolean;
};

type Props = {
  name_ar: string;
  name_en: string;
  location_ar: string;
  location_en: string;
  category_ar: string;
  category_en: string;
  year: number;
  images: ProjectImage[];
};

export default async function ProjectCard({
  name_ar,
  name_en,
  location_ar,
  location_en,
  category_ar,
  category_en,
  year,
  images,
}: Props) {
  const locale = await getLocale();
  const mainImage = images.find((img) => img.is_main);

  return (
    <div className={Styles.projectCard}>
      <div className={Styles.imgContainer}>
        <Image
          src={mainImage!.image_url}
          fill
          alt="project image"
          className={Styles.img}
        />
      </div>
      <div className={Styles.infoPart}>
        <p className={Styles.name}>{locale === 'ar' ? name_ar : name_en}</p>
        <p className={Styles.location}>
          <FaLocationDot />
          {locale === 'ar' ? location_ar : location_en}
        </p>
        <div className={Styles.categoryYearSection}>
          <p className={Styles.category}>
            {locale === 'ar' ? category_ar : category_en}
          </p>
          <p className={Styles.year}>{year}</p>
        </div>
      </div>
    </div>
  );
}
