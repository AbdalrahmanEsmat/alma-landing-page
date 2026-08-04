import openGraph from '@/assets/images/open-graph-image.png';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title:
      locale === 'ar'
        ? 'تواصل معنا | ألما للاستشارات الهندسية والمعمارية'
        : 'Contact Us | Alma Engineering & Architectural Consulting',

    description:
      locale === 'ar'
        ? 'تواصل مع فريق ألما للاستشارات الهندسية والمعمارية للاستفسارات، والحصول على استشارة هندسية متخصصة.'
        : 'Contact Alma Engineering & Architectural Consulting for inquiries, and professional engineering consultation.',

    openGraph: {
      title:
        locale === 'ar'
          ? 'تواصل معنا | ألما للاستشارات الهندسية والمعمارية'
          : 'Contact Us | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'تواصل مع فريق ألما للاستشارات الهندسية والمعمارية للاستفسارات، والحصول على استشارة هندسية متخصصة.'
          : 'Contact Alma Engineering & Architectural Consulting for inquiries, and professional engineering consultation.',

      type: 'website',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      url: `/${locale}/contact`,
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
          ? 'تواصل معنا | ألما للاستشارات الهندسية والمعمارية'
          : 'Contact Us | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'تواصل مع فريق ألما للاستشارات الهندسية والمعمارية للاستفسارات، والحصول على استشارة هندسية متخصصة.'
          : 'Contact Alma Engineering & Architectural Consulting for inquiries, and professional engineering consultation.',

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
export default function ContactPage() {
  return (
    <main>
      <h1>this is the contact page</h1>
    </main>
  );
}
