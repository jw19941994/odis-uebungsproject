import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rtsgiegimhblddwgvgbd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0c2dpZWdpbWhibGRkd2d2Z2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4OTUyMTEsImV4cCI6MjAzMjQ3MTIxMX0.UHMAXqtEPvqZgrApbxAmEX5FPRlldWaAoVaUITORkyY"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;