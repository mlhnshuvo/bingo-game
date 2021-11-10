import React from "react";
import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import DiscoverAward from "../components/DiscoverAward";
import SomeWords from "../components/SomeWords";
import Island from "../components/Island";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Intro />
      <DiscoverAward />
      <SomeWords />
      <Island />
      <Footer />
    </div>
  );
};

export default Home;
