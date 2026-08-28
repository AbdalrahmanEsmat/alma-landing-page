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
