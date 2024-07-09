import supabase from "./supabase";
import supabaseUrl from "./supabase";
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(console.log("Cabins could not be loaded"));
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error("Error deleting cabin:", error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
export async function createCabin(newCabin) {
  const imageName = newCabin?.image.name; // Assuming `newCabin` contains `imageName`
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create cabin
  const { data, error } = await supabase.from("cabins").insert([
    {
      ...newCabin,
      image: imagePath,
    },
  ]);

  if (error) {
    console.error("Error creating cabin:", error);
    throw new Error("Cabin could not be created");
  }

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data[0].id);
    console.error("Error uploading cabin image:", storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}
