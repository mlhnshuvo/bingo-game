import React from "react";
import { Link } from "@reach/router";

const Profile = () => {
  return (
    <div className="bg-gray-800 text-white pt-5 pb-32">
      <div className="w-2/3 m-auto">
        <div className="flex gap-4 sm:justify-between justify-center flex-wrap">
          <ul className="flex gap-1 sm:gap-5 sm:flex-wrap">
            <li className="flex items-center gap-2 cursor-pointer font-bold text-lg border-b-2 border-yellow-500">
              <i className="fas fa-play-circle text-yellow-500"></i>
              <p>Play Bingo</p>
            </li>
            <li className="flex items-center gap-2 cursor-pointer font-bold text-lg">
              <i className="fas fa-money-bill-alt text-yellow-500"></i>
              <p>My transaction</p>
            </li>
            <li className="flex items-center gap-2 cursor-pointer font-bold text-lg">
              <i className="fas fa-id-card text-yellow-500"></i>
              <p>My data</p>
            </li>
          </ul>
          <div>
            <p>Your balance</p>
            <p className="text-xl">BRL 0.00</p>
          </div>
          <ul className="flex sm:gap-5 gap-2">
            <li>
              <Link to="/withdraw">
                <button className="py-2 w-full rounded px-5 border-2 border-gray-500">
                  To Withdraw
                </button>
              </Link>
            </li>
            <li>
              <Link to="/deposit">
                <button className="bg-yellow-500 border-yellow-500 py-2 w-full border-2 rounded px-5 text-black">
                  Deposit
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-center text-yellow-500 text-4xl my-14">
            Play bingo live now!
          </p>
          <div className="profileBgAcumulado">
            <div className="text-center py-32 text-yellow-500">
              <p className="text-xl md:text-3xl">AWARD</p>
              <p className="text-2xl md:text-4xl">ACCUMULATED</p>
              <p className="text-2xl md:text-7xl mt-5">BRL 6,562.98</p>
            </div>
          </div>
          <Link to="/game">
            <button className="bg-yellow-500 p-4 w-full text-black rounded">
              PLAY
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
