import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/action/userAction";
import { Link, navigate, Redirect } from "@reach/router";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);

  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(state, navigate));
  };

  if (userReducer.isAuthenticate) {
    return <Redirect to="/profile" />;
  }

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
            name="email"
            value={state.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-12">
          <input
            type="password"
            className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            placeholder="Password"
            name="password"
            value={state.password}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={onClickHandler}
          className="bg-yellow-500 p-4 w-full rounded"
        >
          TO ENTER
        </button>
      </div>
    </div>
  );
};

export default Login;
