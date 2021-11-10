import React from "react";
import { Link } from "@reach/router";
import Logo from "../assets/images/logo/logo.svg";

const Footer = () => {
  return (
    <div className="bg-black py-20">
      <div className="text-white flex w-2/3 m-auto gap-2 items-center justify-between flex-wrap">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <Link to="/siterules">
          <p>Site rules</p>
        </Link>
        <Link to="/termofuse">
          <p>Terms of use</p>
        </Link>
        <Link to="/privacypolicy">
          <p>Privacy Policy</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
