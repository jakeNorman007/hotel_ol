import React from "react";
import MainNav from "./MainNav";

function SideBar() {
  return (
      <aside className="bg-slate-100 py-12 px-12 border-r border-slate-200 row-span-full">
        <img
          src="rose-of-shannon-hotel-low-resolution-logo-color-on-transparent-background.svg"
          alt="logo"
          className="justify-center pb-8"
        />
        <MainNav />
      </aside>
  );
}

export default SideBar;
