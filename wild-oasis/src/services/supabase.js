// import dotenv from "dotenv";
// dotenv.config({ path: "./.env" });

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mcbqvejyalpckvwqljrv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jYnF2ZWp5YWxwY2t2d3FsanJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MDI3MDMsImV4cCI6MjAzMjk3ODcwM30.4E6BZqD70qT3aTV3mMsMSXjFu_I2HdGOaBYibvC0-Nk";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
