import React from "react";
import Filter from "../../ui/Filter";

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
    </div>
  );
}

export default RoomTableOps;
