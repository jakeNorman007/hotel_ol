import { createClient } from '@supabase/supabase-js';

{
/*
Supabase lives here, was pretty straight forward, for it to actually work you need
to replace the default stuff in the key variable and replace it with the public key
supabase gives you in the API section. Also make sure you install supabase in terminal
the website doesn't really tell you. It's dumb but I ran into an issue because nothing
actually broke. I kind of just stumbled into a soultion.
*/
}

const supabaseUrl = 'https://nbvrzwcuwxvvddigckjg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5idnJ6d2N1d3h2dmRkaWdja2pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5NjA5MTcsImV4cCI6MjAwNDUzNjkxN30.2rcxNoSLajedgej8sN8IFyjKZ5tbR2dOMbHpY_Q6CYw"; 
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
