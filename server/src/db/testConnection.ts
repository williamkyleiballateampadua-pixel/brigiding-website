import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Load .env from root directory
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

console.log('Testing connection to Supabase...');
console.log('URL:', supabaseUrl);

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ ERROR: Missing SUPABASE_URL or SUPABASE_ANON_KEY in .env file!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    const { data, error } = await supabase.from('events').select('count', { count: 'exact' });
    
    if (error) {
      if (error.code === '42P01') {
        console.log('⚠️ Connected to Supabase successfully! (Note: Tables are not created yet. Please run 001_initial_schema.sql in Supabase SQL Editor).');
      } else {
        console.log('⚠️ Connected to Supabase! Details:', error.message);
      }
    } else {
      console.log('✅ SUCCESS! Connected to Supabase and queried tables successfully!');
      console.log('Data:', data);
    }
  } catch (err: any) {
    console.error('❌ Connection failed:', err.message || err);
  }
}

testConnection();
