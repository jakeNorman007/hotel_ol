import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

export const subtractDays = (dateStringOne, dateStringTwo) =>
  differenceInDays(
    parseISO(String(dateStringOne)),
    parseISO(String(dateStringTwo))
  );

// supabase requires ISOStrings, the date was different on every render so this gets rid
// of the time specifiaclly so we just have a date and not an actual time stamp.
export const formatDistanceFromNow = (dateString) =>
  formatDistance(parseISO(dateString), new Date(), {
    addSuffix: true,
  })
    .replace("about", "")
    .replace("in", "");

export const getToday = function (options = {}) {
  const today = new Date();

  // compares with the created at column in supabase if it's no all 0's we start it
  // at the last second of the day, hence the 23, 59, 59, 999.
  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

// this just formats the paper monies
export const formatMoney = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
