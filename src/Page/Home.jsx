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
          <section className="bg-blue-600 invisible xl:visible">
            {" "}
            profile
          </section>
        </div>
      </div>
    </>
  );
}
