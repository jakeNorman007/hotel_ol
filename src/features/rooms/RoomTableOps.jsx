import React from "react";
import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";

function RoomTableOps() {
  return (
    <div className="flex items-center gap-[1.6rem]">
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "discount", label: "Discount" },
          { value: "no-discount", label: "No Discount" },
        ]}
      />
      <Sort className="bg-blue-100" options={[
        { value: "name-asc", label: "Sort by name (A-Z)" },
        { value: "name-desc", label: "Sort by name (Z-A)" },
        { value: "regularPrice-asc", label: "Sort by price (lowest-highest)" },
        { value: "regularPrice-desc", label: "Sort by price (highest-lowest)" },
        { value: "maxCapacity-asc", label: "Sort by capacity (lowest-highest)" },
        { value: "maxCapacity-desc", label: "Sort by capacity (highest-lowest)" }
      ]} />
    </div>
  );
}

export default RoomTableOps;
