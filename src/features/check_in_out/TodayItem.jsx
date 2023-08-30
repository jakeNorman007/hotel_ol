import React from "react";
import { Link } from "react-router-dom";

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <li>
      {status === "unconfirmed"}
      {status === "checked-in"}

      <p>{guests.fullName}</p>
      <div>{numNights} nights</div>

      {status === "unconfirmed" && (
        <button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </button>
      )}
      {status === "checked-in"}
    </li>
  );
}

export default TodayItem;
