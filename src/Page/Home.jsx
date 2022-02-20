import React from "react";
import NavBar from "../Commponent/NavBar";
import Story from "../Commponent/Story";
import "../Style/tip.css";

export default function Home() {
  return (
    <>
      <NavBar
        home="http://localhost:3000/image/home.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass1.png"
        not="http://localhost:3000/image/heart1.png"
      />
    
    </>
  );
}
