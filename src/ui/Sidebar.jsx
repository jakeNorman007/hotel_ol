import React from "react";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <aside className="bg-slate-100 py-12 px-12 border-r border-slate-200 row-span-full">
      <MainNav />
      <p className="justify-center pt-20 px-14">
        Made by Jake |{" "}
        <a
          className="text-blue-400"
          href="https://github.com/jakeNorman007/hotel_ol"
        >
          github
        </a>
      </p>
    </aside>
  );
}

export default SideBar;
