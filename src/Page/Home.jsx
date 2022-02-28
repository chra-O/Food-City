import React, { useState } from "react";
import NavBar from "../Commponent/NavBar";
import Post from "../Commponent/Post";
import Story from "../Commponent/Story";
import "../Style/tip.css";

export default function Home() {
  const user = [
    {
      img: "https://static.remove.bg/remove-bg-web/a72f919da581145bc8a52ac0c5d21f5c4741f367/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
      name: "Sara ",
      username: "Sara Ali",
    },
    {
      img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      name: "Ari ",
      username: "Ari Aryan ",
    },
    {
      img: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
      name: "Pary ",
      username: "Pary-marf-26",
    },
    {
      img: "https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      name: "Shanga ",
      username: "Shanga-18",
    },
  ];
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
            <Story />
            <Post />
           
          </section>
          <section>
            <div className=" mt-6 fixed ml-8   invisible xl:visible">
              <div className="flex">
                <img
                  src="./Image/chra.jpg"
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
              {user.map((e) => {
                return (
                  <>
                    <div className="flex mt-4">
                      <img
                        src={e.img}
                        className=" h-10 w-10      rounded-full"
                        alt=""
                      ></img>
                      <div className="  ml-4 flex-1">
                        <p>{e.name}</p>
                        <p className="text-gray-500 text-sm hover:underline hover:cursor-pointer">
                          {e.username}
                        </p>
                      </div>
                      <p className="text-blue-500 ml-24 mt-4 text-sm cursor-pointer">
                        follow
                      </p>
                    </div>
                  </>
                );
              })}

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
