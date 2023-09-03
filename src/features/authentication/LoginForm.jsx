import React, { useState } from "react";
import { useLogin } from "./useLogin";
import SmallSpinner from "../../ui/SmallSpinner";

function LoginForm() {
  // useState to reate and set user emails and passwords
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  //handle submit function that will create user login as an object when the state of email
  //and password is set, that is why it is initially an empty object. user is createing it
  //after it is set by them
  function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
      <>
      <form onSubmit={handleSubmit} className="grid grid-cols relative z-30 bg-red-400 h-0 justify-center mt-[25rem]">
        <label className="text-5xl text-white text-center mb-6 font-bold">Rose of Shannon</label>
        <input
          className="shadow-sm shadow-black/50 border border-black h-9 w-[24rem] px-3 mb-3 text-left"
          role="textbox"
          type="email"
          id="email"
          placeholder="email address"
          autoComplete="username"
          value={email}
          disabled={isLoading}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input
          className="shadow-sm shadow-black/50 border border-black h-9 w-[24rem] px-3 mb-3 text-left"
          role="textbox"
          type="password"
          id="password"
          placeholder="password"
          autoComplete="current-password"
          value={password}
          disabled={isLoading}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button
          disabled={isLoading}
          className="text-white shadow-sm shadow-black/50 bg-slate-400 hover:bg-slate-500 py-2 w-[24rem] rounded-md font-semibold"
        >
          {!isLoading ? "log in" : <SmallSpinner />}
        </button>
      </form>
      </>
  );
}

export default LoginForm;
