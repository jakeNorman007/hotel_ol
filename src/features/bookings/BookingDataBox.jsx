import React from "react";

// This component is presentational and doesn't really involve anythin new or non-basic logic
function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numberNights,
    numberGuests,
    roomPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    isPaid,
    rooms: { name: roomName },
    guests: { fullName: guestName, email: email },
  } = booking;

  console.log(created_at);
  return (
    <>
      {startDate}
      {endDate}
      {numberGuests}
      {roomPrice}
      {extrasPrice}
      {totalPrice}
      {hasBreakfast}
      {isPaid}
      {guestName}
      {email}
      <div>All of the booking data goes here</div>
      <p>
        {numberNights} nights in room {roomName}
      </p>
      <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
    </>
  );
}

export default BookingDataBox;
