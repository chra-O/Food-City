import React, { useRef, useState, useEffect } from "react";
import NotificationTip from "./NotificationTip";
import SearchTip from "./SearchTip";

export default function NavBar() {
  const [search, setSearch] = useState(true);
  const [corss, setcross] = useState(false);
  const [searchTip, setSearchTip] = useState(false);
  const inputref = useRef(null);
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
  return (
    <>
      <div className="shadow-sm border-b bg-white w-full top-0 fixed">
        <div className=" flex justify-around sm:max-w-5xl max-w-2xl sm:mx-5 xl:mx-auto  sm:p-2 ">
          <h1 className=" relative Homelogo text-4xl  text-gray-700 ">
            Food City
          </h1>
          <div
            ref={inputref}
            className="relative h-8 mt-2 p-1 pl-2 rounded-md sm:text-sm  border-solid  border-[1.2px]  border-gray-300 flex bg-gray-50 invisible md:visible w-0 md:w-fit "
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
              className=" inputNavbar  p-1 bg-gray-50  block  focus:outline-none"
            ></input>
            {corss && (
              <img
                src="http://localhost:3000/image/cross.png"
                className="h-4 w-4 mt-1  text-gray-400 cursor-pointer "
                alt=""
                onClick={()=>{ setSearchTip(false);}}
              ></img>
            )}
            {searchTip && <SearchTip />}
          </div>
          <div className="relative flex">
            <img
              src="http://localhost:3000/image/home1.png"
              className="h-7 w-7 mt-2 m-3 text-gray-400 inline cursor-pointer "
              alt=""
            ></img>
            <div className="relative ">
              {" "}
              <img
                src="http://localhost:3000/image/messanger1.png"
                className="h-7 w-7 mt-2 m-3 text-gray-400 inline cursor-pointer"
                alt=""
              ></img>
              <span className="absolute top-2 -right-0 bg-red-500  rounded-full  h-4 w-4  text-white  text-xs  items-center  justify-center flex leading-none">
                3
              </span>
            </div>

            <img
              src="http://localhost:3000/image/add1.png"
              className="h-7 w-7 mt-2 m-3 text-gray-400 inline cursor-pointer"
              alt=""
            ></img>
            <img
              src="http://localhost:3000/image/compass1.png"
              className="h-7 w-7 mt-2 m-3 text-gray-400 inline cursor-pointer"
              alt=""
            ></img>
            <div className="relative ">
              {" "}
              <img
                src="http://localhost:3000/image/heart1.png"
                className="h-7 w-7 mt-2 m-3 text-gray-400 inline cursor-pointer"
                alt=""
              ></img>
              <div className=" absolute w-1 h-1  left-1/2 top-10 -translate-x-1/2  bg-red-600  rounded-full"></div>
              <NotificationTip />
            </div>
            <div className="relative ">
              {" "}
              <img
                src="http://localhost:3000/image/girl.png"
                className="h-7 w-7 mt-2 m-3 text-gray-400 inline cursor-pointer bg-slate-500 rounded-full"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
