import { createClient } from '@supabase/supabase-js'
import { env } from '$env/dynamic/private';
export const supabase = createClient('https://rqwwaedoaszvqyjrcuro.supabase.co', env.NEXT_PUBLIC_SUPABASE_ANON_KEY)