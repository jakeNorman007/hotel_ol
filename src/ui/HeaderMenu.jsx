import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className="flex gap-4 items-center">
      <li className="text-3xl hover:bg-indigo-900 text-white" onClick={() => navigate("/account")}>
        <HiOutlineUser />
      </li>
      <li className="text-3xl hover:bg-red-300 text-white">
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
