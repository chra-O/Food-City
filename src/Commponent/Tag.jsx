import React from "react";

export default function Tag() {
  return (
    <>
    
      <div className=" h-screen pt-16 bg-gray-50 ">
        {" "}
        <div className="sm:max-w-6xl  sm:mx-5 p-10 xl:mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-20 h-20 rounded-full  flex justify-center items-center border-black border-2 ">
              {" "}
              <img
                src="http://localhost:3000/image/tag.png"
                className=" w-14 h-14"
                alt=""
              ></img>
            </div>
          </div>{" "}
          <div className="flex justify-center items-center text-black text-3xl mt-3  font-thin">Photos of you</div>
          <div className="flex justify-center items-center text-black text-base mt-3  font-thin">When people tag you in photos, they'll appear here.</div>
        </div>
      </div>
    </>
  );
}
