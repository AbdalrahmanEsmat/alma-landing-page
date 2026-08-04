import openGraphImg from '@/assets/images/open-graph-image.png';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title:
      locale === 'ar'
        ? 'مشاريعنا | ألما للاستشارات الهندسية والمعمارية'
        : 'Our Projects | Alma Engineering & Architectural Consulting',

    description:
      locale === 'ar'
        ? 'اكتشف مجموعة من مشاريع ألما للاستشارات الهندسية والمعمارية التي تعكس خبراتنا'
        : 'Explore Alma Engineering & Architectural Consulting projects showcasing our experiences',

    openGraph: {
      title:
        locale === 'ar'
          ? 'مشاريعنا | ألما للاستشارات الهندسية والمعمارية'
          : 'Our Projects | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'اكتشف مجموعة من مشاريع ألما للاستشارات الهندسية والمعمارية التي تعكس خبراتنا'
          : 'Explore Alma Engineering & Architectural Consulting projects showcasing our experiences',

      type: 'website',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      url: `/${locale}/projects`,
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
          ? 'مشاريعنا | ألما للاستشارات الهندسية والمعمارية'
          : 'Our Projects | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'اكتشف مجموعة من مشاريع ألما للاستشارات الهندسية والمعمارية التي تعكس خبراتنا'
          : 'Explore Alma Engineering & Architectural Consulting projects showcasing our experiences',

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

export default function ProjectsPage() {
  return (
    <main>
      <h1>this is the projects page</h1>
    </main>
  );
}
