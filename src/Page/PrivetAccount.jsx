import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../Commponent/NavBar";

export default function PrivetAccount() {
  const showdata = useSelector((state) => state.notify.user);
  console.log(showdata);
  
  return (
    <div>
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart1.png"
      />

      {showdata.map((e) => {
        return (
          <>
            <div className="  pt-16 bg-gray-50 " key={e.name}>
              {" "}
              <div className="sm:max-w-6xl  sm:mx-5 p-10 xl:mx-auto">
                {" "}
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex justify-center ">
                    {" "}
                    <img
                      src={e.img}
                      className=" h-28 w-28 sm:w-32  sm:h-32 md:w-40  md:h-40 sm:ml-10   bg-slate-500 rounded-full"
                      alt=""
                    ></img>
                  </div>
                  <div className="col-span-3 ml-6 sm:ml-16 mt-5">
                    <div className="flex">
                      <span className="text-gray-800 text-3xl  font-thin ">
                        {e.name}
                      </span>

                      <div className="cursor-pointer    ml-4 font-semibold p-1 px-2   bg-blue-500 text-white border  rounded  ">
                        Follow
                      </div>

                      <div className=" flex w-fit h-fit ">
                        <img
                          src="http://localhost:3000/image/threeDot.png"
                          className="h-6  w-6 ml-4  mt-2 cursor-pointer "
                          alt=""
                        ></img>
                      </div>
                    </div>
                    <div className="mt-6 justify-between flex w-80">
                      <span className="block text-lg  ">
                        5 <p className="inline text-gray-500 ">posts</p>
                      </span>
                      <span className="block text-lg  ">
                        168 <p className="inline text-gray-500 ">followers</p>
                      </span>
                      <span className="block text-lg  ">
                        852 <p className="inline text-gray-500 ">following</p>
                      </span>
                    </div>
                    <div className="mt-7">
                      <p className="font-semibold text-black text-lg">
                        {" "}
                        {e.name}
                      </p>
                      <p className=" text-gray-700 text-lg"> {e.descrption}</p>
                    </div>
                    <div className="text-blue-500 w-80 mt-2  ">
                      <p>#chra#food#word#fun#happy#quran#kurdistan</p>
                    </div>
                  </div>
                </div>
                <hr className="border-gray-300 mt-14 " />
                <div className="flex justify-center gap-10  text-sm text-gray-500 font-bold ">
                  <div className="flex justify-center  items-center ">
                    {" "}
                    <></>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
