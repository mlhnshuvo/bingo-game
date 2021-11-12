import React from "react";
import { Link } from "@reach/router";

const PlayBingo = () => {
  return (
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
  );
};

export default PlayBingo;
