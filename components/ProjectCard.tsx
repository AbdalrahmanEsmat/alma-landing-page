'use client';

import { FaLocationDot } from 'react-icons/fa6';
import Styles from './ProjectCard.module.css';
import Image from 'next/image';
import Modal from './Modal';
import { useLocale } from 'next-intl';
import { useState } from 'react';

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

export default function ProjectCard({
  name_ar,
  name_en,
  location_ar,
  location_en,
  category_ar,
  category_en,
  year,
  images,
}: Props) {
  const locale = useLocale();
  const mainImage = images.find((img) => img.is_main);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <div className={Styles.projectCard} onClick={() => setIsSelected(true)}>
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
      <Modal isOpen={isSelected} onClose={() => setIsSelected(false)}>
        <div className={Styles.modalContainer}>
          <div className={Styles.modalMainImgContainer}>
            <Image
              src={mainImage!.image_url}
              fill
              alt="project image"
              className={Styles.modalMainImg}
            />
          </div>
          <div className={Styles.images}>
            {images.map((img) => (
              <div key={img.id} className={Styles.modalImgContainer}>
                <Image
                  src={img.image_url}
                  fill
                  alt="project image"
                  className={Styles.modalImg}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
