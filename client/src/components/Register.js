import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../store/action/userAction";
import { Link, navigate } from "@reach/router";

const Register = () => {
  const [state, setState] = useState({
    fullName: "",
    cpf: "",
    email: "",
    telePhone: "",
    password: "",
    invitationCode: "",
  });

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(userRegister(state, navigate));
  };

  return (
    <div className="bg-gray-800 text-white pt-10 pb-32">
      <div className="text-center w-2/3 sm:w-1/3 m-auto">
        <div>
          <p className="text-yellow-400 text-4xl">Make your registration</p>
          <p className="text-xl mt-3">Complete the details below to register</p>
          <p className="text-lg my-10">
            Already have a record?{" "}
            <Link to="/login" className="underline text-yellow-500">
              Click here
            </Link>
          </p>
        </div>
        <div className="mb-10">
          <input
            type="text"
            className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            placeholder="Full name"
            name="fullName"
            value={state.fullName}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-10">
          <input
            type="text"
            className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            placeholder="CPF"
            name="cpf"
            value={state.cpf}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-10">
          <input
            type="email"
            className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-10">
          <input
            type="phone"
            className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            placeholder="Telephone"
            name="telePhone"
            value={state.telePhone}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-10">
          <input
            type="password"
            className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            placeholder="Password"
            name="password"
            value={state.password}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-12">
          <input
            type="text"
            className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            placeholder="Invitation Code"
            name="invitationCode"
            value={state.invitationCode}
            onChange={onChangeHandler}
          />
          <p className="text-left text-gray-400">Optional field</p>
        </div>
        <button
          className="bg-yellow-500 p-4 w-full rounded"
          onClick={onClickHandler}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Register;
