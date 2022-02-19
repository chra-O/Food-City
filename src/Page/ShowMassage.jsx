import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Commponent/NavBar";

export default function ShowMassage() {
  return (
    <>
      {" "}
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart1.png"
      />
      <div className="mt-10">
        <div className="  pt-16 bg-gray-50  h-full pb-40  ">
          <div className="sm:max-w-xl  sm:mx-5 xl:mx-auto  mt-3 ">
            <Link to="/Messanger">
              <div className="flex gap-2 items-center">
                <img
                  src="http://localhost:3000/image/leftsaved.png"
                  className=" h-8 w-8 "
                  alt=""
                ></img>{" "}
                <p>Back to Messanger</p>
              </div>
            </Link>
          </div>{" "}
          <div className="sm:max-w-xl  sm:mx-5 xl:mx-auto mt-4  bg-white border border-solid border-gray-300 rounded-md">
            <div className="grid grid-cols-1  ">
              <div className="w-full border-b-2 h-16 flex items-center ">
                <img
                  src="http://localhost:3000/image/chra.jpg"
                  className=" h-8 w-8  ml-10  rounded-full"
                  alt=""
                ></img>
                <p className="ml-2 ">chra O</p>
              </div>
              <div className="overflow-y-scroll h-[550px] grid grid-cols-1 gap-2  "></div>
              
              <div className=" m-2 relative">
                {" "}
                <img
                  src="http://localhost:3000/image/face.png"
                  className="h-7 w-7  text-gray-200  absolute mt-3 ml-4 mr-6"
                  alt=""
                ></img>
                <input
                  type="text"
                  className="w-full p-3 rounded-full border-2 pl-12   "
                  placeholder="Message ..."
                ></input>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
