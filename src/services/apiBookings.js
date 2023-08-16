import { getToday } from "../utilities/helpers";
import { PAGE_SIZE } from "../utilities/constants";
import supabase from "./supabase";

// ** The filter and sort is probably wrong at this stage. I am wrtiting this API as an almost copy cat of the rooms API
// ** So there is a solid chance i'll need to come back and refine this. As of now I think it'll work for crud options

// This function grabs the data from the individual columns from the bookings table, except for rooms(name), and
// guests(fullName, email). This data comes from the respective tables and fetches the data in the parenthesis.
// the { count: "exact" } counts the number of results the query comes up with, or gathers. i.e. if there are 4
// entries, the count will equal exactly 4
export async function getBookings({ filter, sort, page }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numberNights, numberGuests, roomPrice, totalPrice, status, rooms(name), guests(fullName, email)",
      { count: "exact" }
    );

  //TODO: come back to this when it's time to add filtering and sorting
  //fiter bookings
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // sort bookings
  if (sort)
    query = query.order(sort.field, {
      ascending: sort.direction === "asc",
    });

  // TODO: come back to this when I walk through it some more
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  // simple, but this is a constant based off the data that the above query [getBookings] which is deconstructed into
  // data, error and count, count being the count of pages available
  const { data, error, count } = await query;

  if (error) {
    consol.error(error);
    throw new Error("Booking unable to load");
  }

  return { data, count };
}

// similar to rooms, got the get function from supabase API page and added an error
export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, Rooms(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

// returns * bookings that are created post given date, read on the internet this could be a
// good way to get bookings created in the last month (30 days).
export async function getBookingAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Booking unable to load");
  }

  return data;
}

// returns the start date of the booking along with the name of the person staying in relation to said date.
// selecting the start date from the bookings table, then selecting all of the names from the guests table
// connected to the booking Id. I pulled this from the supabase API documentation.
// .gte stands for greater than or equal to, so greater than or equal to the startDate named as date argument
// .lte stands for less than or equal to, so startDate less than and incllusive to the current date
// In turn this means this function grabs all the booking info related to a particular guest, then gets a date
// range from the start date input and the current day, counts how many days the guest has been here
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Check in unable to load");
  }

  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Booking could not be updated");
  }

  return data;
}

// deletes a booking based on the id assigned to the particular booking you are querying. i.e if you are deleting a
// booking it will delete based off the particular booking you are nixing from the app.
export async function deleteBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .delete(id)
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  return data;
}
