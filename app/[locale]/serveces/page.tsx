import openGraph from '@/assets/images/open-graph-image.png';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title:
      locale === 'ar'
        ? 'خدماتنا | ألما للاستشارات الهندسية والمعمارية'
        : 'Our Services | Alma Engineering & Architectural Consulting',

    description:
      locale === 'ar'
        ? 'تعرّف على الخدمات التي تقدمها ألما للاستشارات الهندسية والمعمارية، والموجهه لتلبية احتياجات المشاريع بمختلف أنواعها وفق أعلى معايير الجودة والاحترافية.'
        : 'Explore the professional services offered by Alma Engineering & Architectural Consulting, tailored to meet the needs of projects of all sizes with quality, innovation, and excellence.',

    openGraph: {
      title:
        locale === 'ar'
          ? 'خدماتنا | ألما للاستشارات الهندسية والمعمارية'
          : 'Our Services | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'تعرّف على الخدمات التي تقدمها ألما للاستشارات الهندسية والمعمارية، والموجهه لتلبية احتياجات المشاريع بمختلف أنواعها وفق أعلى معايير الجودة والاحترافية.'
          : 'Explore the professional services offered by Alma Engineering & Architectural Consulting, tailored to meet the needs of projects of all sizes with quality, innovation, and excellence.',

      type: 'website',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      url: `/${locale}/services`,
      images: [
        {
          url: openGraph.src,
          width: openGraph.width,
          height: openGraph.height,
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
          ? 'خدماتنا | ألما للاستشارات الهندسية والمعمارية'
          : 'Our Services | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'تعرّف على الخدمات التي تقدمها ألما للاستشارات الهندسية والمعمارية، والموجهه لتلبية احتياجات المشاريع بمختلف أنواعها وفق أعلى معايير الجودة والاحترافية.'
          : 'Explore the professional services offered by Alma Engineering & Architectural Consulting, tailored to meet the needs of projects of all sizes with quality, innovation, and excellence.',

      images: [
        {
          url: openGraph.src,
          alt:
            locale === 'ar'
              ? 'ألما للاستشارات الهندسية والمعمارية'
              : 'Alma Engineering & Architectural Consulting',
        },
      ],
    },
  };
}

export default function ServecesPage() {
  return (
    <main>
      <h1>this is the serveces page</h1>
    </main>
  );
}
