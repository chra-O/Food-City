import React, { useRef, useState } from "react";
import NavBar from "../Commponent/NavBar";
import PostesInprofile from "../Commponent/PostesInprofile";
import Saved from "../Commponent/Saved";
import Tag from "../Commponent/Tag";

export default function Profile() {
  const storeRef = useRef(null);
  const [left, setleft] = useState(false);
  const [right, setRight] = useState(true);
  const [post, setPost] = useState(true);
  const [saved, setsaved] = useState(false);
  const [tag, settag] = useState(false);

  const savedStory = [
    {
      id: "1",
      username: "donat by chra",
      img: "https://thekitchencommunity.org/wp-content/uploads/2021/03/43-Foods-That-Start-With-D-1200x900.jpg",
    },
    {
      id: "2",
      username: "oreng",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    },
    {
      id: "3",
      username: "pasta",
      img: "http://giovanniskitchen.com.au/staging/wp-content/uploads/2018/06/pasta.jpg",
    },
    {
      id: "4",
      username: "breakfast",
      img: "https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    },
    {
      id: "5",
      username: "birthday",
      img: "https://static.toiimg.com/thumb/86814019.cms?width=680&height=512&imgsize=51588",
    },
    {
      id: "6",
      username: "fruit",
      img: "https://post.healthline.com/wp-content/uploads/2018/06/fruit-732x549-thumbnail.jpg",
    },
    {
      id: "7",
      username: "cookes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgeQ1A_rVILPdzmQpJpWV-t4HlVjJqpMdKDSrtf5iBtrw6ZOJjRuG4WMSgUDk6xEE25A&usqp=CAU",
    },
    {
      id: "8",
      username: "pizza",
      img: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg",
    },
    {
      id: "9",
      username: "sweet",
      img: "https://www.efsa.europa.eu/sites/default/files/styles/share_opengraph/public/2021-03/experts_food_additives.jpg?h=827069f2&itok=Al_Mu6TK",
    },
  ];
  const scrollHundlle = () => {
    if (storeRef.current.scrollLeft > 0) {
      setleft(true);
    } else {
      setleft(false);
    }
    if (
      storeRef.current.scrollLeft ===
      storeRef.current.scrollWidth - storeRef.current.clientWidth
    ) {
      setRight(false);
    } else {
      setRight(true);
    }
  };
  const postClick = () => {
    setPost(true);
    setsaved(false);
    settag(false);
  };
  const tagClick = () => {
    setPost(false);
    setsaved(false);
    settag(true);
  };
  const saveClick = () => {
    setPost(false);
    setsaved(true);
    settag(false);
  };
  return (
    <>
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart1.png"
      />
      {/* ///////////////////////////// */}
      <div className="  pt-16 bg-gray-50 ">
        {" "}
        <div className="sm:max-w-6xl  sm:mx-5 p-10 xl:mx-auto">
          {" "}
          <div className="grid grid-cols-4 gap-4">
            <div className="flex justify-center ">
              {" "}
              <img
                src="http://localhost:3000/image/chra.jpg"
                className=" h-28 w-28 sm:w-32  sm:h-32 md:w-40  md:h-40 sm:ml-10   bg-slate-500 rounded-full"
                alt=""
              ></img>
            </div>
            <div className="col-span-3 ml-6 sm:ml-16 mt-5">
              <div>
                <span className="text-gray-800 text-3xl  font-thin ">
                  chra othman{" "}
                </span>
                <div className="cursor-pointer  inline text-gray-900 ml-2 font-semibold p-1 px-2   border border-gray-300  rounded  ">
                  Edit Profile
                </div>
                <img
                  src="http://localhost:3000/image/setting.png"
                  className="h-6  w-6 ml-4  inline "
                  alt=""
                ></img>
              </div>
              <div className="mt-6 justify-between flex w-80">
                <span className="block text-lg  ">
                  5 <p className="inline text-gray-500 ">posts</p>
                </span>
                <span className="block text-lg  ">
                  168 <p className="inline text-gray-500 ">followers</p>
                </span>
                <span className="block text-lg  ">
                  852 <p className="inline text-gray-500 ">following</p>
                </span>
              </div>
              <div className="mt-7">
                <p className="font-semibold text-black text-lg"> Chra O</p>
                <p className=" text-gray-700 text-lg"> cooking is my hobby</p>
              </div>
              <div className="text-blue-500 w-80 mt-2  ">
                <p>#chra#food#word#fun#happy#quran#kurdistan</p>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className=" relative  ">
              <div
                ref={storeRef}
                onScroll={scrollHundlle}
                className="  flex space-x-10 overflow-x-scroll max-w-5xl  p-4 scroll-smooth scrollbar-hide mt-16 "
              >
                {savedStory.map((story) => {
                  return (
                    <div className="  " key={story.id}>
                      <div className="bg-gray-50 rounded-full   shrink-0 p-1 border border-gray-400 sm:w-14  sm:h-14 md:h-20 md:w-20 lg:h-24 lg:w-24 w-14 h-14 ">
                        <img
                          src={story.img}
                          className="rounded-full w-full h-full   "
                          alt=""
                        ></img>
                      </div>
                      <p className=" sm:w-16 md:w-24 w-8 truncate text-center text-gray-700   font-semibold ">
                        {story.username}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className=" absolute  flex -top-1 md:-left-[25px] sm:-left-0  -left-2  w-full h-full justify-between   items-center">
                <button
                  onClick={() => {
                    storeRef.current.scrollLeft =
                      storeRef.current.scrollLeft - 300;
                  }}
                >
                  <img
                    src="http://localhost:3000/image/left.png"
                    className={`    w-6 h-6 bg-white   cursor-pointer rounded-full  ${
                      left ? `visible` : `invisible`
                    }
                     `}
                    alt=""
                  ></img>
                </button>
                <button
                  onClick={() => {
                    storeRef.current.scrollLeft =
                      storeRef.current.scrollLeft + 300;
                  }}
                >
                  <img
                    src="http://localhost:3000/image/right.png"
                    className={` w-6 h-6 bg-white   cursor-pointer rounded-full  ${
                      right ? `visible` : `invisible`
                    }`}
                    alt=""
                  ></img>
                </button>
              </div>
            </div>
          </div>
          <hr className="border-gray-300 mt-14 " />
          <div className="flex justify-center gap-10  text-sm text-gray-500 font-bold ">
            <button
              onClick={() => {
                postClick();
              }}
              className={`flex gap-2 border-gray-600 ${
                post ? `border-t` : ``
              } pt-4 focus:text-gray-700`}
            >
              {" "}
              <img
                src="http://localhost:3000/image/postes.png"
                className="w-3 h-3 mt-1"
                alt=""
              ></img>
              POSTS
            </button>
            <button
              onClick={() => {
                saveClick();
              }}
              className={`flex gap-2 border-gray-600 ${
                saved ? `border-t` : ``
              } pt-4 focus:text-gray-700`}
            >
              {" "}
              <img
                src="http://localhost:3000/image/save.png"
                className="w-3 h-3 mt-1"
                alt=""
              ></img>
              SAVED
            </button>
            <button
              onClick={() => {
                tagClick();
              }}
              className={`flex gap-2 border-gray-600 ${
                tag ? `border-t` : ``
              } pt-4 focus:text-gray-700`}
            >
              {" "}
              <img
                src="http://localhost:3000/image/tag.png"
                className="w-5 h-5 mt-1"
                alt=""
              ></img>
              TAGGED
            </button>
          </div>
          {post && <PostesInprofile />}
          {tag && <Tag />}
          {saved && <Saved />}
        </div>
      </div>
    </>
  );
}
