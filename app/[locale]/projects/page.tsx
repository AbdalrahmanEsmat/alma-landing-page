import openGraphImg from '@/assets/images/open-graph-image.png';
import projectsHerobg from '@/assets/images/projectsHerobg.jpg';
import Container from '@/components/Container';
import PageHero from '@/components/PageHero';
import PaginationControls from '@/components/Pagination';
import Projects from '@/components/Projects';
import { getProjects } from '@/utils/data-service';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
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

export default async function ProjectsPage({ searchParams }: Props) {
  const t = await getTranslations('projectsPage');
  const queryParams = await searchParams;
  const page = parseInt(queryParams?.page as string) || 1;
  const perPage = parseInt(queryParams?.perPage as string) || 8;

  const { data: projetcs, count } = await getProjects(page, perPage);
  const totalPages = Math.ceil((count ?? 0) / perPage);

  return (
    <main>
      <PageHero
        title={t('title')}
        backgroundUrl={projectsHerobg.src}
        homeLinkText={t('homeLinkText')}
        servicesLinkText={t('servicesLinkText')}
      />
      <Container>
        <Projects projects={projetcs} />
      </Container>
      {totalPages > 1 && (
        <PaginationControls
          hasNextPage={page < totalPages}
          hasPrevPage={page > 1}
          page={page}
          perPage={perPage}
          totalPage={totalPages}
          pageName="projects"
        />
      )}
    </main>
  );
}
