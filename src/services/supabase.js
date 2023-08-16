import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPAURL;
const supabaseKey = import.meta.env.VITE_SUPAKEY;
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
