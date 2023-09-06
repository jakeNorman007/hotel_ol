import supabase from "./supabase";

// .select() is to grab one row of data from the table it's daisy chained onto
// .eq() selects a column thats value is equal to what's passed in, since there
// is only one column in the settings table we can set the value id to 1
export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings unable to load");
  }

  return data;
}

// new setting value
// there is only on row in the setting table
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }

  return data;
}
