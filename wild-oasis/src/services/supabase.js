// import dotenv from "dotenv";
// dotenv.config({ path: "./.env" });

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mcbqvejyalpckvwqljrv.supabase.co";

const supabase = createClient(process.supabaseUrl, process.supabaseKey);
export default supabase;
