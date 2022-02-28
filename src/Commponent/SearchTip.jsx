import React from "react";

export default function SearchTip() {
  return (
    <>
      <div className="search absolute top-12 bg-white w-96 left-1/2 -translate-x-1/2 shadow-xl pt-4 rounded-lg     ">
        <div className="overflow-y-auto h-96 mb-2  ">
          <div className="flex justify-between mb-5">
            <h3 className=" text-lg text-black ml-3">Recent</h3>
            <button className=" text-blue-400 text-lg  mr-3 ">Clear All</button>
          </div>
          <div className="flex items-center justify-between cursor-pointer p-1 hover:bg-slate-50 ml-3 mr-3">
            <div className="flex items-center">
              <div className="relative ">
                {" "}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcN2P5YcOKn24rv1071WX1cQujWc1BXQRRcw&usqp=CAU"
                  className="h-12 w-12  rounded-full"
                  alt=""
                ></img>
              </div>
              <div className="pl-2">
                <div className="text-md font-semibold "> Laia </div>
                <div className="text-gray-500"> Laila.i.o</div>
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
          <div className="flex items-center justify-between cursor-pointer p-1 hover:bg-slate-50 ml-3 mr-3">
            <div className="flex items-center">
              <div className="relative ">
                {" "}
                <img
                  src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg"
                  className="h-12 w-12  rounded-full"
                  alt=""
                ></img>
              </div>
              <div className="pl-2">
                <div className="text-md font-semibold "> Chapka </div>
                <div className="text-gray-500"> CHapa</div>
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
          <div className="flex items-center justify-between cursor-pointer p-1 hover:bg-slate-50 ml-3 mr-3">
            <div className="flex items-center">
              <div className="relative ">
                {" "}
                <img
                  src="https://wallpaperaccess.com/full/1359011.jpg"
                  className="h-12 w-12  rounded-full"
                  alt=""
                ></img>
              </div>
              <div className="pl-2">
                <div className="text-md font-semibold "> Zhako </div>
                <div className="text-gray-500">Zhako.babe</div>
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
          
          
        </div>
      </div>{" "}
    </>
  );
}
