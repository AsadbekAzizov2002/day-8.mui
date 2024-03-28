import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import logo from "./assets/logojon.png";
import SearchIcon from "@mui/icons-material/Search";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";

const Hader = () => {
  return (
    <div>
      <div className=" w-full  h-16 bg-black">
        <div className=" container py-2 px-16 flex gap-5 items-center justify-between">
          <div className=" flex w-[100px] gap-4">
            <div className=" bg-white w-6 rounded">
              <FacebookIcon />
            </div>
            <div className=" w-6 bg-white">
              <TwitterIcon />
            </div>
            <div className=" w-6 bg-white">
              <YouTubeIcon />
            </div>
            <div className=" w-6 bg-white">
              <InstagramIcon />
            </div>
            <div className=" ml-[120px] flex items-center gap-5">
              <span className=" bg-white w-6">
                <PhoneIcon />
              </span>
              <h2 className=" text-white text-2xl">(+123)4567890</h2>
            </div>
          </div>
          <div className=" flex">
            <div className=" flex gap-4 items-center">
              <h2 className=" text-white">USD$</h2>
              <span className=" text-white">
                <FormatAlignJustifyIcon />
              </span>
            </div>
            <div className=" flex items-center gap-4 ">
              <h2 className=" text-white">English</h2>
              <span className=" bg-white">
                <FormatAlignJustifyIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" container px-20 py-6 flex justify-between ">
        <img src={logo} alt="" />
        <div>
          <ul className=" flex gap-5">
            <span className="flex text-[#5A5AC9]">
              <li>HOME</li>

              <FormatAlignJustifyIcon />
            </span>
            <span className=" flex">
              <li>SHOP</li>
              <FormatAlignJustifyIcon />
            </span>
            <li>PAGES</li>
            <span className=" flex">
              <li>BLOG</li>
              <FormatAlignJustifyIcon />
            </span>
            <li>CONTACT US</li>
          </ul>
        </div>
        <div className=" flex items-center gap-3">
          <button className=" items-center justify-center flex gap-2">
            <span>
              <SearchIcon />
            </span>
          </button>
          <button>{<img src={icon2} alt="" />}</button>
          <button>
            <img src={icon3} alt="" />
          </button>
          <button>
            <img src={icon4} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hader;
