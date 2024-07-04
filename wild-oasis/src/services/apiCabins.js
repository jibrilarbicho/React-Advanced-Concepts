import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  console.log("data", data);
  if (error) {
    console.log(console.log("Cabins could not be loaded"));
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
export async function deleteCabin(id) {
  console.log("deleteCabin called", id);
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  console.log("data deleted", data);

  if (error) {
    console.error("Error deleting cabin:", error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
