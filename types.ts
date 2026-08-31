export type Project = {
  id: number;
  name_ar: string;
  name_en: string;
  location_ar: string;
  location_en: string;
  category_ar: string;
  category_en: string;
  year: number;
  project_images: ProjectImage[];
};

export type ProjectImage = {
  id: number;
  image_url: string;
  sort_order: number;
  is_main: boolean;
};

export type Service = {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image_url: string;
};

export type HomePageData = {
  services: Service[];
  projects: Project[];
};
