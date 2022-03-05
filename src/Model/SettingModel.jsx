import React from "react";

export default function SettingModel() {
  return (
    <div className="fixed z-20 top-48 left-[75px] sm:left-[200px] lg:left-[620px]">
      <div className=" bg-gray-50 w-[450px] h-[500px] rounded-2xl   shadow-black   shadow-2xl border-2 grid grid-rows-6  ">
        <div className="border-b-2  h-14 flex justify-center items-center cursor-pointer">
          Change Password
        </div>
        <div className="border-b-2  h-14 flex justify-center items-center cursor-pointer">
          Nametag
        </div>
        <div className="border-b-2  h-14 flex justify-center items-center cursor-pointer">
          App and Websites
        </div>
        <div className="border-b-2  h-14 flex justify-center items-center cursor-pointer">
          Notification
        </div>
        <div className="border-b-2  h-14 flex justify-center items-center cursor-pointer">
          Login Activity
        </div>
        <div className="border-b-2  h-14 flex justify-center items-center cursor-pointer">
          Emails from Instagram
        </div>
        <div className="border-b-2  h-14 flex justify-center items-center cursor-pointer">
          Report a Problem
        </div>
        <div className="  h-14 flex justify-center items-center cursor-pointer">
          Log Out
        </div>
      </div>
    </div>
  );
}
