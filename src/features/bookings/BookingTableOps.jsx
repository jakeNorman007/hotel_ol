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
      <Sort
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          { value: "totalPrice-desc", label: "Sort by price (high first)" },
          { value: "totalPrice-asc", label: "Sort by price (low first)" },
        ]}
      />
    </div>
  );
}

export default BookingTableOps;
