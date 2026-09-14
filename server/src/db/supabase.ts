import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'placeholder-anon-key';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.warn(
    '⚠️ WARNING: SUPABASE_URL or SUPABASE_ANON_KEY is missing from environment variables. Running in mock/sandbox mode.'
  );
}

// Public / Client-facing Supabase instance
export const supabasePublic: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Admin / Service-role Supabase instance for backend operations
export const supabaseAdmin: SupabaseClient = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
