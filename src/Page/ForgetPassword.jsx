import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function ForgetPassword() {
  const [hasfild, sethasfild] = useState(false);
  const fromRef = useRef(null);
  const handelChange = () => {
    const form = fromRef.current;
    if (form["username"].value.length > 0) {
      sethasfild(true);
    } else {
      sethasfild(false);
    }
  };
  return (
    <>
      <div className="flex justify-center flex-col  items-center h-screen bg-slate-50 ">
        <div className="fogerPass bg-white border border-gray-300 border-solid flex flex-col items-center  ">
          <img
            src="http://localhost:3000/image/lockk.png"
            className="w-28 mt-6"
            alt=""
          ></img>
          <p className="text-lg mt-2 font-semibold text-gray-800 ">
            Trouble Logging In?
          </p>
          <p className=" text-center font-thin mt-2 ml-6 mr-6 text-gray-500">
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </p>
          <form ref={fromRef} className="w-72 flex flex-col gap-1 mt-3">
            <div className="relative">
              <input
                onChange={handelChange}
                name="username"
                type="text"
                className=" peer  w-full rounded border bg-gray-100 p-3 text-xs placeholder-transparent"
                placeholder="Phone number,username or Email"
              />
              <label className="absolute transition-all left-2 top-0 text-gray-400  text-xxs peer-placeholder-shown:text-xs  peer-placeholder-shown:top-3 pointer-events-none">
                Phone number,username or Email
              </label>
            </div>
            <button
              className={` ${
                hasfild ? "bg-gray-900" : "bg-gray-700"
              } w-full mt-2 h-8 rounded text-white  text-sm font-medium py-1`}
            >
              Log In
            </button>
          </form>
          <div className=" flex space-x-2 w-64 mt-6 items-center ">
            <span className="bg-gray-300 h-px  flex-1" />
            <span className="p-2 uppercase text-xs text-gray-400 font-semibold">
              or
            </span>
            <span className="bg-gray-300 h-px flex-1" />
          </div>
          <button className=" font-semibold text-gray-800 ">
            Create New Account
          </button>
          <div className="flex justify-center flex-col  items-center  bg-gray-100 h-16 w-full mt-16 border-gray-300 border-solid  border ">
            <button className="font-semibold text-gray-800">
              <Link to="/">Back to Login</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
