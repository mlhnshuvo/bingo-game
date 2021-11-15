import React from "react";
import { Link } from "@reach/router";

const Login = () => {
  return (
    <div className="bg-gray-800 text-white pt-10 pb-32">
      <div className="text-center w-2/3 sm:w-1/3 m-auto">
        <div>
          <p className="text-yellow-400 text-4xl">Login to play</p>
          <p className="text-xl mt-3">
            Fill in your registration details to enter Bingolar
          </p>
          <p className="text-lg my-10">
            Don't have a record?{" "}
            <Link to="/register" className="underline text-yellow-500">
              Click here
            </Link>
          </p>
        </div>
        <div className="mb-10">
          <input
            type="text"
            className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            placeholder="Email"
          />
        </div>
        <div className="mb-12">
          <input
            type="password"
            className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            placeholder="Password"
          />
        </div>
        <Link to="/profile">
          <button className="bg-yellow-500 p-4 w-full rounded">TO ENTER</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
