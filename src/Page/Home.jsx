import React from "react";
import NavBar from "../Commponent/NavBar";
import Post from "../Commponent/Post";
import Story from "../Commponent/Story";
import "../Style/tip.css";

export default function Home() {
  return (
    <>
      <NavBar
        home="http://localhost:3000/image/home.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart1.png"
      />
      <div className="pt-20 bg-slate-50">
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-4xl mx-auto gap-2">
          <section className="col-span-2 ">
            <Story /> <Post />
            <Post /> <Post />
          </section>
          <section>
            <div className=" mt-6 fixed ml-8   invisible xl:visible">
              <div className="flex">
                <img
                  src="http://localhost:3000/image/chra.jpg"
                  className=" h-16 w-16      rounded-full"
                  alt=""
                ></img>
                <div className=" mt-4 ml-4 flex-1">
                  <p>Chra Othman</p>
                  <p className="text-gray-400">chra.othan.a</p>
                </div>
                <p className="text-blue-500 ml-24 mt-5 text-sm">switch</p>
              </div>
              <div className="flex mt-10">
                <p className="text-gray-400 flex-1">Suggestions For You</p>
                <p>See all</p>
              </div>
              <div className="flex mt-4">
                <img
                  src="http://localhost:3000/image/chra.jpg"
                  className=" h-10 w-10      rounded-full"
                  alt=""
                ></img>
                <div className="  ml-4 flex-1">
                  <p>Chra Othman</p>
                  <p className="text-gray-500 text-sm">chra.othan.a</p>
                </div>
                <p className="text-blue-500 ml-24 mt-4 text-sm cursor-pointer">Follow</p>
              </div>
              <div className="flex mt-4">
                <img
                  src="http://localhost:3000/image/chra.jpg"
                  className=" h-10 w-10      rounded-full"
                  alt=""
                ></img>
                <div className="  ml-4 flex-1">
                  <p>Chra Othman</p>
                  <p className="text-gray-500 text-sm hover:underline cursor-pointer">chra.othan.a</p>
                </div>
                <p className="text-blue-500 ml-24 mt-4 text-sm cursor-pointer">Follow</p>
              </div>
              <div className="flex mt-4">
                <img
                  src="http://localhost:3000/image/chra.jpg"
                  className=" h-10 w-10      rounded-full"
                  alt=""
                ></img>
                <div className="  ml-4 flex-1">
                  <p>Chra Othman</p>
                  <p className="text-gray-500 text-sm">chra.othan.a</p>
                </div>
                <p className="text-blue-500 ml-24 mt-4 text-sm cursor-pointer">Follow</p>
              </div>
              <div className="flex mt-4">
                <img
                  src="http://localhost:3000/image/chra.jpg"
                  className=" h-10 w-10      rounded-full"
                  alt=""
                ></img>
                <div className="  ml-4 flex-1">
                  <p>Chra Othman</p>
                  <p className="text-gray-500 text-sm">chra.othan.a</p>
                </div>
                <p className="text-blue-500 ml-24 mt-4 text-sm cursor-pointer">Follow</p>
              </div>
              <div className="text-gray-400 w-80 mt-10 text-sm">
                help .contact .jop .Api .Acount
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
