import classNames from "classnames";
import { useActiveForm } from "context";
import Link from "next/link";
import React from "react";

function Account() {
  const [activeForm, setActiveForm] = useActiveForm();
  return (
    <>
      <h2 className="pb-3 uppercase border-b border-primary-black w-full font-black text-primary-black text-[22px] leading-[22px]">
        Account
      </h2>

      {activeForm === "logIn" ? <LogInForm /> : <SignUpFrom />}

      <div className="flex items-center gap-x-5">
        <button
          onClick={() => setActiveForm("logIn")}
          className={classNames(
            "uppercase font-black px-4 py-3",
            activeForm == "logIn"
              ? "text-[22px] rounded text-white bg-primary-black leading-[22px]"
              : "text-[16px] leading-[16px] rounded text-primary-black bg-white"
          )}
        >
          LogIn
        </button>

        <button
          onClick={() => setActiveForm("signUp")}
          className={classNames(
            "uppercase font-black px-4 py-3",
            activeForm === "signUp"
              ? "text-[22px] rounded text-white bg-primary-black leading-[22px]"
              : "text-[16px] leading-[16px] rounded text-primary-black bg-white"
          )}
        >
          SignUp
        </button>
      </div>
    </>
  );
}

export default Account;

function LogInForm() {
  return (
    <>
      <p className="text-sm text-primary-black p-2 rounded border border-primary-black">
        If you had an account on our previous website, please create a new one
        by sign up.
      </p>
      <form className="py-2 space-y-4">
        <Input placeholder="Email address" />
        <Input placeholder="Password" />

        <Link href="#">
          <div className="text-sm underline text-primary-black mt-3">
            Forgot your password?
          </div>
        </Link>
      </form>
    </>
  );
}

function SignUpFrom() {
  return (
    <form className="space-y-4 py-2 min-w-[400px]">
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
    </form>
  );
}

function Input({ placeholder }: { placeholder: string }) {
  return (
    <div className="space-y-1 relative w-full">
      <input
        type="text"
        id="email"
        autoComplete="off"
        className="block w-full py-2 placeholder:text-transparent text-base outline-none px-3 rounded bg-transparent peer border border-primary-black"
      />
      <label
        htmlFor="email"
        className="font-semibold text-primary-black text-xs leading-3 uppercase absolute duration-200 top-2.5 left-3  peer-focus:-top-2.5 peer-focus:bg-primary"
      >
        {placeholder}
      </label>
    </div>
  );
}
