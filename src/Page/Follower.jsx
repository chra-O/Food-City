import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Commponent/NavBar";
export default function Follower() {
  const follower = [
    {
      img: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI",
      name: "sozyar-baxtyar",
    },
    {
      img: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
      name: "hemin-rashd",
    },
    {
      img: "data:image/jpeg;base64,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",
      name: "peshawa",
    },
    {
      img: "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960",
      name: "jamal",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWlKVGJeILLo6n3_-9GgvdvWyz7MJbC1o7g&usqp=CAU",
      name: "mark-zuckerberg",
    },
    {
      img: "https://blogs-images.forbes.com/danschawbel/files/2017/12/Dan-Schawbel_avatar_1512422077-400x400.jpg",
      name: "zack-26",
    }, {
      img: "https://thumbs.dreamstime.com/b/surprised-female-person-confused-isolated-surprised-female-person-confused-isolated-168304856.jpg",
      name: "sara-omed",
    }, {
      img: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?size=626&ext=jpg&ga=GA1.2.1035033515.1639612800",
      name: "mxwncha",
    },
  ];
  return (
    <>
      {" "}
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart.png"
      />
      <div className="  pt-16 bg-gray-50  h-fit pb-40 ">
        {" "}
        <div className="sm:max-w-2xl  sm:mx-5  xl:mx-auto mt-12 bg-white border border-solid border-gray-300 rounded-md overflow-y-scroll h-[600px]">
          <Link to="/Notification">
            <div className="flex mt-4 text-gray-600 text-lg ml-4 h-16 items-center border-b-2">
              <img
                src="http://localhost:3000/image/leftsaved.png"
                className=" h-8 w-8 "
                alt=""
              ></img>
              <p>Notification</p>
            </div>
          </Link>
          <div className="grid grid-cols-1 ">
            {follower.map((e) => {
              return (
                <>
                  <div className="flex sm:p-6 p-2 ">
                    <img
                      src={e.img}
                      className=" h-8 w-8   bg-slate-500 rounded-full"
                      alt=""
                    ></img>
                    <p className=" flex items-center ml-4 text-black w-52  ">
                      {e.name}
                    </p>
                    <div className=" ml-52 flex gap-2">
                      <button className="  px-3 py-1 rounded-md flex  bg-sky-400 text-white   ">
                        Comferm
                      </button>
                      <button className=" text-black px-2 py-1 border rounded-md flex  border-gray-400  ">
                        Delete
                      </button>
                    </div>
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
