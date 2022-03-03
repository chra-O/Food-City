import React from "react";

export default function BolckModel() {
  return (
    <div className="fixed z-20 top-72 left-[620px]">
      <div className=" bg-gray-50 w-[450px] h-[230px] rounded-2xl   shadow-black   shadow-2xl border-2 grid grid-rows-4  ">
        <div className="border-b-2  h-14 flex justify-center items-center cursor-pointer text-red-500">
         Block
        </div>
        <div className="border-b-2  h-14 flex justify-center items-center cursor-pointer text-red-500">
       Restrict
        </div>
        <div className="border-b-2  h-14 flex justify-center items-center cursor-pointer text-red-500">
         Report
        </div>
        <div className="border-b-2  h-14 flex justify-center items-center cursor-pointer ">
         Cancel
        </div>
       
      </div>
    </div>
  );
}
