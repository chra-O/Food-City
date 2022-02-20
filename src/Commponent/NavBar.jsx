import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NotificationTip from "./NotificationTip";
import ProfileTip from "./ProfileTip";
import SearchTip from "./SearchTip";
import { useDispatch } from "react-redux";
import { isShowNotification } from "../Redux/slice";
import { isShowmessanger } from "../Redux/slice";
import { useSelector } from "react-redux";
export default function NavBar(props) {
  const [search, setSearch] = useState(true);
  const [corss, setcross] = useState(false);
  const [searchTip, setSearchTip] = useState(false);
  const [profile, setprofile] = useState(false);
  const showNotification = useSelector((state) => state.notify.not);
  const showMassege = useSelector((state) => state.notify.messanger);
  const dispatch = useDispatch();
  const inputref = useRef(null);
  const profileRef = useRef(null);
  useEffect(() => {
    const oustsiteClick = (e) => {
      if (!inputref?.current?.contains(e.target)) {
        setcross(false);
        setSearch(true);
        setSearchTip(false);
      } else {
        setcross(true);
        setSearch(false);
        setSearchTip(true);
      }
    };
    document.addEventListener("mousedown", oustsiteClick);
    return () => {
      document.removeEventListener("mousedown", oustsiteClick);
    };
  }, []);
  useEffect(() => {
    const profileClick = (e) => {
      if (!profileRef?.current?.contains(e.target)) {
        setprofile(false);
      } else {
        setprofile(true);
      }
    };
    document.addEventListener("mousedown", profileClick);
    return () => {
      document.removeEventListener("mousedown", profileClick);
    };
  }, []);
  return (
    <>
      <div className="shadow-sm border-b bg-white w-full top-0  fixed z-10">
        <div className=" flex justify-around sm:max-w-5xl max-w-2xl sm:mx-5 xl:mx-auto  sm:p-2 ">
          <h1 className=" relative Homelogo text-4xl mt-2 text-gray-700 ">
            <Link to="/home"> Food City</Link>
          </h1>
          <div
            ref={inputref}
            className="relative h-8 mt-4 p-1 pl-2 rounded-md sm:text-sm  border-solid  border-[1.2px]  border-gray-300 flex bg-gray-100 invisible md:visible w-0 md:w-fit "
          >
            {search && (
              <img
                src="http://localhost:3000/image/search.png"
                className="h-5 w-5  text-gray-200 "
                alt=""
              ></img>
            )}
            <input
              type="text"
              placeholder="search"
              className=" inputNavbar   p-1 bg-gray-100  block  focus:outline-none"
            ></input>
            {corss && (
              <img
                src="http://localhost:3000/image/cross.png"
                className="h-4 w-4 mt-1  text-gray-400 cursor-pointer "
                alt=""
                onClick={() => {
                  setSearchTip(false);
                }}
              ></img>
            )}
            {searchTip && <SearchTip />}
          </div>
          <div className="relative flex">
            <Link to="/home">
              {" "}
              <img
                src={props.home}
                className="h-7 w-7 mt-4 m-3 text-gray-400 inline cursor-pointer "
                alt=""
              ></img>
            </Link>

            <div className="relative ">
              {" "}
              <Link to="/Messanger">
                {" "}
                <img
                  src={props.messanger}
                  className="h-7 w-7 mt-4 m-3 text-gray-400 inline cursor-pointer"
                  alt=""
                  onClick={() => {
                    dispatch(isShowmessanger());
                  }}
                ></img>
              </Link>
              {showMassege && (
                <span className="absolute top-3 right-1 bg-red-500  rounded-full  h-4 w-4  text-white  text-xs  items-center  justify-center flex leading-none">
                  3
                </span>
              )}
            </div>

            <img
              src={props.add}
              className="h-7 w-7 mt-4 m-3 text-gray-400 inline cursor-pointer"
              alt=""
            ></img>
            <img
              src={props.compasss}
              className="h-7 w-7 mt-4 m-3 text-gray-400 inline cursor-pointer"
              alt=""
            ></img>
            <div className="relative ">
              {" "}
              <Link to="/Notification">
                <img
                  src={props.not}
                  className="h-7 w-7 mt-4 m-3 text-gray-400 inline cursor-pointer"
                  alt=""
                  onClick={() => {
                    dispatch(isShowNotification());
                  }}
                ></img>
              </Link>
              {showNotification && (
                <div className=" absolute w-1 h-1  left-1/2 top-12 -translate-x-1/2  bg-red-600  rounded-full">
                  <NotificationTip />{" "}
                </div>
              )}
            </div>
            <div className="relative " ref={profileRef}>
              {" "}
              <img
                src="http://localhost:3000/image/girl.png"
                className="h-10 w-10 mt-2 m-3 text-gray-400 inline cursor-pointer bg-slate-500 rounded-full"
                alt=""
                onClick={() => {
                  setprofile(profile);
                }}
              ></img>
              {profile && <ProfileTip />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
