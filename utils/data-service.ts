import { supabase } from './supabase/supabase';

export async function getServices(numberOfServices?: number) {
  let query = supabase
    .from('services')
    .select('id, title_ar, title_en, description_ar, description_en, image_url')
    .order('id');

  if (numberOfServices !== undefined) {
    query = query.limit(numberOfServices);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getProjects(numberOfProjects?: number) {
  let query = supabase
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
    )
    .order('name_ar');

  if (numberOfProjects !== undefined) {
    query = query.limit(numberOfProjects);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
