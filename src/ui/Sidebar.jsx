import React from "react";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <aside className="bg-cyan-800 py-12 px-12 border-r border-slate-200 row-span-full">
      <MainNav />
    </aside>
  );
}

export default SideBar;
