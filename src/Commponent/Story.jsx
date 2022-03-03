import React, { useRef, useState } from "react";

export default function Story() {
  const storeRef = useRef(null);
  const [left, setleft] = useState(false);
  const [right, setRight] = useState(true);

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
    {
      id: "10",
      username: "sweet",
      img: "https://www.efsa.europa.eu/sites/default/files/styles/share_opengraph/public/2021-03/experts_food_additives.jpg?h=827069f2&itok=Al_Mu6TK",
    },
    {
      id: "11",
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
      storeRef.current.scrollWidth -
        storeRef.current.clientWidth +
        0.11111450195312
    ) {
      setRight(false);
    } else {
      setRight(true);
    }
  };

  return (
    <>
      {" "}
      <div className=" ">
        <div className=" relative  ">
          <div
            ref={storeRef}
            onScroll={scrollHundlle}
            className="  flex space-x-4 overflow-x-scroll max-w-5xl  p-2 scroll-smooth  scrollbar-hide  bg-white border rounded-md "
          >
            {savedStory.map((story) => {
              return (
                <div className="  " key={story.id}>
                  <div className="bg-gray-50 rounded-full   shrink-0 p-1 border border-yellow-500  w-16 h-16 ">
                    <img
                      src={story.img}
                      className="rounded-full w-full h-full   "
                      alt=""
                    ></img>
                  </div>
                  <p className="  w-12 truncate text-center text-gray-700   font-semibold ">
                    {story.username}
                  </p>
                </div>
              );
            })}
          </div>
          <div className=" absolute  flex -top-1  -left-1  w-full h-full justify-between   items-center">
            <button
              onClick={() => {
                storeRef.current.scrollLeft = storeRef.current.scrollLeft - 300;
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
                storeRef.current.scrollLeft = storeRef.current.scrollLeft + 300;
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
    </>
  );
}
