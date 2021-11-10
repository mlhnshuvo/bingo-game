import React from "react";
import CellPhone from "../assets/images/others/cellphone.png";
import Aventure from "../assets/images/others/aventure.png";
import Aventurese from "../assets/images/others/aventurese.svg";
import CTA from "../assets/images/others/cta.png";
import IslandImg from "../assets/images/others/island.svg";

const Island = () => {
  return (
    <div className="islandBgPirate pt-20">
      <div className="flex items-center">
        <div>
          <img src={CellPhone} alt="" />
        </div>
        <div>
          <img src={Aventure} alt="" />
          <img src={Aventurese} alt="" />
          <img src={CTA} alt="" />
          <img src={IslandImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Island;
