import React from "react";
import { Link } from "@reach/router";
import Logo from "../assets/images/logo/logo.svg";
import Flag from "../assets/images/icons/brazilian-flag.png";
import Video from "../assets/images/others/video.png";

const Intro = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex flex-wrap lg:flex-nowrap pb-10 md:pt-10 w-2/3 m-auto justify-between items-center">
        <div className="w-full lg:w-2/4">
          <img src={Logo} alt="" className="hidden lg:block"/>
          <p className="text-2xl md:text-5xl py-5 md:py-16">
            Play bingo live on the best platform in Brazil
          </p>
          <Link to="/register">
          <button className="bg-yellow-400 rounded px-6 py-3 text-black">
            MAKE YOUR REGISTRATION
          </button>
          </Link>
          <div className="flex gap-4 md:my-20 my-5">
            
              <img src={Flag} alt=""/>
          
            <p className="text-xl font-base">
              Made By Brazilians for Brazilians
            </p>
          </div>
        </div>
        <div>
          <img src={Video} alt="" className="w-96" />
          <p className="pt-5 text-center">Press PLAY and get to know</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
