import React from "react";
import Navigation from "../components/Navigation";
import WithdrawComponent from "../components/Withdraw";
import Footer from "../components/Footer";

const Withdraw = () => {
  return (
    <div>
      <Navigation login />
      <WithdrawComponent />
      <Footer />
    </div>
  );
};

export default Withdraw;
