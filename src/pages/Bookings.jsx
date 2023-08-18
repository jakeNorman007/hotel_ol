import React from "react";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOps from "../features/bookings/BookingTableOps";

function Bookings() {
  return (
    <>
      <div className="flex justify-between align-center">
        <div className="flex gap-5">
        <p className="text-gray-600 font-bold text-4xl">Bookings</p>
        </div>
        <BookingTableOps />
      </div>
      <BookingTable />
    </>
  );
}

export default Bookings;
