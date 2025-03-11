import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getUsers() {
  const { data, error } = await supabase.from('users').select('*');
  if (error) console.error(error);
  return data;
}

export default supabase;
