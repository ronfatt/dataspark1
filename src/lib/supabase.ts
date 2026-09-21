import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';

const DEFAULT_URL = 'https://ovssicacuyxsbsamtdpu.supabase.co';
const DEFAULT_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92c3NpY2FjdXl4c2JzYW10ZHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk4Mjg0MzksImV4cCI6MjEwNTQwNDQzOX0.2knA-uitK8XA1NDhvhoFphu_LezhFS4aewy3q9JAEPk';

export function getSupabaseConfig(): { url: string; anonKey: string } {
  let url = (import.meta.env.VITE_SUPABASE_URL as string) || '';
  let anonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || '';

  if (!url || url.includes('your-project-id')) {
    url = DEFAULT_URL;
    anonKey = DEFAULT_ANON_KEY;
  }

  return { url: url.trim(), anonKey: anonKey.trim() };
}

let clientInstance: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!clientInstance) {
    const { url, anonKey } = getSupabaseConfig();
    clientInstance = createClient(url, anonKey, {
      realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
    });
  }
  return clientInstance;
}

export const supabase = getSupabaseClient();
