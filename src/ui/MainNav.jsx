import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiCalendarDays, HiOutlineHomeModern, HiOutlineUsers, HiOutlineCog8Tooth } from "react-icons/hi2";

function MainNav() {
  return (
    <nav className="flex flex-col gap-[0.8rem] pt-6">
      <ul>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-gray-600 text-3xl font-medium py-[2rem] px-[2.4rem] transition-all
            active:bg-blue-200 hover:bg-blue-100 rounded-lg"
            to="/"
          >
            <HiOutlineHome />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-gray-600 text-3xl font-medium py-[2rem] px-[2.4rem] transition-all
            active:bg-blue-200 hover:bg-blue-100 rounded-lg"
            to="/booking"
          >
            <HiCalendarDays />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-gray-600 text-3xl font-medium py-[2rem] px-[2.4rem] transition-all
            active:bg-blue-200 hover:bg-blue-100 rounded-lg"
            to="/rooms"
          >
            <HiOutlineHomeModern />
            <span>Rooms</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-gray-600 text-3xl font-medium py-[2rem] px-[2.4rem] transition-all
            active:bg-blue-200 hover:bg-blue-100 rounded-lg"
            to="/users"
          >
            <HiOutlineUsers />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-gray-600 text-3xl font-medium py-[2rem] px-[2.4rem] transition-all
            active:bg-blue-200 hover:bg-blue-100 rounded-lg"
            to="/settings"
          >
            <HiOutlineCog8Tooth />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
