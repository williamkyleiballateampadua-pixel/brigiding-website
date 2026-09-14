import { createClient, SupabaseClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Ensure .env is loaded from the root workspace folder
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'placeholder-anon-key';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_URL.includes('placeholder')) {
  console.warn(
    '⚠️ WARNING: SUPABASE_URL or SUPABASE_ANON_KEY is missing from environment variables. Running in mock/sandbox mode.'
  );
} else {
  console.log(`✅ Supabase SDK connected to project: ${supabaseUrl}`);
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
