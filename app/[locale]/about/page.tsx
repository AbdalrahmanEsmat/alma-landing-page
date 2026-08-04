import openGraph from '@/assets/images/open-graph-image.png';

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
          ? 'من نحن | ألما للاستشارات الهندسية والمعمارية'
          : 'About Us | Alma Engineering & Architectural Consulting',

      description:
        locale === 'ar'
          ? 'تعرّف على ألما للاستشارات الهندسية والمعمارية، ورسالتنا، ونهجنا، وخبراتنا.'
          : 'Learn about Alma Engineering & Architectural Consulting, our mission, our approach, and our expertise.',

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
export default function AboutPage() {
  return (
    <main>
      <h1>this is the about page</h1>
    </main>
  );
}
