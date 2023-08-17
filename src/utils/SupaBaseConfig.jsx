import { createClient } from "@supabase/supabase-js/"

const supaBaseUrl = "https://bmblyjkgzliveuyxaurt.supabase.co"
const supaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtYmx5amtnemxpdmV1eXhhdXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMDY3OTYsImV4cCI6MjAwNzY4Mjc5Nn0._S4BZPaS2h9mYNM2te7qMc3KU0lfdyVO5QFgP7UGtrU"
export const supabase = createClient(supaBaseUrl, supaBaseAnonKey)