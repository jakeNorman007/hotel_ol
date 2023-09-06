import React from "react";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <aside className="bg-gray-700 py-12 px-12 border-r border-gray-200 row-span-full">
      <p className="text-5xl text-white text-center mb-6 font-bold">
        Rose of Shannon
      </p>
      <MainNav />
    </aside>
  );
}

export default SideBar;
