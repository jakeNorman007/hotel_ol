import React from "react";
import Spinner from "../../ui/Spinner";
import DurationChart from "./DurationChart";
import { useRecentBooking } from "./useRecentBooking";
import Stats from "./Stats";
import { useRecentStays } from "./useRecentStays";
import { useRooms } from "../rooms/useRooms";
import SalesChart from "./SalesChart";

function Layout() {
  const { bookings, isLoading: isLoading } = useRecentBooking();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { rooms, isLoading: isLoading3 } = useRooms();

  if (isLoading || isLoading2 || isLoading3) return <Spinner />;

  return (
    <div className="grid grid-cols-[40rem_3rem_1fr] grid-rows-[auto] gap-[2.4rem]">
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        roomCount={rooms.count}
      />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </div>
  );
}

export default Layout;
