import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deletuser,
  username,
  deleteuserwithindex,
  clearAll,
} from "../Redux/slice";
import { useSelector } from "react-redux";
export default function SearchTip() {
  const dispatch = useDispatch();
  const userinslice = useSelector((state) => state.notify.user1);
  const u = useSelector((state) => state.notify.user2);
  console.log(u);
  function handeluser(e) {
    dispatch(deletuser());
    dispatch(username(e));
  }
    const filteredData = userinslice.filter((el) => {
     
      if (u === '') {
          return el;
      }
      
      else {
        return el.name.toLowerCase().includes(u)
      }
  })
  


  return (
    <>
      <div className="search absolute top-12 bg-white w-96 left-1/2 -translate-x-1/2 shadow-xl pt-4 rounded-lg     ">
        <div className="overflow-y-auto h-96 mb-2  ">
          <div className="flex justify-between mb-5">
            <h3 className=" text-lg text-black ml-3">Recent</h3>
            <button
              className=" text-blue-400 text-lg  mr-3 "
              onClick={() => {
                dispatch(clearAll());
              }}
            >
              Clear All
            </button>
          </div>
          {filteredData.map((e, index) => {
            return (
              <>
                <div className="flex items-center justify-between cursor-pointer p-1 hover:bg-slate-50 ml-3 mr-3">
                  {" "}
                  <Link to="/account">
                    <div
                      className="flex items-center"
                      onClick={() => handeluser(e)}
                    >
                      <div className="relative ">
                        {" "}
                        <img
                          src={e.img}
                          className="h-12 w-12  rounded-full"
                          alt=""
                        ></img>
                      </div>
                      <div className="pl-2">
                        <div className="text-md font-semibold "> {e.name} </div>
                        <div className="text-gray-500"> {e.username}</div>
                      </div>
                    </div>
                  </Link>
                  <div
                    className=""
                    onClick={() => {
                      dispatch(deleteuserwithindex(index));
                    }}
                  >
                    {" "}
                    <img
                      src="http://localhost:3000/image/cross2.png"
                      className="h-5 w-5 mt-1 text-gray-400  cursor-pointer  "
                      alt=""
                    ></img>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>{" "}
    </>
  );
}
