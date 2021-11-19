import React from "react";
import ProtectRoute from "./ProtectRoute";
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
import AdminPage from "../pages/Admin";
import WhoBuyCard from "../pages/WhoBuyCard";
import { Router } from "@reach/router";

const Routers = () => {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Register path="/register" />
      <SiteRules path="/siterules" />
      <TermOfUse path="/termofuse" />
      <PrivacyPolicy path="/privacypolicy" />
      <ProtectRoute component={Profile} path="/profile" />
      <ProtectRoute component={Withdraw} path="/withdraw" />
      <ProtectRoute component={Deposit} path="/deposit" />
      <ProtectRoute component={Game} path="/game" />
      <ProtectRoute component={Transaction} path="/transaction" />
      <ProtectRoute component={AdminPage} path="/admin" />
      <ProtectRoute component={WhoBuyCard} path="/buycard" />
    </Router>
  );
};

export default Routers;
