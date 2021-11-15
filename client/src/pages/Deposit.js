import React from "react";
import Navigation from "../components/Navigation";
import Deposit from "../components/Deposit";
import Footer from "../components/Footer";

const Withdraw = () => {
  return (
    <div>
      <Navigation login/>
      <Deposit />
      <Footer />
    </div>
  );
};

export default Withdraw;
