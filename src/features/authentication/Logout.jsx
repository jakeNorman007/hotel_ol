import React from "react";
import { useLogout } from "./useLogout";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import SmallSpinner from "../../ui/SmallSpinner";

function Logout() {
  // returns from useLogout in order for user to properly log out from the app
  const { logout, isLoading } = useLogout();

  return (
    <div className="flex items-center">
      <button disabled={isLoading} onClick={logout}>
        {!isLoading ? <HiArrowRightOnRectangle /> : <SmallSpinner />}
      </button>
    </div>
  );
}

export default Logout;
