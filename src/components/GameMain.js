import React from "react";
import GameVideo from "../assets/images/others/video.png";
import CartNumber from "./CartNumber";

const GameMain = () => {
  return (
    <div>
      <div className="flex md:flex-nowrap flex-wrap">
        <div>
          <img src={GameVideo} alt="" className="h-full" />
        </div>
        <div className="h-auto">
          <CartNumber />
          <div className="text-white bg-gray-500 p-2">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <div className="flex items-center justify-center text-center rounded">
                <p>Cartela </p>
                <p> R$ 1,00</p>
              </div>
              <div className="border border-gray-300 w-8 flex items-center justify-center h-8 text-center rounded cursor-pointer">
                <p> +5</p>
              </div>
              <div className="border border-gray-300 w-8 flex items-center justify-center h-8 text-center rounded cursor-pointer">
                <p> +20</p>
              </div>
              <div className="border border-gray-300 w-8 flex items-center justify-center h-8 text-center rounded cursor-pointer text-xs">
                <div>
                  <p>Max</p>
                  <p>96</p>
                </div>
              </div>
              <div className="bg-red-700 w-8 flex items-center justify-center h-8 text-center rounded cursor-pointer">
                <p>X</p>
              </div>
              <div className="border border-gray-300 w-8 flex items-center justify-center h-8 text-center rounded cursor-pointer">
                <p>-</p>
              </div>
              <div className="border border-gray-300 w-8 flex items-center justify-center h-8 text-center rounded">
                <p>0</p>
              </div>
              <div className="border border-gray-300 w-8 flex items-center justify-center h-8 text-center rounded cursor-pointer">
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMain;
