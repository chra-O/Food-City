import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function LogInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [hasfild, sethasfild] = useState(false);
  const fromRef = useRef(null);
  /////////////
  const pressShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  ////////////
  const handelChange = () => {
    const form = fromRef.current;
    if (
      form["username"].value.length > 0 &&
      form["password"].value.length > 0
    ) {
      sethasfild(true);
    } else {
      sethasfild(false);
    }
  };

  //////////////////////
  return (
    <>
      <div className="flex justify-center flex-col items-center h-screen bg-slate-50">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <div className="invisible sm:invisible md:visible">
            <img
              src="http://localhost:3000/image/logo.png"
              className=" sm:w-0 mt-16 mr-16 w-0 md:w-80"
              alt=""
            ></img>
          </div>
          <div className="">
            <div className=" login flex flex-col items-center border border-gray-300 border-solid p-8 pb-4 bg-white mb-3 ">
              <h1 className="foodLogin text-5xl text-center text-gray-700">
                Log in
              </h1>
              <form ref={fromRef} className="w-72 flex flex-col gap-1 mt-8">
                <div className="relative">
                  <input
                    onChange={handelChange}
                    name="username"
                    type="text"
                    className=" peer  w-full rounded border bg-gray-100 p-2 text-xs placeholder-transparent"
                    placeholder="Phone number,username or Email"
                  />
                  <label className="absolute transition-all left-2 top-0 text-gray-400  text-xxs peer-placeholder-shown:text-xs  peer-placeholder-shown:top-2 pointer-events-none">
                    Phone number,username or Email
                  </label>
                </div>
                <div className="relative">
                  <input
                    onChange={handelChange}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className=" peer w-full rounded border bg-gray-100 p-2 text-xs placeholder-transparent"
                    placeholder="Password"
                  />
                  <label className="absolute transition-all left-2 top-0 text-gray-400  text-xxs peer-placeholder-shown:text-xs  peer-placeholder-shown:top-2 pointer-events-none">
                    Password
                  </label>
                  <button
                    onClick={(e) => {
                      pressShow(e);
                    }}
                    className="absolute right-2 bottom-2 focus:text-gray-500 rounded text-sm font-semibold"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <Link to="/home">
                  <button
                    className={` ${
                      hasfild ? "bg-gray-900" : "bg-gray-700"
                    } w-full mt-2 h-8 rounded text-white  text-sm font-medium py-1`}
                  >
                    Log In
                  </button>
                </Link>
              </form>{" "}
              <div className=" flex space-x-2 w-64 mt-4 items-center">
                <span className="bg-gray-300 h-px  flex-1" />
                <span className="p-2 uppercase text-xs text-gray-400 font-semibold">
                  or
                </span>
                <span className="bg-gray-300 h-px flex-1" />
              </div>
              <button className="mt-4 flex">
                <img
                  src="http://localhost:3000/image/facebook.png"
                  className="w-5 mr-2"
                  alt=""
                ></img>
                <span className="text-blue-900 font-semibold text-sm ">
                  <a href="https://www.facebook.com/login">
                    Log in with Facebook
                  </a>
                </span>
              </button>
              <button className="mt-6">
                <span className="text-blue-900 font-semibold text-xs  ">
                  <Link to="./ForgetPassword">Forgrt Password?</Link>
                </span>
              </button>
            </div>
            <div className="signup  flex justify-center flex-col items-center border border-gray-300 border-solid bg-white">
              <div>
                <p>
                  Don't have an account?{" "}
                  <button className="">
                    <span className="text-blue-400 font-semibold  ">
                      <Link to="/signup"> Sign Up</Link>
                    </span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
