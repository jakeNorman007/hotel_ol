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
    <nav className="flex flex-col gap-[0.8rem]">
      <ul>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-gray-600 text-3xl font-medium py-[1.2rem] px-[2.4rem] transition-all
            active:bg-cyan-100 hover:bg-cyan-100 rounded-lg"
            to="/"
          >
            <HiOutlineHome />
            <span>Home Link</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-gray-600 text-3xl font-medium py-[1.2rem] px-[2.4rem] transition-all
            active:bg-cyan-100 hover:bg-cyan-100 rounded-lg"
            to="/booking"
          >
            <HiCalendarDays />
            <span>Bookings Link</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-gray-600 text-3xl font-medium py-[1.2rem] px-[2.4rem] transition-all
            active:bg-cyan-100 hover:bg-cyan-100 rounded-lg"
            to="/rooms"
          >
            <HiOutlineHomeModern />
            <span>Rooms Link</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-gray-600 text-3xl font-medium py-[1.2rem] px-[2.4rem] transition-all
            active:bg-cyan-100 hover:bg-cyan-100 rounded-lg"
            to="/users"
          >
            <HiOutlineUsers />
            <span>Users Link</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] text-gray-600 text-3xl font-medium py-[1.2rem] px-[2.4rem] transition-all
            active:bg-cyan-100 hover:bg-cyan-100 rounded-lg"
            to="/settings"
          >
            <HiOutlineCog8Tooth />
            <span>Settings Link</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
