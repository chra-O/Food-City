import React from "react";
import { Link } from "react-router-dom";

export default function ProfileTip() {
  return (
    <>
      <div className="profile absolute top-14 bg-white w-64 -left-10 -translate-x-1/2 shadow-xl pt-4 rounded-lg  ">
        <div className=" ">
          <Link to="/Profile">
            {" "}
            <p className="m-3  cursor-pointer ">
              <img
                src="http://localhost:3000/image/profile.png"
                className="h-4 w-4 mr-3 inline   "
                alt=""
              ></img>
              Profile
            </p>{" "}
          </Link>
          <p className="m-3 cursor-pointer ">
            <img
              src="http://localhost:3000/image/save.png"
              className="h-4 w-4 mr-3 inline  "
              alt=""
            ></img>
            Save
          </p>
          <p className="m-3 cursor-pointer ">
            <img
              src="http://localhost:3000/image/setting.png"
              className="h-4 w-4 mr-3 inline  "
              alt=""
            ></img>
            Setting
          </p>
          <p className="m-3 cursor-pointer ">
            <img
              src="http://localhost:3000/image/sewitch.png"
              className="h-4 w-4 mr-3 inline  -rotate-90 "
              alt=""
            ></img>
            Switch Accounts
          </p>

          <div className="h-[1px] w-full bg-slate-500"></div>
          <p className="m-3 cursor-pointer ">
            {" "}
            <Link to="/">Log Out </Link>
          </p>
        </div>
      </div>
    </>
  );
}
