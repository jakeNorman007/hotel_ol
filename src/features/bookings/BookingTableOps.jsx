import React from "react";
import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";

function BookingTableOps() {
  return (
    <div className="flex items-center gap-[1.6rem]">
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-in", label: "Checked in" },
          { value: "checked-out", label: "Checked out" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />
      <Sort options={[
        { value: "StartDate-asc", label: "Sort by date (Most recent)" },
        { value: "StartDate-desc", label: "Sort by date (Earliest)" },
        { value: "totalPrice-asc", label: "Sort by price (lowest first)" },
        { value: "totalPrice-desc", label: "Sort by price (highest first)" },
      ]} />
    </div>
  );
}

export default BookingTableOps;
