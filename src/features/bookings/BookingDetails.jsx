import React from "react";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useDeleteBooking } from "./useDeleteBooking";
import { useCheckOut } from "../../features/check_in_out/useCheckOut";
import { useBooking } from "./useBooking";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";

function BookingDetails() {
  const { booking, isLoading } = useBooking();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const { checkout, isCheckingOut } = useCheckOut();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const { status, id: bookingId } = booking;

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
    </>
  );
}

export default BookingDetails;
