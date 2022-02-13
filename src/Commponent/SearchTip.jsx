import React from "react";

export default function SearchTip() {
  return (
    <>
      <div className="search absolute top-12 bg-white w-96 left-1/2 -translate-x-1/2 shadow-xl  p-4 mb-2 rounded-lg  h-96  overflow-y-auto ">
        <div className="flex justify-between mb-5">
          <h3 className=" text-lg text-black">Recent</h3>
          <button className=" text-blue-400 text-lg ">Clear All</button>
        </div>
        <div className="flex items-center justify-between cursor-pointer p-1 hover:bg-slate-50">
          <div className="flex items-center">
            <div className="relative ">
              {" "}
              <img
                src="http://localhost:3000/image/girl.png"
                className="h-12 w-12  rounded-full"
                alt=""
              ></img>
            </div>
            <div className="pl-2">
              <div className="text-md font-semibold "> chra othman</div>
              <div className="text-gray-500"> ghhjs</div>
            </div>
          </div>
          <div className="">
            {" "}
            <img
              src="http://localhost:3000/image/cross2.png"
              className="h-5 w-5 mt-1 text-gray-400  cursor-pointer  "
              alt=""
            ></img>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
