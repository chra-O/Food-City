import React from "react";

export default function PostesInprofile() {
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
    {
      id: 4,
      img: "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
      like: 92,
      comment: 52,
    },
    {
      id: 5,
      img: "https://www.seriouseats.com/thmb/SKxgUYK2iGAdLXiPDEpvGpbRFjA=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__08__20200811-yogurt-fruit-popsicles-group-vicky-wasik-1-3-e441234f879f4719a6a30e7064e9a62f.jpg",
      like: 71,
      comment: 0,
    },
  ];
  return (
    <>
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
                    className="w-16 h-16 "
                    alt=""
                  ></img>
                  {post.comment}
                  <img
                    src="http://localhost:3000/image/like.png"
                    className="w-10 h-10 mr-2 "
                    alt=""
                  ></img>{" "}
                  {post.like}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
