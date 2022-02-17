import React from "react";

export default function PostesInprofile() {
  const postes = [
    {
      id: 1,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 2,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 3,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 4,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 5,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 6,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 4,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 5,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 6,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 4,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 5,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 6,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 4,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 5,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
    {
      id: 6,
      img: "http://localhost:3000/image/girl.png",
      like: 60,
      comment: 20,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-5  ml-16 mt-10">
        {postes.map((post) => {
          return (
            <>
              <div className="relative group cursor-pointer">
                <div className="bg-slate-300 w-full h-64 justify-center flex items-center">
                  <img
                    src={post.img}
                    alt=""
                    className="object-cover w-56 h-56  "
                  ></img>
                </div>
                <div className="absolute top-0 opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 w-full h-full bg-blashA flex text-white justify-center  items-center gap-1">
                  <img src="http://localhost:3000/image/comment3.png" className="w-16 h-16 " alt=""></img>{post.comment}
                  <img src="http://localhost:3000/image/like.png" className="w-10 h-10 mr-2 " alt=""></img> {post.like}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
