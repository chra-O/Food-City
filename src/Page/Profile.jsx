import React from "react";
import NavBar from "../Commponent/NavBar";

export default function Profile() {
  return (
    <>
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart1.png"
      />
      {/* ///////////////////////////// */}
      <div className="pt-16 bg-gray-50  h-screen">
        {" "}
        <div className="sm:max-w-6xl sm:mx-5 p-10 xl:mx-auto">
          {" "}
          <div className="grid grid-cols-4 gap-4">
            <div className="flex justify-center ">
              {" "}
              <img
                src="http://localhost:3000/image/girl.png"
                className=" h-28 w-28 sm:w-32  sm:h-32 md:w-40  md:h-40 sm:ml-10   bg-slate-500 rounded-full"
                alt=""
              ></img>
            </div>
            <div className="col-span-3 ml-6 sm:ml-16 mt-5">
              <div>
              <span className="text-gray-800 text-3xl  font-thin ">
                chra othman{" "}
              </span>
              <div className="cursor-pointer  inline text-gray-900 ml-2 font-semibold p-1 px-2   border border-gray-300  rounded  ">
                Edit Profile
              </div>
              <img
                src="http://localhost:3000/image/setting.png"
                className="h-6  w-6 ml-4  inline "
                alt=""
              ></img></div>
              <div className="mt-6 justify-between flex w-80">
                <span className="block text-lg  ">
                  0 <p className="inline text-gray-500 ">posts</p>
                </span>
                <span className="block text-lg  ">
                  168 <p className="inline text-gray-500 ">followers</p>
                </span>
                <span className="block text-lg  ">
                  852 <p className="inline text-gray-500 ">following</p>
                </span>
              </div>
              <div className="mt-7">
                <p className="font-semibold text-black text-lg"> Chra O</p>
                <p className=" text-gray-700 text-lg"> who paints sometimes</p>
              </div>
            </div>
            <div> </div>
          </div>
        </div>
      </div>
    </>
  );
}
