import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addChattwo } from "../Redux/slice";

export default function HeloChat(props) {
  const chat = useSelector((state) => state.notify.chatsone);

  const dispatch = useDispatch();

  const [chatting, setchatting] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(addChattwo(chatting));
    setchatting("");
  };
  return (
    <>
      {" "}
      <div className="sm:max-w-lg  sm:mx-5  mt-14  bg-white border border-solid border-gray-300 rounded-tr-md rounded-br-md">
        <div className="grid grid-cols-1  ">
          <div className="w-full border-b-2 h-16 flex items-center ">
            <img
              src={props.img}
              className=" h-8 w-8  ml-10  rounded-full"
              alt=""
            ></img>
            <p className="ml-2 ">{props.name}</p>
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

            <div className="flex items-end justify-end">
              <div className="flex  flex-col  text-sm max-w-xs mx-2 order-2 items-start">
                <div>
                  <div className=" flex justify-end bg-slate-400 text-white px-4 py-2 rounded-full  mb-2 ">
                    {" "}
                    hello
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-end ">
              <div className="flex  flex-col  text-sm max-w-xs mx-2 order-2 items-start">
                <div className="flex items-center">
                  <img
                    src={props.img}
                    className=" h-6 w-6 mr-2  rounded-full"
                    alt=""
                  ></img>
                  <div className="px-4 py-2 rounded-full  bg-blue-600 text-white  ">
                    hi
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center  mb-10">
              <div>
                <img
                  src={props.img}
                  alt=""
                  className="w-24 h-24 rounded-full  "
                ></img>
                <p className=" flex justify-center mt-4 mb-3 text-lg font-semibold">
                  {props.name}{" "}
                </p>
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
              className="text-blue-400 absolute ml-[430px] mt-3 font-semibold text-lg "
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
    </>
  );
}
