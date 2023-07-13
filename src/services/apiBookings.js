import { getToday } from "../utilities/helpers";
import supabase from "./supabase";

// similar to rooms, got the get function from supabase API page and added an error
export async function getBooking(id) {
    const { data, error } await supabase.from("bookings").select("*, Rooms(*), guests(*)").eq("id", id).single();

    if (error) {
        console.error(error);
        throw new Error("Booking not found");
    }

    return data;
}

// returns * bookings that are created post given date, read on the internet this could be a
// good way to get bookings created in the last month (30 days).
export async function getBookingAfterDate(date) {
    const { data, error } = await supabase.from("bookings").select("created_at, totalPrice, extrasPrice").gte("created_at", date)
        .lte("created_at", getToday({ end: true}));

    if (error) {
        console.error(error);
        throw new Error("Bookings unable to load");

    }

    return data;
}

