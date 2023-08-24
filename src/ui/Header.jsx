import React from "react";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <header
      className="flex bg-cyan-800 px-[4.8rem] py-[1.2rem] border-b-slate-200 border-b border-solid
            justify-end">
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
}

export default Header;
