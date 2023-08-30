import React from "react";
import Spinner from "../../ui/Spinner";
import DurationChart from "./DurationChart";
import { useRecentBooking } from "./useRecentBooking";
import Stats from "./Stats";
import { useRecentStays } from "./useRecentStays";
import { useRooms } from "../rooms/useRooms";
import SalesChart from "./SalesChart";
import TodaysActivity from "../check_in_out/TodayActivity";

function Layout() {
  const { bookings, isLoading: isLoading } = useRecentBooking();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { rooms, isLoading: isLoading3 } = useRooms();

  if(isLoading || isLoading2 || isLoading3) return <Spinner />;

  return (
    <div className="grid grid-cols-[26rem_1fr_1fr_1fr] grid-rows-[auto] gap-[3.4rem]">
      <Stats 
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        roomCount={rooms.count}
      />
      <TodaysActivity />
      <DurationChart confirmedStays={confirmedStays}/>
      <SalesChart bookings={bookings} numDays={numDays}/>
    </div>
  );
}

export default Layout;
