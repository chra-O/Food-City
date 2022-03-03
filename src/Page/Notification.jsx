import React from "react";
import NavBar from "../Commponent/NavBar";
import { Link } from "react-router-dom";
export default function Notification() {
  const notication = [
    {
      img: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI",
      name: "sozyar-baxtyar",
      discription: "start folowing  you",
      action: true,
    },
    {
      img: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
      name: "hemin-rashd",
      discription: "start followig you",
      action: true,
    },
    {
      img: "data:image/jpeg;base64,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",
      name: "peshawa",
      discription: "like you post",
      action: false,
      postimg:
        "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2010/05/the_morality_of_candy.jpg",
    },

    {
      img: "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960",
      name: "jamal",
      discription: "start followig you",
      action: true,
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWlKVGJeILLo6n3_-9GgvdvWyz7MJbC1o7g&usqp=CAU",
      name: "mark-zuckerberg",
      discription: "like you post",
      action: false,
      postimg:
        "https://p1.pxfuel.com/preview/180/640/985/candy-sweet-chocolate-sugar.jpg",
    },
    {
      img: "https://blogs-images.forbes.com/danschawbel/files/2017/12/Dan-Schawbel_avatar_1512422077-400x400.jpg",
      name: "zack-26",
      discription: "comment on your post ",
      action: false,
      postimg:
        "data:image/jpeg;base64,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",
    },
    {
      img: "https://thumbs.dreamstime.com/b/surprised-female-person-confused-isolated-surprised-female-person-confused-isolated-168304856.jpg",
      name: "sara-omed",
      discription: "start followig you",
      action: true,
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?size=626&ext=jpg&ga=GA1.2.1035033515.1639612800",
      name: "mxwncha",
      discription: "start followig you",
      action: true,
    },
  ];
  return (
    <>
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart.png"
      />
      <div className="  pt-16 bg-gray-50  h-fit pb-40 ">
        {" "}
        <div className="sm:max-w-2xl  sm:mx-5 mx-1 xl:mx-auto mt-12 bg-white border border-solid border-gray-300 rounded-md overflow-y-scroll h-[600px]">
          <div className="grid grid-cols-1 ">
            {" "}
            <Link to="/follower">
              <div className=" flex  h-20 border-b-2 ml-5 ">
                {" "}
                <div className="flex relative items-center  ">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    className="  h-10 w-10    bg-slate-500 rounded-full"
                    alt=""
                  ></img>{" "}
                  <img
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"
                    className=" absolute top-7 left-1 h-10 w-10   bg-slate-500 rounded-full"
                    alt=""
                  ></img>{" "}
                </div>
                <h1 className=" mt-6 font-semibold ml-6 ">
                  Follow Request{" "}
                  <p className="text-sm text-gray-400">ali and + 192 other</p>
                </h1>
                <img
                  src="http://localhost:3000/image/rightarrow.png"
                  className="   h-10 w-10  mt-6 sm:ml-72 ml-64 md:ml-96"
                  alt=""
                ></img>{" "}
              </div>
            </Link>
            {notication.map((e) => {
              return (
                <>
                  {" "}
                  <div className="flex  sm:p-6 p-6 h-20 ">
                    <div className=" ">
                      {" "}
                      <img
                        src={e.img}
                        className=" h-8 w-8 flex items-center  bg-slate-500 rounded-full"
                        alt=""
                      ></img>
                    </div>

                    <p className=" flex items-center ml-4 text-black w-96  ">
                      {e.name}
                      <p className="text-gray-500 ml-1 sm:text-sm text-xs w-36">
                        {e.discription}
                      </p>{" "}
                    </p>
                    {console.log(e.action)}
                    {e.action ? (
                      <button className=" text-black px-3  border rounded-md flex  border-gray-400   sm:ml-20 ">
                        following
                      </button>
                    ) : (
                      <img
                        src={e.postimg}
                        className="w-14 h-14 sm:ml-24"
                        alt=""
                      ></img>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
