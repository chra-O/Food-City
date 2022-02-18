import React from "react";
import { Link } from "react-router-dom";
export default function Saved() {
  const postes = [
    {
      id: 1,
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pumpkin-chocolate-chip-cookies-horizontal-1538066903.jpg",
      like: 60,
      comment: 20,
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/photos/lollipops-candies-and-sweet-sugar-jelly-multicolored-picture-id1145250337?k=20&m=1145250337&s=612x612&w=0&h=TRZoEc3o2ZwbH1crsM_j077-upe-QtU_BGP-wG9TNOw=",
      like: 30,
      comment: 2,
    },
    {
      id: 3,
      img: "https://i.insider.com/5c0a9a8a293b7119f2441658?width=1000&format=jpeg&auto=webp",
      like: 6,
      comment: 10,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 mt-6">
        {" "}
        <p className="text-sm text-gray-400  ">
          Only you can see what you've saved
        </p>{" "}
        <button className="text-blue-400  text-lg text-right font-semibold">
          {" "}
          + New Collection
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5  mt-4">
        <div className=" relative group  grid grid-cols-2 gap-1 grid-rows-2 w-full lg:h-80  md:h-72 sm:h-64 h-32 bg-slate-300 cursor-pointer ">
          {postes.map((post) => {
            return (
              <>
                <div className="" key={post.id}>
                  <div className="bg-slate-300 w-full h-full  justify-center flex items-center">
                    <img
                      src={post.img}
                      alt=""
                      className="object-cover h-full  "
                    ></img>
                  </div>
                </div>
              </>
            );
          })}
          <Link to="/allsavedpost">
            <div className="absolute top-0 opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 w-full h-full bg-blashA flex text-white justify-start  items-end gap-1">
              <p className=" m-10 font-bold text-sm  md:text-base lg:text-xl">All Posts</p>
            </div>
          </Link>
        </div>

        <div></div>
      </div>
    </>
  );
}
