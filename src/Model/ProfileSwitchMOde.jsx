import React from 'react'

export default function ProfileSwitchMOde() {
  return (
    <div className="fixed z-20 top-56  left-[600px]">
      <div className=" bg-gray-50 w-[450px] h-[250px] rounded-2xl   shadow-black   shadow-2xl border-2   ">
        <div className="flex justify-center h-12 border-b-2 items-center font-semibold ">
          {" "}
          Switch account
        </div>

        <div className="h-36 border-b-2 flex">
          <div className="ml-4 mt-6 flex ">
            <img
              src="http://localhost:3000/image/chra.jpg"
              className=" h-12 w-12  bg-slate-500 rounded-full"
              alt=""
            ></img>
            <p className=" justify-center ml-2 mt-3 ">chra-O</p>
            <img
              src="http://localhost:3000/image/done.png"
              className=" h-5 w-5   ml-72 mt-4  rounded-full"
              alt=""
            ></img>
          </div>
        </div>
        <p className="flex justify-center items-center h-14 text-blue-400 font-semibold">
          {" "}
          Log into an Existing Account
        </p>
      </div>
    </div>
  )
}
