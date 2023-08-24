import React from "react";
import Logout from "../features/authentication/Logout";
import UserAvatar from "../features/authentication/UserAvatar";

function Header() {
  return (
    <header
      className="bg-slate-50 px-[4.8rem] py-[1.2rem] border-b-slate-200 border-b border-solid">
      <UserAvatar />
      <Logout />
    </header>
  );
}

export default Header;
