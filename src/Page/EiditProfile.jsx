import React from "react";
import NavBar from "../Commponent/NavBar";

export default function EiditProfile() {
  return (
    <>
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart1.png"
      />
      <div className="  pt-16 bg-gray-50  h-fit pb-40 ">
        {" "}
        <div className="sm:max-w-4xl  sm:mx-5  xl:mx-auto mt-12 bg-white border border-solid border-gray-300">
          <div className="grid grid-cols-3">
            <div className="  border-r-2 h-full "></div>
            <div className="  col-span-2 h-full  p-10">
              <div className="flex justify-center items-center">
                <div className="flex w-full ml-7">
                  {" "}
                  <img
                    src="http://localhost:3000/image/chra.jpg"
                    className=" h-14 w-14 sm:ml-10     bg-slate-500 rounded-full"
                    alt=""
                  ></img>
                  <div className="ml-14">
                    <h1 className="font-semibold text-black">Chra Othman</h1>
                    <p className="text-blue-500 sm:text-base text-sm font-semibold">
                      Change Profile Photo
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="flex justify-center items-center m-4">
                <div>
                  {" "}
                  <p className="mr-2 font-semibold">Name </p>{" "}
                  <div className="w-20 h-20"></div>
                </div>

                <div>
                  <input
                    name="username"
                    type="text"
                    value="Chra othman "
                    className="  w-full rounded border bg-gray-100 px-2 py-1 ml-1 text-base "
                    placeholder="Name"
                  />

                  <p className="text-xs ml-1 w-64 sm:w-72 mt-1  text-gray-400">
                    Help people discover your account by using the name you're
                    known by: either your full name, nickname, or business name.
                  </p>
                  <p className="text-xs ml-1 w-64 sm:w-72 mt-2 text-gray-400">
                    You can only change your name twice within 14 days.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center m-8">
                <div>
                  {" "}
                  <p className="mr-2  font-semibold ">Username</p>{" "}
                  <div className="w-20 h-10"></div>
                </div>

                <div>
                  <input
                    name="username"
                    type="text"
                    value="chra.othman.a"
                    className="   w-full rounded border bg-gray-100 px-2 py-1 ml-1 text-base "
                    placeholder="username"
                  />

                  <p className="text-xs ml-1 w-64 sm:w-72 mt-1  text-gray-400">
                    In most cases, you'll be able to change your username back
                    to chra.othman.a for another 14 days.
                    <p className="text-blue-500"> Learn More</p>
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center m-8">
                <div>
                  {" "}
                  <p className="mr-2   font-semibold ">Website</p>{" "}
                  <div className="w-20 h-0"></div>
                </div>

                <div>
                  <input
                    name="username"
                    type="text"
                    className="   w-full rounded border bg-gray-100 px-2 py-1 ml-1 text-base "
                    placeholder="Website"
                  />
                  <p className="text-xs ml-1 w-64 sm:w-72 mt-1  text-gray-400"></p>
                </div>
              </div>
              <div className="flex justify-center items-center m-8">
                <div>
                  {" "}
                  <p className="mr-2   font-semibold ">Bio</p>{" "}
                  <div className="w-20 h-28"></div>
                </div>

                <div>
                  <textarea className="border w-full rounded  bg-gray-100 px-2 py-1 ml-1 text-base overflow-y-scroll"></textarea>
                  <p className="text-xs ml-1 w-64 sm:w-72 mt-10  text-gray-400">
                    <p className="text-gray-600 font-semibold">
                      Personal Information
                    </p>{" "}
                    Provide your personal information, even if the account is
                    used for a business, a pet or something else. This won't be
                    a part of your public profile.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center m-8">
                <div>
                  {" "}
                  <p className="mr-2   font-semibold ">Email</p>{" "}
                  <div className="w-20 h-0"></div>
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    className="   w-full rounded border bg-gray-100 px-2 py-1 ml-1 text-base "
                    placeholder="email"
                  />
                  <p className="text-xs ml-1 w-64 sm:w-72 mt-1  text-gray-400"></p>
                </div>
              </div>
              <div className="flex justify-center items-center m-8">
                <div>
                  {" "}
                  <p className="mr-2   font-semibold ">Phone </p>{" "}
                  <div className="w-20 h-0"></div>
                </div>

                <div>
                  <input
                    name="username"
                    type="text"
                    className="  w-full rounded border bg-gray-100 px-2 py-1 ml-1 text-base "
                    placeholder="phone number"
                  />
                  <p className="text-xs ml-1 w-64 sm:w-72 mt-1  text-gray-400"></p>
                </div>
              </div>
              <div className="flex justify-center items-center m-8">
                <div>
                  {" "}
                  <p className="mr-2   font-semibold ">Gender </p>{" "}
                  <div className="w-20 h-20"></div>
                </div>

                <div>
                  <select
                    id="gender"
                    className=" w-full rounded border bg-gray-100 px-2 py-1 ml-1 text-base appearance-none"
                  >
                    <option value="" disabled selected className="">
                      Gender{" "}
                    </option>
                    <option>male</option>
                    <option>female</option>
                  </select>
                  <p className="text-xs ml-1 w-64 sm:w-72 mt-1  text-gray-400"></p>
                  <button className="bg-sky-500 text-white px-3 py-1 border rounded-md mt-10">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
