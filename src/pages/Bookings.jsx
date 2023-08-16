import React from "react";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOps from "../features/bookings/BookingTableOps";

function Bookings() {
  return (
    <>
      <div className="flex justify-between align-center">
        <p className="text-gray-600 font-bold text-4xl">Bookings</p>
        <BookingTableOps />
      </div>
      <BookingTable />
    </>
  );
}

export default Bookings;
