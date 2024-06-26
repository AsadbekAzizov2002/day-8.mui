import React from "react";
import png from "./assets/png1.png";
import svgg from "./assets/svg.svg";
import png2 from "./assets/png2.png";
import png3 from "./assets/png3.png";
import png4 from "./assets/png4.png";
import jpg4 from "./assets/jpg4.png";
import jpg5 from "./assets/jpg5.png";
import jpg6 from "./assets/jpg6.png";
import png5 from "./assets/png5.png"
import png6 from "./assets/png6.png"
import png7 from "./assets/png7.png"
import png8 from "./assets/png8.png";

const Product = () => {
  return (
    <div>
      <main>
        <div>
          <h2 className=" font-bold mt-[80px] text-3xl w-[189px] mx-auto">
            Our products
          </h2>
          <div className=" w-[60px] mt-4 bg-[#5A5AC9] h-1 mx-auto"></div>
          <p className=" mt-7 w-[577px] font-normal text-[#565656] mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis, culpa?
          </p>
        </div>
      </main>
      <main>
        <div>
          <div>
            <ul className="flex gap-6 w-[500px] mx-auto mt-[57px]">
              <li className=" font-semibold w-[161px] text-[#5A5AC9]">
                new products{" "}
              </li>
              <li className=" font-semibold w-[161px]">onsale</li>
              <li className=" font-semibold w-[161px]">upcoming products</li>
            </ul>
          </div>
          <div className=" px-20">
            <div className=" gap-8 flex mt-[58px]">
              <button className="shadow-md">
                <img className=" w-[300px]" src={png} alt="" />
                <h2 className=" font-semibold w-[200px]">
                  All Natural Makeup Beauty
                </h2>
                <h2 className=" w-10 text-start mb-2 font-semibold">
                  Cosmetics
                </h2>
                <div className=" flex gap-1">
                  <img src={svgg} alt="" />
                  <img src={svgg} alt="" />
                  <img src={svgg} alt="" />
                </div>
                <div className=" w-[300px] flex items-center justify-between ">
                  <h2 className=" w-12 font-bold mt-[10px] text-2xl">$11.90</h2>
                  <button className="hover:bg-slate-400 w-10 h-10 rounded-3xl bg-[#F6F6F6]">
                    t
                  </button>
                </div>
              </button>
              <button className="shadow-md">
                <img className=" w-[300px]" src={png2} alt="" />
                <h2 className=" font-semibold w-[200px]">
                  On Trend Makeup and Beauty Cosmetics{" "}
                </h2>
                <h2 className=" w-10 text-start mb-2 font-semibold">
                  Cosmetics
                </h2>
                <div className=" flex gap-1">
                  <img src={svgg} alt="" />
                  <img src={svgg} alt="" />
                  <img src={svgg} alt="" />
                </div>
                <div className=" w-[300px] flex items-center justify-between ">
                  <h2 className=" w-12 font-bold mt-[10px] text-2xl">$11.90</h2>
                  <button className="hover:bg-slate-400 w-10 h-10 rounded-3xl bg-[#F6F6F6]">
                    t
                  </button>
                </div>
              </button>{" "}
              <button className="shadow-md">
                <img className=" w-[300px]" src={png3} alt="" />
                <h2 className=" font-semibold w-[200px]">
                  The Cosmetics and Beauty brand
                </h2>
                <h2 className=" w-10 text-start mb-2 font-semibold">Shoppe</h2>
                <div className=" flex gap-1">
                  <img src={svgg} alt="" />
                  <img src={svgg} alt="" />
                  <img src={svgg} alt="" />
                </div>
                <div className=" w-[300px] flex items-center justify-between ">
                  <h2 className=" w-12 font-bold mt-[10px] text-2xl">$21.51</h2>
                  <button className="hover:bg-slate-400 w-10 h-10 rounded-3xl bg-[#F6F6F6]">
                    t
                  </button>
                </div>
              </button>{" "}
              <button className="shadow-md">
                <img className=" w-[300px]" src={png4} alt="" />
                <h2 className=" font-semibold w-[200px]">
                  orginal Age Defying Cosmetics
                </h2>
                <h2 className=" w-10 text-start mb-2 font-semibold">Makeup</h2>
                <div className=" flex gap-1">
                  <img src={svgg} alt="" />
                  <img src={svgg} alt="" />
                  <img src={svgg} alt="" />
                </div>
                <div className=" w-[300px] flex items-center justify-between ">
                  <h2 className=" w-12 font-bold mt-[10px] text-2xl">$11.90</h2>
                  <button className="hover:bg-slate-400 w-10 h-10 rounded-3xl bg-[#F6F6F6]">
                    t
                  </button>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className=" container px-20 flex gap-5 mt-20">
          <img src={jpg4} alt="" />
          <img src={jpg5} alt="" />
          <img src={jpg6} alt="" />
        </div>
      </main>
      <main>
        <div className=" container px-20">
          <div>
            <h2 className=" mb-4 w-[301px] font-bold mx-auto mt-[80px] text-3xl">
              New Arrival products
            </h2>
            <div className=" w-[60px] mt-4 bg-[#5A5AC9] h-1 mx-auto"></div>
            <p className=" w-[571px] mx-auto mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos, repellat.
            </p>
          </div>
          <div className=" gap-8 flex mt-[58px]">
            <button className="shadow-md">
              <img className=" w-[300px]" src={png5} alt="" />
              <h2 className=" font-semibold w-[250px]">
                All Natural Makeup Beauty
              </h2>
              <h2 className=" w-10 text-start mb-2 font-semibold">Cosmetics</h2>
              <div className=" flex gap-1">
                <img src={svgg} alt="" />
                <img src={svgg} alt="" />
                <img src={svgg} alt="" />
              </div>
              <div className=" w-[300px] flex items-center justify-between ">
                <h2 className=" w-12 font-bold mt-[10px] text-2xl">$11.90</h2>
                <button className="hover:bg-slate-400 w-10 h-10 rounded-3xl bg-[#F6F6F6]">
                  t
                </button>
              </div>
            </button>
            <button className="shadow-md">
              <img className=" w-[300px]" src={png6} alt="" />
              <h2 className=" font-semibold w-[250px]">
                On Trend Makeup and Beauty
              </h2>
              <h2 className=" w-10 text-start mb-2 font-semibold">Cosmetics</h2>
              <div className=" flex gap-1">
                <img src={svgg} alt="" />
                <img src={svgg} alt="" />
                <img src={svgg} alt="" />
              </div>
              <div className=" w-[300px] flex items-center justify-between ">
                <h2 className=" w-12 font-bold mt-[10px] text-2xl">$11.90</h2>
                <button className="hover:bg-slate-400 w-10 h-10 rounded-3xl bg-[#F6F6F6]">
                  t
                </button>
              </div>
            </button>{" "}
            <button className="shadow-md">
              <img className=" w-[300px]" src={png7} alt="" />
              <h2 className=" font-semibold w-[250px]">
                The Cosmetics and Beauty brand
              </h2>
              <h2 className=" w-10 text-start mb-2 font-semibold">Shoppe</h2>
              <div className=" flex gap-1">
                <img src={svgg} alt="" />
                <img src={svgg} alt="" />
                <img src={svgg} alt="" />
              </div>
              <div className=" w-[300px] flex items-center justify-between ">
                <h2 className=" w-12 font-bold mt-[10px] text-2xl">$21.51</h2>
                <button className="hover:bg-slate-400 w-10 h-10 rounded-3xl bg-[#F6F6F6]">
                  t
                </button>
              </div>
            </button>{" "}
            <button className="shadow-md">
              <img className=" w-[300px]" src={png8} alt="" />
              <h2 className=" font-semibold w-[250px]">
                orginal Age Defying Cosmetics
              </h2>
              <h2 className=" w-10 text-start mb-2 font-semibold">Makeup</h2>
              <div className=" flex gap-1">
                <img src={svgg} alt="" />
                <img src={svgg} alt="" />
                <img src={svgg} alt="" />
              </div>
              <div className=" w-[300px] flex items-center justify-between ">
                <h2 className=" w-12 font-bold mt-[10px] text-2xl">$11.90</h2>
                <button className="hover:bg-slate-400 w-10 h-10 rounded-3xl bg-[#F6F6F6]">
                  t
                </button>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
