import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import Header from "./Header";

function Layout() {
  return (
    <div className="grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <SideBar />
      <main className="bg-slate-50 pt-16 px-[4.8rem] overflow-scroll">
        <div className="flex flex-col gap-[3.2rem] max-w-120 mx-auto my-0">
            <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
