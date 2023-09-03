import React from "react";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <>
      <LoginForm />
      <div className="absolute inset-x-0 bottom-0 bg-gray-700 w-full h-full z-0"></div>
      <div className="absolute inset-x-0 bottom-0 bg-amber-700 w-full mb-[20rem] h-[33rem] skew-y-6 overflow-hidden z-10"></div>
      <div className="absolute inset-x-0 bottom-0 bg-amber-500 w-full mb-[15rem] h-[23rem] skew-y-12 overflow-hidden z-20"></div>
    </>
  );
}

export default Login;
