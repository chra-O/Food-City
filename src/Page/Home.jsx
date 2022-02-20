import React from "react";
import NavBar from "../Commponent/NavBar";
import Story from "../Commponent/Story";
import "../Style/tip.css";

export default function Home() {
  return (
    <>
      <NavBar
        home="http://localhost:3000/image/home.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart1.png"
      />
      <div className="mt-10 ">
        <div className="  pt-16 bg-gray-50  h-full pb-40  ">
          <div className="sm:max-w-4xl  sm:mx-10 xl:mx-auto  mt-3  ">
            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
              <div className="col-span-2  ">
                {" "}
                <div className="grid grid-cols-1 gap-3 mx-1">
                 
                    <Story/>
                 
                </div>
              </div>
              <div className="sm:invisible invisible  md:visible ">
                <div className="flex ml-2 ">
                  <img
                    src="http://localhost:3000/image/chra.jpg"
                    className=" sm:h-4 sm:w-4 md:h-14 md:w-14     bg-slate-500 rounded-full"
                    alt=""
                  ></img>
                  <div className="grid grid-rows-2 ">
                    {" "}
                    <p className="  ml-4 text-black font-semibold  ">chraO </p>
                    <p className=" ml-4 text-gray-500  ">chra othman</p>{" "}
                  </div>
                  <p className="flex mt-2 text-blue-500 ml-10">switch</p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
