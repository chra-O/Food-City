import React from "react";

export default function NotificationTip() {
  return (
    <div className="tip absolute  top-[20px]  left-1/2 -translate-x-1/2  p-3 rounded-lg ease-in-out">
      <div className="flex w-12  h-6 text-white text-xs font-semibold mt-1">
        <img
          src="http://localhost:3000/image/heart.png"
          className="h-5 w-5   "
          alt=""
        ></img>
        <p className="mt-3 mr-1">2</p>
        <img
          src="http://localhost:3000/image/comment.png"
          className="h-5 w-5  "
          alt=""
        ></img>
        <p className="mt-3">1</p>
      </div>
    </div>
  );
}
