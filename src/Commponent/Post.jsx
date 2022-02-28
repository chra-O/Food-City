import React from "react";

export default function Post() {
  const post = [
    {
      user: "omer",
      userimag:
        "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
      foodimg:
        "https://us.123rf.com/450wm/subbotina/subbotina1905/subbotina190500024/123093476-hamburger-and-double-cheeseburger-with-fries-wooden-table.jpg?ver=6",
      like: "147",
      time: "2",
      resipy:"burger"
    },
    {
      user: "Fatima",
      userimag:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/1572B/production/_88615878_976x1024n0037151.jpg",
      foodimg:
        "https://www.cidrap.umn.edu/sites/default/files/public/styles/ss_media_popup/public/media/article/pasta.jpg?itok=yWbkRMAF",
      like: "17",
      time: "20",
      resipy:"pasta"
    },
    {
      user: "zheer",
      userimag:
        "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
      foodimg: "http://cdn.cnn.com/cnnnext/dam/assets/170203114610-nachos.jpg",
      like: "27",
      time: "9",
      resipy:"kubSalon"
    },
  ];
  return (
    <>
      {post.map((e) => {
        return (
          <>
            <div className="bg-white my-7 rounded-md border">
              <div className="flex items-center">
                <img
                  src={e.userimag}
                  className=" h-10 w-10 m-3   rounded-full"
                  alt=""
                ></img>
                <p className=" flex-1 text-sm font-semibold">{e.user}</p>
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
                src={e.foodimg}
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
                <h1 className="font-semibold  ">{e.like} Likes</h1>
                <p className="text-gray-600 font-thin flex ">
                  {" "}
                  <p className="text-base font-semibold "> </p>{" "}
                  {e.resipy}
                </p>
                <p className="text-gray-400">Views all comments</p>
                <p className="text-xs text-gray-400 mb-3">
                  {e.time} Houers Ago
                </p>
              </div>
              <hr></hr>
              <div className="">
                <form action="" className="flex items-center p-4">
                  <img
                    src="http://localhost:3000/image/face.png"
                    className=" w-6 h-6 mr-2 cursor-pointer"
                    alt=""
                  ></img>
                  <input
                    className="border-none flex-1 focus:ring-0 outline-none"
                    placeholder="Add a comment"
                  ></input>
                  <button className="text-blue-500"> Post</button>
                </form>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
