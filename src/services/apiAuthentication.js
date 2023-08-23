import supabase from "./supabase"

export async function login({email, password}){
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

   if(error){
    console.error(error);
    throw new Error("There was an issue logging in");
    }

    return data;
}
