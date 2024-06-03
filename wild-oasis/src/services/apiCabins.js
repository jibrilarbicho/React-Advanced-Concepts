import supabse from "./supabase";

export async function getCabins() {
  let { data, error } = await supabse.from("cabins").select("*");
  if (error) {
    console.log(console.log("Cabins could not be loaded"));
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
