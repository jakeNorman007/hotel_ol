import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className="flex gap-4 items-center">
      <button className="text-3xl hover:bg-amber-600 text-white px-2 py-2 rounded-md focus:bg-amber-600 focus:border-2
            focus:border-amber-800"
            onClick={() => navigate("/account")}>
        <HiOutlineUser />
      </button>
      <button className="text-3xl hover:bg-amber-600 text-white px-2 py-2 rounded-md">
        <Logout />
      </button>
    </ul>
  );
}

export default HeaderMenu;
