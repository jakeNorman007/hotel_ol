import React from "react";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import BookingRow from "./BookingRow";
import Pagination from "../../ui/Pagination";
import { useBookings } from "./useBookings";

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  // TODO: create Empty
  if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <div className="mb-5 shadow-lg shadow-gray-900">
      <Table>
        <Table.Header>
          <div>Room</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <footer className="flex justify-center padding-[1.2rem]">
          <Pagination count={count} />
        </footer>
      </Table>
    </div>
  );
}

export default BookingTable;
