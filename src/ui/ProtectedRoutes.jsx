import React, { useEffect } from "react";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function ProtectedRoutes({ children }) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) return <Spinner />;

  return children;
}

export default ProtectedRoutes;
