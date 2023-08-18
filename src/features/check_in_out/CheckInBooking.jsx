import React from "react";
import { useState, useEffect } from "react";
import { useBooking } from "../bookings/useBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useCheckIn } from "./useCheckIn";
import { format } from "date-fns";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { HiOutlineCalendarDays, HiMiniUsers, HiOutlineEnvelopeOpen } from "react-icons/hi2";

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
            <h1 className="font-bold text-4xl text-slate-600">
              Booking #{bookingId}
            </h1>
          </div>
          <button
            className="text-xl bg-slate-300 px-4 py-3 rounded-md text-slate-600 shadow-sm shadow-black/50"
            onClick={moveBack}
          >
            &larr;Back
          </button>
        </div>
      </div>
      <div className="shadow-sm shadow-black/50 rounded-md">
        <div className="flex w-full items-center justify-between rounded-t-md px-5 py-4 text-3xl font-semibold bg-blue-300 shadow-sm shadow-black/50">
          <div className="flex items-center gap-3">
            <p className="text-6xl text-white">
              <HiOutlineCalendarDays />
            </p>
            {numberNights} nights in room {roomName}
          </div>
          <p>
            {format(new Date(startDate), "EEE, MMM dd yyyy")} &mdash;{" "}
            {format(new Date(endDate), "EEE, MMM dd yyyy")}
          </p>
        </div>
        <div className="flex w-3/4 items-center justify-between px-8 py-8 text-lg">
          <div className="flex items-center gap-3 font-medium">
            <p className="text-5xl">
              <HiMiniUsers />
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
        <div className="flex w-full items-center justify-between gap-5 px-12 py-8 text-lg bg-blue-100">
          <p className="text-lg font-medium">
            Total price: ${totalPrice * numberNights}.00
          </p>
          {isPaid ? "Paid" : "Will pay at check-out"}
        </div>
        <div className="flex justify-end px-6 py-6 text-lg">
          Booked on {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
        </div>
      </div>
      <div className="flex items-center justify-between px-5">
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
          id="confirm"
        >
          I confirm that this {guestName} has paid the amount of ${totalPrice}.00
        </Checkbox>
        <button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </button>
      </div>
    </>
  );
}

export default CheckInBooking;
