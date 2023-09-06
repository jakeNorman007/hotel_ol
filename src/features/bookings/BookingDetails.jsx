import React from "react";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import { useCheckOut } from "../check_in_out/useCheckOut";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { format } from "date-fns";
import {
  HiOutlineCalendarDays,
  HiOutlineUsers,
  HiOutlineEnvelopeOpen,
} from "react-icons/hi2";

function BookingDetails() {
  const { booking, isLoading } = useBooking();
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
    totalPrice,
    isPaid,
    rooms: { name: roomName },
    guests: { fullName: guestName, email: email },
  } = booking;

  return (
    <>
      <div className="flex">
        <div className="flex items-center w-full justify-between">
          <div className="flex gap-8 items-center">
            <h1 className="font-bold text-4xl text-white">
              Booking #{bookingId}
            </h1>
            <p>
              {status === "unconfirmed" && (
                <span className="text-sm font-semibold bg-amber-600 text-center px-3 py-2 rounded-full text-white shadow-sm shadow-black/50">
                  {status.replace("-", " ")}
                </span>
              )}
              {status === "checked-in" && (
                <span className="text-sm font-semibold bg-green-400 text-center px-3 py-2 rounded-full text-white shadow-sm shadow-black/50">
                  {status.replace("-", " ")}
                </span>
              )}
              {status === "checked-out" && (
                <span className="text-sm font-semibold bg-gray-400 text-center px-3 py-2 rounded-full text-white shadow-sm shadow-black/50">
                  {status.replace("-", " ")}
                </span>
              )}
            </p>
          </div>
          <button
            className="text-xl bg-amber-600 hover:bg-amber-700 px-4 py-3 rounded-md text-white shadow-lg shadow-black/50"
            onClick={moveBack}
          >
            &larr;Back
          </button>
        </div>
      </div>
      <div className="shadow-lg shadow-black/50 rounded-md">
        <div className=" text-white flex w-full items-center justify-between rounded-t-md px-5 py-4 text-3xl font-semibold bg-amber-600 shadow-sm shadow-black/50">
          <div className="flex items-center gap-3 text-white">
            <p className="text-6xl">
              <HiOutlineCalendarDays />
            </p>
            {numberNights} nights in room {roomName}
          </div>
          <p>
            {format(new Date(startDate), "EEE, MMM dd yyyy")} &mdash;{" "}
            {format(new Date(endDate), "EEE, MMM dd yyyy")}
          </p>
        </div>
        <div className="bg-gray-700 flex w-full items-center justify-between px-8 py-8 text-lg text-white">
          <div className="flex items-center gap-3 font-medium">
            <p className="text-5xl">
              <HiOutlineUsers />
            </p>
            {guestName} + {numberGuests - 1} guests
          </div>
          <div className="flex items-center gap-3 bg-gray-700">
            <p className="text-5xl">
              <HiOutlineEnvelopeOpen />
            </p>
            email: {email}
          </div>
        </div>
        <div className=" text-white flex w-full items-center justify-between gap-5 px-12 py-8 text-lg bg-amber-600">
          <p className="font-medium">
            Total price: ${totalPrice * numberNights}.00
          </p>
          {isPaid ? "Paid" : "Will pay at check-in"}
        </div>
        <div className="flex justify-end px-6 py-6 text-lg bg-gray-700 text-white">
          Booked on {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
        </div>
      </div>
      <div className="flex items-center justify-end">
        <p>
          {status === "unconfirmed" && (
            <button
              title="Check In"
              onClick={() => navigate(`/checkin/${bookingId}`)}
              className="text-xl bg-slate-400 px-4 py-3 rounded-md text-white shadow-sm shadow-black/50"
            >
              Check in
            </button>
          )}
        </p>
        <p>
          {status === "checked-in" && (
            <button
              title="Check Out"
              onClick={() => checkout(bookingId)}
              disabled={isCheckingOut}
              className="text-xl text-white bg-amber-600 px-4 py-3 rounded-md text-slate-600 shadow-lg shadow-black/50"
            >
              Check Out
            </button>
          )}
        </p>
      </div>
    </>
  );
}

export default BookingDetails;
