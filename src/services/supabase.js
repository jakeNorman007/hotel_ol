import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nbvrzwcuwxvvddigckjg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5idnJ6d2N1d3h2dmRkaWdja2pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5NjA5MTcsImV4cCI6MjAwNDUzNjkxN30.2rcxNoSLajedgej8sN8IFyjKZ5tbR2dOMbHpY_Q6CYw"; 
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
