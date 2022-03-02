import React from "react";
import NavBar from "../Commponent/NavBar";
export default function () {
  return (
    <>
      {" "}
      <NavBar
        home="http://localhost:3000/image/home1.png"
        messanger="http://localhost:3000/image/messanger1.png"
        add="http://localhost:3000/image/add1.png"
        compasss="http://localhost:3000/image/compass.png"
        not="http://localhost:3000/image/heart1.png"
      />
      <div className="bg-gray-50  mt-20">
        <div className="sm:max-w-6xl  sm:mx-5 p-10 xl:mx-auto">
          <div className="grid xl:grid-cols-4 xl:grid-rows-4 gap-2 grid-cols-1 grid-rows-1 sm:grid-cols-1 sm:grid-rows-1  ">
            <div className="flex justify-center h-64">
              <img
                src="https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?w=375&h=280"
                alt=""
                className=" bg-center shrink-0 w-full h-full"
              ></img>
            </div>
            <div className="flex justify-center h-64   ">
              <img
                src="https://st2.depositphotos.com/1017986/7904/i/950/depositphotos_79046312-stock-photo-close-up-of-different-food.jpg"
                alt=""
                className="w-full bg-center shrink-0"
              ></img>
            </div>
            <div className="flex justify-center w-full h-full md:col-span-2 md:row-span-2">
              <img
                src="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"
                alt=""
                className="w-full bg-center shrink-0"
              ></img>
            </div>
            <div className="flex justify-center h-64 w-full">
              <img
                src="https://blogs.uoregon.edu/natewoodburyaad250/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg"
                alt=""
                className="w-full bg-center shrink-0"
              ></img>
            </div>
            <div className="flex justify-center h-64 w-full">
              <img
                src="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2017/01/11/iStock-461036971_Brazilian-pudim.jpg.rend.hgtvcom.966.725.suffix/1491580707442.jpeg"
                alt=""
                className="w-full bg-center shrink-0"
              ></img>
            </div>
            <div className="flex justify-center h-64 w-full">
              <img
                src="https://thumbor.thedailymeal.com/Xmpu12NqKbZfTjnh_Tr8Z7qVuVE=/870x565/https://www.thedailymeal.com/sites/default/files/story/2016/shutterstock_hot%20dish.jpg"
                alt=""
                className="w-full bg-center shrink-0"
              ></img>
            </div>
            <div className="flex justify-center h-64 w-full">
              <img
                src="https://bigseventravel.com/wp-content/uploads/2020/01/Screenshot-2020-01-22-at-15.17.38-1024x875.png"
                alt=""
                className="w-full bg-center shrink-0"
              ></img>
            </div>{" "}
            <div className="flex justify-center h-64 w-full">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5c32d0dd2487fdb0b82d4b57/1615000345474-48WERTWIQUQDPR8NSXW7/130239756_3902990929735471_3582659926405900270_o.jpg"
                alt=""
                className="w-full bg-center shrink-0"
              ></img>
            </div>
            <div className="flex justify-center h-64 w-full">
              <img
                src="https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/6/17/0/ea1g08_fruitpouch.jpg.rend.hgtvcom.616.462.suffix/1397661954172.jpeg"
                alt=""
                className="w-full bg-center shrink-0"
              ></img>
            </div>
            <div className="flex justify-center md:col-span-2 md:row-span-2">
              <img
                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/10/25/YK310_Roasted-Stone-Fruit_s4x3.jpg.rend.hgtvcom.616.462.suffix/1572016070977.jpeg"
                alt=""
                className="w-full bg-center shrink-0"
              ></img>
            </div>
            <div className="flex justify-center h-64 w-full">
              <img
                src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg"
                alt=""
                className=" w-full bg-center shrink-0"
              ></img>
            </div>
            <div className="flex justify-center h-64 w-full">
              <img
                src="https://assets.bonappetit.com/photos/598dea8f21431a554b25a10f/1:1/w_1082,h_1082,c_limit/bitter-greens-and-avocado-salad-with-seaweed.jpg"
                alt=""
                className="w-full bg-center shrink-0"
              ></img>
            </div>
            <div className="flex justify-center h-64 w-full">
              <img
                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/16/0/FND_Detox-Ensalada-de-la-Casa_s4x3.jpg.rend.hgtvcom.616.462.suffix/1450323424545.jpeg"
                alt=""
                className="w-full bg-center shrink-0"
              ></img>
            </div>
            <div className="flex justify-center h-64 w-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIAv7AGgiYRktbshn1wgYtpeL6vEG2zTXhA&usqp=CAU"
                alt=""
                className="w-full bg-center shrink-0"
              ></img>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
