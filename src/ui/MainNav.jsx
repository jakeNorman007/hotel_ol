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
    <nav className="flex flex-col pt-6 bg-cyan-800">
      <ul>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-white text-xl font-medium py-[2rem] px-[2.4rem] transition-all
            active:bg-blue-200 hover:bg-blue-100 rounded-lg focus:bg-blue-100"
            to="/"
          >
            <HiOutlineHome />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-white text-xl font-medium py-[2rem] px-[2.4rem] transition-all
            active:bg-blue-200 hover:bg-blue-100 rounded-lg focus:bg-blue-100"
            to="/bookings"
          >
            <HiCalendarDays />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-white text-xl font-medium py-[2rem] px-[2.4rem] transition-all
            active:bg-blue-200 hover:bg-blue-100 rounded-lg focus:bg-blue-100"
            to="/rooms"
          >
            <HiOutlineHomeModern />
            <span>Rooms</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-white text-xl font-medium py-[2rem] px-[2.4rem] transition-all
            active:bg-blue-200 hover:bg-blue-100 rounded-lg focus:bg-blue-100"
            to="/users"
          >
            <HiOutlineUsers />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-red-300 text-xl font-medium py-[2rem] px-[2.4rem] transition-all
            active:bg-blue-200 hover:bg-blue-100 rounded-lg focus:bg-blue-100"
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
