import React from "react";
import { Link } from "@reach/router";

const GameNav = () => {
  return (
    <div className="bg-gray-900 border-b border-gray-500 text-center">
      <div className="flex items-center justify-between flex-wrap">
        <div className="border-r border-gray-500 text-white">
          <p className="bg-gray-100 px-20 text-gray-900">UMA LINHA</p>
          <p>R$ 23,32</p>
        </div>
        <div className="border-r border-gray-500 text-white">
          <p className="bg-gray-100 px-20 text-gray-900">UMA LINHA</p>
          <p>R$ 23,32</p>
        </div>
        <div className="border-r border-gray-500 text-white">
          <p className="bg-gray-100 px-20 text-gray-900">UMA LINHA</p>
          <p>R$ 23,32</p>
        </div>
        <div className="border-r border-gray-500 text-white">
          <p className="bg-gray-100 px-20 text-gray-900">UMA LINHA</p>
          <p>R$ 23,32</p>
        </div>
        <div className="border-r border-gray-500 text-white">
          <div className="flex items-center px-2">
            <i className="fas fa-volume-up pr-1"></i>
            <p>SOM</p>
          </div>
        </div>
        <div className="border-r border-gray-500 text-white">
          <Link to="/profile">
            <p className="px-20 font-extrabold">X</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameNav;
