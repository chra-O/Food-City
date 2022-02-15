import React from "react";
import NavBar from "../Commponent/NavBar";
export default function Notification() {
  return (
    <>
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart.png"
      />
      <div className="mt-20">Notification</div>
    </>
  );
}
