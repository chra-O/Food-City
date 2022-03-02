import React, { useState } from "react";

import NavBar from "../Commponent/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { messageseethre, messagetwo, seemassage } from "../Redux/slice";
import ShowMassage from "./ShowMassage";
import HeloChat from "./HeloChat";
import Azzadchating from "./Azzadchating";
export default function Messanger() {
  const seeone = useSelector((state) => state.notify.seeone);
  const seettow = useSelector((state) => state.notify.setttow);
  const seetthree = useSelector((state) => state.notify.seethre);
  const [levi, setlevi] = useState(true);
  const [hero, setero] = useState(false);
  const [azzad, setazzad] = useState(false);

  const leviClick = () => {
    dispatch(seemassage());
    setero(false);
    setlevi(true);
    setazzad(false);
  };
  const herocklich = () => {
    dispatch(messagetwo());
    setlevi(false);
    setero(true);
    setazzad(false);
  };
  const azzadClick = () => {
    dispatch(messageseethre());
    setlevi(false);
    setero(false);
    setazzad(true);
  };

  const dispatch = useDispatch();
  return (
    <>
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart1.png"
      />
      <div className="mt-10">
        <div className="  pt-16 bg-gray-50  h-full pb-40 grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2  ">
          {" "}
          <div className="sm:max-w-md overflow-x-hidden  sm:mx-5 h-[650px] xl:ml-96 mt-12 overflow-y-scroll bg-white border border-solid border-gray-300 rounded-md">
            <div className="grid grid-cols-1 gap-1">
              <div
                className={`flex sm:p-6 p-3 cursor-pointer ${
                  seeone ? "bg-gray-100" : "bg-white"
                } `}
                onClick={() => {
                  leviClick();
                }}
              >
                <img
                  src="https://i.pinimg.com/originals/15/2c/86/152c86196f4b6e5e4a6b501fa542f2a5.png"
                  className=" h-12 w-12    rounded-full"
                  alt=""
                ></img>
                <div className="grid grid-rows-2">
                  {" "}
                  <p className="  ml-4 text-black ">levi </p>
                  <p className=" ml-4 text-gray-500   w-full">
                    see you in the last war to save word
                  </p>{" "}
                </div>
              </div>
              <div
                className={`flex sm:p-6 p-3 cursor-pointer ${
                  seettow ? "bg-gray-100" : "bg-white"
                } `}
                onClick={() => {
                  herocklich();
                }}
              >
                <img
                  src="https://img.grouponcdn.com/deal/4174CXG45THoKa5RfeNhUM7TcZZM/41-1843x1105/v1/c870x524.jpg"
                  className=" h-12 w-12    rounded-full"
                  alt=""
                ></img>
                <div className="grid grid-rows-2">
                  {" "}
                  <p className="  ml-4 text-black ">hero </p>
                  <p className=" ml-4 text-gray-500   w-72">you: thanks</p>{" "}
                </div>
              </div>

              <div
                className={`flex sm:p-6 p-3 cursor-pointer ${
                  seetthree ? "bg-gray-100" : "bg-white"
                } `}
                onClick={() => {
                  azzadClick();
                }}
              >
                <img
                  src="https://media.istockphoto.com/photos/cute-boy-outdoors-picture-id1193994027?k=20&m=1193994027&s=612x612&w=0&h=Tym-uedS02jzDcDxPtBo9HSGV4JnCQlQ4y9We3oRr0c="
                  className=" h-12 w-12    rounded-full"
                  alt=""
                ></img>
                <div className="grid grid-rows-2">
                  {" "}
                  <p className="  ml-4 text-black ">azzad </p>
                  <p className=" ml-4 text-gray-500   w-72">
                    can you answer ?????
                  </p>{" "}
                </div>
              </div>

              <div className="flex sm:p-6 p-3 cursor-pointer ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2fWPROdS8pukewyAzcDzsD_ffortpxCXeg&usqp=CAU"
                  className=" h-12 w-12   bg-slate-500  rounded-full"
                  alt=""
                ></img>
                <div className="grid grid-rows-2">
                  {" "}
                  <p className="  ml-4 text-black ">meer </p>
                  <p className=" ml-4 text-gray-500   w-72">
                    send you a post
                  </p>{" "}
                </div>
              </div>

              <div className="flex sm:p-6 p-3 cursor-pointer  ">
                <img
                  src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className=" h-12 w-12   bg-slate-500 rounded-full"
                  alt=""
                ></img>
                <div className="grid grid-rows-2">
                  {" "}
                  <p className="  ml-4 text-black ">nwr </p>
                  <p className=" ml-4 text-gray-500   w-72">
                    you : see you soon
                  </p>{" "}
                </div>
              </div>

              <div className="flex sm:p-6 p-3 cursor-pointer ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/b/b4/Sharbat_Gula.jpg"
                  className=" h-12 w-12   bg-slate-500 rounded-full"
                  alt=""
                ></img>
                <div className="grid grid-rows-2">
                  {" "}
                  <p className="  ml-4 text-black ">darya </p>
                  <p className=" ml-4 text-gray-500   w-72">
                    do you finisht the bootcamte
                  </p>{" "}
                </div>
              </div>

              <div className="flex sm:p-6 p-3 cursor-pointer  ">
                <img
                  src="https://wallpaperaccess.com/full/1309183.png"
                  className=" h-12 w-12   bg-slate-500 rounded-full"
                  alt=""
                ></img>
                <div className="grid grid-rows-2">
                  {" "}
                  <p className="  ml-4 text-black ">eren </p>
                  <p className=" ml-4 text-gray-500   w-72">
                    you block this account
                  </p>{" "}
                </div>
              </div>

              <div className="flex sm:p-6 p-3 cursor-pointer  ">
                <img
                  src="https://tv-fanatic-res.cloudinary.com/iu/s--mo-6Auhy--/c_scale,f_auto,h_943,q_auto,w_696/v1636707177/vi-is-back-arcane-s1e6"
                  className=" h-12 w-12   bg-slate-500 rounded-full"
                  alt=""
                ></img>
                <div className="grid grid-rows-2">
                  {" "}
                  <p className="  ml-4 text-black ">Vi </p>
                  <p className=" ml-4 text-gray-500   w-72">
                    i hate my sister
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
          {levi && (
            <ShowMassage
              img=" https://i.pinimg.com/originals/15/2c/86/152c86196f4b6e5e4a6b501fa542f2a5.png"
              name="levi "
            />
          )}
          {hero && (
            <HeloChat
              img="https://img.grouponcdn.com/deal/4174CXG45THoKa5RfeNhUM7TcZZM/41-1843x1105/v1/c870x524.jpg"
              name="hero "
            />
          )}
          {azzad && (
            <Azzadchating
              img="https://media.istockphoto.com/photos/cute-boy-outdoors-picture-id1193994027?k=20&m=1193994027&s=612x612&w=0&h=Tym-uedS02jzDcDxPtBo9HSGV4JnCQlQ4y9We3oRr0c="
              name="azzad "
            />
          )}
        </div>
      </div>
    </>
  );
}
