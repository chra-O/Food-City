import React from "react";
import NavBar from "../Commponent/NavBar";
import { Link } from "react-router-dom";
export default function Notification() {
  return (
    <>
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart.png"
      />
      <div className="  pt-16 bg-gray-50  h-fit pb-40 ">
        {" "}
        <div className="sm:max-w-2xl  sm:mx-5  xl:mx-auto mt-12 bg-white border border-solid border-gray-300">
          <div className="grid grid-cols-1 ">
            {" "}
            <Link to="/follower">
              <div className=" flex  h-20 border-b-2">
                {" "}
                <div className="flex relative items-center ml-10 ">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    className="  h-10 w-10    bg-slate-500 rounded-full"
                    alt=""
                  ></img>{" "}
                  <img
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"
                    className=" absolute top-8 left-2 h-10 w-10   bg-slate-500 rounded-full"
                    alt=""
                  ></img>{" "}
                </div>
                <h1 className="mt-6 font-semibold ml-5">
                  Follow Request{" "}
                  <p className="text-sm text-gray-400">ali and + 192 other</p>
                </h1>
                <img
                  src="http://localhost:3000/image/rightarrow.png"
                  className="   h-10 w-10  mt-6 sm:ml-96 ml-72"
                  alt=""
                ></img>{" "}
              </div>
            </Link>
            <div className="flex sm:p-6 p-3  ">
              <img
                src="http://localhost:3000/image/chra.jpg"
                className=" h-8 w-8   bg-slate-500 rounded-full"
                alt=""
              ></img>
              <p className=" flex items-center ml-4 text-black ">
                chraO
                <p className="text-gray-500 ml-1 sm:text-sm text-xs w-36">
                  satrting following you
                </p>{" "}
              </p>
              <button className=" text-black px-3 py-1 border rounded-md flex  border-gray-400 sm:ml-72 ml-52 ">
                following
              </button>
            </div>
            <div className="flex sm:p-6 p-3  ">
              <img
                src="http://localhost:3000/image/chra.jpg"
                className=" h-8 w-8   bg-slate-500 rounded-full"
                alt=""
              ></img>
              <p className=" flex items-center ml-4 text-black ">
                chraO
                <p className="text-gray-500 ml-1 sm:text-sm text-xs w-36">
                  satrting following you
                </p>{" "}
              </p>
              <button className=" text-black px-3 py-1 border rounded-md flex  border-gray-400 sm:ml-72 ml-52 ">
                following
              </button>
            </div>
            <div className="flex sm:p-6 p-3  ">
              <img
                src="http://localhost:3000/image/chra.jpg"
                className=" h-8 w-8  mt-2 bg-slate-500 rounded-full"
                alt=""
              ></img>
              <p className=" flex items-center ml-4 text-black ">
                chraO
                <p className="text-gray-500 ml-1 sm:text-sm text-xs w-36">
                  like you post
                </p>{" "}
              </p>
              <img
                src="http://localhost:3000/image/chra.jpg"
                className=" h-12 w-12 sm:ml-80 ml-52  "
                alt=""
              ></img>
            </div>
            <div className="flex sm:p-6 p-3  ">
              <img
                src="http://localhost:3000/image/chra.jpg"
                className=" h-8 w-8   bg-slate-500 rounded-full"
                alt=""
              ></img>
              <p className=" flex items-center ml-4 text-black ">
                chraO
                <p className="text-gray-500 ml-1 sm:text-sm text-xs w-36">
                  satrting following you
                </p>{" "}
              </p>
              <button className=" text-black px-3 py-1 border rounded-md flex  border-gray-400 sm:ml-72 ml-52 ">
                following
              </button>
            </div>
            <div className="flex sm:p-6 p-3  ">
              <img
                src="http://localhost:3000/image/chra.jpg"
                className=" h-8 w-8  mt-2 bg-slate-500 rounded-full"
                alt=""
              ></img>
              <p className=" flex items-center ml-4 text-black ">
                chraO
                <p className="text-gray-500 ml-1 sm:text-sm text-xs w-36">
                  like you post
                </p>{" "}
              </p>
              <img
                src="http://localhost:3000/image/chra.jpg"
                className=" h-12 w-12 sm:ml-80 ml-52  "
                alt=""
              ></img>
            </div>
            <div className="flex sm:p-6 p-3  ">
              <img
                src="http://localhost:3000/image/chra.jpg"
                className=" h-8 w-8   bg-slate-500 rounded-full"
                alt=""
              ></img>
              <p className=" flex items-center ml-4 text-black ">
                chraO
                <p className="text-gray-500 ml-1 sm:text-sm text-xs w-36">
                  satrting following you
                </p>{" "}
              </p>
              <button className=" text-black px-3 py-1 border rounded-md flex  border-gray-400 sm:ml-72 ml-52 ">
                following
              </button>
            </div>
            <div className="flex sm:p-6 p-3  ">
              <img
                src="http://localhost:3000/image/chra.jpg"
                className=" h-8 w-8  mt-2 bg-slate-500 rounded-full"
                alt=""
              ></img>
              <p className=" flex items-center ml-4 text-black ">
                chraO
                <p className="text-gray-500 ml-1 sm:text-sm text-xs w-36">
                  like you post
                </p>{" "}
              </p>
              <img
                src="http://localhost:3000/image/chra.jpg"
                className=" h-12 w-12 sm:ml-80 ml-52  "
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
