import React from "react";
import NavBar from "../Commponent/NavBar";

export default function Profile() {
  const savedStory = [
    {
      id: "1",
      username: "aljhsjjxxbi aadr",
      img: "http://localhost:3000/image/girl.png",
    },
    {
      id: "2",
      username: "ali aadr",
      img: "http://localhost:3000/image/girl.png",
    },
    {
      id: "3",
      username: "ali aadr",
      img: "http://localhost:3000/image/girl.png",
    },
    {
      id: "4",
      username: "ali aadr",
      img: "http://localhost:3000/image/girl.png",
    },
    {
      id: "5",
      username: "ali aadr",
      img: "http://localhost:3000/image/girl.png",
    },
    {
      id: "6",
      username: "ali aadr",
      img: "http://localhost:3000/image/girl.png",
    },
    {
      id: "6",
      username: "ali aadr",
      img: "http://localhost:3000/image/girl.png",
    },
    {
      id: "6",
      username: "ali aadr",
      img: "http://localhost:3000/image/girl.png",
    },
    {
      id: "6",
      username: "ali aadr",
      img: "http://localhost:3000/image/girl.png",
    },
    {
      id: "6",
      username: "ali aadr",
      img: "http://localhost:3000/image/girl.png",
    },
    {
      id: "6",
      username: "ali aadr",
      img: "http://localhost:3000/image/girl.png",
    },
    {
      id: "6",
      username: "ali aadr",
      img: "http://localhost:3000/image/girl.png",
    },
    {
      id: "6",
      username: "ali ahshsjjsjadr",
      img: "http://localhost:3000/image/girl.png",
    },
  ];
  return (
    <>
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart1.png"
      />
      {/* ///////////////////////////// */}
      <div className="pt-16 bg-gray-50  h-screen">
        {" "}
        <div className="sm:max-w-6xl sm:mx-5 p-10 xl:mx-auto">
          {" "}
          <div className="grid grid-cols-4 gap-4">
            <div className="flex justify-center ">
              {" "}
              <img
                src="http://localhost:3000/image/girl.png"
                className=" h-28 w-28 sm:w-32  sm:h-32 md:w-40  md:h-40 sm:ml-10   bg-slate-500 rounded-full"
                alt=""
              ></img>
            </div>
            <div className="col-span-3 ml-6 sm:ml-16 mt-5">
              <div>
                <span className="text-gray-800 text-3xl  font-thin ">
                  chra othman{" "}
                </span>
                <div className="cursor-pointer  inline text-gray-900 ml-2 font-semibold p-1 px-2   border border-gray-300  rounded  ">
                  Edit Profile
                </div>
                <img
                  src="http://localhost:3000/image/setting.png"
                  className="h-6  w-6 ml-4  inline "
                  alt=""
                ></img>
              </div>
              <div className="mt-6 justify-between flex w-80">
                <span className="block text-lg  ">
                  0 <p className="inline text-gray-500 ">posts</p>
                </span>
                <span className="block text-lg  ">
                  168 <p className="inline text-gray-500 ">followers</p>
                </span>
                <span className="block text-lg  ">
                  852 <p className="inline text-gray-500 ">following</p>
                </span>
              </div>
              <div className="mt-7">
                <p className="font-semibold text-black text-lg"> Chra O</p>
                <p className=" text-gray-700 text-lg"> who paints sometimes</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="  flex space-x-10 overflow-x-scroll max-w-5xl  p-4 scroll-smooth scrollbar-hide mt-16 ">
                {savedStory.map((story) => {
                  return (
                    <div className=" shrink-0  ">
                      <div className="bg-gray-50 rounded-full p-1 border border-gray-400">
                        <img
                          src={story.img}
                          className="rounded-full bg-slate-600  sm:w-14  sm:h-14 md:h-20 md:w-20 lg:h-24 lg:w-24 w-14 h-14    "
                          alt=""
                        ></img>
                      </div>
                      <p className=" sm:w-24 w-8 truncate text-center text-gray-700   font-semibold ">
                        {story.username}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className=" absolute flex top-0  sm:-left-6 z-10 w-full h-full justify-between  items-center">
                <img
                  src="http://localhost:3000/image/left.png"
                  className="  inline  w-6 h-6   "
                  alt=""
                ></img>
                <img
                  src="http://localhost:3000/image/right.png"
                  className="  inline w-6 h-6   "
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
