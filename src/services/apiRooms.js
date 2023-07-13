import supabase from "./supabase";

{
/*
Connection from Supabase to the app in regards to the Rooms data, this is just the
code snippet Supabase gave me to insert into my code to call on the rooms table, I did
add some minor error handling for personal test purposes and to just see if I effed it up
or not.
*/
}

export async function getRooms() {
    const { data, error } = await supabase
  .from('rooms')
  .select('*')

    if(error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return data;
}
