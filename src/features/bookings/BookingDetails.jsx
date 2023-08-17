import React from "react";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useDeleteBooking } from "./useDeleteBooking";
import { useCheckOut } from "../../features/check_in_out/useCheckOut";
import { useBooking } from "./useBooking";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { format, isToday } from "date-fns";

function BookingDetails() {
  const { booking, isLoading } = useBooking();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const { checkout, isCheckingOut } = useCheckOut();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const {
    status,
    id: bookingId,
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

  return (
    <>
      <div className="flex">
        <h1>Booking #{bookingId}</h1>
        {status === "unconfirmed" && (
          <span className="text-sm font-semibold bg-blue-300 text-center p-1 rounded-full text-white shadow-sm shadow-black/50">
            {status.replace("-", " ")}
          </span>
        )}
        {status === "checked-in" && (
          <span className="text-sm font-semibold bg-green-300 text-center p-1 rounded-full text-white shadow-sm shadow-black/50">
            {status.replace("-", " ")}
          </span>
        )}
        {status === "checked-out" && (
          <span className="text-sm font-semibold bg-gray-300 text-center p-1 rounded-full text-white shadow-sm shadow-black/50">
            {status.replace("-", " ")}
          </span>
        )}
        <button onClick={moveBack}>Back</button>
      </div>
      <div className="flex">
        {numberNights} nights in room {roomName}
        {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
        {format(new Date(endDate), "MMM dd yyyy")}
      </div>
      <div>
      {guestName} + {numberGuests - 1} guests
      email: {email}
      </div>
      <div>
      Breakfast included? {hasBreakfast ? 'yes' : 'no'}
      </div>
      <div>
        Total price: ${(totalPrice * numberNights)}
        {isPaid ? "Already paid" : "Will pay at check-in"}
      </div>
      <div>
        Booked on {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
      </div>
    </>
  );
}

export default BookingDetails;
