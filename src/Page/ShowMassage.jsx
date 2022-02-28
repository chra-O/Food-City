import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../Commponent/NavBar";
import { addChat } from "../Redux/slice";

export default function ShowMassage() {
  const chat = useSelector((state) => state.notify.chats);
  const dispatch = useDispatch();

  const [chatting, setchatting] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(addChat(chatting));
    setchatting("");
  };

  return (
    <>
      {" "}
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart1.png"
      />
      <div className="mt-10">
        <div className="  pt-16 bg-gray-50  h-full pb-40  ">
          <div className="sm:max-w-xl  sm:mx-5 xl:mx-auto  mt-3 ">
            <Link to="/Messanger">
              <div className="flex gap-2 items-center">
                <img
                  src="http://localhost:3000/image/leftsaved.png"
                  className=" h-8 w-8 "
                  alt=""
                ></img>{" "}
                <p>Back to Messanger</p>
              </div>
            </Link>
          </div>{" "}
          <div className="sm:max-w-xl  sm:mx-5 xl:mx-auto mt-4  bg-white border border-solid border-gray-300 rounded-md">
            <div className="grid grid-cols-1  ">
              <div className="w-full border-b-2 h-16 flex items-center ">
                <img
                  src="http://localhost:3000/image/chra.jpg"
                  className=" h-8 w-8  ml-10  rounded-full"
                  alt=""
                ></img>
                <p className="ml-2 ">chra O</p>
              </div>
              <div className="overflow-y-auto h-[500px] flex space-y-2 p-3  flex-col-reverse   ">
                <div className="flex items-end justify-end">
                  {" "}
                  <div className="flex flex-col items-end">
                    {chat.map((e) => {
                      return (
                        <>
                          <div className="flex  flex-col  text-sm max-w-xs mx-2 order-2 items-start">
                            <div>
                              <div className=" flex justify-end bg-slate-400 text-white px-4 py-2 rounded-full   mb-2  ">
                                {" "}
                                {e}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>{" "}
                </div>
                <div className=" flex items-end ">
                  <div className="flex  flex-col  text-sm max-w-xs mx-2 order-2 items-start">
                    <div>
                      <div className="px-4 py-2 rounded-full  bg-blue-600 text-white  ">
                        zheera
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-end">
                  <div className="flex  flex-col  text-sm max-w-xs mx-2 order-2 items-start">
                    <div>
                      <div className=" flex justify-end bg-slate-400 text-white px-4 py-2 rounded-full  ">
                        {" "}
                        hi
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className=" flex items-end ">
                  <div className="flex  flex-col  text-sm max-w-xs mx-2 order-2 items-start">
                    <div>
                      <div className="px-4 py-2 rounded-full  bg-blue-600 text-white  ">
                        firtst chathhhhhhhhhhhhhhhh
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex items-end ">
                  <div className="flex  flex-col  text-sm max-w-xs mx-2 order-2 items-start">
                    <div>
                      <div className="px-4 py-2 rounded-full  bg-blue-600 text-white  ">
                        firtst chat
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-end">
                  <div className="flex  flex-col  text-sm max-w-xs mx-2 order-2 items-start">
                    <div>
                      <div className=" flex justify-end bg-slate-400 text-white px-4 py-2 rounded-full  ">
                        {" "}
                        hi
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex items-end ">
                  <div className="flex  flex-col  text-sm max-w-xs mx-2 order-2 items-start">
                    <div>
                      <div className="px-4 py-2 rounded-full  bg-blue-600 text-white  ">
                        firtst chathhhhhhhhhhhhhhhh
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" m-2 relative">
                {" "}
                <img
                  src="http://localhost:3000/image/face.png"
                  className="h-7 w-7  text-gray-200  absolute mt-3 ml-4 mr-6"
                  alt=""
                ></img>{" "}
                <button
                  className="text-blue-400 absolute ml-[500px] mt-2 font-semibold text-lg "
                  onClick={handleAdd}
                >
                  send
                </button>
                <input
                  type="text"
                  className="w-full p-3 rounded-full border-2 pl-12   "
                  placeholder="Message ..."
                  value={chatting}
                  onChange={(e) => setchatting(e.target.value)}
                ></input>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
