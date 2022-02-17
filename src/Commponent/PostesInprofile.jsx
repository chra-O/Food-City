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
    },   {
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
      },   {
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
      },   {
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
              <div className="bg-slate-300 w-56 h-56">
                <img
                  src={post.img}
                  alt=""
                  className="object-cover w-56 h-56  "
                ></img>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
