import React from "react";
import { Link } from "@reach/router";
import Logo from "../assets/images/logo/logo.svg";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="relative items-center justify-between py-6 bg-gray-900">
        <div className="container m-auto w-2/3 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/"
            >
              <img src={Logo} alt="" />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-6">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/login"
                >
                  <i className="fas fa-running text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">to enter</span>
                </Link>
              </li>
              <li className="nav-item bg-yellow-500 rounded">
                <Link
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/register"
                >
                  <i className="fas fa-registered text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">register</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
