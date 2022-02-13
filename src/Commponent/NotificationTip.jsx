import React from "react";

export default function NotificationTip() {
  return (
    <div className="tip absolute  top-[50px]   left-8 -translate-x-1/2  p-3 rounded-lg">
      <div className="flex w-14  h-6 text-white text-xs font-semibold mt-1">
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
