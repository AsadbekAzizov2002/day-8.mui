import React from "react";
import img from "./assets/img.png";
import car from "./assets/car.svg";
import exportt from "./assets/export.svg";
import exportt2 from "./assets/export2.svg";
import exportt3 from "./assets/export3.svg";
import jpg from "./assets/jpg.png";
import jpg2 from "./assets/jpg2.png";
import jpg3 from "./assets/jpg3.png";

const Hero = () => {
  return (
    <div>
      <main>
        <div className=" container h-[850px]">
          <div className=" h-[600px]">
            <img src={img} alt="" />
          </div>
        </div>
      </main>
      <main>
        <div className=" container px-20 mt-24">
          <div className=" bg-[#5A5AC9] h-[173px] w-full">
            <div className=" flex justify-between">
              <div className=" flex items-center py-[5%] pl-4">
                <img className=" w-[56px] h-[45px]" src={car} alt="" />
                <div className=" ml-3 w-[230px ] text-white">
                  <h1 className=" w-[150px] font-bold text-white text-lg">
                    Free Shipping
                  </h1>
                  <p className=" w-[193px]">On all orders over $75.00</p>
                </div>
              </div>
              <div className=" flex items-center py-[5%] pl-4">
                <img className=" w-[56px] h-[45px]" src={exportt} alt="" />
                <div className=" ml-3 w-[230px ] text-white">
                  <h1 className=" w-[150px] font-bold text-white text-lg">
                    Free Returns
                  </h1>
                  <p className=" w-[220px]">Returns are free within 9 days</p>
                </div>
              </div>
              <div className=" flex items-center py-[5%] pl-4">
                <img className=" w-[56px] h-[45px]" src={exportt2} alt="" />
                <div className=" ml-3 w-[230px ] text-white">
                  <h1 className=" w-[250px] font-bold text-white text-lg">
                    100% Payment Secure
                  </h1>
                  <p className=" w-[220px]">Your payment are safe with us.</p>
                </div>
              </div>
              <div className=" flex items-center py-[5%] pl-4">
                <img className=" w-[56px] h-[45px]" src={exportt3} alt="" />
                <div className=" ml-3 w-[230px ] text-white">
                  <h1 className=" w-[150px] font-bold text-white text-lg">
                    Support 24/7
                  </h1>
                  <p className=" w-[193px]">Contact us 24 hours a day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className=" justify-between flex container px-20 pt-[80px]">
        <img className=" w-[636px]" src={jpg} alt="" />
        <img src={jpg2} alt="" />
        <img src={jpg3} alt="" />
      </div>
    </div>
  );
};

export default Hero;
