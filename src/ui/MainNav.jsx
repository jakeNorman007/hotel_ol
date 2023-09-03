import React from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog8Tooth,
} from "react-icons/hi2";

function MainNav() {
  return (
    <nav className="flex flex-col pt-6 bg-gray-700">
      <ul>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-white hover:text-amber-600 text-xl font-medium py-[2rem] px-[2.4rem] transition-all
            hover:bg-gray-800 rounded-lg focus:bg-gray-800 focus:text-amber-600"
            to="/"
          >
            <HiOutlineHome />
            <span className="text-white">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-white hover:text-amber-600 text-xl font-medium py-[2rem] px-[2.4rem] transition-all
            hover:bg-gray-800 rounded-lg focus:bg-gray-800 focus:text-amber-600"
            to="/bookings"
          >
            <HiCalendarDays />
            <span className="text-white">Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-white hover:text-amber-600 text-xl font-medium py-[2rem] px-[2.4rem] transition-all
            hover:bg-gray-800 rounded-lg focus:bg-gray-800 focus:text-amber-600"
            to="/rooms"
          >
            <HiOutlineHomeModern />
            <span className="text-white">Rooms</span>
          </NavLink>
        </li>
      { /*
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-white hover:text-amber-600 text-xl font-medium py-[2rem] px-[2.4rem] transition-all
            hover:bg-gray-800 rounded-lg focus:bg-gray-800 focus:text-amber-600"
            to="/users"
          >
            <HiOutlineUsers />
            <span className="text-white">Users</span>
          </NavLink>
        </li>
          */}
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-white hover:text-amber-600 text-xl font-medium py-[2rem] px-[2.4rem] transition-all
            hover:bg-gray-800 rounded-lg focus:bg-gray-800 focus:text-amber-600"
            to="/settings"
          >
            <HiOutlineCog8Tooth />
            <span className="text-white">Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
