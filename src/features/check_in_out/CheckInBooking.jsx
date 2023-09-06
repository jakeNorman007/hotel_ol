import React from "react";
import { useState, useEffect } from "react";
import { useBooking } from "../bookings/useBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useCheckIn } from "./useCheckIn";
import { format } from "date-fns";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import {
  HiOutlineCalendarDays,
  HiOutlineUsers,
  HiOutlineEnvelopeOpen,
} from "react-icons/hi2";

function CheckInBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { booking, isLoading } = useBooking();

  // useEffect searches through the array( the current booking) and checks for isPaid true
  // or false
  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  // like before, this is just to move back to the previous page
  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckIn();

  if (isLoading) return <Spinner />;

  const {
    id: bookingId,
    created_at,
    totalPrice,
    startDate,
    endDate,
    isPaid,
    numberGuests,
    numberNights,
    rooms: { name: roomName },
    guests: { fullName: guestName, email: email },
  } = booking;

  //console.log(guests)

  function handleCheckin() {
    if (!confirmPaid) return;
    checkin(bookingId);
  }

  return (
    <>
      <div className="flex">
        <div className="flex items-center w-full justify-between">
          <div className="flex gap-8 items-center">
            <h1 className="font-bold text-4xl text-white">
              Booking #{bookingId}
            </h1>
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
        <div className="flex text-white w-full items-center justify-between rounded-t-md px-5 py-4 text-3xl font-semibold bg-amber-600 shadow-sm shadow-black/50">
          <div className="flex items-center gap-3">
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
        <div className="flex w-3/4 items-center justify-between text-white px-8 py-8 text-lg">
          <div className="flex items-center gap-3 font-medium">
            <p className="text-5xl">
              <HiOutlineUsers />
            </p>
            {guestName} + {numberGuests - 1} guests
          </div>
          <div className="flex items-center gap-3">
            <p className="text-5xl">
              <HiOutlineEnvelopeOpen />
            </p>
            email: {email}
          </div>
        </div>
        <div className="flex w-full text-white items-center justify-between gap-5 px-12 py-8 text-lg bg-amber-600">
          <p className="text-lg font-medium">
            Total price: ${totalPrice * numberNights}.00
          </p>
          {isPaid ? "Paid" : "Will pay at check-out"}
        </div>
        <div className="flex justify-end px-6 py-6 text-lg text-white">
          Booked on {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
        </div>
      </div>
      <div className="flex items-center justify-between text-white">
          <Checkbox
            checked={confirmPaid}
            onChange={() => setConfirmPaid((confirm) => !confirm)}
            disabled={confirmPaid || isCheckingIn}
            id="confirm"
          >
            <p>
              I confirm that this {guestName} has paid the amount of $
              {totalPrice}.00
            </p>
          </Checkbox>
        <button className="text-white font-semibold bg-amber-600 px-3 py-3 rounded-md shadow-lg shadow-black/50 hover:bg-amber-700" onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </button>
      </div>
    </>
  );
}

export default CheckInBooking;
