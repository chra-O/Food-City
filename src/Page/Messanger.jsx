import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Commponent/NavBar";

export default function Messanger() {
  return (
    <>
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart1.png"
      />
      <div className="mt-10">
        <div className="  pt-16 bg-gray-50  h-full pb-40  ">
          {" "}
          <div className="sm:max-w-xl p-3 sm:mx-5 h-[650px] xl:mx-auto mt-12 overflow-y-scroll bg-white border border-solid border-gray-300 rounded-md">
            <div className="grid grid-cols-1 gap-1">
              <Link to="/showMassage">
                <div className="flex sm:p-6 p-3 bg-gray-100 ">
                  <img
                    src="http://localhost:3000/image/chra.jpg"
                    className=" h-12 w-12   bg-slate-500 rounded-full"
                    alt=""
                  ></img>
                  <div className="grid grid-rows-2">
                    {" "}
                    <p className="  ml-4 text-black ">chraO </p>
                    <p className=" ml-4 text-gray-500   w-72">
                      satrting following you. 30m
                    </p>{" "}
                  </div>
                </div>
              </Link>
              <Link to="/showMassage">
                <div className="flex sm:p-6 p-3 bg-gray-100 ">
                  <img
                    src="http://localhost:3000/image/chra.jpg"
                    className=" h-12 w-12   bg-slate-500 rounded-full"
                    alt=""
                  ></img>
                  <div className="grid grid-rows-2">
                    {" "}
                    <p className="  ml-4 text-black ">chraO </p>
                    <p className=" ml-4 text-gray-500   w-72">
                      satrting following you. 30m
                    </p>{" "}
                  </div>
                </div>
              </Link>
              <Link to="/showMassage">
                <div className="flex sm:p-6 p-3 bg-gray-100 ">
                  <img
                    src="http://localhost:3000/image/chra.jpg"
                    className=" h-12 w-12   bg-slate-500 rounded-full"
                    alt=""
                  ></img>
                  <div className="grid grid-rows-2">
                    {" "}
                    <p className="  ml-4 text-black ">chraO </p>
                    <p className=" ml-4 text-gray-500   w-72">
                      satrting following you. 30m
                    </p>{" "}
                  </div>
                </div>
              </Link>
              <Link to="/showMassage">
                <div className="flex sm:p-6 p-3  ">
                  <img
                    src="http://localhost:3000/image/chra.jpg"
                    className=" h-12 w-12   bg-slate-500 rounded-full"
                    alt=""
                  ></img>
                  <div className="grid grid-rows-2">
                    {" "}
                    <p className="  ml-4 text-black ">chraO </p>
                    <p className=" ml-4 text-gray-500   w-72">
                      satrting following you. 30m
                    </p>{" "}
                  </div>
                </div>
              </Link>
              <Link to="/showMassage">
                <div className="flex sm:p-6 p-3  ">
                  <img
                    src="http://localhost:3000/image/chra.jpg"
                    className=" h-12 w-12   bg-slate-500 rounded-full"
                    alt=""
                  ></img>
                  <div className="grid grid-rows-2">
                    {" "}
                    <p className="  ml-4 text-black ">chraO </p>
                    <p className=" ml-4 text-gray-500   w-72">
                      satrting following you. 30m
                    </p>{" "}
                  </div>
                </div>
              </Link>{" "}
              <Link to="/showMassage">
                <div className="flex sm:p-6 p-3  ">
                  <img
                    src="http://localhost:3000/image/chra.jpg"
                    className=" h-12 w-12   bg-slate-500 rounded-full"
                    alt=""
                  ></img>
                  <div className="grid grid-rows-2">
                    {" "}
                    <p className="  ml-4 text-black ">chraO </p>
                    <p className=" ml-4 text-gray-500   w-72">
                      satrting following you. 30m
                    </p>{" "}
                  </div>
                </div>
              </Link>{" "}
              <Link to="/showMassage">
                <div className="flex sm:p-6 p-3  ">
                  <img
                    src="http://localhost:3000/image/chra.jpg"
                    className=" h-12 w-12   bg-slate-500 rounded-full"
                    alt=""
                  ></img>
                  <div className="grid grid-rows-2">
                    {" "}
                    <p className="  ml-4 text-black ">chraO </p>
                    <p className=" ml-4 text-gray-500   w-72">
                      satrting following you. 30m
                    </p>{" "}
                  </div>
                </div>
              </Link>{" "}
              <Link to="/showMassage">
                <div className="flex sm:p-6 p-3  ">
                  <img
                    src="http://localhost:3000/image/chra.jpg"
                    className=" h-12 w-12   bg-slate-500 rounded-full"
                    alt=""
                  ></img>
                  <div className="grid grid-rows-2">
                    {" "}
                    <p className="  ml-4 text-black ">chraO </p>
                    <p className=" ml-4 text-gray-500   w-72">
                      satrting following you. 30m
                    </p>{" "}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
