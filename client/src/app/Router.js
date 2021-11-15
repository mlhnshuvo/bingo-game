import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Withdraw from "../pages/Withdraw";
import Deposit from "../pages/Deposit";
import Game from "../pages/Game";
import SiteRules from "../pages/SiteRules";
import TermOfUse from "../pages/TermOfUse";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Transaction from "../pages/Transaction";
import { Router } from "@reach/router";

const Routers = () => {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Register path="/register" />
      <Profile path="/profile" />
      <Withdraw path="/withdraw" />
      <Deposit path="/deposit" />
      <Game path="/game" />
      <SiteRules path="/siterules" />
      <TermOfUse path="/termofuse" />
      <PrivacyPolicy path="/privacypolicy" />
      <Transaction path="/transaction" />
    </Router>
  );
};

export default Routers;
