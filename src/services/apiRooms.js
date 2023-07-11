import supabase from "./supabase";

export async function getRooms() {
    const { data, error } = await supabase
  .from('Rooms')
  .select('*')

    if(error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return data;
}
