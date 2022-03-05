import React from "react";

export default function CraetePost() {
  return (
    <div className="fixed z-20 top-36 left-[75px] sm:left-[100px] lg:left-[200px] xl:left-[540px]">
      <div className=" bg-gray-50 w-[400px] h-[500px] sm:w-[500px] sm:h-[600px]  lg:w-[600px] lg:h-[650px] rounded-2xl   shadow-black   shadow-2xl border-2 grid grid-rows-6  ">
        <div className="  h-12 flex justify-center items-center cursor-pointer border-b border-gray-400  text-black  ">
          Create New Post
        </div>
        <div className=" w-full h-96  flex  justify-center items-center">
          {" "}
         <div className=" "> <img src="./Image/photo.png" alt="" className="w-28 h-28 ml-20   "></img>
          <p className=" flex justify-center font-thin text-2xl mt-3 text-gray-600">Drag photos and videos here</p>
          <button className="bg-blue-500 p-1 px-2 text-white  rounded-md mt-4 ml-14">Select from computer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
