import Styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

type Props = {
  projects: Project[];
};

export default async function Projects({ projects }: Props) {
  return (
    <div className={Styles.projectsContainer}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name_ar={project.name_ar}
          name_en={project.name_en}
          location_ar={project.location_ar}
          location_en={project.location_en}
          category_ar={project.category_ar}
          category_en={project.category_en}
          year={project.year}
          images={project.project_images}
        />
      ))}
    </div>
  );
}
