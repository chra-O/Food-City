import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setpassword, setusername } from "../Redux/slice";
export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const usernameSlice = useSelector((state) => state.notify.usernames);
  const passwordslice = useSelector((state) => state.notify.password);
  const [hasfild, sethasfild] = useState(false);
  const fromRef = useRef(null);
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const dispatch = useDispatch();
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
      form["password"].value.length > 0 &&
      form["name"].value.length > 0 &&
      form["email"].value.length > 0
    ) {
      sethasfild(true);
    } else {
      sethasfild(false);
    }
  };
  function usenamefunction(e) {
    handelChange();
    setuser(e.target.value);
  }
  dispatch(setusername(user));
  dispatch(setpassword(pass));
  return (
    <>
      <div className="flex justify-center flex-col  items-center h-screen bg-slate-50 gap-3">
        <div className="creatAccount bg-white border border-gray-300 border-solid flex flex-col items-center  ">
          <h1 className="foodLogin text-4xl text-center mt-5 text-gray-700">
            Create Account
          </h1>
          <p className=" text-center font-semibold text-lg mt-2 ml-6 mr-6 text-gray-500">
            Sign up to see photos and videos from your friends.
          </p>
          <button className="mt-4 flex bg-blue-500 w-72 h-8 rounded text-white  justify-center p-1  ">
            <img
              src="http://localhost:3000/image/faceb.png"
              className="w-5 mr-2 mt-1 bg-white "
              alt=""
            ></img>
            <span className="font-semibold text-sm  mt-1">
              <a href="https://www.facebook.com/login">Log in with Facebook</a>
            </span>
          </button>
          <div className=" flex space-x-2 w-64 mt-2 items-center ">
            <span className="bg-gray-300 h-px  flex-1" />
            <span className="p-2 uppercase text-xs text-gray-400 font-semibold">
              or
            </span>
            <span className="bg-gray-300 h-px flex-1" />
          </div>
          <form ref={fromRef} className="w-72 flex flex-col gap-1 mt-1 ">
            <div className="relative">
              <input
                onChange={(e) => {
                  usenamefunction(e);
                }}
                name="email"
                type="text"
                className=" peer  w-full rounded  border bg-gray-100 p-2 text-xs placeholder-transparent"
                placeholder="Mobile Number or Email"
              />
              <label className="absolute transition-all left-2 top-0 text-gray-400  text-xxs peer-placeholder-shown:text-xs  peer-placeholder-shown:top-2 pointer-events-none">
                Mobile Number or Email
              </label>
            </div>
            <div className="relative">
              <input
                onChange={handelChange}
                name="name"
                type="text"
                className=" peer  w-full rounded border bg-gray-100 p-2 text-xs placeholder-transparent"
                placeholder="Full Name"
              />
              <label className="absolute transition-all left-2 top-0 text-gray-400  text-xxs peer-placeholder-shown:text-xs  peer-placeholder-shown:top-2 pointer-events-none">
                Full Name
              </label>
            </div>
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
                onChange={(e) => {
                  handelChange();
                  setpass(e.target.value);
                }}
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
            {hasfild ? (
              <Link to="/">
                <button
                  className={` ${
                    hasfild ? "bg-gray-900" : "bg-gray-700"
                  } w-full mt-2 h-8 rounded text-white  text-sm font-medium py-1`}
                >
                  Log In
                </button>
              </Link>
            ) : (
              <button
                className={` ${
                  hasfild ? "bg-gray-900" : "bg-gray-700"
                } w-full mt-2 h-8 rounded text-white  text-sm font-medium py-1`}
              >
                Log In
              </button>
            )}
          </form>{" "}
          <p className=" text-center  text-sm mt-6 ml-12  mr-12 text-gray-400">
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </p>
        </div>
        <div className="signupCreat  flex justify-center flex-col items-center border border-gray-300 border-solid bg-white">
          <div>
            <p>
              Have an account?
              <button className="">
                <span className="text-blue-400 font-semibold ml-1  ">
                  <Link to="/"> Log in</Link>
                </span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
