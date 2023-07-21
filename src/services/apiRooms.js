import supabase, { supabaseUrl } from "./supabase";

export async function getRooms() {
  const { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error(error);
    throw new Error("Room could not be loaded");
  }

  return data;
}

export async function createEditRoom(newRoom, id) {
  console.log(newRoom, id);

  const hasImagePath = newRoom.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath ? newRoom.image : `${supabaseUrl}/storage/v1/object/public/RoomImages/${imageName}`;

  //creates a new room
  let query = supabase.from("rooms");

  if (!id) query =  query.insert([{ ...newRoom, image: imagePath }]);

  // edits a room
  if (id) query =  query.update({ ...newRoom, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Room could not be created");
  }

  const { error: storageError } = await supabase.storage
    .from("RoomImages")
    .upload(imageName, newRoom.image);

  if (storageError) {
    await supabase.from("rooms").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Room image could not be uploaded, room could not be created"
    );
  }

  return data;
}

export async function deleteRoom(id) {
  const { data, error } = await supabase.from("rooms").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Room could not be deleted");
  }

  return data;
}
