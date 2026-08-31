import { supabase } from './supabase/supabase';

export async function getHomePageData(
  servicesLimit: number,
  projectsLimit: number,
) {
  const { data, error } = await supabase.rpc('get_home_page_data', {
    services_limit: servicesLimit,
    projects_limit: projectsLimit,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('id, title_ar, title_en, description_ar, description_en, image_url')
    .order('id');

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getProjects(page: number, perPage: number) {
  const { data, count, error } = await supabase
    .from('projects')
    .select(
      `
      id,
      name_ar,
      name_en,
      location_ar,
      location_en,
      category_ar,
      category_en,
      year,
      project_images (
        id,
        image_url,
        sort_order,
        is_main
      )
    `,
      { count: 'exact' },
    )
    .order('name_ar')
    .range((page - 1) * perPage, page * perPage - 1);

  if (error) {
    throw new Error(error.message);
  }

  return {
    data,
    count,
  };
}
