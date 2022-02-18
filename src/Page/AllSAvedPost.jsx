import React from "react";

export default function AllSAvedPost() {
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
   
      <div className=" h-screen pt-16 bg-gray-50 ">
        {" "}
        <div className="sm:max-w-6xl  sm:mx-5 p-10 xl:mx-auto">
          {" "}
          <div className="flex justify-center "></div>{" "}
          <div className="grid grid-cols-3 gap-5  mt-10">
        {postes.map((post) => {
          return (
            <>
              <div className="relative group cursor-pointer" key={post.id}>
                <div className="bg-slate-300 w-full h-32 sm:h-52 md:h-56 lg:h-64 justify-center flex items-center">
                  <img
                    src={post.img}
                    alt=""
                    className="object-cover h-32 sm:h-52 md:h-56 lg:h-64  "
                  ></img>
                </div>
                <div className="absolute top-0 opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 w-full h-full bg-blashA flex text-white justify-center  items-center gap-1">
                  <img
                    src="http://localhost:3000/image/comment3.png"
                    className="lg:w-16 lg:h-16  h-10 w-10"
                    alt=""
                  ></img>
                  {post.comment}
                  <img
                    src="http://localhost:3000/image/like.png"
                    className="lg:w-14 lg:h-14  h-6 w-6 "
                    alt=""
                  ></img>{" "}
                  {post.like}
                </div>
              </div>
            </>
          );
        })}
      </div>
      </div>
      <div></div>
    </div>
  );
}
