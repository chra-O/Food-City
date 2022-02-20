import React from "react";

export default function Post() {
  return (
    <>
      <div className="bg-white my-7 rounded-md border">
        <div className="flex items-center">
          <img
            src="http://localhost:3000/image/chra.jpg"
            className=" h-10 w-10 m-3   rounded-full"
            alt=""
          ></img>
          <p className=" flex-1 text-sm font-semibold">chra</p>
          <div className="">
            {" "}
            <img
              src="http://localhost:3000/image/threeDot.png"
              className=" h-4 w-4 m-3 "
              alt=""
            ></img>
          </div>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
          className="w-full h-[500px] bg-center"
          alt=""
        ></img>{" "}
        <div className="flex p-2">
          {" "}
          <img
            src="http://localhost:3000/image/redd.png"
            className=" w-8 h-8   cursor-pointer"
            alt=""
            
          ></img>{" "}
          <img
            src="http://localhost:3000/image/comm.png"
            className=" w-6 h-6 m-1  cursor-pointer"
            alt=""
          ></img>
          <div className="flex-1">
            <img
              src="http://localhost:3000/image/send.png"
              className=" w-6 h-6 m-1 cursor-pointer "
              alt=""
            ></img>
          </div>
          <img
            src="http://localhost:3000/image/save.png"
            className=" w-6 h-6 m-1 cursor-pointer"
            alt=""
          ></img>
        </div>
        <div className="px-3">
          <h1 className="font-semibold  ">345 Likes</h1>
          <p className="text-gray-600 font-thin flex ">
            {" "}
            <p className="text-base font-semibold "> </p>{" "}
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </p>
          <p className="text-gray-400">Views all comments</p>
          <p className="text-xs text-gray-400 mb-3">1 Houers Ago</p>
        </div>
        <hr></hr>
        <div className="">
          <form action="" className="flex items-center p-4">
          <img
            src="http://localhost:3000/image/face.png"
            className=" w-6 h-6 mr-2 cursor-pointer"
            alt=""
          ></img>
            <input className="border-none flex-1 focus:ring-0 outline-none" placeholder="Add a comment"></input>
            <button className="text-blue-500"> Post</button>
          </form>
        </div>
      </div>
    </>
  );
}
