import React from "react";
import { Link } from "@reach/router";

const Deposit = () => {
  return (
    <div className="bg-gray-800 text-white pt-10 pb-32">
      <div className="w-2/3 md:w-1/3 m-auto text-center">
        <Link
          to="/profile"
          className="text-yellow-500 text-xl flex items-center gap-2 cursor-pointer"
        >
          <i className="fas fa-arrow-left"></i>
          <p className="text-yellow-500 text-xl">Back</p>
        </Link>
        <div>
          <div>
            <p className="text-xl mt-3">
              Enter the amount you would like to deposit
            </p>
            <p className="text-lg my-10">
              Balance available
              <p className="text-yellow-500">BRL 0.00</p>
            </p>
          </div>
          <div className="mb-10">
            <input
              type="text"
              className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
              placeholder="Cashout value"
            />
            <p className="text-left text-gray-400">Minimum value: BRL 30.00</p>
          </div>
          <div>
            <p className="mb-5">How do you want to pay?</p>
            <div className="flex justify-between gap-3 flex-wrap">
              <Link to="/">
                <button className="bg-yellow-500 py-4 px-10 rounded">
                  Play with pix
                </button>
              </Link>
              <Link to="/">
                <button className="bg-yellow-500 py-4 px-10 rounded">
                  Play with pay
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
